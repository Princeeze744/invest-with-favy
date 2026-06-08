"use client";
import Image from "next/image";
import { motion } from "motion/react";
const c = { hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } };
const i = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } } };
export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div className="hero-content" variants={c} initial="hidden" animate="show">
        <motion.p className="eyebrow" variants={i}><span className="line" /> Real Estate Hub</motion.p>
        <motion.h1 className="hero-title" variants={i}>Make smart real estate <em>decisions</em>.</motion.h1>
        <motion.p className="hero-sub" variants={i}>Whether you are buying land, investing, or exploring property ownership — I help you move with clarity, honest guidance, and access to genuine opportunities.</motion.p>
        <motion.div className="hero-actions" variants={i}>
          <a href="#contact" className="btn btn-primary">Book a Free Consultation</a>
          <a href="#listings" className="btn btn-ghost">View Listings</a>
        </motion.div>
      </motion.div>
      <div className="hero-portrait">
        <Image src="/images/favy-1.jpg" alt="Favour, real estate consultant" fill priority sizes="(max-width:900px) 100vw, 50vw" />
        <div className="hero-card">
          <span className="hc-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" /></svg></span>
          <div><div className="hc-name">Favour</div><div className="hc-role">Real Estate Consultant · PH</div></div>
        </div>
      </div>
    </section>
  );
}
