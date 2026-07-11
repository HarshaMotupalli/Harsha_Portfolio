import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let raf = 0;
    let target = { x: 0, y: 0 };
    let ring = { x: 0, y: 0 };

    const move = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY };
      setPos(target);
    };
    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      setRingPos({ x: ring.x, y: ring.y });
      raf = requestAnimationFrame(tick);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setExpanded(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)` }}
      />
      <div
        className={`cursor-ring ${expanded ? "expanded" : ""}`}
        style={{
          transform: `translate(${ringPos.x - (expanded ? 32 : 18)}px, ${ringPos.y - (expanded ? 32 : 18)}px)`,
        }}
      />
    </>
  );
}
