"use client";
import Image from "next/image";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg"><Image src="/images/favy-hero.png" alt="Favour — Investwithfavy real estate and investment consultant" fill priority sizes="100vw" /></div>
      <div className="hero-scrim" />
      <motion.div className="hero-cta" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}>
        <a href="#contact" className="btn btn-primary">Book a Free Consultation</a>
        <a href="#listings" className="btn btn-ghost">View Listings</a>
      </motion.div>
    </section>
  );
}
