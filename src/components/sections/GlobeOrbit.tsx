import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

type Tag = { label: string; tip: string };

const tags: Tag[] = [
  { label: "AI Engineer", tip: "End-to-end AI systems, from research to production." },
  { label: "Machine Learning", tip: "Classical ML, feature engineering & model ops." },
  { label: "Deep Learning", tip: "CNNs, RNNs, Transformers with TensorFlow / PyTorch." },
  { label: "NLP", tip: "Text classification, embeddings & LLM pipelines." },
  { label: "Computer Vision", tip: "OpenCV, MediaPipe, medical imaging & detection." },
  { label: "Data Science", tip: "Pandas, statistics, EDA and applied analytics." },
  { label: "Full Stack", tip: "React / TypeScript · APIs · databases." },
  { label: "DevOps", tip: "Docker, CI/CD and deployment workflows." },
  { label: "Cloud Systems", tip: "Cloud deploys on Vercel, Netlify & Cloudflare." },
  { label: "Backend", tip: "Python & Node services for ML products." },
  { label: "MLOps", tip: "MLflow, experiment tracking & model registry." },
  { label: "Generative AI", tip: "LLMs, RAG and Hugging Face pipelines." },
];

export function GlobeOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setTilt({ x: dy * 12, y: -dx * 12 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-square w-full max-w-[560px] mx-auto"
      style={{ perspective: "1200px" }}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        {/* Core sphere with portrait */}
        <div className="absolute inset-[22%] rounded-full glass-strong border-glow overflow-hidden">
          <img
            src="/profile.png"
            alt="Harsha Motupalli"
            width={512}
            height={512}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--gradient-primary)] mix-blend-overlay opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-2 rounded-full border border-primary/40" />
          <div className="absolute inset-6 rounded-full border border-accent/20" />
          <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-[spin-slow_8s_linear_infinite]" style={{ top: "50%" }} />
          </div>
          <div className="absolute bottom-3 left-0 right-0 text-center">
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase">Neural Core</div>
          </div>
        </div>

        {/* Orbit rings */}
        <div className="absolute inset-[6%] rounded-full border border-primary/20 animate-spin-slow" />
        <div className="absolute inset-[14%] rounded-full border border-accent/15 animate-spin-reverse" />
        <div className="absolute inset-0 rounded-full border border-primary/10" />

        {/* Floating tags on orbit — clickable with tooltips */}
        {tags.map((t, i) => {
          const angle = (i / tags.length) * Math.PI * 2;
          const r = 48;
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          const isActive = hovered === t.label;
          return (
            <div
              key={t.label}
              className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                animationDelay: `${(i % 5) * 0.4}s`,
                zIndex: isActive ? 30 : 10,
              }}
            >
              <Link
                to="/skills"
                onMouseEnter={() => setHovered(t.label)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(t.label)}
                onBlur={() => setHovered(null)}
                aria-label={`${t.label} — ${t.tip}`}
                className={`relative block px-2.5 py-1 rounded-full glass text-[10px] md:text-xs font-mono whitespace-nowrap border transition ${
                  isActive
                    ? "text-primary border-primary/70 shadow-[0_0_18px_var(--primary)] scale-110"
                    : "text-foreground/80 border-white/10 hover:text-primary hover:border-primary/50"
                }`}
              >
                {t.label}
                {isActive && (
                  <span
                    role="tooltip"
                    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-52 rounded-lg glass-strong px-3 py-2 text-[10.5px] leading-snug text-foreground/90 shadow-[var(--shadow-elevated)] pointer-events-none z-40"
                  >
                    {t.tip}
                  </span>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
