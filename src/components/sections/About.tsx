"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="bg-[#f0ece6] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >

          {/* Left — photo + label */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-[#1e3a2f]" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f]">About</span>
            </div>
            <div className="aspect-[3/4] max-w-[260px] overflow-hidden relative bg-[#dbd5cc]">
              <img
                src="/salman-FDE.jpeg"
                alt="Salman — Founder, Arlas Systems"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent">
                <span className="text-[10px] font-mono text-[#f9f7f4] opacity-80 tracking-wider">Founder</span>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="lg:col-span-8 lg:pt-16">
            <div className="mb-5">
              <span className="text-[12px] font-mono tracking-[0.15em] text-[#4a4a4a] opacity-55 uppercase">
                Founder &amp; Principal Engineer
              </span>
            </div>

            <h2 className="text-[28px] md:text-[36px] font-light text-[#1a1a1a] leading-tight mb-7">
              An independent engineering practice, not a development agency.
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-[16px] md:text-[17px] leading-[1.75] text-[#1a1a1a]">
                Arlas Systems was founded to work on a specific kind of problem: the operational inefficiencies that hold growing businesses back and that software, properly engineered, can eliminate.
              </p>
              <p className="text-[15px] leading-[1.75] text-[#4a4a4a]">
                Most engineering work happens at a distance. Requirements are written, handed over, built, and delivered — without the engineer ever fully understanding how the business actually operates. The result is software that technically works but doesn&apos;t quite fit.
              </p>
              <p className="text-[15px] leading-[1.75] text-[#4a4a4a]">
                We work differently. We enter the business, understand the operation, identify where engineering can create real leverage, and build systems designed around how things actually work — not how they were described in a brief.
              </p>
              <p className="text-[15px] leading-[1.75] text-[#4a4a4a]">
                The practice is led by a senior software engineer with over six years of production experience across fintech infrastructure, AI automation, backend systems, and payment operations. Currently building production fintech infrastructure at Betastack in Nigeria, working on ZainPay and ZainPOS.
              </p>
            </div>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 pt-8 border-t border-[#c8c0b6]">
              {[
                { title: "Understand first", body: "We learn the business before we design the solution. The engineering follows the problem." },
                { title: "Build for production", body: "We build systems that handle real workloads, integrate with real tools, and operate reliably at scale." },
                { title: "Automate deliberately", body: "We automate the processes where it creates genuine value, not everywhere it's technically possible." },
                { title: "Stay accountable", body: "We stay involved after delivery. If a system we built isn't performing, that's our problem to fix." },
              ].map(({ title, body }) => (
                <div key={title} className="border-l-2 border-[#1e3a2f]/20 pl-4">
                  <h4 className="text-[13px] font-medium text-[#1a1a1a] mb-1">{title}</h4>
                  <p className="text-[12px] leading-[1.65] text-[#4a4a4a] opacity-70">{body}</p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-row gap-6">
              <a href="https://github.com/salmern" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.1em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#1e3a2f] hover:border-[#1e3a2f] transition-colors">
                GitHub <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/salman-muhammad-yahya-743a53141/" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.1em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#1e3a2f] hover:border-[#1e3a2f] transition-colors">
                LinkedIn <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
