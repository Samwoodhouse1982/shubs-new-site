"use client";

import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Thinking", href: "/thinking" },
  { label: "Contact", href: "/contact" },
];

const connectLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/shubs-upadhyay", external: true },
  { label: "GPODH Podcast", href: "https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=footer", external: true },
  { label: "Substack", href: "https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=footer", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: 'var(--sq-bg)', borderColor: 'var(--sq-ink-8)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left — logo + tagline */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            >
              <span style={{ color: 'var(--sq-ink)' }}>Shubs</span>
              <span style={{ color: 'var(--sq-amber)' }}>.</span>
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)", color: 'var(--sq-muted)' }}
            >
              Real work. Real health. Real impact.
            </p>
          </div>

          {/* Center — nav links */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-widest uppercase mb-2"
              style={{ fontFamily: "var(--font-dm-mono)", color: 'var(--sq-amber)' }}
            >
              Navigation
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)", color: 'var(--sq-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--sq-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--sq-muted)')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right — contact + social */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-widest uppercase mb-2"
              style={{ fontFamily: "var(--font-dm-mono)", color: 'var(--sq-amber)' }}
            >
              Connect
            </p>
            {connectLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)", color: 'var(--sq-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--sq-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--sq-muted)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--sq-ink-8)' }}>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-dm-mono)", color: 'var(--sq-muted)' }}
          >
            © Shubs Upadhyay / SandiQ Global
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {[
              { label: "Legal Notice", href: "/legal" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-mono)", color: 'var(--sq-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--sq-amber)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--sq-muted)')}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
