"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function CurrentWork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="current-work"
      className="bg-[#f0ece6] border-t border-[#e0dbd4] py-14 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">

            {/* Label + heading */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px bg-[#1e3a2f]" aria-hidden="true" />
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#1e3a2f]">
                  Live Production Systems
                </span>
              </div>
              <h2 className="text-[26px] md:text-[30px] font-light text-[#1a1a1a] leading-tight mb-3">
                Payment Gateway &amp; Distributed POS Infrastructure
              </h2>
              <p className="text-[12px] font-mono text-[#4a4a4a] opacity-50 mb-5">
                Live Production · Fintech Infrastructure · Nigeria
              </p>
              <p className="text-[14px] leading-[1.72] text-[#4a4a4a] mb-6 max-w-sm">
                Architected and scaled the core payment infrastructure for a
                high-volume Nigerian fintech. Engineered the backend services,
                API integrations, and real-time transaction processing for a
                live payment gateway and a distributed point-of-sale network.
                Designed the system to handle 5,000+ daily transactions,
                ensuring 99.9% uptime and seamless merchant operations across
                multiple locations.
              </p>
              <div className="flex gap-5">
                <a
                  href="https://zainpay.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.12em] uppercase text-[#1e3a2f] border-b border-[#1e3a2f]/40 pb-0.5 hover:border-[#1e3a2f] transition-colors"
                >
                  ZainPay
                  <ArrowUpRight
                    size={10}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
                <a
                  href="https://zainpos.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.12em] uppercase text-[#1e3a2f] border-b border-[#1e3a2f]/40 pb-0.5 hover:border-[#1e3a2f] transition-colors"
                >
                  ZainPOS
                  <ArrowUpRight
                    size={10}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Divider (desktop only) */}
            <div className="hidden md:block md:col-span-1 self-stretch">
              <div className="h-full w-px bg-[#e0dbd4] mx-auto" aria-hidden="true" />
            </div>

            {/* What I work on */}
            <div className="md:col-span-7">
              <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-[#4a4a4a] opacity-50 mb-5">
                Areas of work
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Payment Gateway",
                    detail: "Backend services and API integrations processing high-volume, real-time financial transactions.",
                  },
                  {
                    title: "POS Systems",
                    detail: "Distributed payment operations and software infrastructure for merchant terminals across Nigeria.",
                  },
                  {
                    title: "Fintech Infrastructure",
                    detail: "Webhook processing, real-time settlement notifications, and fault-tolerant account update pipelines.",
                  },
                  {
                    title: "Production Engineering",
                    detail: "Reliability engineering, debugging, and maintaining distributed systems at production scale.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-[#e0dbd4] pl-4">
                    <h4 className="text-[13px] font-medium text-[#1a1a1a] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[12px] leading-[1.65] text-[#4a4a4a] opacity-70">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mt-7 pt-6 border-t border-[#d8d2cb]">
                {[
                  "Rust",
                  "Node.js",
                  "TypeScript",
                  "PostgreSQL",
                  "REST APIs",
                  "Webhooks",
                  "Payment Processing",
                  "POS Systems",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[10px] font-mono text-[#4a4a4a] bg-[#f9f7f4] border border-[#e0dbd4]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
