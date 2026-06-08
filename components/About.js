"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
export default function About() {
  return (
    <section className="about" id="about">
      <Reveal className="about-media">
        <Image src="/images/favy-2.jpg" alt="Favour" width={900} height={1125} />
        <span className="about-badge">Hi, I&apos;m Favour</span>
      </Reveal>
      <Reveal className="about-text" delay={0.1}>
        <p className="section-tag dark">About Me</p>
        <h2>Your partner in property.</h2>
        <p>I am passionate about helping people make smart, confident real estate decisions — from land acquisition to property investment. Buying property is exciting, but it can feel overwhelming, so I keep it clear, practical, and honest at every step.</p>
        <p>My mission is simple: help you avoid costly mistakes, discover valuable opportunities, and invest with confidence.</p>
        <div className="stats">
          <div><div className="stat-num"><Counter to={50} suffix="+" /></div><div className="stat-label">Clients Guided</div></div>
          <div><div className="stat-num"><Counter to={100} suffix="%" /></div><div className="stat-label">Verified Listings</div></div>
          <div><div className="stat-num"><Counter to={4} suffix="+" /></div><div className="stat-label">Prime Locations</div></div>
        </div>
      </Reveal>
    </section>
  );
}
