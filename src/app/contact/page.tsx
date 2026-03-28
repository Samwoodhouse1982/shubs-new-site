"use client";

import { useState, useEffect, useRef } from "react";
import ContactOrbitGraphic from "@/components/ContactOrbitGraphic";

interface FormData {
  name: string;
  organisation: string;
  role: string;
  message: string;
  referral: string;
}

// Animated SVG checkmark that draws itself on mount
function AnimatedCheck() {
  const circleRef = useRef<SVGCircleElement>(null);
  const tickRef   = useRef<SVGPathElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    const tick   = tickRef.current;
    if (!circle || !tick) return;

    const c: SVGCircleElement = circle;
    const k: SVGPathElement   = tick;

    const cLen = c.getTotalLength();
    const tLen = k.getTotalLength();

    // Start fully hidden
    c.style.strokeDasharray  = String(cLen);
    c.style.strokeDashoffset = String(cLen);
    k.style.strokeDasharray  = String(tLen);
    k.style.strokeDashoffset = String(tLen);

    // Animate circle then tick
    let start: number | null = null;
    const circleDur = 600;
    const tickDur   = 400;
    const totalDur  = circleDur + tickDur;

    function frame(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;

      // Circle draw phase
      const cp = Math.min(elapsed / circleDur, 1);
      const ce = 1 - (1 - cp) ** 3;
      c.style.strokeDashoffset = String(cLen * (1 - ce));

      // Tick draw phase (starts after circle)
      if (elapsed > circleDur) {
        const tp = Math.min((elapsed - circleDur) / tickDur, 1);
        const te = 1 - (1 - tp) ** 2;
        k.style.strokeDashoffset = String(tLen * (1 - te));
      }

      if (elapsed < totalDur) requestAnimationFrame(frame);
    }

    // Small delay before starting
    const id = setTimeout(() => requestAnimationFrame(frame), 150);
    return () => clearTimeout(id);
  }, []);

  return (
    <svg viewBox="0 0 56 56" width="56" height="56" fill="none" aria-hidden>
      <circle
        ref={circleRef}
        cx="28" cy="28" r="22"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ stroke: 'var(--sq-amber)', fill: 'var(--sq-amber-10)' }}
      />
      <path
        ref={tickRef}
        d="M18 28.5l7 7 13-14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: 'var(--sq-amber)' }}
      />
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    organisation: "",
    role: "",
    message: "",
    referral: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible]     = useState(false);

  // Fade in hero on mount
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(id);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      {/* Graphic: ContactOrbitGraphic — figure-8 orbit in right column */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-amber-rgb),0.09) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-teal-rgb),0.07) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.65s ease, transform 0.65s ease',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--sq-amber)]" />
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Contact
                </p>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl text-[var(--sq-ink)] leading-[1.0] max-w-3xl mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                Start with an honest conversation.
              </h1>
              <p className="text-base lg:text-lg text-[var(--sq-muted)] leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Whether you&apos;re a health tech startup navigating clinical integration, a global health programme needing strategic direction, or an investor conducting digital health due diligence: we&apos;d like to hear from you. Every project starts with an honest conversation.
              </p>
            </div>

            {/* Orbit graphic — hidden on mobile */}
            <div className="hidden lg:flex items-center justify-center">
              <ContactOrbitGraphic />
            </div>
          </div>
        </div>
      </section>


      {/* ── FORM + CONTACT INFO ───────────────────────────────── */}
      <section className="relative pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(var(--sq-amber-rgb),0.04) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact info sidebar */}
            <div
              className="flex flex-col gap-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
              }}
            >
              <div className="flex flex-col gap-3">
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Email
                </p>
                <a href="mailto:hello@sandiq.com" className="text-[var(--sq-ink)] hover:text-[var(--sq-amber)] transition-colors duration-200" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "1.2rem" }}>
                  hello@sandiq.com
                </a>
              </div>

              <div className="h-px bg-[var(--sq-ink-8)]" />

              <div className="flex flex-col gap-3">
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  LinkedIn
                </p>
                <a href="https://linkedin.com/company/sandiq" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-muted)] hover:text-[var(--sq-ink)] transition-colors duration-200 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  linkedin.com/company/sandiq →
                </a>
              </div>

              <div className="h-px bg-[var(--sq-ink-8)]" />

              <div className="flex flex-col gap-4">
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  What to expect
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "We respond to all enquiries within 2 business days",
                    "Initial calls are 30 minutes, no hard sell",
                    "We'll tell you honestly if we're not the right fit",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--sq-muted)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {/* Sonar dot accent */}
                      <span className="relative shrink-0 mt-1.5">
                        <span className="absolute inset-0 w-2 h-2 rounded-full bg-[var(--sq-amber-20)] sonar-ring" style={{ animationDelay: `${i * 0.7}s` }} aria-hidden />
                        <span className="block w-2 h-2 rounded-full bg-[var(--sq-amber)]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div
              className="lg:col-span-2"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.65s ease 0.25s, transform 0.65s ease 0.25s',
              }}
            >
              {submitted ? (
                <div className="border border-[var(--sq-amber-30)] rounded-sm p-12 flex flex-col items-center gap-6 text-center bg-[var(--sq-amber-5)]">
                  {/* Animated draw-on checkmark */}
                  <AnimatedCheck />
                  <h2 className="text-3xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    Message received.
                  </h2>
                  <p className="text-base text-[var(--sq-muted)] max-w-md leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Thank you for reaching out. We&apos;ll review your message and get back to you within 2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", organisation: "", role: "", message: "", referral: "" }); }}
                    className="text-sm text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs text-[var(--sq-amber)] tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                        Name *
                      </label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Dr Jane Smith"
                        className="w-full bg-transparent border border-[var(--sq-ink-22)] rounded-sm px-4 py-3 text-sm text-[var(--sq-ink)] placeholder-[#A8A49D]/65 focus:outline-none focus:border-[var(--sq-amber-50)] transition-colors duration-200"
                        style={{ fontFamily: "var(--font-dm-sans)" }} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="organisation" className="text-xs text-[var(--sq-amber)] tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                        Organisation
                      </label>
                      <input id="organisation" name="organisation" type="text" value={form.organisation} onChange={handleChange} placeholder="Acme Health Tech"
                        className="w-full bg-transparent border border-[var(--sq-ink-22)] rounded-sm px-4 py-3 text-sm text-[var(--sq-ink)] placeholder-[#A8A49D]/65 focus:outline-none focus:border-[var(--sq-amber-50)] transition-colors duration-200"
                        style={{ fontFamily: "var(--font-dm-sans)" }} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="role" className="text-xs text-[var(--sq-amber)] tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      Your Role
                    </label>
                    <input id="role" name="role" type="text" value={form.role} onChange={handleChange} placeholder="CEO, Clinical Director, Programme Manager..."
                      className="w-full bg-transparent border border-[var(--sq-ink-22)] rounded-sm px-4 py-3 text-sm text-[var(--sq-ink)] placeholder-[#A8A49D]/65 focus:outline-none focus:border-[var(--sq-amber-50)] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm-sans)" }} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs text-[var(--sq-amber)] tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      What are you working on? *
                    </label>
                    <textarea id="message" name="message" required value={form.message} onChange={handleChange} rows={5}
                      placeholder="Tell us about your project, challenge, or question. The more context you give, the more useful our response will be."
                      className="w-full bg-transparent border border-[var(--sq-ink-22)] rounded-sm px-4 py-3 text-sm text-[var(--sq-ink)] placeholder-[#A8A49D]/65 focus:outline-none focus:border-[var(--sq-amber-50)] transition-colors duration-200 resize-none"
                      style={{ fontFamily: "var(--font-dm-sans)" }} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="referral" className="text-xs text-[var(--sq-amber)] tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      How did you hear about SandiQ?
                    </label>
                    <select id="referral" name="referral" value={form.referral} onChange={handleChange}
                      className="w-full bg-[var(--sq-bg)] border border-[var(--sq-ink-22)] rounded-sm px-4 py-3 text-sm text-[var(--sq-ink)] focus:outline-none focus:border-[var(--sq-amber-50)] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <option value="" className="text-[var(--sq-muted)]">Select an option</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="podcast">GPODH Podcast</option>
                      <option value="substack">Shubstack / Substack</option>
                      <option value="referral">Personal referral</option>
                      <option value="conference">Conference / event</option>
                      <option value="search">Web search</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-[var(--sq-amber)] text-[var(--sq-bg)] rounded hover:bg-[var(--sq-amber-d)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Send message →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
