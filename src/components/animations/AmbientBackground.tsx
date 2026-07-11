export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 neural-grid opacity-60" />
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-[var(--cyan)] opacity-[0.08] blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-[var(--violet)] opacity-[0.1] blur-[140px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-[var(--cyan)] opacity-[0.06] blur-[120px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      <Particles />
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0">
      {dots.map((_, i) => {
        const left = (i * 137) % 100;
        const top = (i * 73) % 100;
        const delay = (i % 7) * 0.6;
        const dur = 6 + (i % 5);
        return (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--cyan)]/60 animate-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
              boxShadow: "0 0 8px var(--cyan)",
            }}
          />
        );
      })}
    </div>
  );
}
