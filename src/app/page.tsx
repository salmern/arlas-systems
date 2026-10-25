import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import CurrentWork from "@/components/sections/CurrentWork";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CurrentWork />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
