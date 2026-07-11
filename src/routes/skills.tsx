import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { skills } from "@/data/skills";
import * as Icons from "lucide-react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Harsha Motupalli" },
      { name: "description", content: "Core capabilities across AI/ML, data, devops and engineering." },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const [open, setOpen] = useState<string | null>(skills[0].id);

  return (
    <PageShell
      eyebrow="Capabilities"
      title="Core Capabilities Architecture"
      sub="A categorized view of the tools, frameworks and disciplines I work with — from foundations to production."
    >
      <div className="grid gap-4">
        {skills.map((g, idx) => {
          const Icon = ((Icons as unknown) as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[g.icon] ?? Icons.Sparkle;
          const isOpen = open === g.id;
          const accentClass = g.accent === "violet" ? "text-accent" : "text-primary";
          return (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass rounded-2xl overflow-hidden hover:border-primary/30 transition"
            >
              <button
                onClick={() => setOpen(isOpen ? null : g.id)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left"
              >
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center shrink-0">
                  <Icon size={20} className={accentClass} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Category {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="text-lg font-semibold mt-0.5">{g.title}</div>
                </div>
                <div className="text-xs font-mono text-muted-foreground hidden md:block">
                  {g.subgroups.reduce((n, s) => n + s.skills.length, 0)} skills
                </div>
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-5 border-t border-border/40 pt-5">
                      {g.subgroups.map((sg) => (
                        <div key={sg.name}>
                          <div className={`text-[11px] font-mono uppercase tracking-[0.2em] mb-3 ${accentClass}`}>
                            {sg.name}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {sg.skills.map((s, i) => (
                              <motion.span
                                key={s}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                className="group relative px-3.5 py-1.5 rounded-full text-sm font-medium text-foreground bg-white/[0.06] border border-white/15 hover:bg-primary/15 hover:border-primary/60 hover:text-primary cursor-default transition"
                              >
                                {s}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </PageShell>
  );
}
