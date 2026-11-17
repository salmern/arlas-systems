"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Understand the operation",
    body: "Before we write a line of code, we learn how the business works. Where the work comes from, how it moves through the organisation, where it gets stuck, and what that costs.",
  },
  {
    number: "02",
    title: "Identify the leverage points",
    body: "Not every inefficiency is worth engineering away. We identify the processes where automation or integration will produce the most meaningful improvement — and where it won't.",
  },
  {
    number: "03",
    title: "Design the right solution",
    body: "We propose a specific, scoped solution: what gets built, how it integrates with existing systems, what it replaces, and what the business will be able to do differently when it's running.",
  },
  {
    number: "04",
    title: "Engineer and integrate",
    body: "We build the system — backend services, automation workflows, integrations, or platforms — and connect it to the tools and data sources your business already uses.",
  },
  {
    number: "05",
    title: "Deploy and improve",
    body: "We handle deployment, monitor the system in production, and continue refining it based on how the business actually uses it. We don't hand over and disappear.",
  },
];

export default function HowWeWork() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="how-we-work" className="bg-[#1a1a1a] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div
          ref={headRef}
          className={`mb-16 md:mb-20 transition-all duration-700 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-8 h-px bg-[#3d6b52]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#3d6b52]">How We Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-[34px] md:text-[48px] font-light text-[#f9f7f4] leading-tight max-w-xl">
              We work inside the business,<br />not at arm&apos;s length from it.
            </h2>
            <p className="text-[14px] text-[#f9f7f4] opacity-45 max-w-xs leading-relaxed md:text-right">
              The difference between a system that works and one that doesn&apos;t is usually how well it was understood before it was built.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <StepRow key={step.number} step={step} index={i} />
          ))}
          <div className="border-t border-[#2d2d2d]" />
        </div>

      </div>
    </section>
  );
}

function StepRow({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className={`group border-t border-[#2d2d2d] py-8 md:py-10 transition-all duration-600 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10">
        <div className="md:col-span-1">
          <span className="text-[11px] font-mono text-[#f9f7f4] opacity-25 tracking-wider">{step.number}</span>
        </div>
        <div className="md:col-span-4">
          <h3 className="text-[17px] md:text-[19px] font-normal text-[#f9f7f4] leading-snug group-hover:text-[#6FA88B] transition-colors duration-200">
            {step.title}
          </h3>
        </div>
        <div className="md:col-span-7">
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-[#f9f7f4] opacity-55">
            {step.body}
          </p>
        </div>
      </div>
    </div>
  );
}
