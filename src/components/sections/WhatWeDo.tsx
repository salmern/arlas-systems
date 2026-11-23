"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";

// ─── Workflow diagrams ─────────────────────────────────────────────────────────

const G = "#1e3a2f";
const G2 = "#3d6b52";
const BORDER = "rgba(30,58,47,0.18)";
const BG = "rgba(30,58,47,0.06)";
const TEXT = "#1a1a1a";
const DIM = "rgba(26,26,26,0.45)";

function FlowNode({ label, sub, highlight }: { label: string; sub?: string; highlight?: boolean }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-3 py-2.5 text-center"
      style={{
        border: `1.5px solid ${highlight ? G : BORDER}`,
        background: highlight ? BG : "transparent",
        borderRadius: 4,
        minWidth: 90,
        minHeight: 44,
      }}
    >
      <span className="font-mono text-[9px] tracking-[0.1em] font-medium leading-tight" style={{ color: highlight ? G : TEXT }}>{label}</span>
      {sub && <span className="font-mono text-[8px] mt-0.5 leading-tight" style={{ color: DIM }}>{sub}</span>}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 flex-shrink-0 px-1">
      {label && <span className="font-mono text-[7px]" style={{ color: DIM, whiteSpace: "nowrap" }}>{label}</span>}
      <div className="flex items-center gap-0">
        <div className="h-px w-6" style={{ background: G, opacity: 0.4 }} />
        <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: `5px solid ${G}`, opacity: 0.4 }} />
      </div>
    </div>
  );
}

function AutomationDiagram() {
  return (
    <div className="p-6 overflow-x-auto">
      <div className="text-[9px] font-mono tracking-[0.15em] uppercase mb-5" style={{ color: DIM }}>
        Example — Invoice processing workflow
      </div>

      {/* Before */}
      <div className="mb-5">
        <div className="text-[8px] font-mono mb-3 tracking-wider" style={{ color: DIM }}>BEFORE: Manual</div>
        <div className="flex items-center gap-1 flex-wrap">
          {[
            { label: "Invoice arrives", sub: "email / post" },
            { label: "Staff reads", sub: "15 min" },
            { label: "Data entered", sub: "CRM / ERP" },
            { label: "Approval chain", sub: "1–3 days" },
            { label: "Payment queued" },
          ].map((n, i, arr) => (
            <div key={n.label} className="flex items-center">
              <FlowNode label={n.label} sub={n.sub} />
              {i < arr.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>

      {/* After */}
      <div>
        <div className="text-[8px] font-mono mb-3 tracking-wider" style={{ color: G2 }}>AFTER: Automated</div>
        <div className="flex items-center gap-1 flex-wrap">
          {[
            { label: "Invoice arrives", sub: "email / portal", h: false },
            { label: "AI extraction", sub: "structured data", h: true },
            { label: "Rules engine", sub: "validation", h: true },
            { label: "ERP updated", sub: "auto", h: true },
            { label: "Payment ready", sub: "< 2 min", h: true },
          ].map((n, i, arr) => (
            <div key={n.label} className="flex items-center">
              <FlowNode label={n.label} sub={n.sub} highlight={n.h} />
              {i < arr.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="text-[9px] font-mono px-2.5 py-1 border" style={{ color: G, borderColor: BORDER }}>
          Staff time: 15 min → 0 min per invoice
        </div>
        <div className="text-[9px] font-mono px-2.5 py-1 border" style={{ color: G, borderColor: BORDER }}>
          Processing time: 3 days → &lt; 2 min
        </div>
      </div>
    </div>
  );
}

function EngineeringDiagram() {
  return (
    <div className="p-6">
      <div className="text-[9px] font-mono tracking-[0.15em] uppercase mb-5" style={{ color: DIM }}>
        Example — Property management platform
      </div>
      <div className="space-y-3">
        {[
          { layer: "CLIENT LAYER", items: ["Web portal", "Mobile app", "Agent dashboard"], h: false },
          { layer: "API LAYER", items: ["REST API", "Auth & permissions", "Business logic"], h: true },
          { layer: "DATA LAYER", items: ["PostgreSQL", "File storage", "Event log"], h: false },
          { layer: "INTEGRATIONS", items: ["Payment gateway", "Email & SMS", "Accounting"], h: false },
        ].map(({ layer, items, h }) => (
          <div key={layer} className="flex items-center gap-3">
            <div className="text-[8px] font-mono w-24 flex-shrink-0 text-right" style={{ color: DIM }}>{layer}</div>
            <div
              className="flex-1 flex gap-2 p-2.5"
              style={{ border: `1px solid ${h ? G : BORDER}`, background: h ? BG : "transparent", borderRadius: 3 }}
            >
              {items.map(item => (
                <span key={item} className="font-mono text-[9px] px-2 py-1 border" style={{ color: h ? G : TEXT, borderColor: h ? BORDER : "rgba(0,0,0,0.08)" }}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[9px] font-mono px-2.5 py-1 border w-fit" style={{ color: G, borderColor: BORDER }}>
        Custom-built · integrates with existing tools · scales with the business
      </div>
    </div>
  );
}

function IntegrationDiagram() {
  const systems = ["CRM", "Accounting", "Inventory", "Logistics", "Support"];
  return (
    <div className="p-6">
      <div className="text-[9px] font-mono tracking-[0.15em] uppercase mb-5" style={{ color: DIM }}>
        Example — Retail operations integration
      </div>
      <div className="flex items-center justify-center gap-6">
        {/* Left: disconnected */}
        <div className="flex-1">
          <div className="text-[8px] font-mono mb-3 tracking-wider text-center" style={{ color: DIM }}>BEFORE: Disconnected</div>
          <div className="flex flex-col gap-1.5 items-center">
            {systems.map(s => (
              <div key={s} className="text-[9px] font-mono px-3 py-1.5 w-full text-center" style={{ border: `1px solid ${BORDER}`, color: DIM }}>{s}</div>
            ))}
          </div>
        </div>

        <div className="text-[18px] font-light" style={{ color: G, opacity: 0.4 }}>→</div>

        {/* Right: hub */}
        <div className="flex-1">
          <div className="text-[8px] font-mono mb-3 tracking-wider text-center" style={{ color: G2 }}>AFTER: Integration hub</div>
          <div className="flex flex-col items-center gap-2">
            <div className="px-4 py-2 text-center" style={{ border: `1.5px solid ${G}`, background: BG, borderRadius: 4 }}>
              <div className="font-mono text-[9px] font-medium" style={{ color: G }}>Arlas Integration Hub</div>
              <div className="font-mono text-[8px] mt-0.5" style={{ color: DIM }}>real-time sync · webhooks · transforms</div>
            </div>
            <div className="flex gap-1 flex-wrap justify-center">
              {systems.map(s => (
                <span key={s} className="text-[8px] font-mono px-2 py-0.5" style={{ border: `1px solid ${BORDER}`, color: G }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-[9px] font-mono px-2.5 py-1 border w-fit" style={{ color: G, borderColor: BORDER }}>
        Data moves automatically · no manual reconciliation · consistent records
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillars = [
  {
    number: "01",
    title: "Business Automation",
    headline: "Eliminate the manual work your team shouldn't be doing.",
    body: "We identify the repetitive, manual, error-prone processes inside your business and replace them with systems that run automatically. AI agents that process documents, qualify enquiries, generate reports, and route work. Workflows that move information between systems without anyone touching a keyboard.",
    examples: ["AI document processing", "Automated reporting", "Workflow orchestration", "AI agents for operations", "Lead qualification systems", "Data extraction & routing"],
    Diagram: AutomationDiagram,
  },
  {
    number: "02",
    title: "Software & Systems",
    headline: "Custom systems built for how your business actually operates.",
    body: "Off-the-shelf software is built for the average business. If your operations are specific, your competitive edge lies in systems designed around your actual processes. We build internal platforms, operational dashboards, custom APIs, and backend infrastructure — engineered for real workloads, integrated with your existing tools.",
    examples: ["Internal platforms & tools", "Operational dashboards", "API design & development", "Backend infrastructure", "Data pipelines", "Custom business software"],
    Diagram: EngineeringDiagram,
  },
  {
    number: "03",
    title: "Systems Integration",
    headline: "Connect the platforms and tools that currently require manual effort to synchronise.",
    body: "Most businesses use ten or more tools that weren't built to talk to each other. Someone is manually copying data, reconciling records, and bridging gaps every day. We design and build the integrations, middleware, and data flows that connect your existing systems automatically.",
    examples: ["CRM & ERP integrations", "Payment system connections", "Third-party API integrations", "Real-time data sync", "Webhook infrastructure", "Multi-system orchestration"],
    Diagram: IntegrationDiagram,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function WhatWeDo() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  const activePillar = pillars[active];
  const { Diagram } = activePillar;

  return (
    <section id="what-we-do" className="bg-[#f9f7f4] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div
          ref={headRef}
          className={`mb-14 md:mb-18 transition-all duration-700 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
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

        {/* Tabbed layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#e0dbd4]">

          {/* Tab selectors */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#e0dbd4]">
            {pillars.map((p, i) => (
              <button
                key={p.number}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-6 border-b border-[#e0dbd4] last:border-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a2f] group ${
                  active === i ? "bg-[#1e3a2f]" : "hover:bg-[#f0ece6]"
                }`}
                aria-pressed={active === i}
              >
                <span className={`text-[10px] font-mono tracking-wider block mb-2 ${active === i ? "text-[#6FA88B]" : "text-[#4a4a4a] opacity-40"}`}>
                  {p.number}
                </span>
                <span className={`text-[16px] font-normal leading-snug block mb-1.5 ${active === i ? "text-[#f9f7f4]" : "text-[#1a1a1a] group-hover:text-[#1e3a2f]"}`}>
                  {p.title}
                </span>
                <span className={`text-[12px] leading-snug block ${active === i ? "text-[#f9f7f4] opacity-60" : "text-[#4a4a4a] opacity-55"}`}>
                  {p.headline}
                </span>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-8">
            <div className="p-7 md:p-10 border-b border-[#e0dbd4]">
              <p className="text-[15px] md:text-[16px] leading-[1.78] text-[#2d2d2d] mb-6">
                {activePillar.body}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {activePillar.examples.map((ex) => (
                  <div key={ex} className="px-3 py-2 border border-[#e0dbd4] text-[11px] text-[#4a4a4a] leading-snug">{ex}</div>
                ))}
              </div>
            </div>

            {/* Workflow diagram */}
            <div className="border-[#e0dbd4] overflow-x-auto">
              <Diagram />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
