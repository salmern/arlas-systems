"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const PROBLEM_TYPES = [
  "Manual processes taking too much staff time",
  "Systems and tools that don't share data",
  "Need a custom platform or internal tool",
  "AI or automation opportunity",
  "Something else",
];

const INDUSTRIES = [
  "Financial services / fintech",
  "Real estate / property",
  "Professional services",
  "Retail / e-commerce",
  "Operations / logistics",
  "Healthcare",
  "Other",
];

type Fields = { name: string; org: string; industry: string; problemType: string; description: string };
type Errors = Partial<Record<keyof Fields, string>>;

function EnquiryForm() {
  const [fields, setFields] = useState<Fields>({ name: "", org: "", industry: "", problemType: "", description: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields, v: string) => {
    setFields(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Errors = {};
    if (!fields.name.trim()) errs.name = "Required";
    if (!fields.problemType) errs.problemType = "Please select one";
    if (!fields.description.trim()) errs.description = "Required";
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const subject = encodeURIComponent("Arlas Systems — Project Enquiry");
    const body = encodeURIComponent(
      `Name: ${fields.name}\nOrganisation: ${fields.org || "—"}\nIndustry: ${fields.industry || "—"}\nProblem: ${fields.problemType}\n\n${fields.description}`
    );
    window.location.href = `mailto:salmanx550@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) return (
    <div className="border border-[#2d5240]/40 p-7 md:p-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-5 h-5 rounded-full bg-[#1e3a2f] flex items-center justify-center flex-shrink-0">
          <Check size={11} className="text-[#f9f7f4]" />
        </div>
        <span className="text-[13px] text-[#f9f7f4]">Your email client has opened with a pre-filled message.</span>
      </div>
      <p className="text-[12px] text-[#f9f7f4] opacity-35 mb-4">Review and send it when ready.</p>
      <button onClick={() => setSent(false)} className="text-[11px] font-mono text-[#f9f7f4] opacity-25 hover:opacity-50 transition-opacity">
        Start over →
      </button>
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      {/* Name + Org */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {([
          { key: "name" as const, label: "Name", required: true, placeholder: "Your name" },
          { key: "org"  as const, label: "Organisation", required: false, placeholder: "Company or business" },
        ]).map(({ key, label, required, placeholder }) => (
          <div key={key}>
            <label className="block text-[10px] font-mono tracking-[0.15em] uppercase text-[#f9f7f4] opacity-40 mb-1.5">
              {label}{required && <span className="text-[#4a7c5f] ml-0.5">*</span>}
            </label>
            <input
              type="text" value={fields[key]} onChange={e => set(key, e.target.value)}
              placeholder={placeholder}
              className={`w-full bg-transparent border px-3.5 py-2.5 text-[13px] text-[#f9f7f4] placeholder-[#f9f7f4]/15 focus:outline-none focus:border-[#4a7c5f] transition-colors ${errors[key] ? "border-[#e07040]" : "border-[#2a2a28]"}`}
            />
            {errors[key] && <p className="text-[10px] text-[#e07040] mt-1">{errors[key]}</p>}
          </div>
        ))}
      </div>

      {/* Problem type */}
      <div>
        <label className="block text-[10px] font-mono tracking-[0.15em] uppercase text-[#f9f7f4] opacity-40 mb-2">
          What best describes the problem?<span className="text-[#4a7c5f] ml-0.5">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {PROBLEM_TYPES.map(opt => (
            <button key={opt} type="button"
              onClick={() => set("problemType", opt)}
              className={`text-[11px] px-3 py-1.5 border transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4a7c5f] ${
                fields.problemType === opt
                  ? "border-[#4a7c5f] bg-[#1e3a2f]/30 text-[#f9f7f4]"
                  : "border-[#2a2a28] text-[#f9f7f4] opacity-40 hover:opacity-70"
              }`}>
              {opt}
            </button>
          ))}
        </div>
        {errors.problemType && <p className="text-[10px] text-[#e07040] mt-1">{errors.problemType}</p>}
      </div>

      {/* Industry */}
      <div>
        <label className="block text-[10px] font-mono tracking-[0.15em] uppercase text-[#f9f7f4] opacity-40 mb-2">Industry</label>
        <div className="flex flex-wrap gap-2">
          {INDUSTRIES.map(opt => (
            <button key={opt} type="button"
              onClick={() => set("industry", fields.industry === opt ? "" : opt)}
              className={`text-[11px] px-3 py-1.5 border transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4a7c5f] ${
                fields.industry === opt
                  ? "border-[#4a7c5f] bg-[#1e3a2f]/30 text-[#f9f7f4]"
                  : "border-[#2a2a28] text-[#f9f7f4] opacity-40 hover:opacity-70"
              }`}>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-[10px] font-mono tracking-[0.15em] uppercase text-[#f9f7f4] opacity-40 mb-1.5">
          Brief description<span className="text-[#4a7c5f] ml-0.5">*</span>
        </label>
        <textarea rows={3} value={fields.description} onChange={e => set("description", e.target.value)}
          placeholder="Describe the challenge, the process or the system you need built."
          className={`w-full bg-transparent border px-3.5 py-2.5 text-[13px] text-[#f9f7f4] placeholder-[#f9f7f4]/15 focus:outline-none focus:border-[#4a7c5f] transition-colors resize-none ${errors.description ? "border-[#e07040]" : "border-[#2a2a28]"}`}
        />
        {errors.description && <p className="text-[10px] text-[#e07040] mt-1">{errors.description}</p>}
      </div>

      <div className="flex items-center gap-4 pt-1">
        <button type="submit"
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#f9f7f4] text-[#111110] text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-white transition-colors">
          Send enquiry
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
        <p className="text-[10px] font-mono text-[#f9f7f4] opacity-20">Opens your email client</p>
      </div>
    </form>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="contact" className="bg-[#1e3a2f] py-24 md:py-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 bottom-0 w-[280px] md:w-[380px] opacity-[0.05] pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <img src="/arlas-stacked-dark.svg" alt="" width={460} height={267} className="absolute top-10 right-0 w-full h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left */}
            <div className="lg:col-span-5">
              <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#4a7c5f] mb-8">Get in Touch</p>
              <h2 className="font-display text-[36px] sm:text-[46px] md:text-[52px] font-normal italic text-[#f9f7f4] leading-[1.07] mb-6">
                Let&apos;s make your<br />business work better.
              </h2>
              <p className="text-[14px] leading-[1.72] text-[#f9f7f4] opacity-50 max-w-sm">
                Tell us about an operational challenge, a process you&apos;d like to improve or a system you need built.
              </p>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
