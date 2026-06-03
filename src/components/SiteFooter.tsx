import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-hero text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">Cast Turk Community Society</div>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Preserving heritage, uplifting community, and building bridges across generations.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Explore</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/history" className="hover:text-accent">History</Link></li>
            <li><Link to="/leadership" className="hover:text-accent">Leadership</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Reach Us</div>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /><span>Main Dhanda Bazar Murree</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /><span>+91 316 55783367</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /><span>muneebsiddique58@gmail.com</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Muhammad Muneeb Turk. All rights reserved.
      </div>
    </footer>
  );
}
