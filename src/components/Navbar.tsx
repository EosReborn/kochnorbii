"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ink transition-[border-color] duration-500 ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="container-edge flex h-18 items-center justify-between" style={{ height: "var(--nav-h)" }}>
        <Link
          href="#top"
          className="flex items-center gap-2.5 font-display text-sm tracking-wide text-paper"
          onClick={handleLinkClick}
        >
          <Image
            src="/logo/mark-dark.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          Koch Norbert
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Fő navigáció">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="underline-hover font-body text-sm text-paper/80 transition-colors hover:text-[var(--blue)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.studio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-hover font-body text-sm text-paper/80 transition-colors hover:text-[var(--blue)]"
          >
            Koch Digital Studio ↗
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
        >
          <span
            className={`h-px w-6 bg-paper transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-ink transition-opacity duration-400 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="container-edge flex flex-col gap-6"
          aria-label="Mobil navigáció"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="font-display text-4xl text-paper transition-transform duration-300"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.studio.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="mt-4 font-body text-base text-stone"
          >
            Koch Digital Studio ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
