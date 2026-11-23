"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const principles = [
  {
    number: "01",
    title: "Understand before building",
    body: "The problem always comes before the solution. We learn how the business works before deciding what needs to change.",
  },
  {
    number: "02",
    title: "Right solution, not latest technology",
    body: "We don't apply AI to every problem. We choose the most appropriate approach — whether that's automation, an integration, or better software.",
  },
  {
    number: "03",
    title: "Built for real operations",
    body: "Every solution is designed around actual business needs — real workloads, real constraints and long-term reliability.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const principlesRef = useRef<HTMLDivElement>(null);
  const principlesInView = useInView(principlesRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="bg-[#f9f7f4] overflow-hidden">

      {/* Top band — dark, editorial headline */}
      <div className="bg-[#1a1a1a] py-16 md:py-24">
        <div
          ref={ref}
          className={`max-w-7xl mx-auto px-6 md:px-10 lg:px-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-[#3d6b52]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#3d6b52]">About Arlas Systems</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-[34px] md:text-[50px] lg:text-[56px] font-light text-[#f9f7f4] leading-[1.08] mb-0">
                Technology should make running a business easier.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-2 flex flex-col justify-end">
              <p className="text-[15px] md:text-[16px] leading-[1.78] text-[#f9f7f4] opacity-55">
                Businesses shouldn&apos;t have to spend their time managing disconnected tools,
                repeating manual processes or working around systems that don&apos;t communicate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main body — ivory */}
      <div className="bg-[#f9f7f4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left — decorative system diagram */}
            <div className="lg:col-span-5">
              <SystemDiagram />
            </div>

            {/* Right — copy */}
            <div className="lg:col-span-7">
              <p className="text-[16px] md:text-[17px] leading-[1.78] text-[#1a1a1a] mb-8">
                Arlas Systems helps businesses rethink how work gets done. By combining
                software, AI, automation and integrations, we build practical solutions
                that simplify operations, improve efficiency and create room for growth.
              </p>
              <p className="text-[15px] leading-[1.78] text-[#4a4a4a]">
                We don&apos;t start with technology. We start with the problem — and choose
                the most appropriate solution from there, whether that&apos;s AI, better
                software, a smarter integration or simply connecting systems that should
                already work together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Principles — warm background */}
      <div className="bg-[#f0ece6] py-16 md:py-20 border-t border-[#e0dbd4]">
        <div
          ref={principlesRef}
          className={`max-w-7xl mx-auto px-6 md:px-10 lg:px-16 transition-all duration-700 ${principlesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#1e3a2f] mb-10">
            Our principles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {principles.map((p, i) => (
              <div
                key={p.number}
                className={`py-8 md:py-0 md:px-8 border-b md:border-b-0 md:border-r border-[#d8d2cb] last:border-0 first:pl-0 ${i === principles.length - 1 ? "pr-0" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-[11px] font-mono text-[#4a4a4a] opacity-35 tracking-wider mb-4 block">{p.number}</span>
                <h3 className="text-[16px] font-medium text-[#1a1a1a] mb-3 leading-snug">{p.title}</h3>
                <p className="text-[13px] leading-[1.72] text-[#4a4a4a] opacity-80">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

// ─── Abstract system diagram ──────────────────────────────────────────────────

function SystemDiagram() {
  const G = "#1e3a2f";
  const BORDER = "rgba(30,58,47,0.2)";
  const DIM = "rgba(30,58,47,0.4)";

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ aspectRatio: "4/3", background: "#ede8e1", border: `1px solid ${BORDER}` }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(4px)} }
        @keyframes pathDraw { from{stroke-dashoffset:300} to{stroke-dashoffset:0} }
        @keyframes dotPulse { 0%,100%{opacity:0.4;r:3} 50%{opacity:1;r:4.5} }
        .float-a { animation: floatA 4s ease-in-out infinite; }
        .float-b { animation: floatB 5s ease-in-out infinite; }
        .path-draw { stroke-dasharray:300; animation: pathDraw 2.5s ease forwards 0.3s; }
        .dot-pulse { animation: dotPulse 2s ease-in-out infinite; }
      `}</style>

      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-6">
        {/* Background grid */}
        <defs>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={G} strokeWidth="0.3" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#smallGrid)" />

        {/* Business operations nodes */}
        <g className="float-a">
          <rect x="20" y="40" width="80" height="34" rx="3" fill="white" stroke={BORDER} strokeWidth="1.2" />
          <text x="60" y="54" textAnchor="middle" fill={DIM} fontSize="8" fontFamily="monospace">CRM</text>
          <text x="60" y="66" textAnchor="middle" fill={DIM} fontSize="7" fontFamily="monospace">customer data</text>
        </g>

        <g className="float-b">
          <rect x="20" y="110" width="80" height="34" rx="3" fill="white" stroke={BORDER} strokeWidth="1.2" />
          <text x="60" y="124" textAnchor="middle" fill={DIM} fontSize="8" fontFamily="monospace">Finance</text>
          <text x="60" y="136" textAnchor="middle" fill={DIM} fontSize="7" fontFamily="monospace">invoices · reports</text>
        </g>

        <g className="float-a" style={{ animationDelay: "1s" }}>
          <rect x="20" y="180" width="80" height="34" rx="3" fill="white" stroke={BORDER} strokeWidth="1.2" />
          <text x="60" y="194" textAnchor="middle" fill={DIM} fontSize="8" fontFamily="monospace">Operations</text>
          <text x="60" y="206" textAnchor="middle" fill={DIM} fontSize="7" fontFamily="monospace">workflows · tasks</text>
        </g>

        {/* Central hub */}
        <g className="float-b" style={{ animationDelay: "0.5s" }}>
          <rect x="155" y="108" width="90" height="60" rx="4" fill={G} fillOpacity="0.08" stroke={G} strokeWidth="1.5" />
          <text x="200" y="132" textAnchor="middle" fill={G} fontSize="9" fontFamily="monospace" fontWeight="bold">ARLAS</text>
          <text x="200" y="146" textAnchor="middle" fill={G} fontSize="7.5" fontFamily="monospace" opacity="0.7">software · AI · automation</text>
          <text x="200" y="158" textAnchor="middle" fill={G} fontSize="7.5" fontFamily="monospace" opacity="0.7">integrations</text>
        </g>

        {/* Output nodes */}
        <g className="float-a" style={{ animationDelay: "0.8s" }}>
          <rect x="300" y="50" width="80" height="34" rx="3" fill={G} fillOpacity="0.07" stroke={G} strokeWidth="1" strokeOpacity="0.4" />
          <text x="340" y="64" textAnchor="middle" fill={G} fontSize="8" fontFamily="monospace" opacity="0.8">Automated</text>
          <text x="340" y="76" textAnchor="middle" fill={G} fontSize="7" fontFamily="monospace" opacity="0.6">workflows</text>
        </g>

        <g className="float-b" style={{ animationDelay: "1.5s" }}>
          <rect x="300" y="118" width="80" height="34" rx="3" fill={G} fillOpacity="0.07" stroke={G} strokeWidth="1" strokeOpacity="0.4" />
          <text x="340" y="132" textAnchor="middle" fill={G} fontSize="8" fontFamily="monospace" opacity="0.8">Connected</text>
          <text x="340" y="144" textAnchor="middle" fill={G} fontSize="7" fontFamily="monospace" opacity="0.6">systems</text>
        </g>

        <g className="float-a" style={{ animationDelay: "2s" }}>
          <rect x="300" y="186" width="80" height="34" rx="3" fill={G} fillOpacity="0.07" stroke={G} strokeWidth="1" strokeOpacity="0.4" />
          <text x="340" y="200" textAnchor="middle" fill={G} fontSize="8" fontFamily="monospace" opacity="0.8">Smarter</text>
          <text x="340" y="212" textAnchor="middle" fill={G} fontSize="7" fontFamily="monospace" opacity="0.6">operations</text>
        </g>

        {/* Connecting lines — left to hub */}
        <path className="path-draw" d="M100 57 Q128 57 155 128" stroke={G} strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
        <path className="path-draw" d="M100 127 L155 138" stroke={G} strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
        <path className="path-draw" d="M100 197 Q128 197 155 150" stroke={G} strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />

        {/* Connecting lines — hub to right */}
        <path className="path-draw" d="M245 128 Q272 128 300 67" stroke={G} strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
        <path className="path-draw" d="M245 138 L300 135" stroke={G} strokeWidth="1.2" strokeDasharray="none" opacity="0.5" />
        <path className="path-draw" d="M245 150 Q272 150 300 203" stroke={G} strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />

        {/* Pulse dots */}
        <circle className="dot-pulse" cx="200" cy="138" r="3" fill={G} />
        <circle cx="60" cy="57" r="2.5" fill={G} opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="340" cy="135" r="2.5" fill={G} opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" begin="0.5s" />
        </circle>
      </svg>

      {/* Caption */}
      <div className="absolute bottom-3 right-4">
        <span className="font-mono text-[8px] tracking-wider" style={{ color: G, opacity: 0.35 }}>
          CONNECTED OPERATIONS
        </span>
      </div>
    </div>
  );
}
