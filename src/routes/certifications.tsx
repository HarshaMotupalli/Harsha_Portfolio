import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { certifications, type Certification } from "@/data/certifications";
import { Award, X, ExternalLink, Calendar, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Harsha Motupalli" },
      { name: "description", content: "Verified certifications and recognitions." },
    ],
  }),
  component: CertsPage,
});

function CertsPage() {
  const [active, setActive] = useState<Certification | null>(null);
  return (
    <PageShell
      eyebrow="Verified Credentials"
      title="Certifications & Recognition"
      sub="A growing collection of certifications and program qualifications across AI, ML and cloud."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c, i) => (
          <motion.button
            key={c.id}
            onClick={() => setActive(c)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group text-left glass rounded-2xl overflow-hidden hover:border-primary/40 transition"
          >
            <div className={`h-40 relative bg-gradient-to-br ${c.image} overflow-hidden`}>
              <img src={c.cover} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 neural-grid opacity-25" />
              <Award size={32} className="absolute top-3 right-3 text-primary drop-shadow-[0_0_12px_var(--primary)]" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-primary mb-2">
                <BadgeCheck size={12} /> Verified
              </div>
              <h3 className="font-semibold leading-tight mb-1">{c.title}</h3>
              <div className="text-xs text-muted-foreground">{c.issuer}</div>
              <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-3 font-mono">
                <Calendar size={11} /> {c.date}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && <CertModal cert={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </PageShell>
  );
}

function CertModal({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong rounded-3xl max-w-3xl w-full overflow-hidden shadow-[var(--shadow-elevated)]"
      >
        <div className={`h-64 relative bg-gradient-to-br ${cert.image} overflow-hidden`}>
          <img src={cert.cover} alt={cert.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 neural-grid opacity-25" />
          <Award size={64} className="absolute bottom-5 left-6 text-primary drop-shadow-[0_0_16px_var(--primary)]" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center hover:text-primary transition"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-8">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-2">{cert.issuer}</div>
          <h2 className="text-3xl font-bold tracking-tight">{cert.title}</h2>
          <p className="mt-4 text-muted-foreground">{cert.description}</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <div className="glass rounded-xl px-4 py-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Issued</div>
              <div className="text-sm font-mono mt-1">{cert.date}</div>
            </div>
            {cert.credentialId && (
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Credential</div>
                <div className="text-sm font-mono mt-1 truncate">{cert.credentialId}</div>
              </div>
            )}
            <div className="glass rounded-xl px-4 py-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Status</div>
              <div className="text-sm font-mono mt-1 text-primary">Active</div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {cert.skills.map((s) => (
              <span key={s} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5">{s}</span>
            ))}
          </div>
          {cert.url && (
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              View Credential <ExternalLink size={14} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
