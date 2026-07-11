"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/toolkit", label: "Toolkit" },
  { href: "/projects", label: "Projects" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-body font-bold tracking-[0.2em] text-sm uppercase"
        >
          Lilainie Adjei-Addo
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-terracotta font-bold"
                  : "text-ink/70 hover:text-terracotta"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`font-body text-sm font-bold uppercase tracking-wide px-5 py-2.5 text-cream rounded-sm hover:opacity-80 transition-opacity ${
              pathname === "/contact" ? "bg-terracotta" : "bg-ink"
            }`}
          >
            Let&apos;s connect
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-ink" />
          <span className="w-6 h-0.5 bg-ink" />
          <span className="w-6 h-0.5 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-base uppercase tracking-wide ${
                pathname === link.href
                  ? "text-terracotta font-bold"
                  : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`font-body text-sm font-bold uppercase tracking-wide px-5 py-2.5 text-cream rounded-sm w-fit ${
              pathname === "/contact" ? "bg-terracotta" : "bg-ink"
            }`}
          >
            Let&apos;s connect
          </Link>
        </nav>
      )}
    </header>
  );
}
