"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const capabilities = [
  {
    n: "01",
    title: "Business Automation",
    value: "Replace manual, repetitive processes with intelligent workflows. AI agents, document processing, automated reporting and operational systems that run without human intervention.",
    tags: ["AI Agents", "Workflow Automation", "Document Processing", "Operational Systems"],
  },
  {
    n: "02",
    title: "Software & Systems",
    value: "Custom platforms, internal tools, backend services and business applications built around your specific operational needs — not generic templates.",
    tags: ["Custom Platforms", "Internal Tools", "Backend Systems", "APIs & Integrations"],
  },
  {
    n: "03",
    title: "Systems Integration",
    value: "Connect the tools and platforms that hold different parts of your business. Eliminate the manual work of keeping systems in sync.",
    tags: ["API Integrations", "Data Pipelines", "Real-time Sync", "Middleware"],
  },
];

export default function WhatWeDo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="what-we-do" className="bg-[#f9f7f4] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f] mb-4">What We Do</p>
            <h2 className="font-display text-[36px] md:text-[48px] font-normal text-[#111110] leading-tight">
              Three capabilities.<br />One purpose.
            </h2>
          </div>
          <p className="text-[13px] text-[#5a5a56] max-w-xs leading-relaxed md:text-right">
            We don't sell technology. We solve the operational problems costing you time and growth.
          </p>
        </div>

        {/* Capability rows */}
        <div>
          {capabilities.map((c, i) => (
            <CapabilityRow key={c.n} c={c} index={i} parentInView={inView} />
          ))}
          <div className="border-t border-[#e2ddd7]" />
        </div>

      </div>
    </section>
  );
}

function CapabilityRow({ c, index, parentInView }: { c: typeof capabilities[0]; index: number; parentInView: boolean }) {
  return (
    <div
      className={`border-t border-[#e2ddd7] py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 group transition-all duration-700 ${parentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${index * 100 + 100}ms` }}
    >
      {/* Number + title */}
      <div className="md:col-span-4">
        <span className="text-[11px] font-mono text-[#5a5a56] opacity-40 tracking-wider block mb-3">{c.n}</span>
        <h3 className="font-display text-[26px] md:text-[30px] font-normal text-[#111110] leading-snug group-hover:text-[#1e3a2f] transition-colors duration-200">
          {c.title}
        </h3>
      </div>

      {/* Value description */}
      <div className="md:col-span-5">
        <p className="text-[15px] leading-[1.75] text-[#5a5a56]">{c.value}</p>
      </div>

      {/* Tags */}
      <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end md:items-start md:pt-0.5">
        {c.tags.map(tag => (
          <span key={tag} className="text-[10px] font-mono text-[#5a5a56] tracking-wide border border-[#e2ddd7] px-2.5 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
