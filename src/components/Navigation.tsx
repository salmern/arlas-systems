"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 10);
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-[#f9f7f4]/96 backdrop-blur-md border-b border-[#e2ddd7]" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">

          {/* Wordmark */}
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group" aria-label="Arlas Systems">
            <img src="/arlas-favicon.svg" alt="" width={20} height={20} aria-hidden="true" className="flex-shrink-0" />
            <span className="text-[12px] font-semibold tracking-[0.18em] text-[#111110] uppercase">Arlas Systems</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={e => { e.preventDefault(); go(l.href); }}
                className="text-[12px] tracking-wide text-[#5a5a56] hover:text-[#111110] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a href="#contact"
              onClick={e => { e.preventDefault(); go("#contact"); }}
              className="hidden md:inline-flex items-center px-5 py-2 text-[11px] font-medium tracking-[0.14em] uppercase text-[#f9f7f4] bg-[#111110] hover:bg-[#1e3a2f] transition-colors">
              Get in Touch
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-[#f9f7f4] flex flex-col transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#e2ddd7]">
            <a href="#" onClick={e => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2.5">
              <img src="/arlas-favicon.svg" alt="" width={20} height={20} aria-hidden="true" />
              <span className="text-[12px] font-semibold tracking-[0.18em] uppercase">Arlas Systems</span>
            </a>
            <button onClick={() => setOpen(false)} aria-label="Close"><X size={20} /></button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-0">
            {links.map((l, i) => (
              <a key={l.href} href={l.href}
                onClick={e => { e.preventDefault(); go(l.href); }}
                className="py-5 text-[28px] font-light border-b border-[#e2ddd7] last:border-0 hover:text-[#1e3a2f] transition-colors"
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-8 pb-12">
            <a href="#contact" onClick={e => { e.preventDefault(); go("#contact"); }}
              className="flex items-center justify-center w-full py-4 text-[11px] font-medium tracking-[0.14em] uppercase text-[#f9f7f4] bg-[#111110] hover:bg-[#1e3a2f] transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
