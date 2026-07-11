import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass-strong rounded-2xl px-3 py-2 flex items-center gap-1 max-w-fit shadow-[var(--shadow-elevated)]">
        <Link
          to="/"
          className="font-mono text-sm font-bold px-3 py-1.5 rounded-xl text-gradient tracking-tight"
        >
          HM<span className="text-foreground/70">.dev</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = loc.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3.5 py-1.5 text-sm rounded-xl transition-all ${
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-xl bg-primary/10 border border-primary/30" />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            );
          })}
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-xl hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="absolute top-20 inset-x-4 glass-strong rounded-2xl p-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
