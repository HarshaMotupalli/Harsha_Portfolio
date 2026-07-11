import { profile } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-mono">© {new Date().getFullYear()} {profile.name}. Built with intent.</div>
        <div className="flex items-center gap-4">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary transition" aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} className="hover:text-primary transition" aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
