"use client";

const links = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111110] border-t border-[#2a2a28]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-7">
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="opacity-75 hover:opacity-100 transition-opacity">
            <img src="/arlas-horizontal-dark.svg" alt="Arlas Systems" width={148} height={44} className="h-8 w-auto" />
          </a>

          <nav className="flex flex-wrap gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={e => go(e, l.href)}
                className="text-[11px] text-[#f9f7f4] opacity-30 hover:opacity-60 transition-opacity tracking-wide">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="py-5 border-t border-[#2a2a28] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-[11px] text-[#f9f7f4] opacity-15">
            &copy; 2026 Arlas Systems. All rights reserved.
          </p>
          <p className="text-[11px] font-mono text-[#f9f7f4] opacity-10 tracking-wide">
            Better Systems. Smarter Operations.
          </p>
        </div>
      </div>
    </footer>
  );
}
