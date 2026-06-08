"use client";
import { useEffect } from "react";
let p = null;
function loadIG() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.instgrm) return Promise.resolve();
  if (p) return p;
  p = new Promise((res) => { const s = document.createElement("script"); s.src = "https://www.instagram.com/embed.js"; s.async = true; s.onload = () => res(); document.body.appendChild(s); });
  return p;
}
export default function InstagramEmbed({ url }) {
  useEffect(() => {
    let done = false;
    loadIG().then(() => { if (!done && window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process(); });
    const t = setTimeout(() => { if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process(); }, 900);
    return () => { done = true; clearTimeout(t); };
  }, [url]);
  return (
    <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14" style={{ background: "#fff", border: 0, margin: 0, padding: 0, width: "100%" }}>
      <a href={url} target="_blank" rel="noopener noreferrer">Watch this reel on Instagram</a>
    </blockquote>
  );
}
