export type ContactField = "name" | "email" | "message";

export type ContactFormState = {
  status: "idle" | "error" | "rate_limited" | "success";
  message: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  sentAt?: string;
};
