"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = h1Ref.current;
    if (!el) return;
    el.style.opacity = "0";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }, 80);
    return () => clearTimeout(t);
  }, []);

  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-[#f9f7f4] overflow-hidden">

      {/* Very subtle texture line */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent 60%, rgba(30,58,47,0.03) 100%)",
        }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full pb-16 md:pb-24 pt-28 md:pt-0 md:flex md:flex-col md:justify-end md:min-h-screen">

        {/* Top label — appears at header level */}
        <div className="hidden md:block absolute top-0 left-6 md:left-10 lg:left-16 pt-16 md:pt-24">
          <div className="flex items-center gap-3"
            style={{ opacity: 0, animation: "fadeUp 0.6s 0.1s cubic-bezier(0.16,1,0.3,1) forwards" }}>
            <span className="rule" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f]">
              Business Technology & Automation
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-10 md:mb-12">
          <h1
            ref={h1Ref}
            className="font-display text-[58px] sm:text-[72px] md:text-[90px] lg:text-[108px] xl:text-[124px] font-normal leading-[0.95] tracking-tight text-[#111110]"
            style={{ transform: "translateY(14px)" }}
          >
            Better systems.<br />
            <em className="not-italic text-[#1e3a2f]">Smarter</em><br />
            operations.
          </h1>
        </div>

        {/* Bottom row: copy + CTAs */}
        <div className="border-t border-[#e2ddd7] pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end"
          style={{ opacity: 0, animation: "fadeUp 0.7s 0.5s cubic-bezier(0.16,1,0.3,1) forwards" }}>

          <div className="md:col-span-6">
            <p className="text-[16px] md:text-[17px] leading-[1.65] text-[#5a5a56] max-w-md">
              Arlas Systems helps businesses simplify operations through software,
              AI, automation and connected systems.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:items-end lg:justify-end">
            <a href="#what-we-do"
              onClick={e => { e.preventDefault(); go("#what-we-do"); }}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#111110] text-[#f9f7f4] text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-[#1e3a2f] transition-colors">
              How We Work
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#contact"
              onClick={e => { e.preventDefault(); go("#contact"); }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#111110]/25 text-[#111110] text-[12px] font-medium tracking-[0.1em] uppercase hover:border-[#111110] transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
