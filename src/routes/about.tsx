import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cast Turk Community Society" },
      { name: "description", content: "Our mission, vision and values: preserving heritage and uplifting the Cast Turk community." },
      { property: "og:title", content: "About Cast Turk Community Society" },
      { property: "og:description", content: "Mission, vision and values of the Cast Turk Community Society." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">About Us</span>
      <h1 className="mt-3 font-display text-5xl text-foreground md:text-6xl">Who we are.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        The Cast Turk Community Society is a registered, non-profit cultural body dedicated to the welfare,
        education and heritage of the Cast Turk people. We exist to keep our identity alive while opening
        doors of opportunity for every member.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-border bg-card p-8 shadow-card">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Mission</div>
          <h2 className="mt-2 font-display text-3xl text-foreground">Preserve. Empower. Connect.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            To safeguard the cultural heritage of our community while empowering its members through
            education, welfare and meaningful connection.
          </p>
        </article>
        <article className="rounded-lg border border-border bg-card p-8 shadow-card">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Vision</div>
          <h2 className="mt-2 font-display text-3xl text-foreground">A united, thriving people.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A community where every individual takes pride in their roots and contributes confidently to a
            shared future.
          </p>
        </article>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-3xl text-foreground">Core Values</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {["Integrity", "Inclusion", "Service", "Tradition"].map((v) => (
            <div key={v} className="border-l-2 border-accent bg-muted/40 p-5">
              <div className="font-display text-xl text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
