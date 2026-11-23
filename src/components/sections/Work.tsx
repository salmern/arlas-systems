"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Payment Gateway & POS Infrastructure",
    category: "Fintech Infrastructure",
    typeNote: "Engineering role at Betastack · ZainPay & ZainPOS · Nigeria",
    summary: "Backend infrastructure for a live Nigerian payment gateway and distributed POS network. 5,000+ daily transactions. 99.9% uptime.",
    problem: "ZainPay and ZainPOS required reliable backend infrastructure for high-volume financial operations across a distributed merchant network. Work performed within my engineering role at Betastack — not an Arlas Systems client engagement.",
    work: "Contributed to backend services, API integrations and real-time transaction processing. Webhook infrastructure for settlement notifications, fault-tolerant account update pipelines, database performance and system reliability.",
    tags: ["Payment Processing", "Backend Systems", "Distributed Infrastructure", "Fintech"],
    links: [{ label: "ZainPay", href: "https://zainpay.ng" }, { label: "ZainPOS", href: "https://zainpos.ng" }],
  },
  {
    n: "02",
    title: "AI Lead Research & Outreach System",
    category: "AI Automation",
    typeNote: "B2B talent platform context",
    summary: "AI pipeline that researches and qualifies B2B leads, then produces review-ready outreach sequences. Human approval before any contact is made.",
    problem: "Sales teams lose time manually researching companies and writing first-draft outreach. Volume is limited by available people, not available information.",
    work: "Supervised AI pipeline with ICP refinement, company discovery via Apify, website research via Firecrawl, lead scoring with deterministic quality gates, and structured outreach drafts. No content is sent without human review.",
    tags: ["AI Agents", "Workflow Automation", "Lead Intelligence", "Human-in-the-loop"],
    links: [],
  },
  {
    n: "03",
    title: "AI Customer Support System",
    category: "AI Automation",
    typeNote: "B2B payments context",
    summary: "Multi-channel support agent (voice and text) that resolves structured queries — lookups, ticket creation, escalations — without human intervention.",
    problem: "Support teams at financial services companies spend a large portion of time on structured, repetitive queries where the answer follows a predictable pattern.",
    work: "Voice and text channels, custom MCP server for structured data access, deterministic decision engine for policy-bound responses, Claude Agent SDK for language. Every action logged to an immutable audit trail.",
    tags: ["AI Agents", "Voice Interface", "Financial Services", "Audit Trail"],
    links: [],
  },
  {
    n: "04",
    title: "AI Proposal Generation System",
    category: "Document Automation",
    typeNote: "Professional services context",
    summary: "Turns discovery-call notes into structured client proposals. AI drafts each section — humans review and approve before anything reaches a client.",
    problem: "Professional service firms generate proposals repeatedly. The structure follows the same pattern each time. Senior people spend time on drafting rather than substance.",
    work: "Structured input → AI-drafted sections → human review and approval gates → PDF generation → tracked email delivery. Full version history and audit trail. No client-facing output without explicit approval.",
    tags: ["Document Automation", "AI Drafting", "Human Approval", "PDF Delivery"],
    links: [],
  },
  {
    n: "05",
    title: "Retail Promotions Data Pipeline",
    category: "Data Processing",
    typeNote: "Multi-store retail context",
    summary: "Automated pipeline that scrapes, verifies and tracks retail promotions. Drift detection flags what has changed between runs.",
    problem: "Tracking promotions across dozens of stores manually is unreliable and time-consuming. Changes happen without notice.",
    work: "Playwright scraper, BullMQ job queue, MySQL persistence, drift detection, Next.js filterable UI. Fully Dockerised. The team reviews results rather than collecting them.",
    tags: ["Data Pipeline", "Process Automation", "Retail Operations", "Background Jobs"],
    links: [],
  },
];

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section ref={ref} id="work" className="bg-[#f9f7f4] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f] mb-4">Selected Experience</p>
            <h2 className="font-display text-[36px] md:text-[48px] font-normal text-[#111110] leading-tight">
              What we&apos;ve built<br />and delivered.
            </h2>
          </div>
          <p className="text-[12px] text-[#5a5a56] max-w-xs md:text-right leading-relaxed opacity-80">
            Select a project to read more.
          </p>
        </div>

        {/* Project rows */}
        <div>
          {projects.map((p, i) => (
            <ProjectRow
              key={p.n}
              project={p}
              index={i}
              isOpen={expanded === p.n}
              onToggle={() => setExpanded(expanded === p.n ? null : p.n)}
              parentInView={inView}
            />
          ))}
          <div className="border-t border-[#e2ddd7]" />
        </div>

      </div>
    </section>
  );
}

function ProjectRow({ project, index, isOpen, onToggle, parentInView }: {
  project: typeof projects[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  parentInView: boolean;
}) {
  return (
    <div
      className={`border-t border-[#e2ddd7] transition-all duration-600 ${parentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${index * 70 + 100}ms` }}
    >
      {/* Row header */}
      <button
        onClick={onToggle}
        className="w-full text-left py-7 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 items-baseline group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e3a2f]"
        aria-expanded={isOpen}
      >
        <div className="md:col-span-1">
          <span className="text-[11px] font-mono text-[#5a5a56] opacity-35">{project.n}</span>
        </div>
        <div className="md:col-span-5">
          <div className="text-[10px] font-mono tracking-[0.14em] text-[#1e3a2f] opacity-60 mb-1.5 uppercase">{project.category}</div>
          <h3 className={`font-display text-[20px] md:text-[23px] font-normal leading-snug transition-colors duration-200 ${isOpen ? "text-[#1e3a2f]" : "text-[#111110] group-hover:text-[#1e3a2f]"}`}>
            {project.title}
          </h3>
        </div>
        <div className="md:col-span-4 hidden md:block self-center">
          <p className="text-[11px] font-mono text-[#5a5a56] opacity-45">{project.typeNote}</p>
        </div>
        <div className="md:col-span-2 hidden md:flex justify-end">
          <span className="text-[20px] font-light text-[#5a5a56] opacity-30 group-hover:opacity-70 transition-opacity">
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      {/* Expanded */}
      {isOpen && (
        <div className="pb-10 border-t border-[#e2ddd7]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pt-7">
            <div className="md:col-span-1" />

            {/* Left col */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#1e3a2f] opacity-60 mb-2">The Problem</p>
                <p className="text-[13px] md:text-[14px] leading-[1.75] text-[#5a5a56]">{project.problem}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#1e3a2f] opacity-60 mb-2">The Work</p>
                <p className="text-[13px] md:text-[14px] leading-[1.75] text-[#5a5a56]">{project.work}</p>
              </div>
            </div>

            {/* Right col */}
            <div className="md:col-span-5 space-y-5">
              {/* Summary */}
              <div className="border-l-2 border-[#1e3a2f]/20 pl-4">
                <p className="text-[13px] leading-[1.65] text-[#111110]">{project.summary}</p>
              </div>

              {/* Mobile context note */}
              <div className="md:hidden">
                <p className="text-[11px] font-mono text-[#5a5a56] opacity-45">{project.typeNote}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-[#5a5a56] border border-[#e2ddd7] px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links — only where available */}
              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-1">
                  {project.links.map(link => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.1em] uppercase text-[#5a5a56] border-b border-[#5a5a56]/30 pb-0.5 hover:text-[#1e3a2f] hover:border-[#1e3a2f] transition-colors">
                      {link.label}
                      <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
