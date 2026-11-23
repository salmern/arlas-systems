"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const principles = [
  { n: "01", title: "Understand before building.", body: "The problem always comes before the solution." },
  { n: "02", title: "Right solution, not latest technology.", body: "AI when it helps. Integration, automation or better software when that's what's needed." },
  { n: "03", title: "Built for real operations.", body: "Every solution is designed around actual business needs — not demonstrations." },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="about" className="bg-[#f9f7f4] overflow-hidden">

      {/* Pull quote — full width editorial */}
      <div className="bg-[#111110] py-16 md:py-24">
        <div className={`max-w-7xl mx-auto px-6 md:px-10 lg:px-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#4a7c5f] mb-8">About Arlas Systems</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[32px] md:text-[46px] lg:text-[52px] italic font-normal text-[#f9f7f4] leading-[1.1]">
                &ldquo;Technology should make<br />running a business easier.&rdquo;
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="text-[14px] md:text-[15px] leading-[1.75] text-[#f9f7f4] opacity-50">
                Arlas Systems helps businesses simplify how they operate — by building the software, automation and integrations that connect their tools and remove unnecessary manual work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="bg-[#f0ece6] py-14 md:py-20 border-t border-[#e2ddd7]">
        <div className={`max-w-7xl mx-auto px-6 md:px-10 lg:px-16 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f] mb-10">Our principles</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {principles.map((p, i) => (
              <div key={p.n}
                className={`py-7 md:py-0 md:px-8 border-b md:border-b-0 md:border-r border-[#d8d2cb] last:border-0 ${i === 0 ? "md:pl-0" : ""}`}>
                <span className="text-[11px] font-mono text-[#5a5a56] opacity-30 tracking-wider block mb-3">{p.n}</span>
                <h3 className="text-[15px] font-medium text-[#111110] mb-1.5 leading-snug">{p.title}</h3>
                <p className="text-[13px] leading-[1.65] text-[#5a5a56]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
