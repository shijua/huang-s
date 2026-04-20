"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

interface ContactFormProps {
  labels: {
    name: string;
    company: string;
    country: string;
    email: string;
    message: string;
    submit: string;
    sent: string;
  };
  locale: Locale;
}

export function ContactForm({ labels, locale }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    data.append("locale", locale);
    // Stub: in production this would POST to /api/contact → Resend
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
    setSubmitting(false);
  }

  if (sent) {
    return (
      <div className="py-16 text-center">
        <div className="mx-auto h-12 w-12 border border-brand-burgundy rounded-full inline-flex items-center justify-center text-brand-burgundy mb-6">
          <Check className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <p className="text-[15px] text-ink-muted">{labels.sent}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label={labels.name} required />
        <Field id="company" label={labels.company} required />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="email" type="email" label={labels.email} required />
        <Field id="country" label={labels.country} />
      </div>
      <div>
        <Label htmlFor="message" className="mb-2 block">
          {labels.message}
        </Label>
        <Textarea id="message" name="message" required />
      </div>
      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "…" : labels.submit}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block">
        {label}
        {required && <span className="text-brand-burgundy ml-1">*</span>}
      </Label>
      <Input id={id} name={id} type={type} required={required} />
    </div>
  );
}
