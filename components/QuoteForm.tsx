"use client";

import { useEffect, useState } from "react";
import { services, site } from "@/lib/site";
import { Icon } from "./Icon";

type Fields = { name: string; phone: string; email: string; address: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", email: "", address: "", service: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (f.phone.replace(/\D/g, "").length < 10) e.phone = "Please enter a 10-digit phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.address.trim().length < 6) e.address = "Please enter the property address.";
  if (!f.service) e.service = "Please choose a service.";
  if (f.message.length > 1000) e.message = "Please keep your message under 1,000 characters.";
  return e;
}

function formatPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

export function QuoteForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const errors = validate(fields);

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("service");
    if (s && services.some((x) => x.slug === s)) setFields((f) => ({ ...f, service: s }));
  }, []);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: k === "phone" ? formatPhone(e.target.value) : e.target.value }));
  const blur = (k: keyof Fields) => () => setTouched((t) => ({ ...t, [k]: true }));
  const show = (k: keyof Fields) => (touched[k] ? errors[k] : undefined);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, address: true, service: true, message: true });
    if (Object.keys(errors).length) {
      const first = Object.keys(errors)[0];
      document.getElementById(`q-${first}`)?.focus();
      return;
    }
    // Template only: no backend is connected, so nothing is transmitted.
    setSubmitted(true);
  };

  if (submitted) {
    const svc = services.find((s) => s.slug === fields.service)?.title;
    return (
      <div className="anim-rise py-10 text-center" role="status" aria-live="polite">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-lime-200 text-forest-900">
          <Icon name="check" className="h-9 w-9" strokeWidth={2.4} />
        </div>
        <h3 className="mt-6 font-display text-3xl text-forest-900">Form validated — thanks, {fields.name.split(" ")[0]}!</h3>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink/65">
          This is a <strong>demo template</strong>, so your {svc?.toLowerCase()} request was <strong>not sent anywhere</strong>. Connect a form
          backend or email service to receive real quote requests.
        </p>
        <button type="button" onClick={() => { setFields(empty); setTouched({}); setSubmitted(false); }} className="btn btn-outline mt-8">
          Start a new request
        </button>
      </div>
    );
  }

  const label = "mb-2 block text-sm font-semibold text-forest-900";
  const err = (k: keyof Fields) =>
    show(k) ? (
      <p id={`q-${k}-err`} className="mt-2 flex items-center gap-1.5 text-sm text-red-600">
        <span aria-hidden="true">●</span> {show(k)}
      </p>
    ) : null;
  const aria = (k: keyof Fields) => ({
    id: `q-${k}`,
    "aria-invalid": show(k) ? true : undefined,
    "aria-describedby": show(k) ? `q-${k}-err` : undefined,
    onBlur: blur(k),
    onChange: set(k),
    value: fields[k],
  });

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="q-name" className={label}>Full name <span className="text-moss-600">*</span></label>
        <input {...aria("name")} type="text" autoComplete="name" placeholder="Jordan Smith" className="field-input" required />
        {err("name")}
      </div>
      <div>
        <label htmlFor="q-phone" className={label}>Phone <span className="text-moss-600">*</span></label>
        <input {...aria("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="(941) 555-0123" className="field-input" required />
        {err("phone")}
      </div>
      <div>
        <label htmlFor="q-email" className={label}>Email <span className="text-moss-600">*</span></label>
        <input {...aria("email")} type="email" autoComplete="email" placeholder="you@example.com" className="field-input" required />
        {err("email")}
      </div>
      <div>
        <label htmlFor="q-service" className={label}>Service needed <span className="text-moss-600">*</span></label>
        <div className="relative">
          <select {...aria("service")} className="field-input appearance-none pr-10" required>
            <option value="" disabled>Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
            <option value="other">Not sure / multiple services</option>
          </select>
          <Icon name="right" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-forest-900/50" />
        </div>
        {err("service")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="q-address" className={label}>Property address <span className="text-moss-600">*</span></label>
        <input {...aria("address")} type="text" autoComplete="street-address" placeholder="123 Example St, North Port, FL" className="field-input" required />
        {err("address")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="q-message" className={label}>
          Tell us about your yard <span className="font-normal text-ink/45">(optional)</span>
        </label>
        <textarea {...aria("message")} rows={5} placeholder="Lot size, grass type, gate code, how often you'd like service…" className="field-input resize-y" />
        <div className="mt-1 flex justify-between">
          {err("message") ?? <span />}
          <span className="mt-2 text-xs text-ink/40">{fields.message.length}/1000</span>
        </div>
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-dark w-full !py-5 text-lg">
          Request a Free Quote <Icon name="arrow" className="btn-arrow h-5 w-5" />
        </button>
        <p className="mt-4 text-center text-xs leading-relaxed text-ink/50">
          Demo form: validation runs in your browser, but no data is sent or stored. Prefer to talk? Call {site.phone} (placeholder).
        </p>
      </div>
    </form>
  );
}
