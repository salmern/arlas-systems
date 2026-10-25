"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="bg-[#f0ece6] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left — photo */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-6 h-px bg-[#1e3a2f]" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#1e3a2f]">
                About
              </span>
            </div>

            <div className="aspect-[3/4] max-w-[260px] overflow-hidden relative bg-[#dbd5cc]">
              <img
                src="/salman-FDE.jpeg"
                alt="Salman — Founder, Arlas Systems"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent">
                <span className="text-[10px] font-mono text-[#f9f7f4] opacity-70 tracking-wider">
                  Founder
                </span>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="lg:col-span-8 lg:pt-16">
            <div className="mb-4">
              <span className="text-[12px] font-mono tracking-[0.15em] text-[#4a4a4a] opacity-60 uppercase">
                Founder &amp; Forward Deployed Engineer
              </span>
            </div>

            <div className="space-y-4 mb-10">
              <p className="text-[17px] md:text-[18px] leading-[1.7] text-[#1a1a1a]">
                I&apos;m a senior software engineer with over six years of experience
                building production systems, with a background in backend engineering,
                APIs, and fintech.
              </p>
              <p className="text-[16px] leading-[1.7] text-[#4a4a4a]">
                I started Arlas Systems to work more directly with businesses,
                understand their technical challenges, and build solutions around
                their actual needs.
              </p>
            </div>

            {/* Capabilities — short list */}
            <div className="grid grid-cols-2 gap-3 mb-10 pt-8 border-t border-[#c8c0b6]">
              {[
                "Backend Engineering",
                "Fintech Systems",
                "Full-Stack Development",
                "AI Automation",
                "System Integrations",
                "Production Debugging",
                "Rust · Node.js · Python",
                "n8n · Playwright · Docker",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span
                    className="w-1 h-1 rounded-full bg-[#1e3a2f] opacity-50 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[13px] text-[#4a4a4a]">{skill}</span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-row gap-6">
              <a
                href="https://github.com/salmern"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.1em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#1e3a2f] hover:border-[#1e3a2f] transition-colors"
              >
                GitHub
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/salman-muhammad-yahya-743a53141/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.1em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#1e3a2f] hover:border-[#1e3a2f] transition-colors"
              >
                LinkedIn
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
