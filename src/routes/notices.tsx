import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title: "Notices — Cast Turk Community Society" },
      { name: "description", content: "Official notices, circulars and announcements from the society." },
      { property: "og:title", content: "Notices — Cast Turk Community Society" },
      { property: "og:description", content: "Official circulars and announcements." },
    ],
  }),
  component: Notices,
});

const notices = [
  { date: "Feb 12, 2026", title: "Notice for Annual General Body Meeting 2026", tag: "AGM" },
  { date: "Jan 28, 2026", title: "Scholarship Applications — Academic Year 2026-27", tag: "Education" },
  { date: "Jan 10, 2026", title: "Updated Membership Subscription Details", tag: "Membership" },
  { date: "Dec 19, 2025", title: "Cultural Day Volunteer Registration", tag: "Cultural" },
  { date: "Nov 30, 2025", title: "Welfare Fund Disbursement Guidelines", tag: "Welfare" },
  { date: "Oct 15, 2025", title: "Election of Office Bearers — Schedule", tag: "Elections" },
];

function Notices() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Notices</span>
      <h1 className="mt-3 font-display text-5xl text-foreground md:text-6xl">Announcements & circulars.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Official communication from the office bearers, archived for easy reference by all members.
      </p>

      <div className="mt-12 divide-y divide-border overflow-hidden rounded-lg border border-border bg-card shadow-card">
        {notices.map((n) => (
          <div key={n.title} className="flex items-start gap-4 p-5 transition-colors hover:bg-muted/40 sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-hero text-primary-foreground">
              <FileText className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">{n.tag}</span>
                <span className="text-xs text-muted-foreground">{n.date}</span>
              </div>
              <div className="mt-1 font-display text-lg text-foreground">{n.title}</div>
            </div>
            <button className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-muted">
              <Download className="h-3.5 w-3.5" /> PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
