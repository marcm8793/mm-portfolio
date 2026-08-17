"use client";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { CircleNotchIcon } from "@phosphor-icons/react/dist/csr/CircleNotch";
import { WarningCircleIcon } from "@phosphor-icons/react/dist/csr/WarningCircle";
import { useActionState, useEffect, useRef } from "react";

import { sendContactMessage } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormState } from "@/lib/contact-form-state";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

const fieldClassName =
  "rounded-[2px] border-[var(--cobalt)] bg-[var(--control-surface)] px-4 font-sans text-base text-[var(--ink)] shadow-none caret-[var(--cobalt)] transition-[background-color,border-color,box-shadow] duration-180 placeholder:text-[var(--ink-muted)]/70 focus-visible:border-[var(--cobalt)] focus-visible:ring-2 focus-visible:ring-[var(--cobalt)]/25 disabled:bg-[var(--paper-deep)] dark:bg-[var(--control-surface)] dark:focus-visible:border-[var(--cobalt)]";

type ContactDispatchProps = {
  destination: string;
  docketNumber: string;
};

function DispatchStamp({ sent }: { sent: boolean }) {
  return (
    <svg
      className="h-auto w-[min(13rem,100%)] -rotate-6 text-[var(--signal)]"
      viewBox="0 0 220 112"
      aria-hidden="true"
    >
      <ellipse
        cx="110"
        cy="56"
        rx="101"
        ry="47"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        className="fill-current font-mono text-[12px] tracking-[2px]"
        x="110"
        y="34"
        textAnchor="middle"
      >
        {sent ? "DISPATCH ACCEPTED" : "READY TO SEND"}
      </text>
      <text
        className="fill-current font-mono text-[18px] tracking-[1px]"
        x="110"
        y="61"
        textAnchor="middle"
      >
        {sent ? "MESSAGE SENT" : "NOT MAILED"}
      </text>
      <text
        className="fill-current font-mono text-[11px] tracking-[2px]"
        x="110"
        y="84"
        textAnchor="middle"
      >
        {sent ? "RECORDED ON PAGE" : "PENDING DISPATCH"}
      </text>
    </svg>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p
      className="mt-2 mb-0 flex items-start gap-2 font-mono [font-size:var(--type-micro)] leading-[1.45] text-[var(--signal)]"
      id={id}
    >
      <WarningCircleIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export function ContactDispatch({
  destination,
  docketNumber,
}: ContactDispatchProps) {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const sent = state.status === "success";
  const hasError =
    state.status === "error" || state.status === "rate_limited";

  useEffect(() => {
    if (sent) formRef.current?.reset();
  }, [sent]);

  const sentDate = state.sentAt
    ? new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(new Date(state.sentAt))
    : "—— / —— / ————";
  const sentTime = state.sentAt
    ? new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date(state.sentAt))
    : "—— : ——";

  return (
    <section
      className="relative mx-[0.8rem] my-5 overflow-hidden border border-[var(--cobalt)] bg-[var(--ledger-surface)] [background-blend-mode:normal,normal,var(--paper-texture-blend)] [background-image:repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,var(--rule-faint)_31px,var(--rule-faint)_32px),linear-gradient(var(--ledger-texture-wash),var(--ledger-texture-wash)),url('/paper-texture.webp')] [background-size:auto,auto,720px_720px] min-[641px]:mx-5 min-[641px]:my-6 min-[1000px]:grid min-[1000px]:grid-cols-[minmax(0,2.15fr)_minmax(18rem,0.85fr)]"
      aria-labelledby="contact-title"
    >
      <div className="min-w-0">
        <div className="grid min-h-[5.4rem] grid-cols-1 gap-3 border-b border-[var(--cobalt)] px-[1.7rem] py-5 min-[641px]:grid-cols-[1fr_auto] min-[641px]:items-center min-[641px]:px-[clamp(2rem,4vw,4.2rem)]">
          <div>
            <span className="inline-flex min-h-7 items-center border border-[var(--rule-soft)] bg-[var(--action-surface)] px-3 font-mono [font-size:var(--type-micro)] tracking-[0.06em] text-[var(--cobalt)] uppercase">
              Activity ledger
            </span>
            <p className="mt-2 mb-0 font-mono [font-size:var(--type-control)] font-bold tracking-[0.08em] text-[var(--cobalt)] uppercase">
              Registered-mail dispatch docket
            </p>
          </div>
          <dl className="m-0 grid grid-cols-[auto_auto] gap-x-3 font-mono [font-size:var(--type-micro)] tracking-[0.055em] uppercase min-[641px]:text-right">
            <dt className="text-[var(--cobalt)]">Docket no.</dt>
            <dd className="m-0 text-[var(--signal)]">{docketNumber}</dd>
          </dl>
        </div>

        <div className="px-[1.7rem] pt-[clamp(3rem,5vw,4.5rem)] pb-12 min-[641px]:px-[clamp(2rem,4vw,3.25rem)]">
          <h1
            className="m-0 max-w-[18ch] font-serif text-[clamp(2.5rem,9vw,3rem)] leading-[1.02] font-medium tracking-[-0.025em] min-[641px]:text-[var(--type-display)]"
            id="contact-title"
          >
            Send a note.
          </h1>
          <p className="mt-5 mb-0 max-w-[70ch] text-[var(--ink-muted)] min-[641px]:[font-size:var(--type-body-lg)]">
            I welcome thoughtful conversations about finance, software, and
            collaborations. Use the form below to send a note.
          </p>

          <form
            action={formAction}
            className="relative mt-8 max-w-[44rem]"
            noValidate
            ref={formRef}
          >
            <div
              className="absolute top-auto left-[-10000px] h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <Label
                className="mb-2.5 font-mono [font-size:var(--type-label)] font-bold tracking-[0.065em] text-[var(--cobalt)] uppercase"
                htmlFor="name"
              >
                Name <span className="text-[var(--signal)]">*</span>
              </Label>
              <Input
                aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
                aria-invalid={Boolean(state.fieldErrors?.name)}
                autoComplete="name"
                className={cn("h-12", fieldClassName)}
                disabled={pending}
                id="name"
                maxLength={80}
                name="name"
                required
              />
              <FieldError id="name-error" message={state.fieldErrors?.name} />
            </div>

            <div className="mt-5">
              <Label
                className="mb-2.5 font-mono [font-size:var(--type-label)] font-bold tracking-[0.065em] text-[var(--cobalt)] uppercase"
                htmlFor="email"
              >
                Email <span className="text-[var(--signal)]">*</span>
              </Label>
              <Input
                aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
                aria-invalid={Boolean(state.fieldErrors?.email)}
                autoComplete="email"
                className={cn("h-12", fieldClassName)}
                disabled={pending}
                id="email"
                inputMode="email"
                maxLength={254}
                name="email"
                required
                type="email"
              />
              <FieldError id="email-error" message={state.fieldErrors?.email} />
            </div>

            <div className="mt-5">
              <Label
                className="mb-2.5 font-mono [font-size:var(--type-label)] font-bold tracking-[0.065em] text-[var(--cobalt)] uppercase"
                htmlFor="message"
              >
                Message <span className="text-[var(--signal)]">*</span>
              </Label>
              <Textarea
                aria-describedby={
                  state.fieldErrors?.message ? "message-error" : undefined
                }
                aria-invalid={Boolean(state.fieldErrors?.message)}
                className={cn(
                  "min-h-[9.25rem] resize-y py-3 leading-[1.6] min-[641px]:min-h-[10.5rem]",
                  fieldClassName,
                )}
                disabled={pending}
                id="message"
                maxLength={4000}
                name="message"
                required
                rows={6}
              />
              <FieldError
                id="message-error"
                message={state.fieldErrors?.message}
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 min-[641px]:items-start">
              <Button
                className="min-h-14 w-full gap-5 rounded-[2px] border border-[var(--cobalt)] bg-[var(--cobalt)] px-6 font-mono [font-size:var(--type-control)] font-semibold tracking-[0.035em] text-[var(--on-cobalt)] shadow-none transition-[background-color,transform] duration-180 hover:-translate-y-0.5 hover:bg-[var(--cobalt-dark)] focus-visible:border-[var(--cobalt)] focus-visible:ring-[var(--cobalt)]/35 min-[641px]:w-auto min-[641px]:min-w-[12.8rem] [&_svg]:size-5"
                disabled={pending}
                type="submit"
              >
                {pending ? (
                  <>
                    Dispatching
                    <CircleNotchIcon className="animate-spin" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Send message <ArrowRightIcon aria-hidden="true" />
                  </>
                )}
              </Button>

              {state.status !== "idle" ? (
                <div
                  className={cn(
                    "flex w-full items-start gap-3 border px-4 py-3 font-sans text-sm leading-[1.55]",
                    sent
                      ? "border-[var(--lime)] bg-[var(--lime-soft)] text-[var(--ink)]"
                      : "border-[var(--signal)] bg-[var(--paper-raised)] text-[var(--ink)]",
                  )}
                  role={hasError ? "alert" : "status"}
                  aria-live="polite"
                >
                  {sent ? (
                    <CheckCircleIcon
                      className="mt-0.5 size-5 shrink-0 text-[var(--cobalt)]"
                      weight="bold"
                      aria-hidden="true"
                    />
                  ) : (
                    <WarningCircleIcon
                      className="mt-0.5 size-5 shrink-0 text-[var(--signal)]"
                      weight="bold"
                      aria-hidden="true"
                    />
                  )}
                  <p className="m-0">{state.message}</p>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>

      <aside className="relative grid min-w-0 grid-rows-[auto_auto_auto_auto_1fr] border-t border-dashed border-[var(--cobalt)] bg-[var(--action-surface)] min-[1000px]:border-t-0 min-[1000px]:border-l" aria-label="Dispatch receipt">
        <span
          className={cn(
            "absolute top-7 right-7 size-5 border-2 border-[var(--lime)]",
            sent && "bg-[var(--lime)]",
          )}
          aria-hidden="true"
        />
        <div className="border-b border-[var(--cobalt)] px-7 py-8 pr-16 min-[1181px]:px-9 min-[1181px]:pr-16">
          <p className="m-0 font-mono [font-size:var(--type-label)] tracking-[0.055em] text-[var(--cobalt)] uppercase">
            Detachable receipt
          </p>
          <p className="mt-1 mb-0 font-mono [font-size:var(--type-micro)] tracking-[0.04em] text-[var(--ink-muted)] uppercase">
            Keep this stub
          </p>
        </div>

        <dl className="m-0 border-b border-[var(--cobalt)] px-7 py-7 min-[1181px]:px-9">
          <dt className="font-mono [font-size:var(--type-micro)] tracking-[0.055em] text-[var(--cobalt)] uppercase">
            Destination
          </dt>
          <dd className="mt-5 mb-0 break-all border-b border-[var(--cobalt)] pb-5 font-mono text-base tracking-[0.06em] text-[var(--ink)]">
            {destination}
          </dd>
          <dt className="mt-5 font-mono [font-size:var(--type-micro)] tracking-[0.055em] text-[var(--cobalt)] uppercase">
            Recipient
          </dt>
          <dd className="mt-2 mb-0 font-sans text-sm text-[var(--ink)]">
            Marc Mansour
          </dd>
        </dl>

        <div className="border-b border-[var(--cobalt)] px-7 py-7 min-[1181px]:px-9">
          <p className="m-0 font-mono [font-size:var(--type-micro)] tracking-[0.055em] text-[var(--cobalt)] uppercase">
            Instructions
          </p>
          <p className="mt-5 mb-0 max-w-[27ch] text-sm leading-[1.6] text-[var(--ink-muted)]">
            After you send your message, a confirmation will appear on this
            page.
          </p>
        </div>

        <dl className="m-0 grid grid-cols-2 border-b border-[var(--cobalt)]">
          <div className="border-r border-[var(--cobalt)] px-5 py-5 min-[1181px]:px-7">
            <dt className="font-mono [font-size:var(--type-micro)] tracking-[0.05em] text-[var(--cobalt)] uppercase">
              Dispatch date
            </dt>
            <dd className="mt-3 mb-0 font-mono [font-size:var(--type-label)] text-[var(--ink-muted)]">
              {sentDate}
            </dd>
          </div>
          <div className="px-5 py-5 min-[1181px]:px-7">
            <dt className="font-mono [font-size:var(--type-micro)] tracking-[0.05em] text-[var(--cobalt)] uppercase">
              Time
            </dt>
            <dd className="mt-3 mb-0 font-mono [font-size:var(--type-label)] text-[var(--ink-muted)]">
              {sentTime}
            </dd>
          </div>
        </dl>

        <div className="grid min-h-64 place-items-center px-7 py-9 min-[1000px]:min-h-0">
          <div className="grid w-full justify-items-center gap-4">
            <p className="m-0 justify-self-start font-mono [font-size:var(--type-micro)] tracking-[0.055em] text-[var(--cobalt)] uppercase">
              Status / {sent ? "accepted" : "pending"}
            </p>
            <DispatchStamp sent={sent} />
          </div>
        </div>
      </aside>

      <div
        className="col-span-full grid min-h-12 grid-cols-[1fr_auto] items-center gap-6 border-t border-[var(--cobalt)] bg-[var(--footer-bg)] px-[1.7rem] py-3 font-mono [font-size:var(--type-micro)] tracking-[0.055em] text-[var(--footer-ink)] uppercase min-[641px]:grid-cols-[1fr_auto_auto] min-[641px]:px-[clamp(2rem,4vw,4.2rem)]"
        aria-hidden="true"
      >
        <span>Marc Mansour</span>
        <span className="hidden min-[641px]:block">Contact / Activity ledger</span>
        <span>Finance × software</span>
      </div>
    </section>
  );
}
