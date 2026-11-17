"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const problems = [
  {
    number: "01",
    title: "Manual work that should not exist",
    body: "Data entry, report compilation, status updates, file transfers between systems — work that consumes skilled people's time and produces errors that then require more time to fix.",
  },
  {
    number: "02",
    title: "Systems that don't talk to each other",
    body: "Your CRM, accounting platform, logistics software, and operations tools all hold different pieces of the same picture. Someone is manually stitching them together every day.",
  },
  {
    number: "03",
    title: "Processes that break when they scale",
    body: "What worked at twenty customers starts to crack at two hundred. The manual checks, the spreadsheet trackers, the inbox workflows — they were never designed to grow.",
  },
  {
    number: "04",
    title: "Decisions made without the right data",
    body: "The information exists somewhere in your systems. But extracting it, cleaning it, and presenting it in a form that supports a good decision takes longer than the decision itself.",
  },
];

export default function Problem() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="problem" className="bg-[#1a1a1a] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div
          ref={headRef}
          className={`mb-16 md:mb-20 max-w-3xl transition-all duration-700 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-8 h-px bg-[#3d6b52]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#3d6b52]">The Problem</span>
          </div>
          <h2 className="text-[34px] md:text-[46px] font-light text-[#f9f7f4] leading-[1.1]">
            Most businesses are running on more manual work than they realise.
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.7] text-[#f9f7f4] opacity-55 max-w-2xl">
            The tools are there. The data is there. But the systems that should connect them, automate the repetitive steps, and surface the right information at the right time — those haven't been built yet.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-[#2d2d2d]" style={{ background: "#2d2d2d" }}>
          {problems.map((p, i) => (
            <ProblemCard key={p.number} problem={p} index={i} />
          ))}
        </div>

        {/* Bridge */}
        <div
          className={`mt-14 flex flex-col sm:flex-row sm:items-center gap-6 transition-all duration-700 delay-300 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[15px] text-[#f9f7f4] opacity-50 max-w-lg leading-relaxed">
            These aren&apos;t technology problems. They&apos;re operational problems that technology can solve — if the right systems are engineered for how your business actually works.
          </p>
          <a
            href="#what-we-do"
            onClick={(e) => { e.preventDefault(); document.querySelector("#what-we-do")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex-shrink-0 inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.12em] uppercase text-[#f9f7f4] border-b border-[#f9f7f4]/30 pb-0.5 hover:border-[#f9f7f4] transition-colors w-fit"
          >
            What we do about it →
          </a>
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
      className={`bg-[#1a1a1a] p-8 md:p-10 transition-all duration-600 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="text-[11px] font-mono text-[#f9f7f4] opacity-20 tracking-wider mb-5 block">{problem.number}</span>
      <h3 className="text-[18px] md:text-[20px] font-normal text-[#f9f7f4] leading-snug mb-4">
        {problem.title}
      </h3>
      <p className="text-[14px] leading-[1.72] text-[#f9f7f4] opacity-50">
        {problem.body}
      </p>
    </div>
  );
}
