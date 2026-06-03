import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, BookOpen, Heart } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cast Turk Community Society — Heritage, Unity, Service" },
      { name: "description", content: "The official site of the Cast Turk Community Society — preserving heritage, supporting members, and shaping the future." },
      { property: "og:title", content: "Cast Turk Community Society" },
      { property: "og:description", content: "Heritage, unity and service for the Cast Turk community." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" width={1600} height={1024} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-32 md:py-44">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-block border-l-2 border-accent pl-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Est. 1952 · A Heritage Society
            </span>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl">
              A community rooted in <span className="text-gradient-gold italic">heritage</span>, growing in unity.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
              The Cast Turk Community Society brings together generations through cultural preservation,
              education, and service to one another.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-medium text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/leadership"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 font-medium text-primary-foreground hover:bg-primary-foreground/10"
              >
                Meet the Council
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: BookOpen, title: "Heritage", body: "We safeguard the customs, language and stories that define who we are." },
            { icon: Users, title: "Unity", body: "We connect families, support members, and stand together across generations." },
            { icon: Heart, title: "Service", body: "We invest in education, welfare and the upliftment of every member." },
          ].map((p) => (
            <div key={p.title} className="rounded-lg border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-elegant">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-hero text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
          {[
            ["70+", "Years of Service"],
            ["12K", "Member Families"],
            ["48", "Annual Programs"],
            ["120", "Scholarships Awarded"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-5xl text-primary">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-xl bg-hero p-12 text-primary-foreground shadow-elegant md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-4xl">Become part of the family.</h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Join events, contribute, or simply reach out — every voice strengthens our community.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 font-medium text-accent-foreground hover:-translate-y-0.5 transition-transform">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
