import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import event from "@/assets/event.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Cast Turk Community Society" },
      { name: "description", content: "Upcoming and recent events: cultural festivals, meetings, and community gatherings." },
      { property: "og:title", content: "Events — Cast Turk Community Society" },
      { property: "og:description", content: "Cultural festivals, meetings, and community gatherings." },
    ],
  }),
  component: Events,
});

const events = [
  { date: "Mar 14, 2026", title: "Annual General Body Meeting", place: "Community Hall", tag: "Meeting" },
  { date: "Apr 22, 2026", title: "Cultural Heritage Day", place: "Town Auditorium", tag: "Cultural" },
  { date: "Jun 09, 2026", title: "Youth Leadership Workshop", place: "Society Office", tag: "Youth" },
  { date: "Aug 18, 2026", title: "Founders Day Celebration", place: "Community Hall", tag: "Festival" },
  { date: "Oct 02, 2026", title: "Education Awards Ceremony", place: "Town Auditorium", tag: "Education" },
  { date: "Dec 21, 2026", title: "Winter Family Gathering", place: "Society Grounds", tag: "Community" },
];

function Events() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-30">
          <img src={event} alt="" loading="lazy" width={1200} height={800} className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Events</span>
          <h1 className="mt-3 font-display text-5xl text-foreground md:text-6xl">Gatherings that bring us closer.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From annual general meetings to cultural festivals, our calendar is built around the moments that
            matter most to our members.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article key={e.title} className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-card transition-shadow hover:shadow-elegant">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={event} alt="" loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">{e.tag}</span>
                <h3 className="mt-3 font-display text-2xl text-foreground">{e.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /><span>{e.date}</span></div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /><span>{e.place}</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
