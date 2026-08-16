"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { z } from "zod";

import { ContactMessageEmail } from "@/emails/contact-message";
import { contactConfig } from "@/lib/contact";
import type { ContactField, ContactFormState } from "@/lib/contact-form-state";
import { checkContactRateLimit } from "@/lib/contact-rate-limit";
import { getResendClient } from "@/lib/resend";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name.")
    .max(80, "Keep your name under 80 characters.")
    .refine((value) => !/[\r\n]/.test(value), "Enter your name on one line."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .max(254, "Keep your email under 254 characters.")
    .pipe(z.email({ message: "Enter a valid email address." })),
  message: z
    .string()
    .trim()
    .min(10, "Write at least 10 characters so I have enough context.")
    .max(4000, "Keep your message under 4,000 characters."),
});

function getString(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value : "";
}

function getFieldErrors(error: z.ZodError) {
  const fieldErrors: Partial<Record<ContactField, string>> = {};

  for (const issue of error.issues) {
    const field = issue.path[0];

    if (
      (field === "name" || field === "email" || field === "message") &&
      !fieldErrors[field]
    ) {
      fieldErrors[field] = issue.message;
    }
  }

  return fieldErrors;
}

function getSubmissionIdentity(ipAddress: string, email: string) {
  return `${ipAddress || "unknown"}:${email}`;
}

function getIdempotencyKey(name: string, email: string, message: string) {
  const fingerprint = createHash("sha256")
    .update(`${name}\n${email}\n${message}`)
    .digest("hex");

  return `portfolio-contact/${fingerprint}`;
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = getString(formData, "company").trim();

  if (honeypot) {
    return {
      status: "success",
      message: "Your note has been accepted for delivery.",
      sentAt: new Date().toISOString(),
    };
  }

  const parsed = contactSchema.safeParse({
    name: getString(formData, "name"),
    email: getString(formData, "email"),
    message: getString(formData, "message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Review the marked fields and try the dispatch again.",
      fieldErrors: getFieldErrors(parsed.error),
    };
  }

  const resend = getResendClient();

  if (!resend) {
    return {
      status: "error",
      message:
        "The email service is not configured yet. Please use the direct email link in the footer for now.",
    };
  }

  const headerStore = await headers();
  const ipAddress =
    headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerStore.get("x-real-ip") ??
    "";
  const rateLimit = checkContactRateLimit(
    getSubmissionIdentity(ipAddress, parsed.data.email),
  );

  if (!rateLimit.allowed) {
    const waitMinutes = Math.max(
      1,
      Math.ceil(rateLimit.retryAfterSeconds / 60),
    );

    return {
      status: "rate_limited",
      message: `This dispatch desk has received several attempts. Try again in about ${waitMinutes} minute${waitMinutes === 1 ? "" : "s"}.`,
    };
  }

  const { name, email, message } = parsed.data;
  const { error } = await resend.emails.send(
    {
      from: contactConfig.sender,
      to: [contactConfig.recipient],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      react: ContactMessageEmail({ name, email, message }),
      text: `New portfolio contact\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      tags: [{ name: "source", value: "portfolio-contact" }],
    },
    { idempotencyKey: getIdempotencyKey(name, email, message) },
  );

  if (error) {
    console.error("Resend rejected a portfolio contact message", {
      name: error.name,
      message: error.message,
    });

    return {
      status: "error",
      message:
        "The dispatch could not be completed. Please wait a moment and try again, or use the direct email link in the footer.",
    };
  }

  return {
    status: "success",
    message: "Your note has been accepted for delivery.",
    sentAt: new Date().toISOString(),
  };
}
