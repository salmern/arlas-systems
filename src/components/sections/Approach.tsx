"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "I learn about the business and the actual problem before writing code. What is breaking, who is affected, and what does a good outcome look like?",
  },
  {
    number: "02",
    title: "Plan",
    description: "I choose the right approach, design the data model, and agree on scope. No surprises later because the thinking happened upfront.",
  },
  {
    number: "03",
    title: "Build",
    description: "I write the code, integrate the systems, and test everything. Problems get flagged early — not on delivery day.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "I ship, handle deployment, and make sure the team understands what was built. The work is done when it is running, not when the PR is merged.",
  },
];

export default function Approach() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <section id="approach" className="bg-[#f9f7f4] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div
          ref={headingRef}
          className={`mb-20 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-[#1e3a2f]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#1e3a2f]">
              How I Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[36px] md:text-[48px] font-light text-[#1a1a1a] leading-tight">
              A clear process.
              <br />
              No surprises.
            </h2>
            <p className="text-[14px] text-[#4a4a4a] max-w-xs leading-relaxed">
              Every project follows the same four steps. Simple, but it keeps
              things on track.
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className={`relative border-l border-[#e0dbd4] first:border-l-0 sm:first:border-l sm:odd:border-l-0 lg:first:border-l-0 lg:border-l px-8 pb-12 pt-0 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Top line accent */}
      <div className="mb-8">
        <div className="w-8 h-px bg-[#1e3a2f] mb-6" />
        <span className="text-[48px] font-light text-[#1a1a1a] opacity-[0.08] leading-none select-none">
          {step.number}
        </span>
      </div>

      <h3 className="text-[22px] font-light text-[#1a1a1a] mb-4 leading-snug">
        {step.title}
      </h3>

      <p className="text-[14px] leading-[1.7] text-[#4a4a4a]">
        {step.description}
      </p>
    </div>
  );
}
