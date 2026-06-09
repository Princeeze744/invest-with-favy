"use client";
import Image from "next/image";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-figure">
        <div className="hero-portrait"><Image src="/images/favy-hero.jpg" alt="Favour — Investwithfavy real estate consultant" fill priority sizes="(max-width:900px) 90vw, 45vw" /></div>
        <div className="hero-badge"><b>50+</b><span>Clients Guided</span></div>
      </div>
      <motion.div className="hero-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}>
        <p className="hero-eyebrow">Real Estate · Investment Consultant</p>
        <h1 className="hero-title">Building wealth through smart property investments.</h1>
        <p className="hero-sub">Verified homes, land and off-plan opportunities across Port Harcourt &amp; Rivers State — guided personally by Favour.</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Book a Free Consultation</a>
          <a href="#listings" className="btn btn-ghost">View Listings</a>
        </div>
      </motion.div>
    </section>
  );
}
