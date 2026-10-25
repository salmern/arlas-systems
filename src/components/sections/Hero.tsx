"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll(".animated-path");
    paths?.forEach((path, i) => {
      const el = path as SVGPathElement;
      const len = el.getTotalLength?.() ?? 200;
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len);
      el.style.animation = `none`;
      setTimeout(() => {
        el.style.transition = `stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1) ${i * 0.3 + 0.8}s`;
        el.style.strokeDashoffset = "0";
      }, 50);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f9f7f4]"
      aria-label="Hero"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 system-grid opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* System diagram visual */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-[680px] h-[580px] pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <svg
          ref={svgRef}
          viewBox="0 0 600 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Core nodes */}
          {/* Central orchestrator */}
          <rect x="230" y="200" width="140" height="56" rx="4" fill="#1e3a2f" opacity="0.06" stroke="#1e3a2f" strokeWidth="1.2" />
          <text x="300" y="222" textAnchor="middle" fill="#1e3a2f" fontSize="9" fontFamily="monospace" opacity="0.7">ORCHESTRATOR</text>
          <text x="300" y="238" textAnchor="middle" fill="#1e3a2f" fontSize="8" fontFamily="monospace" opacity="0.5">core system</text>

          {/* API Gateway top */}
          <rect x="60" y="60" width="120" height="50" rx="4" fill="#1e3a2f" opacity="0.04" stroke="#1e3a2f" strokeWidth="1" />
          <text x="120" y="81" textAnchor="middle" fill="#1e3a2f" fontSize="9" fontFamily="monospace" opacity="0.65">API GATEWAY</text>
          <text x="120" y="97" textAnchor="middle" fill="#1e3a2f" fontSize="7.5" fontFamily="monospace" opacity="0.45">ingress / auth</text>

          {/* Database */}
          <rect x="420" y="60" width="120" height="50" rx="4" fill="#1e3a2f" opacity="0.04" stroke="#1e3a2f" strokeWidth="1" />
          <text x="480" y="81" textAnchor="middle" fill="#1e3a2f" fontSize="9" fontFamily="monospace" opacity="0.65">DATABASE</text>
          <text x="480" y="97" textAnchor="middle" fill="#1e3a2f" fontSize="7.5" fontFamily="monospace" opacity="0.45">postgres / redis</text>

          {/* Payment processor */}
          <rect x="60" y="370" width="130" height="50" rx="4" fill="#1e3a2f" opacity="0.04" stroke="#1e3a2f" strokeWidth="1" />
          <text x="125" y="391" textAnchor="middle" fill="#1e3a2f" fontSize="9" fontFamily="monospace" opacity="0.65">PAYMENTS</text>
          <text x="125" y="407" textAnchor="middle" fill="#1e3a2f" fontSize="7.5" fontFamily="monospace" opacity="0.45">processing layer</text>

          {/* Worker queue */}
          <rect x="410" y="370" width="130" height="50" rx="4" fill="#1e3a2f" opacity="0.04" stroke="#1e3a2f" strokeWidth="1" />
          <text x="475" y="391" textAnchor="middle" fill="#1e3a2f" fontSize="9" fontFamily="monospace" opacity="0.65">WORKERS</text>
          <text x="475" y="407" textAnchor="middle" fill="#1e3a2f" fontSize="7.5" fontFamily="monospace" opacity="0.45">async / queue</text>

          {/* External integrations */}
          <rect x="230" y="400" width="140" height="50" rx="4" fill="#1e3a2f" opacity="0.04" stroke="#1e3a2f" strokeWidth="1" />
          <text x="300" y="421" textAnchor="middle" fill="#1e3a2f" fontSize="9" fontFamily="monospace" opacity="0.65">INTEGRATIONS</text>
          <text x="300" y="437" textAnchor="middle" fill="#1e3a2f" fontSize="7.5" fontFamily="monospace" opacity="0.45">third-party APIs</text>

          {/* Paths — animated */}
          {/* API Gateway → Orchestrator */}
          <path
            className="animated-path"
            d="M180 85 L230 228"
            stroke="#1e3a2f"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.3"
          />
          {/* Database → Orchestrator */}
          <path
            className="animated-path"
            d="M420 85 L370 228"
            stroke="#1e3a2f"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.3"
          />
          {/* Orchestrator → Payments */}
          <path
            className="animated-path"
            d="M253 256 L190 370"
            stroke="#1e3a2f"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.3"
          />
          {/* Orchestrator → Workers */}
          <path
            className="animated-path"
            d="M347 256 L410 370"
            stroke="#1e3a2f"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.3"
          />
          {/* Orchestrator → Integrations */}
          <path
            className="animated-path"
            d="M300 256 L300 400"
            stroke="#1e3a2f"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.3"
          />
          {/* API Gateway → Database */}
          <path
            className="animated-path"
            d="M180 85 L420 85"
            stroke="#1e3a2f"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.2"
          />

          {/* Pulse dots on nodes */}
          <circle cx="300" cy="228" r="3" fill="#1e3a2f" opacity="0.5">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="120" cy="85" r="2.5" fill="#1e3a2f" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.1s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="480" cy="85" r="2.5" fill="#1e3a2f" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.7s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="125" cy="395" r="2.5" fill="#1e3a2f" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="475" cy="395" r="2.5" fill="#1e3a2f" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.9s" repeatCount="indefinite" begin="0.8s" />
          </circle>
          <circle cx="300" cy="425" r="2.5" fill="#1e3a2f" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.3s" repeatCount="indefinite" begin="1.2s" />
          </circle>

          {/* Moving data packet simulation */}
          <circle r="3" fill="#1e3a2f" opacity="0.6">
            <animateMotion dur="4s" repeatCount="indefinite" path="M180 85 L253 256" />
          </circle>
          <circle r="2.5" fill="#1e3a2f" opacity="0.5">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="1s" path="M420 85 L347 256" />
          </circle>
          <circle r="2.5" fill="#1e3a2f" opacity="0.4">
            <animateMotion dur="4.5s" repeatCount="indefinite" begin="2s" path="M300 256 L300 400" />
          </circle>
        </svg>
      </div>

      {/* Mobile pattern */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 lg:hidden pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to left, rgba(30,58,47,0.04) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-28 pb-20 md:pt-36 md:pb-28 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="block w-6 h-px bg-[#1e3a2f]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#1e3a2f]">
              Forward Deployed Engineering
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-[42px] sm:text-[52px] md:text-[60px] lg:text-[68px] font-light leading-[1.08] text-[#1a1a1a] text-balance opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Engineering the systems
            <br />
            <em className="not-italic font-normal text-[#1e3a2f]">
              businesses depend on.
            </em>
          </h1>

          {/* Sub */}
          <p
            className="mt-7 text-[17px] md:text-[18px] leading-[1.65] text-[#4a4a4a] max-w-[460px] text-pretty opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
          >
            I work directly with businesses to solve difficult technical problems,
            build solutions around their needs, and get those solutions working
            reliably in production.
          </p>

          {/* Credibility line */}
          <p
            className="mt-4 text-[13px] text-[#4a4a4a] opacity-0 animate-fade-up max-w-[420px]"
            style={{ animationDelay: "0.52s", animationFillMode: "forwards" }}
          >
           
          </p>

          {/* Title line */}
          <div
            className="mt-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
          >
            <p className="text-[11px] font-mono tracking-[0.15em] text-[#4a4a4a] uppercase"
              style={{ opacity: 0.5 }}>
              Senior Software Engineer · Forward-Deployed Engineer
            </p>
          </div>

          {/* CTAs */}
          <div
            className="mt-6 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
          >
            <a
              href="#current-work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#current-work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1e3a2f] text-[#f9f7f4] text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-[#2d5240] transition-colors duration-200"
            >
              View My Work
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#1a1a1a] text-[#1a1a1a] text-[13px] font-medium tracking-[0.1em] uppercase hover:bg-[#1a1a1a] hover:text-[#f9f7f4] transition-colors duration-200"
            >
              Let&#39;s Talk
            </a>
          </div>

          {/* Focus tags — production credentials */}
          <div
            className="mt-12 pt-8 border-t border-[#e0dbd4] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.75s", animationFillMode: "forwards" }}
          >
            <div className="flex flex-wrap gap-x-5 gap-y-2 items-center">
              {[
                "Backend & Fintech",
                "AI Systems",
                "Full-Stack Engineering",
              ].map((tag, i) => (
                <span
                  key={tag}
                  className="flex items-center gap-3 text-[12px] text-[#4a4a4a] tracking-wide"
                >
                  {i > 0 && (
                    <span
                      className="block w-1 h-1 rounded-full bg-[#1e3a2f] opacity-40"
                      aria-hidden="true"
                    />
                  )}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up hidden md:flex"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#4a4a4a] opacity-60">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#4a4a4a]/40 to-transparent" />
      </div>
    </section>
  );
}
