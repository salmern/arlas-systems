"use client";

const footerLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const YEAR = 2026;

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8">

          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Arlas Systems"
          >
            <img src="/arlas-horizontal-dark.svg" alt="Arlas Systems" width={160} height={49} className="h-9 w-auto" />
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[12px] text-[#f9f7f4] opacity-35 hover:opacity-70 transition-opacity tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="py-5 border-t border-[#2d2d2d] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-[11px] text-[#f9f7f4] opacity-20 tracking-wide">
            &copy; {YEAR} Arlas Systems. All rights reserved.
          </p>
          <p className="text-[11px] font-mono text-[#f9f7f4] opacity-15 tracking-wide">
            Better Systems. Smarter Operations.
          </p>
        </div>
      </div>
    </footer>
  );
}
