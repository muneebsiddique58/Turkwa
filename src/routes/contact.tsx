import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cast Turk Community Society" },
      { name: "description", content: "Get in touch with the Cast Turk Community Society. Address, phone, email and message form." },
      { property: "og:title", content: "Contact — Cast Turk Community Society" },
      { property: "og:description", content: "Reach out to our office bearers and council." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Contact</span>
      <h1 className="mt-3 font-display text-5xl text-foreground md:text-6xl">Let's stay connected.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Whether you're a member, a curious neighbour, or a partner organisation — we'd love to hear from you.
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          {[
            { icon: MapPin, label: "Office", value: "Community Hall, Main Street, City — 000000" },
            { icon: Phone, label: "Phone", value: "+91 00000 00000" },
            { icon: Mail, label: "Email", value: "info@castturk.org" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 rounded-lg border border-border bg-card p-6 shadow-card">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-hero text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{c.label}</div>
                <div className="mt-1 text-foreground">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-lg border border-border bg-card p-8 shadow-card"
        >
          <h2 className="font-display text-2xl text-foreground">Send a message</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Field label="Subject" name="subject" className="mt-4" />
          <div className="mt-4">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea required rows={5} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30" />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-hero px-6 py-3 font-medium text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
          {sent && <p className="mt-4 text-sm text-primary">Thank you — we'll be in touch soon.</p>}
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", className = "" }: { label: string; name: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30" />
    </div>
  );
}
