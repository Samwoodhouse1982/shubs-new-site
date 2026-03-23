"use client";

import { useState } from "react";

interface FormData {
  name: string;
  organisation: string;
  role: string;
  message: string;
  referral: string;
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

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9933A]" />
            <p
              className="text-xs tracking-widest text-[#C9933A] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Contact
            </p>
          </div>
          <h1
            className="text-5xl lg:text-6xl xl:text-7xl text-[#F2EFE9] leading-tight max-w-3xl mb-8"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            Let&apos;s talk about what you&apos;re building.
          </h1>
          <p
            className="text-base lg:text-lg text-[#A8A49D] leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Whether you&apos;re a startup preparing for your first NHS
            engagement, a global health programme needing clinical strategy, or
            an investor conducting digital health due diligence: we&apos;d like
            to hear from you. Every project starts with an honest conversation.
          </p>
        </div>
      </section>

      {/* ── FORM + CONTACT INFO ───────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p
                  className="text-xs tracking-widest text-[#C9933A] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:hello@sandiq.com"
                  className="text-[#F2EFE9] hover:text-[#C9933A] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 400,
                    fontSize: "1.2rem",
                  }}
                >
                  hello@sandiq.com
                </a>
              </div>

              <div className="h-px bg-[#F2EFE9]/8" />

              <div className="flex flex-col gap-3">
                <p
                  className="text-xs tracking-widest text-[#C9933A] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com/company/sandiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8A49D] hover:text-[#F2EFE9] transition-colors duration-200 text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  linkedin.com/company/sandiq →
                </a>
              </div>

              <div className="h-px bg-[#F2EFE9]/8" />

              <div className="flex flex-col gap-4">
                <p
                  className="text-xs tracking-widest text-[#C9933A] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  What to expect
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "We respond to all enquiries within 2 business days",
                    "Initial calls are 30 minutes, no hard sell",
                    "We'll tell you honestly if we're not the right fit",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[#A8A49D]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9933A] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="border border-[#C9933A]/30 rounded-sm p-12 flex flex-col items-center gap-6 text-center bg-[#C9933A]/5">
                  <div className="w-12 h-12 rounded-full bg-[#C9933A]/15 border border-[#C9933A]/30 flex items-center justify-center">
                    <span className="text-[#C9933A] text-xl">✓</span>
                  </div>
                  <h2
                    className="text-3xl text-[#F2EFE9]"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 600,
                    }}
                  >
                    Message received.
                  </h2>
                  <p
                    className="text-base text-[#A8A49D] max-w-md leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Thank you for reaching out. We&apos;ll review your message
                    and get back to you within 2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        organisation: "",
                        role: "",
                        message: "",
                        referral: "",
                      });
                    }}
                    className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-xs text-[#C9933A] tracking-widest uppercase"
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Dr Jane Smith"
                        className="w-full bg-transparent border border-[#F2EFE9]/12 rounded-sm px-4 py-3 text-sm text-[#F2EFE9] placeholder-[#A8A49D]/40 focus:outline-none focus:border-[#C9933A]/50 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      />
                    </div>

                    {/* Organisation */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="organisation"
                        className="text-xs text-[#C9933A] tracking-widest uppercase"
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        Organisation
                      </label>
                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        value={form.organisation}
                        onChange={handleChange}
                        placeholder="Acme Health Tech"
                        className="w-full bg-transparent border border-[#F2EFE9]/12 rounded-sm px-4 py-3 text-sm text-[#F2EFE9] placeholder-[#A8A49D]/40 focus:outline-none focus:border-[#C9933A]/50 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="role"
                      className="text-xs text-[#C9933A] tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      Your Role
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="CEO, Clinical Director, Programme Manager..."
                      className="w-full bg-transparent border border-[#F2EFE9]/12 rounded-sm px-4 py-3 text-sm text-[#F2EFE9] placeholder-[#A8A49D]/40 focus:outline-none focus:border-[#C9933A]/50 transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs text-[#C9933A] tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      What are you working on? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, challenge, or question. The more context you give, the more useful our response will be."
                      className="w-full bg-transparent border border-[#F2EFE9]/12 rounded-sm px-4 py-3 text-sm text-[#F2EFE9] placeholder-[#A8A49D]/40 focus:outline-none focus:border-[#C9933A]/50 transition-colors duration-200 resize-none"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    />
                  </div>

                  {/* Referral */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="referral"
                      className="text-xs text-[#C9933A] tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      How did you hear about SandiQ?
                    </label>
                    <select
                      id="referral"
                      name="referral"
                      value={form.referral}
                      onChange={handleChange}
                      className="w-full bg-[#0C0F0D] border border-[#F2EFE9]/12 rounded-sm px-4 py-3 text-sm text-[#F2EFE9] focus:outline-none focus:border-[#C9933A]/50 transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <option value="" className="text-[#A8A49D]">
                        Select an option
                      </option>
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
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-[#C9933A] text-[#0C0F0D] rounded hover:bg-[#b8832e] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
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
