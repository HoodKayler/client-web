"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const next: Partial<FormValues> = {};
    if (!values.firstName.trim()) next.firstName = "Please enter your first name.";
    if (!values.lastName.trim()) next.lastName = "Please enter your last name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 20) next.message = "Please share at least a few details about your project.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const subject = encodeURIComponent(`Project enquiry from ${values.firstName} ${values.lastName}`);
    const body = encodeURIComponent(
      `Name: ${values.firstName} ${values.lastName}\nEmail: ${values.email}\nCompany: ${values.company || "Not provided"}\n\nProject details:\n${values.message}`,
    );
    setSubmitted(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" size={32} />
        <h3>Your email app should be opening.</h3>
        <p>
          Review the prepared message and press send. If nothing opened, email us directly at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <button type="button" onClick={() => setSubmitted(false)}>Back to the form</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <Field label="First name" id="firstName" error={errors.firstName} required>
          <input id="firstName" name="firstName" autoComplete="given-name" value={values.firstName} onChange={(e) => update("firstName", e.target.value)} aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? "firstName-error" : undefined} />
        </Field>
        <Field label="Last name" id="lastName" error={errors.lastName} required>
          <input id="lastName" name="lastName" autoComplete="family-name" value={values.lastName} onChange={(e) => update("lastName", e.target.value)} aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? "lastName-error" : undefined} />
        </Field>
        <Field label="Work email" id="email" error={errors.email} required>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => update("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        </Field>
        <Field label="Company" id="company">
          <input id="company" name="company" autoComplete="organization" value={values.company} onChange={(e) => update("company", e.target.value)} />
        </Field>
      </div>
      <Field label="Tell us about your project" id="message" error={errors.message} required>
        <textarea id="message" name="message" rows={6} placeholder="What are you trying to achieve, where, and by when?" value={values.message} onChange={(e) => update("message", e.target.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
      </Field>
      <div className="form-submit-row">
        <p>Submitting prepares an email in your device&apos;s email app. No form data is stored on this website.</p>
        <button className="submit-button" type="submit">
          Prepare email <ArrowUpRight aria-hidden="true" size={17} />
        </button>
      </div>
    </form>
  );
}

function Field({ label, id, error, required, children }: { label: string; id: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}{required ? <span aria-hidden="true"> *</span> : null}</label>
      {children}
      {error ? <p className="field-error" id={`${id}-error`}>{error}</p> : null}
    </div>
  );
}
