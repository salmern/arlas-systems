"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ArrowUpRight, GitFork } from "lucide-react";
import ProjectVisual from "@/components/ProjectVisual";

// ─── Project data ─────────────────────────────────────────────────────────────

const projects = [
  {
    number: "01",
    name: "Promotions Aggregator",
    description: "Automated pipeline that scrapes, verifies, and tracks retail promotions across a multi-store mall. Includes background job processing, drift detection, and a live filterable UI.",
    capabilities: ["Data Pipeline", "Web Scraping", "Background Workers", "Full-Stack"],
    stack: ["Next.js", "Fastify", "BullMQ", "Playwright", "MySQL", "Docker"],
    repo: "https://github.com/salmern/salman-promotion-aggregator",
    live: null,
  },
  {
    number: "02",
    name: "Production Customer Support Agent",
    description: "Voice and text support agent for a B2B payments company. Resolves lookups, ticket creation, and escalations without human intervention using a deterministic decision engine.",
    capabilities: ["AI Systems", "Voice Interface", "API Integrations", "Human Escalation"],
    stack: ["Fastify", "Vapi", "Claude SDK", "MCP", "Supabase"],
    repo: "https://github.com/salmern/relaypay-support-agent",
    live: null,
  },
  {
    number: "03",
    name: "AI Lead Research & Outreach Agent",
    description: "Researches and qualifies B2B leads against a defined ICP, then produces review-ready outreach sequences. Humans approve before anything is sent.",
    capabilities: ["AI Systems", "Workflow Automation", "Human Approval", "Data Processing"],
    stack: ["Next.js", "Claude SDK", "Supabase", "Apify", "Firecrawl"],
    repo: "https://github.com/salmern/salman-koya-lead-outreach-agent",
    live: null,
  },
  {
    number: "04",
    name: "AI Proposal & Document Application",
    description: "Turns discovery-call notes into structured client proposals. AI drafts each section; humans review, revise, and approve before PDF generation and tracked email delivery.",
    capabilities: ["AI Systems", "Document Automation", "Human Approval", "Workflow Automation"],
    stack: ["Next.js", "Claude", "Supabase", "React PDF", "Resend"],
    repo: "https://github.com/salmern/koya-proposals",
    live: null,
  },
  {
    number: "05",
    name: "AI Content Research & Publishing Agent",
    description: "Research-to-publish pipeline for content teams. Sources articles, drafts copy grounded in reviewed sources, evaluates quality, and adapts for LinkedIn, X, and newsletter. Human-gated before publishing.",
    capabilities: ["AI Systems", "Workflow Automation", "Multi-Channel Publishing", "Human Approval"],
    stack: ["Next.js", "Claude", "Firecrawl", "Supabase", "TypeScript"],
    repo: "https://github.com/salmern/salman-koya-content-agent",
    live: null,
  },
  {
    number: "06",
    name: "Intelligent Invoice Processing",
    description: "Automated invoice ingestion, extraction, and processing pipeline. Reduces manual data entry and integrates with existing business workflows via n8n automation.",
    capabilities: ["Document Processing", "Workflow Automation", "API Integrations", "Data Extraction"],
    stack: ["Node.js", "Claude", "n8n", "TypeScript", "Supabase"],
    repo: null,
    live: null,
  },
  {
    number: "07",
    name: "AI Operations / Reporting System",
    description: "AI-powered reporting dashboard that connects to business data sources and generates structured summaries for operational decisions.",
    capabilities: ["AI Systems", "Data Processing", "Reporting", "Dashboard"],
    stack: ["Next.js", "Claude", "Supabase", "TypeScript"],
    repo: "https://github.com/salmern/Salman-AI-Reporting-dashboard",
    live: null,
  },
];

// ─── Project selector item ────────────────────────────────────────────────────

function SelectorItem({
  project,
  active,
  onClick,
}: {
  project: typeof projects[0];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3.5 border-l-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a2f] focus-visible:ring-offset-1 ${
        active
          ? "border-l-[#1e3a2f] bg-[#1e3a2f]/5"
          : "border-l-transparent hover:border-l-[#e0dbd4] hover:bg-[#f0ece6]/60"
      }`}
      aria-pressed={active}
    >
      <div className="flex items-start gap-3">
        <span className={`text-[10px] font-mono tracking-wider mt-0.5 flex-shrink-0 ${active ? "text-[#1e3a2f]" : "text-[#4a4a4a] opacity-35"}`}>
          {project.number}
        </span>
        <span className={`text-[13px] leading-snug font-normal ${active ? "text-[#1a1a1a]" : "text-[#4a4a4a]"}`}>
          {project.name}
        </span>
      </div>
    </button>
  );
}

// ─── Mobile selector (horizontal scroll) ─────────────────────────────────────

function MobileSelector({
  projects: list,
  activeIndex,
  onSelect,
}: {
  projects: typeof projects;
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex overflow-x-auto gap-2 pb-2 -mx-1 px-1 scrollbar-none" role="tablist" aria-label="Project selector">
      {list.map((p, i) => (
        <button
          key={p.number}
          onClick={() => onSelect(i)}
          role="tab"
          aria-selected={i === activeIndex}
          className={`flex-shrink-0 px-3.5 py-2 text-[11px] font-mono tracking-wide border transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a2f] ${
            i === activeIndex
              ? "border-[#1e3a2f] bg-[#1e3a2f] text-[#f9f7f4]"
              : "border-[#e0dbd4] text-[#4a4a4a] bg-transparent hover:border-[#4a4a4a]"
          }`}
        >
          {p.number}
        </button>
      ))}
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const showcaseRef = useRef<HTMLDivElement>(null);
  const showcaseInView = useInView(showcaseRef, { once: true, margin: "-60px" });

  const active = projects[activeIndex];

  const handleSelect = (i: number) => {
    if (i === activeIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(i);
      setAnimating(false);
    }, 180);
  };

  return (
    <section id="work" className="bg-[#f9f7f4] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

        {/* Section heading */}
        <div
          ref={headingRef}
          className={`mb-10 md:mb-14 transition-all duration-700 ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-[#1e3a2f]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#1e3a2f]">
              Selected Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="text-[36px] md:text-[48px] font-light text-[#1a1a1a] leading-tight">
              Things I&apos;ve built.
            </h2>
            <p className="text-[13px] text-[#4a4a4a] opacity-60 md:text-right">
              {projects.length} projects &mdash; select one to explore.
            </p>
          </div>
        </div>

        {/* ── Showcase ─────────────────────────────────────────────────────── */}
        <div
          ref={showcaseRef}
          className={`transition-all duration-700 ${
            showcaseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Mobile selector */}
          <div className="lg:hidden mb-5">
            <MobileSelector projects={projects} activeIndex={activeIndex} onSelect={handleSelect} />
          </div>

          {/* Desktop layout: selector left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#e0dbd4]">

            {/* ── Selector sidebar (desktop) ────────────────────────────── */}
            <div className="hidden lg:flex lg:col-span-3 flex-col border-r border-[#e0dbd4] bg-[#f9f7f4]" role="tablist" aria-label="Project selector">
              {projects.map((p, i) => (
                <SelectorItem
                  key={p.number}
                  project={p}
                  active={i === activeIndex}
                  onClick={() => handleSelect(i)}
                />
              ))}
            </div>

            {/* ── Content panel ────────────────────────────────────────── */}
            <div
              className={`lg:col-span-9 transition-opacity duration-180 ${animating ? "opacity-0" : "opacity-100"}`}
            >
              {/* Visual */}
              <ProjectVisual projectNumber={active.number} animKey={activeIndex} />

              {/* Project info */}
              <div className="p-6 md:p-8 border-t border-[#e0dbd4]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

                  {/* Left: name + description */}
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono text-[#4a4a4a] opacity-40 tracking-wider">
                        {active.number}
                      </span>
                      <span className="block w-4 h-px bg-[#e0dbd4]" aria-hidden="true" />
                      <span className="text-[10px] font-mono text-[#4a4a4a] opacity-40 tracking-wider">
                        {active.capabilities[0]}
                      </span>
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-normal text-[#1a1a1a] leading-snug mb-3">
                      {active.name}
                    </h3>
                    <p className="text-[14px] leading-[1.72] text-[#4a4a4a]">
                      {active.description}
                    </p>

                    {/* Capability labels */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {active.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-2.5 py-1 text-[10px] font-mono text-[#1e3a2f] bg-[#e8f0eb] border border-[#1e3a2f]/15 tracking-wide"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: stack + actions */}
                  <div className="md:col-span-5 flex flex-col gap-5 md:items-end md:justify-between">
                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-1.5 md:justify-end">
                      {active.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[9px] font-mono text-[#4a4a4a] bg-[#f0ece6] border border-[#e0dbd4] tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Repo link */}
                    <div className="flex flex-wrap items-center gap-4">
                      {active.repo && (
                        <a
                          href={active.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.12em] uppercase text-[#4a4a4a] border-b border-[#4a4a4a]/30 pb-0.5 hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors"
                        >
                          <GitFork size={11} />
                          Repository
                          <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Mobile project name (shown below selector chips) */}
          <div className="lg:hidden mt-4 mb-1">
            <p className="text-[11px] font-mono text-[#4a4a4a] opacity-50 tracking-wider">
              {activeIndex + 1} of {projects.length}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
