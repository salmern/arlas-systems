"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-[#1e3a2f] py-24 md:py-36 overflow-hidden relative">
      {/* Large ambient brand mark — top right, clipped to section */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[280px] md:w-[380px] opacity-[0.07] pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/arlas-stacked-dark.svg"
          alt=""
          width={460}
          height={267}
          className="absolute top-8 right-0 w-full h-auto"
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f9f7f4 1px, transparent 1px), linear-gradient(to bottom, #f9f7f4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-6 h-px bg-[#3d6b52]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#3d6b52]">
              Contact
            </span>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-light text-[#f9f7f4] leading-[1.06] mb-8">
              Have a problem
              <br />
              worth solving?
            </h2>

            <p className="text-[17px] md:text-[18px] leading-[1.7] text-[#f9f7f4] opacity-70 mb-12 max-w-lg">
              Tell me what you&apos;re building or what needs fixing. If I can
              help, we&apos;ll talk.
            </p>

            {/* Primary CTA */}
            <a
              href="mailto:salmanx550@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#f9f7f4] text-[#1a1a1a] text-[13px] font-medium tracking-[0.12em] uppercase hover:bg-white transition-colors duration-200 mb-12"
            >
              <Mail size={15} />
              Send Me an Email
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Contact details */}
            <div className="pt-10 border-t border-[#f9f7f4]/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#f9f7f4] opacity-40 mb-2">
                  Email
                </p>
                <a
                  href="mailto:salmanx550@gmail.com"
                  className="text-[13px] font-mono text-[#f9f7f4] opacity-60 hover:opacity-100 transition-opacity"
                >
                  salmanx550@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#f9f7f4] opacity-40 mb-2">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/salman-muhammad-yahya-743a53141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-mono text-[#f9f7f4] opacity-60 hover:opacity-100 transition-opacity break-all"
                >
                  linkedin.com/in/salman-muhammad-yahya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
