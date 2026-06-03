import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import leader from "@/assets/leader-1.jpg";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Cast Turk Community Society" },
      { name: "description", content: "Meet the President, Vice President, General Secretary and council members of the Cast Turk Community Society." },
      { property: "og:title", content: "Leadership — Cast Turk Community Society" },
      { property: "og:description", content: "Our elected office bearers and council members." },
    ],
  }),
  component: Leadership,
});

const office = [
  { role: "President", name: "Shri. [Name]", bio: "A lifelong community servant guiding our society's vision and outreach.", email: "president@castturk.org", phone: "+91 00000 00000" },
  { role: "Vice President", name: "Shri. [Name]", bio: "Champions cultural programs, member welfare and youth engagement.", email: "vp@castturk.org", phone: "+91 00000 00000" },
  { role: "General Secretary", name: "Shri. [Name]", bio: "Coordinates daily operations, meetings and council communication.", email: "secretary@castturk.org", phone: "+91 00000 00000" },
];

const council = [
  { role: "Treasurer", name: "Shri. [Name]" },
  { role: "Joint Secretary", name: "Shri. [Name]" },
  { role: "Cultural Head", name: "Smt. [Name]" },
  { role: "Education Head", name: "Shri. [Name]" },
  { role: "Welfare Head", name: "Smt. [Name]" },
  { role: "Youth Coordinator", name: "Shri. [Name]" },
];

function Leadership() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Leadership</span>
      <h1 className="mt-3 font-display text-5xl text-foreground md:text-6xl">The council that serves you.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Elected by members, our office bearers and council guide the society with dedication and integrity.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {office.map((p) => (
          <article key={p.role} className="overflow-hidden rounded-lg border border-border bg-card shadow-card transition-shadow hover:shadow-elegant">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img src={leader} alt={`${p.role} portrait`} loading="lazy" width={800} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{p.role}</div>
              <h3 className="mt-1 font-display text-2xl text-foreground">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
              <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {p.email}</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {p.phone}</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="font-display text-3xl text-foreground">Executive Council</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {council.map((c) => (
            <div key={c.role} className="flex items-center justify-between rounded-md border border-border bg-card px-5 py-4 shadow-card">
              <div>
                <div className="font-display text-lg text-foreground">{c.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.role}</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-hero" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
