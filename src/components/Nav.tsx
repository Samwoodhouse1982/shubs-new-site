"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Thinking", href: "/thinking" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-sm border-b"
      style={{
        backgroundColor: 'var(--sq-nav-bg)',
        borderColor: 'var(--sq-ink-8)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl tracking-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            <span style={{ color: 'var(--sq-ink)' }}>Shubs</span>
            <span style={{ color: 'var(--sq-amber)' }}>.</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)", color: isActive ? 'var(--sq-ink)' : 'var(--sq-muted)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--sq-ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? 'var(--sq-ink)' : 'var(--sq-muted)')}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA + theme toggle + hamburger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium rounded transition-colors duration-200"
              style={{
                fontFamily: "var(--font-dm-sans)",
                backgroundColor: 'var(--sq-amber)',
                color: 'var(--sq-bg)',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--sq-amber-d)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--sq-amber)')}
            >
              Work with us
            </Link>

            {/* Hamburger button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              style={{ color: 'var(--sq-ink)' }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span
                className={`block w-6 h-px transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
                style={{ backgroundColor: 'var(--sq-ink)' }}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${open ? "opacity-0" : ""}`}
                style={{ backgroundColor: 'var(--sq-ink)' }}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
                style={{ backgroundColor: 'var(--sq-ink)' }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: 'var(--sq-ink-8)', backgroundColor: 'var(--sq-bg)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-base transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)", color: isActive ? 'var(--sq-ink)' : 'var(--sq-muted)' }}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded transition-colors duration-200 mt-2"
              style={{
                fontFamily: "var(--font-dm-sans)",
                backgroundColor: 'var(--sq-amber)',
                color: 'var(--sq-bg)',
              }}
            >
              Work with us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
