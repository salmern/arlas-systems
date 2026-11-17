"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    number: "01",
    category: "Payment Infrastructure",
    title: "Payment Gateway & Distributed POS Infrastructure",
    client: "Betastack — ZainPay & ZainPOS · Nigeria",
    nature: "Live production system",
    problem: "A high-volume Nigerian fintech needed reliable backend infrastructure to process thousands of daily transactions across a payment gateway and a distributed network of merchant POS terminals — with the uptime and consistency that financial operations require.",
    engineering: "Designed and engineered the backend services, API integrations, and real-time transaction processing pipeline. Implemented webhook infrastructure for instant settlement notifications, fault-tolerant account update pipelines, and the operational systems that keep merchant terminals running across multiple locations.",
    outcome: "5,000+ daily transactions processed across the payment gateway and POS network. 99.9% uptime for merchant operations. Live production systems maintained and improved continuously.",
    tags: ["Fintech", "Payment Processing", "Backend Engineering", "Distributed Systems"],
    links: [
      { label: "ZainPay", href: "https://zainpay.ng" },
      { label: "ZainPOS", href: "https://zainpos.ng" },
    ],
  },
  {
    number: "02",
    category: "AI Automation",
    title: "AI-Powered Lead Research & Outreach System",
    client: "B2B talent platform · Prototype",
    nature: "Demonstrated capability",
    problem: "Sales teams lose significant time manually researching companies, scoring leads, and writing first-draft outreach. The quality is inconsistent and the volume that can be processed is limited by how many people are available to do the work.",
    engineering: "Built a supervised AI pipeline that takes a target profile, discovers and researches matching companies, scores and qualifies each lead with supporting evidence, and produces structured outreach sequences ready for human review. The system uses deterministic quality gates — no content is approved by AI confidence alone.",
    outcome: "Prototype demonstrating the full research-to-outreach pipeline. Human approval required before any outreach is sent. Designed for integration into existing sales operations.",
    tags: ["AI Automation", "Workflow Automation", "Lead Intelligence", "Human-in-the-loop"],
    links: [{ label: "GitHub", href: "https://github.com/salmern/salman-koya-lead-outreach-agent" }],
  },
  {
    number: "03",
    category: "AI Automation",
    title: "Production Customer Support Agent",
    client: "B2B payments company · Prototype",
    nature: "Demonstrated capability",
    problem: "Support teams at financial services companies spend a large portion of their time on structured, repetitive queries — transaction lookups, status checks, ticket creation — where the answer follows a predictable pattern and the information already exists in their systems.",
    engineering: "Built a multi-channel support agent (voice and text) with a custom MCP server for structured data access, a deterministic decision engine for policy-bound responses, and the Claude Agent SDK for natural language. Every action is logged to an immutable audit trail. The AI layer handles language; the rules engine handles decisions.",
    outcome: "Prototype resolving the majority of common query types without human intervention. Escalation, ticket creation, and audit logging operational. Designed for deployment in regulated financial environments.",
    tags: ["AI Agents", "Voice Interface", "Financial Services", "Audit & Compliance"],
    links: [{ label: "GitHub", href: "https://github.com/salmern/relaypay-support-agent" }],
  },
  {
    number: "04",
    category: "Document Automation",
    title: "AI Proposal & Document Generation System",
    client: "Professional services firm · Prototype",
    nature: "Demonstrated capability",
    problem: "Professional service firms generate proposals, reports, and client documents repeatedly. The structure follows the same pattern each time. The variables are the content. Senior people spend time on formatting and drafting rather than on the substance.",
    engineering: "Built a system that takes structured discovery input and produces complete proposal drafts for human review. Each section can be regenerated, edited, or approved independently. Version history, human approval gates, PDF generation, and tracked delivery are all part of the workflow — the AI drafts, the human decides.",
    outcome: "Prototype producing review-ready proposals from discovery notes. All client-facing output requires explicit approval before delivery. Integrates with email delivery and maintains a full audit trail.",
    tags: ["Document Automation", "AI Drafting", "Human Approval Workflow", "Professional Services"],
    links: [{ label: "GitHub", href: "https://github.com/salmern/koya-proposals" }],
  },
  {
    number: "05",
    category: "Data Processing",
    title: "Retail Promotions Data Pipeline",
    client: "Multi-store retail operation · Prototype",
    nature: "Demonstrated capability",
    problem: "Tracking promotions across dozens of stores manually is unreliable, time-consuming, and error-prone. Changes happen without notice. The team needed a system that tracked what was live, identified what had changed, and made that data accessible without manual effort.",
    engineering: "Built a fully automated scrape-verify-store pipeline using background job processing, drift detection, and a live filterable interface. Playwright handles extraction, BullMQ manages the job queue, and the system identifies and flags changes between runs. The UI gives the team immediate visibility into current promotions without touching a spreadsheet.",
    outcome: "Prototype demonstrating automated retail data collection, change detection, and operational reporting. Fully Dockerised for deployment.",
    tags: ["Data Pipeline", "Process Automation", "Retail Operations", "Background Processing"],
    links: [{ label: "GitHub", href: "https://github.com/salmern/salman-promotion-aggregator" }],
  },
];

export default function Work() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState<string | null>("01");

  return (
    <section id="work" className="bg-[#f9f7f4] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div
          ref={headRef}
          className={`mb-16 md:mb-20 transition-all duration-700 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-8 h-px bg-[#1e3a2f]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f]">Selected Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-[34px] md:text-[48px] font-light text-[#1a1a1a] leading-tight">
              Engineering problems<br />we have solved.
            </h2>
            <p className="text-[13px] text-[#4a4a4a] opacity-60 max-w-xs md:text-right leading-relaxed">
              Where a project is a prototype or demonstration, it is labelled honestly.
            </p>
          </div>
        </div>

        {/* Case studies */}
        <div>
          {caseStudies.map((cs, i) => (
            <CaseStudyRow
              key={cs.number}
              cs={cs}
              index={i}
              isOpen={expanded === cs.number}
              onToggle={() => setExpanded(expanded === cs.number ? null : cs.number)}
            />
          ))}
          <div className="border-t border-[#e0dbd4]" />
        </div>

      </div>
    </section>
  );
}

function CaseStudyRow({
  cs,
  index,
  isOpen,
  onToggle,
}: {
  cs: typeof caseStudies[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className={`border-t border-[#e0dbd4] transition-all duration-600 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Row header — always visible */}
      <button
        onClick={onToggle}
        className="w-full text-left py-8 md:py-10 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a2f] focus-visible:ring-offset-1"
        aria-expanded={isOpen}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
          <div className="md:col-span-1">
            <span className="text-[10px] font-mono text-[#4a4a4a] opacity-30 tracking-wider">{cs.number}</span>
          </div>
          <div className="md:col-span-5">
            <div className="text-[10px] font-mono tracking-[0.14em] text-[#1e3a2f] opacity-70 mb-1.5 uppercase">{cs.category}</div>
            <h3 className="text-[18px] md:text-[20px] font-normal text-[#1a1a1a] leading-snug group-hover:text-[#1e3a2f] transition-colors">
              {cs.title}
            </h3>
          </div>
          <div className="md:col-span-4">
            <span className="text-[12px] font-mono text-[#4a4a4a] opacity-50">{cs.client}</span>
            <div className="mt-1">
              <span className="text-[10px] font-mono text-[#4a4a4a] opacity-40 border border-[#e0dbd4] px-2 py-0.5">{cs.nature}</span>
            </div>
          </div>
          <div className="md:col-span-2 flex md:justify-end">
            <span
              className="w-7 h-7 border border-[#e0dbd4] group-hover:border-[#1e3a2f] transition-colors flex items-center justify-center text-[#4a4a4a] group-hover:text-[#1e3a2f] text-[16px] leading-none"
              aria-hidden="true"
            >
              {isOpen ? "−" : "+"}
            </span>
          </div>
        </div>
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="pb-10 md:pb-14 border-t border-[#e0dbd4]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-8">

            {/* Problem + Engineering */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1e3a2f] mb-3">The Problem</h4>
                <p className="text-[14px] md:text-[15px] leading-[1.75] text-[#2d2d2d]">{cs.problem}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1e3a2f] mb-3">The Engineering</h4>
                <p className="text-[14px] md:text-[15px] leading-[1.75] text-[#2d2d2d]">{cs.engineering}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1e3a2f] mb-3">The Outcome</h4>
                <p className="text-[14px] md:text-[15px] leading-[1.75] text-[#2d2d2d]">{cs.outcome}</p>
              </div>
            </div>

            {/* Tags + links */}
            <div className="lg:col-span-5">
              <div className="flex flex-wrap gap-2 mb-7">
                {cs.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-[11px] text-[#1e3a2f] bg-[#e8f0eb] border border-[#1e3a2f]/15">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {cs.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.1em] uppercase text-[#4a4a4a] border-b border-[#4a4a4a]/30 pb-0.5 hover:text-[#1e3a2f] hover:border-[#1e3a2f] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
