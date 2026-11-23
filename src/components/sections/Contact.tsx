"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

// ─── Enquiry form ─────────────────────────────────────────────────────────────

const PROBLEM_TYPES = [
  "Manual processes taking too much staff time",
  "Systems and tools that don't share data",
  "Need a custom platform or internal tool",
  "AI or automation opportunity in the business",
  "Something else",
];

const INDUSTRIES = [
  "Financial services or fintech",
  "Real estate or property",
  "Professional services",
  "Retail or e-commerce",
  "Operations or logistics",
  "Healthcare",
  "Other",
];

function EnquiryForm() {
  const [step, setStep] = useState<"form" | "sent">("form");
  const [fields, setFields] = useState({
    name: "",
    organisation: "",
    problemType: "",
    industry: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = "Required";
    if (!fields.problemType) e.problemType = "Please select one";
    if (!fields.description.trim()) e.description = "Required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const subject = encodeURIComponent("Arlas Systems — Project Enquiry");
    const body = encodeURIComponent(
      `Name: ${fields.name}\nOrganisation: ${fields.organisation || "—"}\nIndustry: ${fields.industry || "—"}\nProblem type: ${fields.problemType}\n\n${fields.description}`
    );
    window.location.href = `mailto:hello@arlassystems.com?subject=${subject}&body=${body}`;
    setStep("sent");
  };

  if (step === "sent") {
    return (
      <div className="border border-[#2d5240] p-7">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 rounded-full bg-[#1e3a2f] flex items-center justify-center flex-shrink-0">
            <Check size={12} className="text-[#f9f7f4]" />
          </div>
          <span className="text-[14px] text-[#f9f7f4]">Your email client has opened with a pre-filled message.</span>
        </div>
        <p className="text-[13px] text-[#f9f7f4] opacity-45 leading-relaxed">
          Review and send it when ready. We&apos;ll respond within one business day.
        </p>
        <button
          onClick={() => setStep("form")}
          className="mt-5 text-[11px] font-mono text-[#f9f7f4] opacity-30 hover:opacity-60 transition-opacity"
        >
          Start again →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-mono tracking-[0.15em] uppercase text-[#f9f7f4] opacity-45 mb-1.5">
            Name <span className="text-[#6FA88B]">*</span>
          </label>
          <input
            type="text"
            value={fields.name}
            onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
            className={`w-full bg-transparent border px-3.5 py-2.5 text-[13px] text-[#f9f7f4] placeholder-[#f9f7f4]/20 focus:outline-none focus:border-[#3d6b52] transition-colors ${errors.name ? "border-[#e07040]" : "border-[#2d2d2d]"}`}
            placeholder="Your name"
          />
          {errors.name && <p className="text-[10px] text-[#e07040] mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-[10px] font-mono tracking-[0.15em] uppercase text-[#f9f7f4] opacity-45 mb-1.5">
            Organisation
          </label>
          <input
            type="text"
            value={fields.organisation}
            onChange={e => setFields(f => ({ ...f, organisation: e.target.value }))}
            className="w-full bg-transparent border border-[#2d2d2d] px-3.5 py-2.5 text-[13px] text-[#f9f7f4] placeholder-[#f9f7f4]/20 focus:outline-none focus:border-[#3d6b52] transition-colors"
            placeholder="Company or business name"
          />
        </div>
      </div>

      {/* Problem type */}
      <div>
        <label className="block text-[10px] font-mono tracking-[0.15em] uppercase text-[#f9f7f4] opacity-45 mb-1.5">
          What best describes the problem? <span className="text-[#6FA88B]">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {PROBLEM_TYPES.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => { setFields(f => ({ ...f, problemType: opt })); setErrors(er => ({ ...er, problemType: "" })); }}
              className={`text-[11px] px-3 py-1.5 border transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3d6b52] ${
                fields.problemType === opt
                  ? "border-[#3d6b52] bg-[#1e3a2f]/40 text-[#f9f7f4]"
                  : "border-[#2d2d2d] text-[#f9f7f4] opacity-45 hover:opacity-80 hover:border-[#3d2d2d]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {errors.problemType && <p className="text-[10px] text-[#e07040] mt-1">{errors.problemType}</p>}
      </div>

      {/* Industry */}
      <div>
        <label className="block text-[10px] font-mono tracking-[0.15em] uppercase text-[#f9f7f4] opacity-45 mb-1.5">
          Industry
        </label>
        <div className="flex flex-wrap gap-2">
          {INDUSTRIES.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => setFields(f => ({ ...f, industry: f.industry === opt ? "" : opt }))}
              className={`text-[11px] px-3 py-1.5 border transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3d6b52] ${
                fields.industry === opt
                  ? "border-[#3d6b52] bg-[#1e3a2f]/40 text-[#f9f7f4]"
                  : "border-[#2d2d2d] text-[#f9f7f4] opacity-45 hover:opacity-80"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-[10px] font-mono tracking-[0.15em] uppercase text-[#f9f7f4] opacity-45 mb-1.5">
          Tell us more <span className="text-[#6FA88B]">*</span>
        </label>
        <textarea
          rows={3}
          value={fields.description}
          onChange={e => setFields(f => ({ ...f, description: e.target.value }))}
          className={`w-full bg-transparent border px-3.5 py-2.5 text-[13px] text-[#f9f7f4] placeholder-[#f9f7f4]/20 focus:outline-none focus:border-[#3d6b52] transition-colors resize-none ${errors.description ? "border-[#e07040]" : "border-[#2d2d2d]"}`}
          placeholder="Describe the operational challenge, the process or the system you need built."
        />
        {errors.description && <p className="text-[10px] text-[#e07040] mt-1">{errors.description}</p>}
      </div>

      <div className="flex items-center gap-4 pt-1">
        <button
          type="submit"
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#f9f7f4] text-[#1a1a1a] text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-white transition-colors"
        >
          Send enquiry
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
        <p className="text-[10px] font-mono text-[#f9f7f4] opacity-25">
          Opens your email client · No forms backend
        </p>
      </div>
    </form>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-[#1e3a2f] py-24 md:py-32 overflow-hidden relative">
      {/* Brand watermark */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[300px] md:w-[420px] opacity-[0.06] pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <img src="/arlas-stacked-dark.svg" alt="" width={460} height={267} className="absolute top-10 right-0 w-full h-auto" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(to right, #f9f7f4 1px, transparent 1px), linear-gradient(to bottom, #f9f7f4 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-8 h-px bg-[#3d6b52]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#3d6b52]">Get in Touch</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left — heading */}
            <div className="lg:col-span-5">
              <h2 className="text-[38px] sm:text-[48px] md:text-[54px] font-light text-[#f9f7f4] leading-[1.07] mb-6">
                Let&apos;s make your business work better.
              </h2>
              <p className="text-[15px] leading-[1.72] text-[#f9f7f4] opacity-55 mb-10 max-w-sm">
                Tell us about an operational challenge, a process you&apos;d like to improve or a system you need built.
              </p>

              {/* Contact note */}
              <div className="border-t border-[#f9f7f4]/10 pt-8 space-y-4">
                <div>
                  <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#f9f7f4] opacity-30 mb-1">
                    Company email
                  </p>
                  <p className="text-[13px] font-mono text-[#f9f7f4] opacity-35">
                    hello@arlassystems.com
                  </p>
                  <p className="text-[10px] font-mono text-[#f9f7f4] opacity-20 mt-0.5">
                    Domain mailbox — configuring shortly
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#f9f7f4] opacity-30 mb-1">
                    Company LinkedIn
                  </p>
                  <p className="text-[13px] font-mono text-[#f9f7f4] opacity-35">
                    Arlas Systems page — coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Right — enquiry form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
