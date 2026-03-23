"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Thinking", href: "/thinking" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0C0F0D]/95 backdrop-blur-sm border-b border-[#F2EFE9]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            <span className="text-[#F2EFE9]">Sandi</span>
            <span className="text-[#C9933A]">Q</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#A8A49D] hover:text-[#F2EFE9] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium bg-[#C9933A] text-[#0C0F0D] rounded hover:bg-[#b8832e] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Work with us
            </Link>

            {/* Hamburger button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1 text-[#F2EFE9]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px bg-[#F2EFE9] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-[#F2EFE9] transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-[#F2EFE9] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#F2EFE9]/5 bg-[#0C0F0D]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-[#A8A49D] hover:text-[#F2EFE9] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-[#C9933A] text-[#0C0F0D] rounded hover:bg-[#b8832e] transition-colors duration-200 mt-2"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Work with us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
