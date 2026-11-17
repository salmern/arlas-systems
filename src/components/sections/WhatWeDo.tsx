"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const pillars = [
  {
    number: "01",
    title: "Business Automation",
    headline: "Eliminate the manual work your team shouldn't be doing.",
    body: "We identify the repetitive, manual, error-prone processes inside your business and replace them with systems that run automatically. AI agents that process documents, qualify enquiries, generate reports, and route work. Workflows that move information between systems without anyone touching a keyboard. Automation that runs in the background while your team focuses on work that actually requires them.",
    examples: ["AI document processing", "Automated reporting", "Workflow orchestration", "AI agents for operations", "Lead qualification systems", "Data extraction & routing"],
  },
  {
    number: "02",
    title: "Software Engineering",
    headline: "Custom systems built for how your business actually operates.",
    body: "Off-the-shelf software is built for the average business. If your operations are specific, your competitive edge lies in systems designed around your actual processes. We build internal platforms, operational dashboards, custom APIs, and backend infrastructure that fits your environment — not someone else's template. Engineered to handle real workloads, integrate with your existing tools, and scale as the business grows.",
    examples: ["Internal platforms & tools", "Operational dashboards", "API design & development", "Backend infrastructure", "Data pipelines", "Custom business software"],
  },
  {
    number: "03",
    title: "Systems Integration",
    headline: "Connect the platforms and tools that currently require manual effort to synchronise.",
    body: "Most businesses use ten or more tools that weren't built to talk to each other. Someone is manually copying data, reconciling records, and bridging gaps every day. We design and build the integrations, middleware, and data flows that connect your existing systems — so the information moves automatically, the records stay consistent, and the manual overhead disappears.",
    examples: ["CRM & ERP integrations", "Payment system connections", "Third-party API integrations", "Real-time data sync", "Webhook infrastructure", "Multi-system orchestration"],
  },
];

export default function WhatWeDo() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="what-we-do" className="bg-[#f9f7f4] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div
          ref={headRef}
          className={`mb-16 md:mb-20 transition-all duration-700 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-8 h-px bg-[#1e3a2f]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f]">What We Do</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-[34px] md:text-[48px] font-light text-[#1a1a1a] leading-tight max-w-2xl">
              Three capabilities.<br />One clear purpose.
            </h2>
            <p className="text-[14px] text-[#4a4a4a] max-w-xs leading-relaxed md:text-right opacity-70">
              We don&apos;t sell technology. We solve the operational problems that are costing you time, money, and growth.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <PillarRow key={pillar.number} pillar={pillar} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PillarRow({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`border-t border-[#e0dbd4] py-14 md:py-18 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start`}>

        {/* Left: number + title */}
        <div className={`lg:col-span-4 ${!isEven ? "lg:order-last" : ""}`}>
          <div className="lg:sticky top-28">
            <span className="text-[11px] font-mono text-[#4a4a4a] opacity-35 tracking-wider mb-4 block">{pillar.number}</span>
            <h3 className="text-[26px] md:text-[30px] font-light text-[#1a1a1a] leading-tight mb-4">
              {pillar.title}
            </h3>
            <p className="text-[15px] font-medium text-[#1e3a2f] leading-snug">
              {pillar.headline}
            </p>
          </div>
        </div>

        {/* Right: description + examples */}
        <div className="lg:col-span-8">
          <p className="text-[15px] md:text-[16px] leading-[1.78] text-[#2d2d2d] mb-8">
            {pillar.body}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {pillar.examples.map((ex) => (
              <div
                key={ex}
                className="px-3.5 py-2.5 border border-[#e0dbd4] text-[12px] text-[#4a4a4a] leading-snug"
              >
                {ex}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
