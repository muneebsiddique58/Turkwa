import { createFileRoute } from "@tanstack/react-router";
import event from "@/assets/event.jpg";
import hero from "@/assets/hero.jpg";
import heritage from "@/assets/heritage.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cast Turk Community Society" },
      { name: "description", content: "Moments from our events, gatherings, and heritage projects." },
      { property: "og:title", content: "Gallery — Cast Turk Community Society" },
      { property: "og:description", content: "Photographs from our events and community life." },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: event, w: 1200, h: 800, span: "md:col-span-2 md:row-span-2", label: "Heritage Day" },
  { src: hero, w: 1600, h: 1024, span: "", label: "Annual Gathering" },
  { src: heritage, w: 1400, h: 900, span: "", label: "Archives" },
  { src: event, w: 1200, h: 800, span: "", label: "Cultural Evening" },
  { src: hero, w: 1600, h: 1024, span: "md:col-span-2", label: "Founders Day" },
  { src: heritage, w: 1400, h: 900, span: "", label: "Heritage Project" },
  { src: event, w: 1200, h: 800, span: "", label: "Workshop" },
];

function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Gallery</span>
      <h1 className="mt-3 font-display text-5xl text-foreground md:text-6xl">Moments, captured.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A visual archive of the people, places and celebrations that shape our community.
      </p>

      <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
        {photos.map((p, i) => (
          <figure key={i} className={`group relative overflow-hidden rounded-lg shadow-card ${p.span}`}>
            <img src={p.src} alt={p.label} loading="lazy" width={p.w} height={p.h} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 text-sm font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {p.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
