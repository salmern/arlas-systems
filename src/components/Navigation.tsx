"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 10);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#f9f7f4]/95 backdrop-blur-md border-b border-[#e0dbd4]" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Wordmark */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2.5"
              aria-label="Arlas Systems"
            >
              <img src="/arlas-favicon.svg" alt="" width={22} height={22} aria-hidden="true" className="flex-shrink-0" />
              <span className="text-[13px] font-semibold tracking-[0.16em] text-[#1a1a1a] uppercase">
                Arlas Systems
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-[13px] text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="hidden md:inline-flex items-center px-5 py-2 text-[12px] font-medium tracking-[0.12em] uppercase text-[#f9f7f4] bg-[#1e3a2f] hover:bg-[#2d5240] transition-colors"
              >
                Talk to Us
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-1.5 text-[#1a1a1a]"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-[#f9f7f4] flex flex-col transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#e0dbd4] flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2.5">
              <img src="/arlas-favicon.svg" alt="" width={22} height={22} aria-hidden="true" />
              <span className="text-[13px] font-semibold tracking-[0.16em] text-[#1a1a1a] uppercase">Arlas Systems</span>
            </a>
            <button onClick={() => setMenuOpen(false)} className="p-1.5 text-[#1a1a1a]" aria-label="Close menu">
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-0" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="py-5 text-[26px] font-light text-[#1a1a1a] hover:text-[#1e3a2f] transition-colors border-b border-[#e0dbd4] last:border-0"
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="px-8 pb-12 flex-shrink-0">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="flex items-center justify-center w-full py-4 text-[12px] font-medium tracking-[0.15em] uppercase text-[#f9f7f4] bg-[#1e3a2f] hover:bg-[#2d5240] transition-colors"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
