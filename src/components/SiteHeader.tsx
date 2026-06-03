import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/history", label: "History" },
  { to: "/leadership", label: "Leadership" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/notices", label: "Notices" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-hero text-primary-foreground">
            <span className="font-display text-xl font-semibold">CT</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold text-foreground">Cast Turk</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Community Society</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors ${
                  active ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {n.label}
                {active && <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-accent to-primary" />}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 text-foreground hover:bg-muted"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col p-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
