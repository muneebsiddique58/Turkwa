import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — Cast Turk Community Society" },
      { name: "description", content: "Become a member of the Cast Turk Community Society. Benefits, eligibility and application process." },
      { property: "og:title", content: "Membership — Cast Turk Community Society" },
      { property: "og:description", content: "Join our community and access benefits, programs and events." },
    ],
  }),
  component: Membership,
});

const benefits = [
  "Voting rights at the Annual General Body Meeting",
  "Access to scholarship and welfare programs",
  "Priority registration for cultural events and workshops",
  "Subscription to community newsletter and notices",
  "Eligibility to contest council elections",
  "Discounted hall booking for family functions",
];

const tiers = [
  { name: "Annual", price: "₹500", period: "per year", note: "For individuals & families." },
  { name: "Patron", price: "₹5,000", period: "one-time", note: "Lifetime supporter recognition." },
  { name: "Life Member", price: "₹10,000", period: "one-time", note: "Permanent voting membership." },
];

function Membership() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Membership</span>
      <h1 className="mt-3 font-display text-5xl text-foreground md:text-6xl">Belong to something lasting.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Membership is open to all individuals and families of the community. Your contribution sustains
        scholarships, welfare and the cultural programs that keep our heritage alive.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-display text-3xl text-foreground">Benefits of Membership</h2>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-md border border-border bg-card p-4 shadow-card">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-hero text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-3xl text-foreground">Membership Tiers</h2>
          <div className="mt-6 space-y-4">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-2xl text-foreground">{t.name}</div>
                  <div>
                    <span className="font-display text-3xl text-primary">{t.price}</span>
                    <span className="ml-1 text-xs text-muted-foreground">{t.period}</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-xl bg-hero p-12 text-primary-foreground shadow-elegant md:p-14">
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <h3 className="font-display text-3xl">Ready to join us?</h3>
            <p className="mt-2 text-primary-foreground/80">
              Visit our office during working hours or write to us — we'll guide you through the next steps.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 font-medium text-accent-foreground hover:-translate-y-0.5 transition-transform">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
