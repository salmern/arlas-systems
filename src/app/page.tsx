import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Industries from "@/components/sections/Industries";
import HowWeWork from "@/components/sections/HowWeWork";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <WhatWeDo />
        <Industries />
        <HowWeWork />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
