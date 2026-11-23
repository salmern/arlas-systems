"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scroll = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f9f7f4]"
      aria-label="Hero"
    >
      {/* Very faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(30,58,47,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,47,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24 md:pt-44 md:pb-32 w-full">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="block w-8 h-px bg-[#1e3a2f]" aria-hidden="true" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f]">
            Business Technology & Automation
          </span>
        </div>

        {/* Headline — editorial scale */}
        <h1
          className="text-[46px] sm:text-[58px] md:text-[70px] lg:text-[82px] xl:text-[92px] font-light leading-[1.04] text-[#1a1a1a] text-balance max-w-5xl opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Better systems.
          <br />
          <span className="text-[#1e3a2f]">Smarter operations.</span>
        </h1>

        {/* Supporting line */}
        <p
          className="mt-8 text-[18px] md:text-[20px] leading-[1.6] text-[#4a4a4a] max-w-xl opacity-0 animate-fade-up"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Arlas Systems helps businesses eliminate repetitive work, connect their
          operations and build intelligent systems that make work simpler, faster
          and more effective.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <a
            href="#what-we-do"
            onClick={(e) => { e.preventDefault(); scroll("#what-we-do"); }}
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#1e3a2f] text-[#f9f7f4] text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-[#2d5240] transition-colors"
          >
            See How We Work
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scroll("#contact"); }}
            className="inline-flex items-center gap-2.5 px-8 py-4 border border-[#1a1a1a]/30 text-[#1a1a1a] text-[13px] font-medium tracking-[0.1em] uppercase hover:border-[#1a1a1a] transition-colors"
          >
            Talk to Us
          </a>
        </div>

        {/* Bottom rule */}
        <div
          className="mt-20 md:mt-28 pt-10 border-t border-[#e0dbd4] opacity-0 animate-fade-up"
          style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <div className="flex gap-10">
              {[
                { n: "6+", label: "Years in production systems" },
                { n: "5k+", label: "Daily transactions processed" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div className="text-[28px] font-light text-[#1e3a2f] leading-none mb-1">{n}</div>
                  <div className="text-[11px] text-[#4a4a4a] opacity-60 leading-snug">{label}</div>
                </div>
              ))}
            </div>
            {/* Live status indicator */}
            <div className="flex items-center gap-2.5 sm:ml-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a2f] opacity-80" style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }} />
              <span className="text-[11px] font-mono text-[#4a4a4a] opacity-55 tracking-wide">
                Production fintech infrastructure · live
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-0 animate-fade-up"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-[#4a4a4a]/30 to-transparent" />
      </div>
    </section>
  );
}
