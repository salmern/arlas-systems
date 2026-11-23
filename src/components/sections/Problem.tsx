"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const problems = [
  {
    number: "01",
    title: "Too much manual work",
    body: "Data entry, status updates, file transfers, report compilation — work that takes skilled people's time, creates errors and doesn't need to exist.",
  },
  {
    number: "02",
    title: "Disconnected systems",
    body: "Your CRM, finance platform, operations tools and logistics software each hold part of the same picture. Someone is manually stitching them together every day.",
  },
  {
    number: "03",
    title: "Processes that don't scale",
    body: "What worked at twenty customers breaks at two hundred. The spreadsheet trackers, inbox workflows and manual checks were never designed to grow.",
  },
];

export default function Problem() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="problem" className="bg-[#1a1a1a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div
          ref={headRef}
          className={`mb-14 max-w-2xl transition-all duration-700 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-8 h-px bg-[#3d6b52]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#3d6b52]">The Problem</span>
          </div>
          <h2 className="text-[32px] md:text-[44px] font-light text-[#f9f7f4] leading-[1.1]">
            Most businesses are running on more manual work than they realise.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-[#2d2d2d]" style={{ background: "#2d2d2d" }}>
          {problems.map((p, i) => (
            <ProblemCard key={p.number} problem={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProblemCard({ problem, index }: { problem: typeof problems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className={`bg-[#1a1a1a] p-7 md:p-9 transition-all duration-600 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="text-[11px] font-mono text-[#f9f7f4] opacity-20 tracking-wider mb-5 block">{problem.number}</span>
      <h3 className="text-[17px] md:text-[19px] font-normal text-[#f9f7f4] leading-snug mb-3">
        {problem.title}
      </h3>
      <p className="text-[13px] leading-[1.7] text-[#f9f7f4] opacity-45">
        {problem.body}
      </p>
    </div>
  );
}
