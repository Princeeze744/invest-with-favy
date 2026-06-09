import Intro from "@/components/Intro";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import About from "@/components/About";
import Listings from "@/components/Listings";
import PropertyMap from "@/components/PropertyMap";
import Calculator from "@/components/Calculator";
import Tips from "@/components/Tips";
import Media from "@/components/Media";
import Reviews from "@/components/Reviews";
import Matchmaker from "@/components/Matchmaker";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
export default function Home() {
  return (
    <>
      <Intro />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <About />
        <Listings />
        <PropertyMap />
        <Calculator />
        <Tips />
        <Media />
        <Reviews />
        <Matchmaker />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
