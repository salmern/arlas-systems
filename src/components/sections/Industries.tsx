"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";

const industries = [
  {
    name: "Financial Services",
    sub: "& Fintech",
    insight: "Payment operations, reconciliation and compliance reporting generate high volumes of manual work that can be automated — freeing finance teams for decisions, not data entry.",
    capabilities: ["Payment Infrastructure", "Reconciliation Automation", "Transaction Processing", "Financial Reporting"],
  },
  {
    name: "Real Estate",
    sub: "& Property",
    insight: "Enquiry management, tenant onboarding, lease tracking and maintenance coordination all move through disconnected tools and manual handoffs.",
    capabilities: ["Enquiry & Lead Management", "Tenant Onboarding", "Document Automation", "Platform Integrations"],
  },
  {
    name: "Professional Services",
    sub: "",
    insight: "Firms bill for expertise but lose significant time to proposal writing, client onboarding and administrative workflows that follow the same structure each time.",
    capabilities: ["Proposal Generation", "Client Onboarding", "Lead Research", "Automated Reporting"],
  },
  {
    name: "Retail",
    sub: "& E-commerce",
    insight: "Order fulfilment, inventory synchronisation and customer communications involve constant data movement between platforms that rarely share information automatically.",
    capabilities: ["Order Automation", "Inventory Sync", "Platform Integrations", "Customer Communications"],
  },
  {
    name: "Operations",
    sub: "& Logistics",
    insight: "Shipment tracking, inventory updates and operational reporting require real-time data from multiple systems. Manual coordination can't keep pace at scale.",
    capabilities: ["Shipment Tracking", "Inventory Management", "Operational Dashboards", "Automated Notifications"],
  },
  {
    name: "Healthcare",
    sub: "Administration",
    insight: "Appointment coordination, document processing, referral management and reporting all follow predictable patterns that can be systematised without compromising care quality.",
    capabilities: ["Scheduling Systems", "Document Processing", "Administrative Workflows", "System Integrations"],
  },
];

export default function Industries() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section ref={ref} id="industries" className="bg-[#f0ece6] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f] mb-4">Industries</p>
          <h2 className="font-display text-[36px] md:text-[48px] font-normal text-[#111110] leading-tight max-w-lg">
            Operational problems<br />exist in every industry.
          </h2>
        </div>

        {/* Industry rows */}
        <div>
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`border-t border-[#d8d2cb] transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 70 + 100}ms` }}
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full text-left py-7 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 items-baseline group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e3a2f]"
                aria-expanded={active === i}
              >
                <div className="md:col-span-1">
                  <span className="text-[11px] font-mono text-[#5a5a56] opacity-35">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="md:col-span-5">
                  <span className={`font-display text-[22px] md:text-[26px] font-normal leading-snug transition-colors duration-200 ${active === i ? "text-[#1e3a2f]" : "text-[#111110] group-hover:text-[#1e3a2f]"}`}>
                    {ind.name}
                    {ind.sub && <em className="not-italic text-[#5a5a56] text-[18px] md:text-[20px]"> {ind.sub}</em>}
                  </span>
                </div>
                <div className="md:col-span-5 hidden md:block">
                  <span className={`text-[13px] text-[#5a5a56] leading-snug transition-opacity duration-200 ${active === i ? "opacity-70" : "opacity-0 group-hover:opacity-50"}`}>
                    {ind.insight.split(".")[0] + "."}
                  </span>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <span className="text-[20px] font-light text-[#5a5a56] opacity-40 group-hover:opacity-80 transition-opacity">
                    {active === i ? "−" : "+"}
                  </span>
                </div>
              </button>

              {/* Expanded */}
              {active === i && (
                <div className="pb-8 md:pb-10 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10">
                  <div className="md:col-span-1" />
                  <div className="md:col-span-5">
                    <p className="text-[14px] leading-[1.75] text-[#5a5a56]">{ind.insight}</p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1e3a2f] opacity-60 mb-3">We can help with</p>
                    <div className="flex flex-wrap gap-2">
                      {ind.capabilities.map(cap => (
                        <span key={cap} className="text-[11px] font-mono text-[#5a5a56] border border-[#c4bdb4] px-2.5 py-1">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-[#d8d2cb]" />
        </div>

      </div>
    </section>
  );
}
