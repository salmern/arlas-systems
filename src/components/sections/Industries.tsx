"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";

const G = "#1e3a2f";
const G2 = "#3d6b52";
const BORDER = "rgba(30,58,47,0.15)";
const BG = "rgba(30,58,47,0.06)";
const DIM = "rgba(26,26,26,0.4)";
const TEXT = "#1a1a1a";

type WorkflowStep = { label: string; type: "manual" | "auto" | "system" };

function WorkflowDiagram({ before, after, metric }: {
  before: WorkflowStep[];
  after: WorkflowStep[];
  metric: string;
}) {
  const stepColor = (type: WorkflowStep["type"]) => {
    if (type === "auto") return { border: `1.5px solid ${G}`, bg: BG, text: G };
    if (type === "system") return { border: `1px solid ${BORDER}`, bg: "transparent", text: G2 };
    return { border: `1px solid rgba(0,0,0,0.12)`, bg: "transparent", text: DIM };
  };

  return (
    <div className="p-6 md:p-8">
      <div className="space-y-5">
        {/* Before */}
        <div>
          <div className="text-[8px] font-mono tracking-[0.15em] uppercase mb-2.5" style={{ color: DIM }}>Current state — manual</div>
          <div className="flex items-center gap-1 flex-wrap">
            {before.map((step, i) => {
              const c = stepColor(step.type);
              return (
                <div key={i} className="flex items-center">
                  <div className="px-2.5 py-1.5 text-center" style={{ border: c.border, background: c.bg, borderRadius: 3 }}>
                    <span className="font-mono text-[9px] leading-tight block" style={{ color: c.text }}>{step.label}</span>
                  </div>
                  {i < before.length - 1 && (
                    <div className="flex items-center px-0.5">
                      <div className="h-px w-4" style={{ background: "rgba(0,0,0,0.15)" }} />
                      <div style={{ width: 0, height: 0, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "4px solid rgba(0,0,0,0.15)" }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* After */}
        <div>
          <div className="text-[8px] font-mono tracking-[0.15em] uppercase mb-2.5" style={{ color: G2 }}>With Arlas — automated</div>
          <div className="flex items-center gap-1 flex-wrap">
            {after.map((step, i) => {
              const c = stepColor(step.type);
              return (
                <div key={i} className="flex items-center">
                  <div className="px-2.5 py-1.5 text-center" style={{ border: c.border, background: c.bg, borderRadius: 3 }}>
                    <span className="font-mono text-[9px] leading-tight block" style={{ color: c.text }}>{step.label}</span>
                  </div>
                  {i < after.length - 1 && (
                    <div className="flex items-center px-0.5">
                      <div className="h-px w-4" style={{ background: `${G}60` }} />
                      <div style={{ width: 0, height: 0, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: `4px solid ${G}60` }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Metric */}
        <div className="pt-1">
          <span className="font-mono text-[9px] px-2.5 py-1 inline-block" style={{ border: `1px solid ${BORDER}`, color: G }}>
            {metric}
          </span>
        </div>
      </div>
    </div>
  );
}

const industries = [
  {
    id: "fintech",
    name: "Financial Services",
    sub: "& Fintech",
    problem: "Transaction processing, reconciliation, and compliance reporting generate enormous manual overhead. Payment operations teams spend hours each day on work that follows deterministic rules.",
    capabilities: ["Payment gateway infrastructure", "Reconciliation automation", "Transaction monitoring pipelines", "Financial reporting systems", "Compliance workflow automation"],
    workflow: {
      before: [
        { label: "Transaction hits", type: "system" },
        { label: "Staff checks", type: "manual" },
        { label: "Manual reconcile", type: "manual" },
        { label: "Report compiled", type: "manual" },
        { label: "Exceptions logged", type: "manual" },
      ] as WorkflowStep[],
      after: [
        { label: "Transaction hits", type: "system" },
        { label: "Auto-reconcile", type: "auto" },
        { label: "Rules engine", type: "auto" },
        { label: "Report generated", type: "auto" },
        { label: "Exceptions flagged", type: "auto" },
      ] as WorkflowStep[],
      metric: "Reconciliation time: hours → seconds · staff freed for exceptions only",
    },
  },
  {
    id: "realestate",
    name: "Real Estate",
    sub: "& Property",
    problem: "Property enquiries, tenant onboarding, maintenance coordination, and lease tracking all move through disconnected tools and manual handoffs. Each touchpoint requires a human to move information from one place to another.",
    capabilities: ["Enquiry management & qualification", "Tenant onboarding automation", "Maintenance request workflows", "Document generation & tracking", "CRM and listing platform integrations"],
    workflow: {
      before: [
        { label: "Enquiry arrives", type: "system" },
        { label: "Staff qualifies", type: "manual" },
        { label: "CRM updated", type: "manual" },
        { label: "Viewing booked", type: "manual" },
        { label: "Follow-up sent", type: "manual" },
      ] as WorkflowStep[],
      after: [
        { label: "Enquiry arrives", type: "system" },
        { label: "AI qualifies", type: "auto" },
        { label: "CRM updated", type: "auto" },
        { label: "Viewing offered", type: "auto" },
        { label: "Staff reviews", type: "system" },
      ] as WorkflowStep[],
      metric: "Response time: hours → minutes · staff handles only qualified leads",
    },
  },
  {
    id: "professional",
    name: "Professional",
    sub: "Services",
    problem: "Professional service firms bill for expertise but lose significant time to proposal writing, client onboarding, document generation, and administrative workflows that follow the same structure every time.",
    capabilities: ["Proposal & document automation", "Client onboarding systems", "Lead research & qualification", "Internal knowledge platforms", "Automated billing & reporting"],
    workflow: {
      before: [
        { label: "Discovery call", type: "system" },
        { label: "Notes taken", type: "manual" },
        { label: "Proposal drafted", type: "manual" },
        { label: "Review loop", type: "manual" },
        { label: "Sent to client", type: "manual" },
      ] as WorkflowStep[],
      after: [
        { label: "Discovery call", type: "system" },
        { label: "Structured input", type: "system" },
        { label: "AI drafts", type: "auto" },
        { label: "Human reviews", type: "system" },
        { label: "Sent to client", type: "auto" },
      ] as WorkflowStep[],
      metric: "Proposal time: 4 hours → 30 minutes · consistent quality · full audit trail",
    },
  },
  {
    id: "retail",
    name: "Retail",
    sub: "& E-commerce",
    problem: "Order fulfilment, inventory synchronisation, supplier communication, and customer support all involve constant data movement between platforms that rarely share information automatically.",
    capabilities: ["Order processing automation", "Inventory sync & management", "Customer support automation", "Platform integrations", "Sales & performance reporting"],
    workflow: {
      before: [
        { label: "Order placed", type: "system" },
        { label: "Inventory checked", type: "manual" },
        { label: "Supplier notified", type: "manual" },
        { label: "Logistics booked", type: "manual" },
        { label: "Customer updated", type: "manual" },
      ] as WorkflowStep[],
      after: [
        { label: "Order placed", type: "system" },
        { label: "Inventory synced", type: "auto" },
        { label: "Supplier notified", type: "auto" },
        { label: "Logistics triggered", type: "auto" },
        { label: "Customer updated", type: "auto" },
      ] as WorkflowStep[],
      metric: "Order processing: manual touchpoints eliminated · real-time inventory accuracy",
    },
  },
  {
    id: "operations",
    name: "Operations",
    sub: "& Logistics",
    problem: "Shipment tracking, inventory updates, and operational reporting require real-time data from multiple systems. Manual coordination across these systems cannot scale.",
    capabilities: ["Shipment & order tracking", "Inventory synchronisation", "Operational dashboards", "Automated status notifications", "Multi-system data pipelines"],
    workflow: {
      before: [
        { label: "Shipment dispatched", type: "system" },
        { label: "Staff tracks", type: "manual" },
        { label: "Updates logged", type: "manual" },
        { label: "Client called", type: "manual" },
        { label: "Report compiled", type: "manual" },
      ] as WorkflowStep[],
      after: [
        { label: "Shipment dispatched", type: "system" },
        { label: "Live tracking", type: "auto" },
        { label: "Events captured", type: "auto" },
        { label: "Client notified", type: "auto" },
        { label: "Dashboard updated", type: "auto" },
      ] as WorkflowStep[],
      metric: "Zero manual status updates · full visibility · staff focused on exceptions",
    },
  },
];

export default function Industries() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  const ind = industries[active];

  return (
    <section id="industries" className="bg-[#1a1a1a] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div
          ref={headRef}
          className={`mb-14 md:mb-18 transition-all duration-700 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-8 h-px bg-[#3d6b52]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#3d6b52]">Industries</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-[34px] md:text-[48px] font-light text-[#f9f7f4] leading-tight max-w-xl">
              Every industry has processes<br />that shouldn&apos;t be manual.
            </h2>
            <p className="text-[14px] text-[#f9f7f4] opacity-45 max-w-xs leading-relaxed md:text-right">
              Select an industry to see the operational pattern and how we approach it.
            </p>
          </div>
        </div>

        {/* Industry selector + detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#2d2d2d]">

          {/* Selector */}
          <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#2d2d2d]">
            {industries.map((ind, i) => (
              <button
                key={ind.id}
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-5 border-b border-[#2d2d2d] last:border-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d6b52] group ${
                  active === i ? "bg-[#2d2d2d]" : "hover:bg-[#242424]"
                }`}
              >
                <div className={`text-[13px] font-normal leading-tight ${active === i ? "text-[#f9f7f4]" : "text-[#f9f7f4] opacity-50 group-hover:opacity-80"}`}>
                  {ind.name}
                </div>
                <div className={`text-[12px] leading-tight ${active === i ? "text-[#6FA88B]" : "text-[#f9f7f4] opacity-30"}`}>
                  {ind.sub}
                </div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:col-span-9">
            {/* Problem */}
            <div className="p-7 md:p-10 border-b border-[#2d2d2d]">
              <div className="text-[10px] font-mono tracking-[0.18em] uppercase mb-3" style={{ color: G2 }}>The operational problem</div>
              <p className="text-[15px] md:text-[16px] leading-[1.75] text-[#f9f7f4] opacity-70 mb-6">
                {ind.problem}
              </p>
              <div className="flex flex-wrap gap-2">
                {ind.capabilities.map((cap) => (
                  <span key={cap} className="text-[10px] font-mono px-2.5 py-1 border border-[#2d2d2d] text-[#f9f7f4] opacity-50">{cap}</span>
                ))}
              </div>
            </div>

            {/* Workflow */}
            <div className="border-b border-[#2d2d2d]">
              <div className="px-7 md:px-10 pt-6 pb-0">
                <div className="text-[10px] font-mono tracking-[0.18em] uppercase mb-0" style={{ color: G2 }}>How we approach it</div>
              </div>
              <div className="bg-[#111111] overflow-x-auto">
                <WorkflowDiagram
                  before={ind.workflow.before}
                  after={ind.workflow.after}
                  metric={ind.workflow.metric}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 transition-all duration-700 delay-500 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[13px] text-[#f9f7f4] opacity-30 max-w-lg leading-relaxed">
            We work across other sectors where operational complexity and engineering capability intersect. If your industry isn&apos;t listed, the conversation is still worth having.
          </p>
        </div>

      </div>
    </section>
  );
}
