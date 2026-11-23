"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const steps = [
  { n: "01", title: "Understand the business", body: "We learn how the operation works before recommending anything." },
  { n: "02", title: "Identify the right solution", body: "Not always AI. Sometimes an integration, better software or a redesigned process is the right answer." },
  { n: "03", title: "Build and integrate", body: "We develop the solution and connect it to your existing tools and systems." },
  { n: "04", title: "Deploy and improve", body: "We stay involved after delivery. If something isn't working, that's our problem to fix." },
];

export default function HowWeWork() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="how-we-work" className="bg-[#111110] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#4a7c5f] mb-4">How We Work</p>
          <h2 className="font-display text-[34px] md:text-[46px] font-normal italic text-[#f9f7f4] leading-tight max-w-xl">
            We start with the problem,<br />not the technology.
          </h2>
        </div>

        {/* Steps */}
        <div>
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`border-t border-[#2a2a28] py-7 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 90 + 150}ms` }}
            >
              <div className="md:col-span-1">
                <span className="text-[11px] font-mono text-[#f9f7f4] opacity-20 tracking-wider">{s.n}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-[16px] md:text-[18px] font-normal text-[#f9f7f4]">{s.title}</h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-[13px] md:text-[14px] leading-[1.7] text-[#f9f7f4] opacity-45">{s.body}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-[#2a2a28]" />
        </div>

      </div>
    </section>
  );
}
