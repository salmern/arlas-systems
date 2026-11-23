"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const problems = [
  {
    n: "01",
    title: "Too much manual work.",
    body: "Data entry, status updates, file transfers — work that consumes skilled people's time and doesn't need to exist.",
  },
  {
    n: "02",
    title: "Disconnected systems.",
    body: "Your platforms each hold part of the same picture. Someone is manually stitching them together every day.",
  },
  {
    n: "03",
    title: "Processes that don't scale.",
    body: "What worked at twenty customers breaks at two hundred. Manual workflows were never designed to grow.",
  },
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#111110] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div className={`mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#4a7c5f] mb-5">The Problem</p>
          <p className="text-[22px] md:text-[28px] font-light text-[#f9f7f4] leading-snug max-w-lg opacity-50">
            Most businesses are running on more manual work than they realise.
          </p>
        </div>

        <div className="space-y-0">
          {problems.map((p, i) => (
            <div
              key={p.n}
              className={`group border-t border-[#2a2a28] py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 100 + 150}ms` }}
            >
              <div className="md:col-span-1">
                <span className="text-[11px] font-mono text-[#f9f7f4] opacity-20 tracking-wider">{p.n}</span>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-[20px] md:text-[24px] font-display font-normal text-[#f9f7f4] leading-snug group-hover:text-[#4a7c5f] transition-colors duration-200">
                  {p.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[14px] leading-[1.7] text-[#f9f7f4] opacity-45">{p.body}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-[#2a2a28]" />
        </div>

      </div>
    </section>
  );
}
