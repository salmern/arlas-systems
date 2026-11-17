"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const industries = [
  {
    name: "Financial Services & Fintech",
    problem: "Transaction processing, reconciliation, compliance reporting, and payment operations generate enormous volumes of repetitive work. Most of it can be automated.",
    examples: ["Payment gateway infrastructure", "Reconciliation automation", "Transaction monitoring", "Financial reporting pipelines", "Payment integration engineering"],
  },
  {
    name: "Professional Services",
    problem: "Firms bill for expertise but lose hours each week to proposal writing, client onboarding, document generation, and administrative workflows that follow the same pattern every time.",
    examples: ["Proposal & document automation", "Client onboarding systems", "Lead research & qualification", "Internal knowledge platforms", "Automated billing & reporting"],
  },
  {
    name: "Real Estate & Property",
    problem: "Property enquiries, tenant onboarding, maintenance workflows, lease tracking, and reporting all move through disconnected tools and manual handoffs that slow down the entire operation.",
    examples: ["Enquiry management systems", "Tenant onboarding automation", "Property management platforms", "Document processing", "CRM & listing integrations"],
  },
  {
    name: "Operations & Logistics",
    problem: "Order tracking, shipment coordination, inventory synchronisation, and operational reporting require real-time data from multiple systems. Manual coordination can't keep pace.",
    examples: ["Shipment & order tracking", "Inventory synchronisation", "Operational dashboards", "Automated notifications", "Logistics system integrations"],
  },
  {
    name: "Retail & E-commerce",
    problem: "Order fulfilment, inventory updates, customer communications, and supplier coordination involve constant data movement between platforms that rarely share information automatically.",
    examples: ["Order processing automation", "Inventory management systems", "Customer support automation", "Platform integrations", "Sales & performance reporting"],
  },
  {
    name: "Healthcare Administration",
    problem: "Administrative teams spend significant time on appointment coordination, document processing, referral management, and reporting — work that follows predictable patterns and can be systematised.",
    examples: ["Appointment & scheduling systems", "Document processing automation", "Administrative workflow tools", "Operational reporting", "System integrations"],
  },
];

export default function Industries() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="industries" className="bg-[#f0ece6] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div
          ref={headRef}
          className={`mb-16 md:mb-20 transition-all duration-700 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-8 h-px bg-[#1e3a2f]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f]">Industries</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-[34px] md:text-[48px] font-light text-[#1a1a1a] leading-tight max-w-xl">
              Operational problems exist in every industry.
            </h2>
            <p className="text-[14px] text-[#4a4a4a] max-w-xs leading-relaxed md:text-right opacity-70">
              The engineering problems differ. The underlying pattern — manual work where systems should run — is consistent.
            </p>
          </div>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-[#d8d2cb]" style={{ background: "#d8d2cb" }}>
          {industries.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div
          className={`mt-10 transition-all duration-700 delay-500 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[13px] text-[#4a4a4a] opacity-55 max-w-lg leading-relaxed">
            We work with businesses across other sectors where operational complexity and engineering capability intersect. If your industry isn&apos;t listed, the conversation is still worth having.
          </p>
        </div>

      </div>
    </section>
  );
}

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className={`group bg-[#f0ece6] hover:bg-[#e8e1d8] transition-colors duration-200 p-7 md:p-8 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{
        transitionDelay: `${index * 60}ms`,
        transitionProperty: index === 0 ? "background-color" : "background-color, opacity, transform",
        transitionDuration: index === 0 ? "200ms" : "200ms, 600ms, 600ms",
      }}
    >
      <h3 className="text-[16px] font-medium text-[#1a1a1a] leading-snug mb-3">
        {industry.name}
      </h3>
      <p className="text-[13px] leading-[1.72] text-[#4a4a4a] mb-5 opacity-80">
        {industry.problem}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {industry.examples.map((ex) => (
          <span
            key={ex}
            className="text-[10px] font-mono text-[#4a4a4a] opacity-60 tracking-wide"
          >
            {ex}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
