import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import About from "@/components/About";
import Listings from "@/components/Listings";
import Tips from "@/components/Tips";
import Media from "@/components/Media";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <About />
        <Listings />
        <Tips />
        <Media />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
