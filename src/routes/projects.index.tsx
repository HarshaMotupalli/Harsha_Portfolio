import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { projects } from "@/data/projects";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Harsha Motupalli" },
      { name: "description", content: "Selected AI / ML engineering projects with case studies." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Selected Work"
      title="Projects & Case Studies"
      sub="A curated set of systems I've designed, trained and shipped — each with an in-depth case study."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} i={i} />
        ))}
      </div>
    </PageShell>
  );
}

function ProjectCard({ p, i }: { p: typeof projects[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    ref.current.style.setProperty("--mx", `${x * 100}%`);
    ref.current.style.setProperty("--my", `${y * 100}%`);
    ref.current.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group relative glass rounded-3xl p-7 h-full overflow-hidden transition-transform duration-300 hover:border-primary/40"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.78 0.18 200 / 0.12), transparent 60%), var(--gradient-card)",
        }}
      >
        <div className="flex items-start justify-between mb-5">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary px-2.5 py-1 rounded-full border border-primary/30">
            {p.category}
          </span>
          <div className="flex gap-2">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:text-primary transition">
                <Github size={14} />
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Demo" className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:text-primary transition">
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
        <h3 className="text-2xl font-bold tracking-tight mb-2">{p.title}</h3>
        <p className="text-sm text-muted-foreground mb-5">{p.description}</p>
        <ul className="space-y-1.5 mb-6">
          {p.highlights.map((h) => (
            <li key={h} className="text-xs text-foreground/75 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" /> {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {p.stack.map((s) => (
            <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
        <Link
          to="/projects/$slug"
          params={{ slug: p.slug }}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group/link"
        >
          Read Case Study
          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
