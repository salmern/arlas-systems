"use client";

const items = [
  "Business Automation",
  "AI Agents",
  "Systems Integration",
  "Software & Systems",
  "Workflow Automation",
  "Payment Infrastructure",
  "Document Processing",
  "Operational Platforms",
  "Data Pipelines",
  "Custom Software",
];

export default function MarqueeStrip() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="bg-[#1e3a2f] py-3.5 overflow-hidden select-none border-y border-[#1e3a2f]"
      aria-hidden="true"
    >
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        .marquee-track { animation: marquee 32s linear infinite; display: flex; width: max-content; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
      `}</style>

      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-6">
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#f9f7f4] opacity-70 whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#6FA88B] opacity-60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
