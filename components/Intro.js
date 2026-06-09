"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
export default function Intro() {
  const [show, setShow] = useState(false);
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("iwf_intro") === "1"; } catch (e) {}
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) return;
    setShow(true);
    document.body.style.overflow = "hidden";
    let cur = 0;
    const iv = setInterval(() => { cur = Math.min(cur + Math.floor(Math.random() * 9) + 4, 100); setPct(cur); if (cur >= 100) clearInterval(iv); }, 95);
    const t = setTimeout(() => { setShow(false); try { sessionStorage.setItem("iwf_intro", "1"); } catch (e) {} }, 2500);
    return () => { clearInterval(iv); clearTimeout(t); };
  }, []);
  return (
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = ""; }}>
      {show && (
        <motion.div className="intro" key="intro">
          <motion.div className="intro-panel intro-left" initial={{ x: 0 }} exit={{ x: "-101%" }} transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.2 }} />
          <motion.div className="intro-panel intro-right" initial={{ x: 0 }} exit={{ x: "101%" }} transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.2 }} />
          <motion.div className="intro-content" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 1.08 }} transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}>
            <div className="intro-mono"><span>I</span><b>F</b></div>
            <div className="intro-word">INVESTWITH<b>FAVY</b></div>
            <div className="intro-bar"><span style={{ width: `${pct}%` }} /></div>
            <div className="intro-pct">{pct}%</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
