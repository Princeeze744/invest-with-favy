"use client";
import Reveal from "@/components/Reveal";
import InstagramEmbed from "@/components/InstagramEmbed";
const reels = ["DXFX3QUkRXI", "DUGIF5DiG9A"];
const yt = "RUJVlzVHnEk";
export default function Media() {
  return (
    <section className="media" id="media">
      <div className="section-head"><p className="section-tag dark center">See Her In Action</p><h2>From The Field</h2></div>
      <div className="media-grid">
        {reels.map((id) => (<Reveal key={id} className="clip"><div style={{ width: "100%", maxWidth: 330 }}><InstagramEmbed url={`https://www.instagram.com/reel/${id}/`} /></div></Reveal>))}
        <Reveal className="clip"><div className="video"><iframe src={`https://www.youtube.com/embed/${yt}`} title="YouTube short" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></Reveal>
      </div>
    </section>
  );
}
