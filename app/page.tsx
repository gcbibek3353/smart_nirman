import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import CeoMessage from "@/components/sections/CeoMessage";
import Divisions from "@/components/sections/Divisions";
import WhyUs from "@/components/sections/WhyUs";
import StatsBand from "@/components/sections/StatsBand";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <CeoMessage />
        <Divisions />
        <WhyUs />
        <StatsBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
