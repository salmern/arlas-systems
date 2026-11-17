"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";

const QUESTIONS = [
  {
    id: "type",
    question: "What best describes the problem you want to solve?",
    options: [
      "Manual processes taking too much staff time",
      "Systems and tools that don't share data",
      "Need a custom internal platform or tool",
      "AI automation opportunity in the business",
      "Something else",
    ],
  },
  {
    id: "industry",
    question: "What industry is your business in?",
    options: [
      "Financial services or fintech",
      "Real estate or property",
      "Professional services or consulting",
      "Retail or e-commerce",
      "Operations or logistics",
      "Other",
    ],
  },
  {
    id: "scale",
    question: "How much of your team's time does this problem affect?",
    options: [
      "A few hours per week",
      "Several hours per day",
      "It affects the whole operation",
      "Hard to quantify but it's significant",
    ],
  },
];

function Assessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const current = QUESTIONS[step];
  const isLast = step === QUESTIONS.length - 1;

  const handleSelect = (option: string) => {
    const updated = { ...answers, [current.id]: option };
    setAnswers(updated);
    if (isLast) {
      setSubmitted(true);
    } else {
      setStep(step + 1);
    }
  };

  if (submitted) {
    const subject = encodeURIComponent("Arlas Systems — Systems Assessment");
    const body = encodeURIComponent(
      `Hi,\n\nI completed the initial assessment on the Arlas Systems website.\n\nProblem type: ${answers.type}\nIndustry: ${answers.industry}\nScale: ${answers.scale}\n\nI'd like to discuss how Arlas Systems can help.\n\n`
    );

    return (
      <div className="border border-[#2d5240] p-7 md:p-8">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-6 rounded-full bg-[#1e3a2f] flex items-center justify-center flex-shrink-0">
            <Check size={12} className="text-[#f9f7f4]" />
          </div>
          <span className="text-[13px] font-medium text-[#f9f7f4]">Assessment complete</span>
        </div>
        <div className="space-y-2 mb-6">
          {Object.entries(answers).map(([key, val]) => {
            const q = QUESTIONS.find(q => q.id === key);
            return (
              <div key={key} className="flex gap-3">
                <span className="text-[10px] font-mono text-[#f9f7f4] opacity-30 w-20 flex-shrink-0 leading-relaxed">{key.toUpperCase()}</span>
                <span className="text-[12px] text-[#f9f7f4] opacity-65 leading-relaxed">{val}</span>
              </div>
            );
          })}
        </div>
        <a
          href={`mailto:salmanx550@gmail.com?subject=${subject}&body=${body}`}
          className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#f9f7f4] text-[#1a1a1a] text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-white transition-colors"
        >
          Send this to Arlas Systems
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    );
  }

  return (
    <div className="border border-[#2d2d2d]">
      {/* Progress */}
      <div className="flex border-b border-[#2d2d2d]">
        {QUESTIONS.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-0.5"
            style={{ background: i <= step ? "#1e3a2f" : "#2d2d2d" }}
          />
        ))}
      </div>

      <div className="p-6 md:p-7">
        <div className="text-[10px] font-mono text-[#f9f7f4] opacity-30 mb-4 tracking-wider">
          Question {step + 1} of {QUESTIONS.length}
        </div>
        <p className="text-[15px] text-[#f9f7f4] opacity-80 mb-5 leading-snug">
          {current.question}
        </p>
        <div className="space-y-2">
          {current.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full text-left px-4 py-3 border border-[#2d2d2d] text-[13px] text-[#f9f7f4] opacity-60 hover:opacity-100 hover:border-[#3d6b52] hover:bg-[#1e3a2f]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d6b52]"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [showAssessment, setShowAssessment] = useState(false);

  return (
    <section id="contact" className="bg-[#1e3a2f] py-24 md:py-36 overflow-hidden relative">
      {/* Brand watermark */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[300px] md:w-[420px] opacity-[0.06] pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <img src="/arlas-stacked-dark.svg" alt="" width={460} height={267} className="absolute top-10 right-0 w-full h-auto" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
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
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#3d6b52]">Contact</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left — heading + direct contact */}
            <div className="lg:col-span-6">
              <h2 className="text-[40px] sm:text-[52px] md:text-[60px] font-light text-[#f9f7f4] leading-[1.06] mb-7">
                Tell us what your<br />business needs.
              </h2>
              <p className="text-[16px] leading-[1.72] text-[#f9f7f4] opacity-60 mb-8 max-w-md">
                If you have a process that takes too long, systems that don&apos;t talk to each other, or an operational problem that software should be solving — that&apos;s worth a conversation.
              </p>

              <div className="space-y-5 mb-8 pt-7 border-t border-[#f9f7f4]/10">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#f9f7f4] opacity-30 mb-1.5">Email</p>
                  <a href="mailto:salmanx550@gmail.com" className="text-[14px] text-[#f9f7f4] opacity-65 hover:opacity-100 transition-opacity">
                    salmanx550@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#f9f7f4] opacity-30 mb-1.5">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/salman-muhammad-yahya-743a53141" target="_blank" rel="noopener noreferrer"
                    className="text-[14px] text-[#f9f7f4] opacity-65 hover:opacity-100 transition-opacity">
                    linkedin.com/in/salman-muhammad-yahya
                  </a>
                </div>
              </div>

              <a
                href="mailto:salmanx550@gmail.com"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#f9f7f4] text-[#1a1a1a] text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-white transition-colors"
              >
                Send a direct message
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Right — assessment entry */}
            <div className="lg:col-span-6">
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#3d6b52] mb-2">
                  Not sure where to start?
                </div>
                <h3 className="text-[20px] font-light text-[#f9f7f4] mb-3">
                  Start with a quick assessment
                </h3>
                <p className="text-[13px] leading-[1.7] text-[#f9f7f4] opacity-50 mb-5">
                  Three questions about your business and the problem. Takes about two minutes. We&apos;ll use your answers to make the conversation useful from the first exchange.
                </p>
              </div>

              {showAssessment ? (
                <Assessment />
              ) : (
                <button
                  onClick={() => setShowAssessment(true)}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 border border-[#f9f7f4]/25 text-[#f9f7f4] text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-[#f9f7f4]/10 transition-colors"
                >
                  Start the assessment
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}

              {!showAssessment && (
                <p className="mt-4 text-[11px] font-mono text-[#f9f7f4] opacity-25">
                  Three questions · No obligation · Your answers go directly to us
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
