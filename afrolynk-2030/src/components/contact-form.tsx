"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const roles = [
  "Founder",
  "Corporate partner",
  "Investor",
  "Diaspora expert",
  "Donor or foundation",
  "Government",
];

type FormValues = {
  name: string;
  email: string;
  organisation: string;
  role: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  organisation: "",
  role: "",
  message: "",
};

const inputClassName =
  "w-full border border-line bg-paper px-5 py-3 text-ink placeholder-muted transition-colors focus:border-green focus:outline-none";
const labelClassName =
  "text-xs font-semibold uppercase tracking-[0.16em] text-muted";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setIsSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) nextErrors.message = "Please enter a message.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    const subject = `Afrolynk enquiry — ${values.role || "General enquiry"}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Organisation: ${values.organisation || "Not provided"}`,
      `Role: ${values.role || "Not provided"}`,
      "",
      "Message:",
      values.message,
    ].join("\n");

    setIsSubmitted(true);
    window.location.href = `mailto:info@afrolynk.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className={labelClassName}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateValue("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={`mt-2 rounded-full ${inputClassName}`}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-2 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClassName}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => updateValue("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={`mt-2 rounded-full ${inputClassName}`}
          placeholder="you@organisation.com"
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-2 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-organisation" className={labelClassName}>
            Organisation
          </label>
          <input
            id="contact-organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            value={values.organisation}
            onChange={(event) => updateValue("organisation", event.target.value)}
            className={`mt-2 rounded-full ${inputClassName}`}
            placeholder="Your organisation"
          />
        </div>

        <div>
          <label htmlFor="contact-role" className={labelClassName}>
            Role
          </label>
          <select
            id="contact-role"
            name="role"
            value={values.role}
            onChange={(event) => updateValue("role", event.target.value)}
            className={`mt-2 rounded-full ${inputClassName}`}
          >
            <option value="">Select your role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`mt-2 resize-y rounded-2xl ${inputClassName}`}
          placeholder="How can Afrolynk support your work?"
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-2 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-dark"
      >
        Send enquiry
      </button>

      {isSubmitted && (
        <p role="status" className="text-sm leading-relaxed text-green-dark">
          Thanks — your email client is opening. We&apos;ll be in touch.
        </p>
      )}
    </form>
  );
}
