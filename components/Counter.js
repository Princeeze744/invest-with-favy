"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
export default function Counter({ to = 0, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf; const start = performance.now();
    const tick = (t) => { const p = Math.min((t - start) / (duration * 1000), 1); setN(Math.floor(p * to)); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}
