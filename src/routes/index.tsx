import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlobeOrbit } from "@/components/sections/GlobeOrbit";
import { profile } from "@/data/profile";
import { ArrowUpRight, GraduationCap, Trophy, Sparkles, Briefcase, Download } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harsha Motupalli — AI / ML Engineer" },
      { name: "description", content: "Premium AI/ML engineering portfolio of Harsha Motupalli — projects, skills, certifications and a curated knowledge hub." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="px-6 pb-32">
      {/* HERO */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center min-h-[92vh] pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] font-mono mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-muted-foreground">Available for AI/ML roles & internships</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Engineering <span className="text-gradient">intelligent</span><br />
            systems for the <span className="text-gradient">real world</span>.
          </h1>
          <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
            I'm <span className="text-foreground font-medium">{profile.shortName}</span> — a final-year AI/ML engineer shipping production-grade systems across{" "}
            <span className="text-primary/90">computer vision</span>,{" "}
            <span className="text-accent/90">deep learning</span> and{" "}
            <span className="text-primary/90">generative AI</span>. I turn research into products people actually use — from brain-tumor classifiers to real-time proctoring pipelines.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="group glow-ring inline-flex items-center gap-2 rounded-2xl bg-[var(--gradient-primary)] px-6 py-3 text-primary-foreground font-semibold text-sm hover:scale-[1.03] transition-transform shadow-[var(--shadow-glow)]"
            >
              Explore Projects
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
            </Link>
            <a
              href={profile.png}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 text-sm font-medium hover:border-primary/40 transition"
            >
              <Download size={15} /> Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Get in touch →
            </Link>
          </div>
          <div className="mt-7 grid grid-cols-4 max-w-lg gap-2.5">
            {[
              { k: "8.72", v: "CGPA" },
              { k: "3+", v: "Years Building" },
              { k: "6", v: "AI Domains" },
              { k: "5+", v: "Shipped" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl px-3 py-2.5">
                <div className="text-lg md:text-xl font-bold text-gradient">{s.k}</div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full max-w-[460px] lg:max-w-[520px] mx-auto"
        >
          <GlobeOrbit />
        </motion.div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="max-w-5xl mx-auto pb-24">
        <SectionHeading eyebrow="Experience" title="Where I've engineered." />
        <div className="relative pl-6 md:pl-10 mt-10">
          <div className="absolute left-2 md:left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent" />
          {profile.experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass rounded-2xl p-6 mb-5 hover:border-primary/30 transition"
            >
              <span className="absolute -left-[27px] md:-left-[37px] top-7 w-3 h-3 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" />
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-widest">
                    <Briefcase size={13} /> {e.company}
                  </div>
                  <h3 className="text-xl font-semibold mt-1">{e.role}</h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{e.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{e.summary}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {e.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-primary/25 text-primary/90">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INFO BLOCKS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <InfoCard icon={<GraduationCap className="text-primary" />} title="Education" accent="primary">
          {profile.education.map((e) => (
            <div key={e.degree}>
              <div className="font-semibold text-foreground">{e.degree}</div>
              <div className="text-sm text-muted-foreground mt-1">{e.school}</div>
              <div className="text-xs font-mono text-primary mt-2">{e.period}</div>
              <div className="text-sm text-muted-foreground mt-3">{e.detail}</div>
            </div>
          ))}
        </InfoCard>
        <InfoCard icon={<Trophy className="text-accent" />} title="Achievements" accent="accent">
          <ul className="space-y-3">
            {profile.achievements.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm">
                <Sparkles size={14} className="mt-0.5 text-accent shrink-0" />
                <span className="text-foreground/85">{a}</span>
              </li>
            ))}
          </ul>
        </InfoCard>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
        <span className="w-8 h-px bg-primary" /> {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function InfoCard({ icon, title, accent, children }: {
  icon: React.ReactNode; title: string; accent: "primary" | "accent"; children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass rounded-3xl p-8 hover:border-primary/30 transition overflow-hidden"
    >
      <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition ${accent === "primary" ? "bg-primary" : "bg-accent"}`} />
      <div className="relative">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">{icon}</div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        </div>
        {children}
      </div>
    </motion.div>
  );
}
