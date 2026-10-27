import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/languages", label: "Languages" },
  { to: "/tutor", label: "AI Tutor" },
  { to: "/culture", label: "Culture" },
  { to: "/dashboard", label: "Dashboard" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-hero flex items-center justify-center font-display text-lg shadow-glow">C</div>
            <div className="leading-tight">
              <div className="font-display text-base">Cameroon</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Culture Tongues</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-gold" }}>{l.label}</Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link to="/tutor" className="inline-flex items-center rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--terracotta)] text-background font-medium text-sm px-5 py-2 hover:opacity-90 transition">Start Learning</Link>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden glass rounded-2xl mt-2 p-4 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">{l.label}</Link>
            ))}
            <Link to="/tutor" onClick={() => setOpen(false)} className="rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--terracotta)] text-background font-medium text-sm px-5 py-2 text-center">Start Learning</Link>
          </div>
        )}
      </div>
    </header>
  );
}
