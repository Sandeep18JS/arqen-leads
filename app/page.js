'use client';
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { useEffect } from "react";
import Lenis from "lenis";
import FloorPlans from "./components/FloorPlans";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="font-poppins">
      <Hero />
      <Contact />
      <About />
      <FloorPlans />
      <Footer />
    </div>
  );
}
