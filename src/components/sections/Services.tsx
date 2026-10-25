"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

const services = [
  {
    number: "01",
    title: "Forward-Deployed Engineering",
    description:
      "Work directly with your team to understand difficult problems and engineer solutions that fit your business.",
    detail: "The primary way I work with clients.",
    primary: true,
  },
  {
    number: "02",
    title: "Backend Engineering",
    description:
      "APIs, databases, queues, and backend services designed for real workloads.",
    detail: "Node.js · TypeScript · Python · PostgreSQL · Redis",
    primary: false,
  },
  {
    number: "03",
    title: "Full-Stack Engineering",
    description:
      "Complete software products, from backend architecture to user interface.",
    detail: "Next.js · React · TypeScript · Supabase",
    primary: false,
  },
  {
    number: "04",
    title: "Fintech Infrastructure",
    description:
      "Payment processing, transaction systems, integrations, and reconciliation.",
    detail: "ZainPay · ZainPOS · Cross-border payments · Reconciliation",
    primary: false,
  },
  {
    number: "05",
    title: "AI Systems & Automation",
    description:
      "AI agents and automation workflows designed for practical business operations.",
    detail: "Claude · Anthropic SDK · MCP · Vapi · n8n",
    primary: false,
  },
  {
    number: "06",
    title: "System Integrations",
    description:
      "Connect platforms and APIs, handle edge cases, and keep data flowing correctly.",
    detail: "Third-party APIs · Webhooks · ETL · Middleware",
    primary: false,
  },
  {
    number: "07",
    title: "Production Engineering",
    description:
      "Investigate failures, improve performance, and make existing systems more reliable.",
    detail: "Debugging · Observability · Performance · Code review",
    primary: false,
  },
];

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className={`group border-t border-[#ffffff]/10 py-7 md:py-9 transition-all duration-600 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">

        {/* Number */}
        <div className="md:col-span-1">
          <span className="text-[12px] font-mono text-[#f9f7f4] opacity-25 tracking-wider">
            {service.number}
          </span>
        </div>

        {/* Title */}
        <div className="md:col-span-3">
          <h3 className={`leading-snug group-hover:text-[#6FA88B] transition-colors duration-200 ${
            service.primary
              ? "text-[19px] md:text-[21px] font-semibold text-[#f9f7f4]"
              : "text-[17px] md:text-[19px] font-normal text-[#f9f7f4]"
          }`}>
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <div className="md:col-span-5">
          <p className={`leading-[1.7] text-[#f9f7f4] ${service.primary ? "text-[15px] opacity-80" : "text-[14px] opacity-60"}`}>
            {service.description}
          </p>
        </div>

        {/* Detail */}
        <div className="md:col-span-3">
          <p className="text-[11px] leading-[1.7] text-[#f9f7f4] opacity-55 font-mono">
            {service.detail}
          </p>
        </div>

      </div>
    </div>
  );
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <section id="services" className="bg-[#1a1a1a] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

        {/* Header */}
        <div
          ref={headingRef}
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-[#6FA88B]" aria-hidden="true" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#6FA88B]">
              Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[36px] md:text-[48px] font-light text-[#f9f7f4] leading-tight max-w-lg">
              What I build
              <br />
              for businesses.
            </h2>
            <p className="text-[14px] text-[#f9f7f4] opacity-45 max-w-xs leading-relaxed">
              I work on concrete problems, not vague briefs. Tell me what you need built.
            </p>
          </div>
        </div>

        {/* Services list */}
        <div>
          {services.map((service, i) => (
            <ServiceRow key={service.number} service={service} index={i} />
          ))}
          <div className="border-t border-[#ffffff]/10" />
        </div>

        {/* CTA */}
        <div
          className={`mt-14 flex flex-col sm:flex-row sm:items-center gap-6 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#f9f7f4]/25 text-[#f9f7f4] text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-[#f9f7f4] hover:text-[#1a1a1a] transition-colors duration-200 w-fit"
          >
            Discuss Your Project
          </a>
          <p className="text-[13px] text-[#f9f7f4] opacity-35">
            Not sure which fits? Just tell me the problem.
          </p>
        </div>

      </div>
    </section>
  );
}
