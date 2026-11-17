"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-[#1e3a2f] py-24 md:py-36 overflow-hidden relative">
      {/* Ambient brand watermark */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[300px] md:w-[420px] opacity-[0.06] pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <img src="/arlas-stacked-dark.svg" alt="" width={460} height={267} className="absolute top-10 right-0 w-full h-auto" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(to right, #f9f7f4 1px, transparent 1px), linear-gradient(to bottom, #f9f7f4 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-8 h-px bg-[#3d6b52]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#3d6b52]">Contact</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left */}
            <div className="lg:col-span-7">
              <h2 className="text-[40px] sm:text-[52px] md:text-[62px] font-light text-[#f9f7f4] leading-[1.06] mb-7">
                Tell us what your<br />business needs.
              </h2>
              <p className="text-[16px] md:text-[17px] leading-[1.72] text-[#f9f7f4] opacity-65 mb-10 max-w-lg">
                If you have a process that takes too long, systems that don&apos;t talk to each other, or an operational problem that software should be solving — that&apos;s a conversation worth having.
              </p>
              <a
                href="mailto:salmanx550@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#f9f7f4] text-[#1a1a1a] text-[13px] font-medium tracking-[0.12em] uppercase hover:bg-white transition-colors"
              >
                Start a conversation
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Right — contact details */}
            <div className="lg:col-span-5 lg:pt-4">
              <div className="space-y-8 pt-10 lg:pt-0 border-t border-[#f9f7f4]/10 lg:border-0">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#f9f7f4] opacity-35 mb-2">Email</p>
                  <a
                    href="mailto:salmanx550@gmail.com"
                    className="text-[14px] text-[#f9f7f4] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    salmanx550@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#f9f7f4] opacity-35 mb-2">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/salman-muhammad-yahya-743a53141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#f9f7f4] opacity-70 hover:opacity-100 transition-opacity"
                  >
                    linkedin.com/in/salman-muhammad-yahya
                  </a>
                </div>
                <div className="pt-6 border-t border-[#f9f7f4]/10">
                  <p className="text-[13px] text-[#f9f7f4] opacity-40 leading-relaxed">
                    We work with businesses internationally and across Nigeria. If your problem is worth solving, it&apos;s worth a conversation — regardless of where you are.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
