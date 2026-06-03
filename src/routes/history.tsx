import { createFileRoute } from "@tanstack/react-router";
import heritage from "@/assets/heritage.jpg";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Our History — Cast Turk Community Society" },
      { name: "description", content: "A chronological journey through the history of the Cast Turk Community Society." },
      { property: "og:title", content: "History of the Cast Turk Community Society" },
      { property: "og:description", content: "Decades of heritage, service and community building." },
    ],
  }),
  component: History,
});

const timeline = [
  { year: "1952", title: "Foundation", body: "A small council of elders gathered to formalize a society dedicated to community welfare." },
  { year: "1968", title: "First Community Hall", body: "Members pooled resources to build the first dedicated cultural and meeting space." },
  { year: "1985", title: "Education Trust", body: "Launched scholarships and skill programs to support youth from across the community." },
  { year: "2001", title: "Welfare Wing", body: "Formal welfare division established for medical aid, widow support and emergency relief." },
  { year: "2015", title: "Cultural Revival", body: "Annual festivals, archives and oral history projects expanded across regions." },
  { year: "Today", title: "A New Chapter", body: "We continue to grow with digital outreach, mentorship and intergenerational dialogue." },
];

function History() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-25">
          <img src={heritage} alt="" loading="lazy" width={1400} height={900} className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Heritage</span>
          <h1 className="mt-3 font-display text-5xl text-foreground md:text-6xl">A story spanning generations.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From a quiet gathering of elders to a thriving organisation today, our history is the story of
            ordinary people doing extraordinary things together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="relative border-l-2 border-accent/40 pl-8">
          {timeline.map((t) => (
            <div key={t.year} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[42px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-hero">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <div className="font-display text-3xl text-primary">{t.year}</div>
              <h3 className="mt-1 font-display text-2xl text-foreground">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
