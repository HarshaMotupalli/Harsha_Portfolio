import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { resources } from "@/data/resources";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Harsha Motupalli" },
      { name: "description", content: "Curated developer learning resource hub." },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(resources.map((r) => r.category)))], []);
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? resources : resources.filter((r) => r.category === filter);

  return (
    <PageShell
      eyebrow="Knowledge Hub"
      title="Developer Learning Resources"
      sub="A curated set of references, roadmaps and docs I return to constantly."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`text-xs font-mono px-3 py-1.5 rounded-full border transition ${
              filter === c
                ? "bg-primary text-primary-foreground border-primary"
                : "glass border-white/10 hover:border-primary/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((r, i) => {
          const Icon = ((Icons as unknown) as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[r.icon] ?? Icons.BookOpen;
          return (
            <motion.a
              key={r.title}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative glass rounded-2xl p-5 hover:border-primary/40 transition overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary opacity-0 group-hover:opacity-20 blur-2xl transition" />
              <div className="relative flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">{r.category}</div>
              <h3 className="font-semibold leading-tight mb-1.5">{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.description}</p>
            </motion.a>
          );
        })}
      </div>
    </PageShell>
  );
}
