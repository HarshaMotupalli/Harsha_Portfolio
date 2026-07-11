import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${p?.title ?? "Project"} — Case Study` },
        { name: "description", content: p?.description ?? "Project case study" },
      ],
    };
  },
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { project: p };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  return (
    <main className="pt-28 pb-16">
      {/* Hero */}
      <section className="relative px-6 pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-primary opacity-10 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-accent opacity-10 blur-[140px]" />
        </div>
        <div className="max-w-5xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft size={14} /> Back to all projects
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">{p.category}</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight">{p.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{p.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass rounded-xl px-4 py-2 text-sm hover:border-primary/40 transition">
                  <Github size={14} /> Source
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass rounded-xl px-4 py-2 text-sm hover:border-primary/40 transition">
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_240px] gap-10">
          <div className="space-y-12">
            <Block title="Overview" body={p.caseStudy.overview} />
            <Block title="Problem Statement" body={p.caseStudy.problem} />
            <Block title="Architecture" body={p.caseStudy.architecture} />
            <ListBlock title="Workflow" items={p.caseStudy.workflow} ordered />
            <ListBlock title="Challenges" items={p.caseStudy.challenges} />
            <ListBlock title="Results" items={p.caseStudy.results} accent="primary" />
            <ListBlock title="Future Scope" items={p.caseStudy.futureScope} />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="glass rounded-2xl p-5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">Tech Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s: string) => (
                  <span key={s} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5">{s}</span>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">Highlights</div>
              <ul className="space-y-2 text-xs text-foreground/80">
                {p.highlights.map((h: string) => (
                  <li key={h} className="flex gap-2"><span className="text-primary">→</span>{h}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">{title}</h2>
      <p className="text-lg leading-relaxed text-foreground/90">{body}</p>
    </motion.div>
  );
}

function ListBlock({ title, items, ordered, accent }: { title: string; items: string[]; ordered?: boolean; accent?: "primary" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={it} className="flex gap-4 glass rounded-xl px-4 py-3">
            <span className={`font-mono text-sm shrink-0 ${accent ? "text-primary" : "text-muted-foreground"}`}>
              {ordered ? String(i + 1).padStart(2, "0") : "·"}
            </span>
            <span className="text-foreground/90">{it}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
