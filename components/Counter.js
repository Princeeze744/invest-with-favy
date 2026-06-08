"use client";
import { useEffect, useRef, useState } from "react";
export default function Counter({ to = 0, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / (duration * 1000), 1);
        setN(Math.round(p * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(); io.disconnect(); } });
    }, { threshold: 0.25 });
    io.observe(el);
    const t = setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) run();
    }, 700);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}
