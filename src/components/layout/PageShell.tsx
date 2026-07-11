import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children, eyebrow, title, sub }: {
  children: ReactNode; eyebrow?: string; title: string; sub?: string;
}) {
  return (
    <main className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" />
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          {sub && (
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">{sub}</p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}
