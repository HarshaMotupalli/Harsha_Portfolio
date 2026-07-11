import { Link, useLocation } from "@tanstack/react-router";
import { Home, Layers, FolderGit2, Award, BookOpen, Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/skills", label: "Skills", icon: Layers },
  { to: "/projects", label: "Projects", icon: FolderGit2 },
  { to: "/certifications", label: "Certifications", icon: Award },
  { to: "/resources", label: "Knowledge Hub", icon: BookOpen },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function CommandDock() {
  const loc = useLocation();
  return (
    <div className="fixed bottom-5 inset-x-0 z-50 flex justify-center px-3 pointer-events-none">
      <nav className="pointer-events-auto glass-strong rounded-full px-2 py-2 flex items-center gap-1 shadow-[var(--shadow-elevated)]">
        {links.map((l) => {
          const active = loc.pathname === l.to;
          const Icon = l.icon;
          return (
            <Link
              key={l.to}
              to={l.to}
              aria-label={l.label}
              className={`group relative flex items-center justify-center h-10 w-10 sm:h-10 sm:w-auto sm:px-3.5 rounded-full text-xs font-medium transition-all ${
                active
                  ? "text-primary-foreground bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <Icon size={15} className="sm:mr-1.5 shrink-0" />
              <span className="hidden sm:inline">{l.label}</span>
            </Link>
          );
        })}
        <div className="hidden sm:flex items-center gap-1 ml-1 pl-2 border-l border-white/10">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="h-9 w-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-white/5 transition">
            <Github size={15} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-9 w-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-white/5 transition">
            <Linkedin size={15} />
          </a>
        </div>
      </nav>
    </div>
  );
}
