"use client";

import { useEffect, useRef } from "react";
import React from "react";

// ─── Design tokens (light background) ────────────────────────────────────────

const G = "#1e3a2f";          // forest green — main accent
const G2 = "#3d6b52";         // lighter green for secondary
const G_DIM = "rgba(30,58,47,0.10)";
const G_MID = "rgba(30,58,47,0.22)";
const BORDER = "rgba(30,58,47,0.18)";
const BORDER_STRONG = "rgba(30,58,47,0.45)";
const T_FAINT = "rgba(26,26,26,0.38)";
const T_MID = "rgba(26,26,26,0.65)";
const T_STRONG = "#1a1a1a";
const CARD_BG = "rgba(249,247,244,0.0)";  // transparent — inherits ivory
const CARD_ALT = "rgba(30,58,47,0.05)";

// ─── Annotation label ─────────────────────────────────────────────────────────

function Label({ text, style, className = "" }: {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-1.5 px-2.5 py-1.5 pointer-events-none z-10 ${className}`}
      style={{
        border: `1px solid ${BORDER_STRONG}`,
        background: "#f9f7f4",
        borderRadius: 3,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        ...style,
      }}
    >
      <span className="flex-shrink-0 rounded-full" style={{ width: 5, height: 5, background: G }} />
      <span className="font-sans text-[10px] leading-tight whitespace-nowrap" style={{ color: T_STRONG, letterSpacing: "0.01em" }}>
        {text}
      </span>
    </div>
  );
}

// ─── 01 Promotions Aggregator — Pipeline ─────────────────────────────────────

function VisualPipeline() {
  return (
    <>
      <style>{`
        @keyframes pkt1{0%,100%{opacity:0;left:0}12%{opacity:1}80%{opacity:1;left:calc(100% - 8px)}88%,99%{opacity:0;left:calc(100% - 8px)}}
        @keyframes pkt2{0%,35%,100%{opacity:0;left:0}45%{opacity:1}80%{opacity:1;left:calc(100% - 8px)}88%,99%{opacity:0}}
        @keyframes pkt3{0%,60%,100%{opacity:0;left:0}70%{opacity:1}90%{opacity:1;left:calc(100% - 8px)}96%,99%{opacity:0}}
        @keyframes nPulse{0%,100%{box-shadow:0 0 0 0 ${G_MID}}60%{box-shadow:0 0 0 5px ${G_MID}}}
        .pk1{animation:pkt1 3.4s ease-in-out infinite}
        .pk2{animation:pkt2 3.4s ease-in-out infinite}
        .pk3{animation:pkt3 3.4s ease-in-out infinite}
        .npulse{animation:nPulse 2.2s ease-in-out infinite}
      `}</style>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 gap-10 select-none">
        <div className="font-mono text-[9px] tracking-[0.18em] uppercase self-start" style={{ color: T_FAINT }}>
          Data pipeline — automated
        </div>

        <div className="flex items-center w-full max-w-[500px]">
          {[
            { id: "SCRAPER", sub: "Playwright", pk: "pk1" },
            { id: "QUEUE", sub: "BullMQ", pk: "pk2" },
            { id: "DATABASE", sub: "MySQL", pk: "pk3" },
            { id: "UI", sub: "Next.js", pk: null },
          ].map((node, i, arr) => (
            <React.Fragment key={node.id}>
              {/* Node */}
              <div className="flex flex-col items-center gap-1.5 flex-1">
                <div
                  className="npulse flex flex-col items-center justify-center py-3 px-2 w-full max-w-[88px]"
                  style={{
                    border: `1.5px solid ${BORDER_STRONG}`,
                    background: G_DIM,
                    borderRadius: 4,
                    animationDelay: `${i * 0.35}s`,
                  }}
                >
                  <span className="font-mono text-[9px] tracking-wide font-medium" style={{ color: G }}>{node.id}</span>
                  <span className="font-mono text-[8px] mt-0.5" style={{ color: T_MID }}>{node.sub}</span>
                </div>
              </div>

              {/* Connector */}
              {i < arr.length - 1 && (
                <div className="relative flex items-center" style={{ width: 44, flexShrink: 0, height: 16 }}>
                  <div className="w-full h-px" style={{ background: BORDER_STRONG }} />
                  <div
                    className={`${node.pk!} absolute top-1/2 -translate-y-1/2`}
                    style={{ width: 8, height: 8, background: G, borderRadius: "50%", boxShadow: `0 0 5px ${G_MID}` }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Label text="Runs on a schedule — no manual work" style={{ bottom: "13%", left: "5%" }} />
      <Label text="Drift detection catches price changes" style={{ top: "13%", right: "5%" }} />
    </>
  );
}

// ─── 02 Customer Support Agent — Terminal ────────────────────────────────────

const LINES = [
  { t: 0,    text: "$ call: +234 801 234 5678",        c: T_STRONG },
  { t: 650,  text: "> intent: transaction_lookup",      c: G },
  { t: 1300, text: "> lookup_transaction(TXN_882)",     c: "#3d6b52" },
  { t: 2000, text: "  status: completed  ₦45,000",     c: T_MID },
  { t: 2700, text: "> response: drafted ✓",             c: G },
  { t: 3300, text: "> ticket: not required",            c: T_FAINT },
  { t: 3900, text: "$ resolved in 18s",                c: G },
];

function VisualTerminal() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach(el => { if (el) el.style.opacity = "0"; });
    const timers = LINES.map((l, i) => setTimeout(() => {
      if (refs.current[i]) refs.current[i]!.style.opacity = "1";
    }, l.t));
    const reset = setTimeout(() => {
      refs.current.forEach(el => { if (el) el.style.opacity = "0"; });
    }, 5400);
    return () => { timers.forEach(clearTimeout); clearTimeout(reset); };
  });

  return (
    <>
      <style>{`@keyframes caret{0%,100%{opacity:1}50%{opacity:0}}.caret{animation:caret 1s step-end infinite}`}</style>
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <div className="w-full max-w-[420px]" style={{ border: `1.5px solid ${BORDER_STRONG}`, borderRadius: 5, overflow: "hidden", background: "#f2ede7" }}>
          {/* Mac-style title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "#e8e2da", borderBottom: `1px solid ${BORDER}` }}>
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="font-mono text-[10px] ml-2" style={{ color: T_MID }}>support-agent — live</span>
          </div>
          <div className="px-4 py-4 space-y-1.5" style={{ minHeight: 148 }}>
            {LINES.map((l, i) => (
              <div key={i} ref={el => { refs.current[i] = el; }}
                className="font-mono text-[10px] leading-relaxed transition-opacity duration-300"
                style={{ color: l.c, opacity: 0 }}>
                {l.text}
              </div>
            ))}
            <span className="caret font-mono text-[11px]" style={{ color: G }}>▋</span>
          </div>
        </div>
        <Label text="Resolves queries without a human" style={{ bottom: "10%", left: "4%" }} />
        <Label text="Full audit trail on every action" style={{ top: "10%", right: "4%" }} />
      </div>
    </>
  );
}

// ─── 03 Lead Research Agent — Dashboard ──────────────────────────────────────

function VisualLeadDashboard() {
  const leadsRef = useRef<HTMLSpanElement>(null);
  const qualRef  = useRef<HTMLSpanElement>(null);
  const draftRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    let start: number | null = null;
    const dur = 2200;
    function tick(ts: number) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      if (leadsRef.current) leadsRef.current.textContent = String(Math.round(34 * e));
      if (qualRef.current)  qualRef.current.textContent  = String(Math.round(91 * e)) + "%";
      if (draftRef.current) draftRef.current.textContent = String(Math.round(34 * e));
      if (p < 1) frame = requestAnimationFrame(tick);
    }
    const d = setTimeout(() => { frame = requestAnimationFrame(tick); }, 300);
    return () => { clearTimeout(d); cancelAnimationFrame(frame); };
  });

  return (
    <>
      <style>{`@keyframes bGrow{from{width:0}to{width:var(--w)}}.bgrow{animation:bGrow 1.3s cubic-bezier(.4,0,.2,1) .5s forwards;width:0}`}</style>
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <div className="w-full max-w-[430px]" style={{ border: `1.5px solid ${BORDER_STRONG}`, borderRadius: 4, background: "#f2ede7", overflow: "hidden" }}>
          <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <span className="font-mono text-[9px] tracking-wide" style={{ color: T_FAINT }}>LEAD RUN #07 — B2B SaaS</span>
            <span className="font-mono text-[8px] px-2 py-0.5" style={{ color: G, border: `1px solid ${BORDER_STRONG}`, borderRadius: 2 }}>COMPLETED</span>
          </div>
          {/* Counters */}
          <div className="grid grid-cols-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
            {[
              { label: "Leads Found", ref: leadsRef },
              { label: "Qualified",   ref: qualRef },
              { label: "Drafts Ready",ref: draftRef },
            ].map(({ label, ref }) => (
              <div key={label} className="flex flex-col items-center py-4 gap-1 border-r last:border-0" style={{ borderColor: BORDER }}>
                <span className="font-mono text-[22px] font-light" style={{ color: T_STRONG }}><span ref={ref}>0</span></span>
                <span className="font-mono text-[8px]" style={{ color: T_FAINT }}>{label}</span>
              </div>
            ))}
          </div>
          {/* Bars */}
          <div className="px-5 py-4 space-y-3">
            {[{ n: "SaaS / B2B", w: "82%" }, { n: "Fintech", w: "64%" }, { n: "Agency", w: "48%" }].map(({ n, w }) => (
              <div key={n} className="flex items-center gap-3">
                <span className="font-mono text-[9px] w-20 flex-shrink-0" style={{ color: T_MID }}>{n}</span>
                <div className="flex-1 h-1.5 overflow-hidden" style={{ background: BORDER, borderRadius: 2 }}>
                  <div className="bgrow h-full" style={{ "--w": w, background: G, borderRadius: 2 } as React.CSSProperties} />
                </div>
                <span className="font-mono text-[9px] w-8 text-right" style={{ color: T_MID }}>{w}</span>
              </div>
            ))}
          </div>
        </div>
        <Label text="No emails sent without human approval" style={{ bottom: "8%", right: "4%" }} />
      </div>
    </>
  );
}

// ─── 04 AI Proposal — Workflow ────────────────────────────────────────────────

const PSTEPS = [
  { label: "Discovery notes",    sub: "input",        s: "done" },
  { label: "AI drafts sections", sub: "claude",       s: "done" },
  { label: "Human review",       sub: "approval gate",s: "active" },
  { label: "PDF generation",     sub: "react-pdf",    s: "pending" },
  { label: "Email delivery",     sub: "resend",       s: "pending" },
];

function VisualProposalFlow() {
  return (
    <>
      <style>{`@keyframes rPulse{0%,100%{opacity:.75;transform:scale(1)}50%{opacity:1;transform:scale(1.02)}}.rpulse{animation:rPulse 1.8s ease-in-out infinite}`}</style>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[360px]">
          <div className="font-mono text-[9px] mb-5 tracking-[0.15em] uppercase" style={{ color: T_FAINT }}>Proposal workflow</div>
          <div className="space-y-2">
            {PSTEPS.map((step, i) => (
              <div key={i}
                className={step.s === "active" ? "rpulse" : ""}
                style={{
                  border: `1.5px solid ${step.s === "active" ? BORDER_STRONG : BORDER}`,
                  background: step.s === "active" ? G_DIM : step.s === "done" ? "transparent" : "transparent",
                  borderRadius: 3,
                  padding: "10px 14px",
                  display: "flex", alignItems: "center", gap: 10,
                  opacity: step.s === "pending" ? 0.4 : 1,
                }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                  background: step.s === "done" || step.s === "active" ? G : "#ccc",
                }} />
                <span className="flex-1 font-sans text-[12px]" style={{ color: T_STRONG }}>{step.label}</span>
                <span className="font-mono text-[8px]" style={{ color: T_FAINT }}>{step.sub}</span>
                {step.s === "done" && <span className="font-mono text-[10px]" style={{ color: G }}>✓</span>}
                {step.s === "active" && <span className="font-mono text-[10px]" style={{ color: G }}>●</span>}
              </div>
            ))}
          </div>
        </div>
        <Label text="AI drafts — humans approve before it reaches the client" style={{ top: "8%", left: "4%", right: "4%" }} />
      </div>
    </>
  );
}

// ─── 05 Content Agent — Pipeline ─────────────────────────────────────────────

const CSTAGES = [
  { stage: "Research",     detail: "6 sources · Firecrawl", done: true,  active: false },
  { stage: "Plan",         detail: "Outline generated",      done: true,  active: false },
  { stage: "Draft",        detail: "1,200 words · Claude",   done: true,  active: false },
  { stage: "Evaluate",     detail: "Score: 87/100",          done: true,  active: false },
  { stage: "Human Review", detail: "Approved ✓",             done: true,  active: false },
  { stage: "Adapt",        detail: "LinkedIn · X · Email",   done: false, active: true  },
  { stage: "Publish",      detail: "Scheduled",              done: false, active: false },
];

function VisualContentPipeline() {
  return (
    <>
      <style>{`@keyframes aPulse{0%,100%{opacity:.5}50%{opacity:1}}.apulse{animation:aPulse 1.5s ease-in-out infinite}`}</style>
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <div className="w-full max-w-[390px]">
          <div className="font-mono text-[9px] mb-4 tracking-[0.15em] uppercase" style={{ color: T_FAINT }}>Content pipeline — active run</div>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px" style={{ background: BORDER_STRONG }} />
            {CSTAGES.map((s, i) => (
              <div key={i} className="relative mb-2.5 last:mb-0">
                <div
                  className={`absolute -left-4 top-2.5 rounded-full ${s.active ? "apulse" : ""}`}
                  style={{ width: 7, height: 7, background: s.done || s.active ? G : "#ccc", border: s.active ? `1.5px solid ${G}` : "none" }}
                />
                <div style={{
                  border: `1.5px solid ${s.active ? BORDER_STRONG : BORDER}`,
                  background: s.active ? G_DIM : "transparent",
                  borderRadius: 3, padding: "8px 12px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  opacity: !s.done && !s.active ? 0.4 : 1,
                }}>
                  <span className="font-sans text-[11px]" style={{ color: T_STRONG }}>{s.stage}</span>
                  <span className="font-mono text-[9px]" style={{ color: s.done ? G : T_FAINT }}>{s.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Label text="One draft → 3 channels automatically" style={{ bottom: "7%", right: "4%" }} />
      </div>
    </>
  );
}

// ─── 06 Invoice Processing — Extraction ──────────────────────────────────────

const INV_FIELDS = [
  { k: "vendor",   v: "Acme Supplies Ltd" },
  { k: "amount",   v: "₦1,250,000.00" },
  { k: "due_date", v: "2024-02-15" },
  { k: "po_ref",   v: "PO-2024-0089" },
  { k: "status",   v: "→ routed to ERP" },
];

function VisualInvoice() {
  return (
    <>
      <style>{`@keyframes scan{from{top:10%}to{top:88%}}.scanln{animation:scan 2.6s ease-in-out infinite alternate}`}</style>
      <div className="absolute inset-0 flex items-center justify-center gap-6 px-8 py-6">
        {/* PDF mock */}
        <div className="relative flex-shrink-0" style={{ width: 110, height: 145, border: `1.5px solid ${BORDER_STRONG}`, borderRadius: 4, background: "#ede8e1", overflow: "hidden" }}>
          {[...Array(9)].map((_, i) => (
            <div key={i} className="mx-3 my-2" style={{ height: 4, borderRadius: 2, background: BORDER_STRONG, opacity: 0.5, width: i % 3 === 0 ? "55%" : "88%" }} />
          ))}
          <div className="scanln absolute left-0 right-0 h-0.5" style={{ background: `linear-gradient(to right, transparent, ${G}, transparent)`, opacity: 0.9 }} />
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <span className="font-mono text-[7px]" style={{ color: T_FAINT }}>INVOICE.PDF</span>
          </div>
        </div>

        {/* Arrow */}
        <span className="font-mono text-[18px]" style={{ color: G, opacity: 0.7 }}>→</span>

        {/* Extracted data */}
        <div className="flex-1 min-w-0" style={{ border: `1.5px solid ${BORDER_STRONG}`, borderRadius: 4, background: "#f2ede7", padding: "12px 14px" }}>
          <div className="font-mono text-[8px] mb-3 tracking-[0.15em] uppercase" style={{ color: T_FAINT }}>Extracted fields</div>
          <div className="space-y-2">
            {INV_FIELDS.map(({ k, v }) => (
              <div key={k} className="flex items-center gap-2">
                <span className="font-mono text-[8px] w-14 flex-shrink-0" style={{ color: T_MID }}>{k}</span>
                <span className="font-mono text-[9px] font-medium truncate" style={{ color: G }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <Label text="Eliminates manual data entry" style={{ bottom: "8%", left: "50%", transform: "translateX(-50%)" }} />
      </div>
    </>
  );
}

// ─── 07 AI Reporting — Dashboard ─────────────────────────────────────────────

const METRICS = [
  { label: "Revenue",      value: "₦12.4M", change: "+8.2%",  up: true },
  { label: "Transactions", value: "4,821",  change: "+14%",   up: true },
  { label: "Chargebacks",  value: "3",      change: "−62%",   up: false },
];

function VisualReportDashboard() {
  return (
    <>
      <style>{`@keyframes shim{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}.shim{animation:shim 2s ease-in-out infinite}`}</style>
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <div className="w-full max-w-[420px]" style={{ border: `1.5px solid ${BORDER_STRONG}`, borderRadius: 4, background: "#f2ede7", overflow: "hidden" }}>
          <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <span className="font-mono text-[9px] tracking-wide" style={{ color: T_FAINT }}>OPERATIONS SUMMARY — Q1 2024</span>
            <span className="shim font-mono text-[8px] px-2 py-0.5" style={{ color: G, border: `1px solid ${BORDER_STRONG}`, borderRadius: 2 }}>AI GENERATED</span>
          </div>
          <div className="grid grid-cols-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
            {METRICS.map(({ label, value, change, up }) => (
              <div key={label} className="flex flex-col items-center py-4 gap-1 border-r last:border-0 px-2" style={{ borderColor: BORDER }}>
                <span className="font-mono text-[20px] font-light" style={{ color: T_STRONG }}>{value}</span>
                <span className="font-mono text-[8px]" style={{ color: T_FAINT }}>{label}</span>
                <span className="font-mono text-[8px] font-medium" style={{ color: up ? G : "#e07040" }}>{change}</span>
              </div>
            ))}
          </div>
          <div className="px-5 py-4">
            <div className="font-mono text-[8px] mb-2 tracking-[0.15em] uppercase" style={{ color: T_FAINT }}>AI Narrative</div>
            <p className="font-sans text-[11px] leading-relaxed" style={{ color: T_MID }}>
              Q1 performance improved across all key metrics. Transaction volume grew 14%, driven by merchant onboarding in Lagos. Chargeback rate is at a 6-month low.
            </p>
          </div>
        </div>
        <Label text="Summaries generated in seconds, not hours" style={{ bottom: "8%", left: "5%" }} />
      </div>
    </>
  );
}

// ─── Router + wrapper ─────────────────────────────────────────────────────────

const VISUALS: Record<string, () => React.ReactElement> = {
  "01": VisualPipeline,
  "02": VisualTerminal,
  "03": VisualLeadDashboard,
  "04": VisualProposalFlow,
  "05": VisualContentPipeline,
  "06": VisualInvoice,
  "07": VisualReportDashboard,
};

interface ProjectVisualProps {
  projectNumber: string;
  animKey: number;
}

export default function ProjectVisual({ projectNumber, animKey }: ProjectVisualProps) {
  const Visual = VISUALS[projectNumber];
  return (
    <div
      key={animKey}
      className="relative w-full overflow-hidden select-none"
      style={{
        aspectRatio: "16/9",
        background: "#f9f7f4",          // site ivory — no dark wrapper
        animation: "visFade .3s ease forwards",
      }}
    >
      <style>{`@keyframes visFade{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}`}</style>
      {/* Very faint dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${BORDER} 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      {Visual ? <Visual /> : null}
    </div>
  );
}
