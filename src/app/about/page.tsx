import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CtaGeometricGraphic from "@/components/CtaGeometricGraphic";

export const metadata: Metadata = {
  title: "About | SandiQ",
  description:
    "The thinking behind SandiQ. Learn about our founding partner Dr Shubs Upadhyay and why SandiQ exists.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-amber-rgb),0.08) 0%, transparent 65%)' }}
        />
        <div
          className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-teal-rgb),0.07) 0%, transparent 65%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[var(--sq-amber)]" />
            <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
              About SandiQ
            </p>
          </div>
          <h1
            className="text-5xl lg:text-6xl xl:text-7xl text-[var(--sq-ink)] leading-[1.1] max-w-3xl mb-8"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            The thinking behind the practice.
          </h1>
          <p
            className="text-base lg:text-lg text-[var(--sq-muted)] leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            SandiQ exists because the digital health industry has a systemic tendency to optimise for the wrong outcomes. We were founded to fix that, one engagement at a time.
          </p>
        </div>
      </section>


      {/* ── WHY WE EXIST ──────────────────────────────────────── */}
      <section className="bg-[var(--sq-bg2)] border-y border-[var(--sq-ink-6)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <FadeIn>
              <h2
                className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                We exist because the industry keeps asking the wrong questions.
              </h2>
              <p className="text-base text-[var(--sq-muted)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
                SandiQ was founded on a simple but uncomfortable observation: the digital health industry has a systemic tendency to optimise for the wrong outcomes. It chases adoption metrics instead of health outcomes. It talks about disruption without engaging with systems. It builds for idealised users rather than real ones.
              </p>
              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                We work at the intersection of clinical rigour, implementation reality, and strategic clarity, helping organisations from seed-stage startups to major health systems build digital health solutions that are genuinely effective, commercially sustainable, and trusted by the clinicians and patients they serve.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ── MANIFESTO ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <aside className="border border-[var(--sq-amber-25)] rounded-sm p-10 lg:p-14 bg-[var(--sq-amber-5)]" style={{ backdropFilter: 'blur(4px)' }}>
              <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase mb-8" style={{ fontFamily: "var(--font-dm-mono)" }}>
                The SandiQ Manifesto
              </p>
              <div className="flex flex-col gap-6 max-w-3xl">
                <p className="text-2xl lg:text-3xl text-[var(--sq-ink)] leading-snug italic" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                  &ldquo;Digital health must be built around clinical reality, not around what is easy to build or easy to sell.&rdquo;
                </p>
                <ul className="flex flex-col gap-3 border-l-2 border-[var(--sq-amber-40)] pl-6 my-2">
                  {[
                    "We don\u2019t accept that speed and rigour are in tension.",
                    "We don\u2019t accept that evidence is only for academics.",
                    "We don\u2019t accept that commercial success and genuine clinical value are different goals.",
                  ].map((line) => (
                    <li key={line} className="text-2xl lg:text-3xl text-[var(--sq-ink)] leading-snug italic list-none" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl lg:text-3xl text-[var(--sq-ink)] leading-snug italic" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                  &ldquo;The organisations that understand this are the ones that last.&rdquo;
                </p>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>


      {/* ── FOUNDING PARTNER ──────────────────────────────────── */}
      <section className="bg-[var(--sq-bg2)] border-y border-[var(--sq-ink-6)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <FadeIn className="lg:col-span-1">
              <div className="w-full aspect-square max-w-xs rounded-2xl overflow-hidden">
                <Image
                  src="/images/shubs-headshot.webp"
                  alt="Dr Shubs Upadhyay"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[var(--sq-amber)]" />
                  <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    Founding Partner
                  </p>
                </div>
                <h2
                  className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
                >
                  Dr Shubs Upadhyay
                </h2>
              </div>

              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Dr Shubs Upadhyay is a physician and digital health strategist with over 15 years of experience across clinical practice, health technology, and health system strategy. He has led clinical and strategic initiatives across the NHS, international health agencies, and private sector organisations, from early-stage startups through to multilateral programmes.
              </p>

              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                He has served as a clinical lead at the International Telecommunication Union (ITU) and contributed to WHO working groups on digital health standards. He founded SandiQ to provide the kind of senior, independent clinical and strategic counsel that digital health organisations rarely have access to: the perspective of someone who has sat on both the clinical and the commercial side of the table.
              </p>

              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                He hosts the GPODH (Global Perspectives on Digital Health) podcast, which has reached listeners in over 60 countries, and writes the Shubstack newsletter on digital health strategy, evidence, and equity.
              </p>

              <blockquote className="border-l-2 border-[var(--sq-teal)] pl-6 py-1 my-2">
                <p
                  className="text-xl lg:text-2xl text-[var(--sq-ink)] leading-relaxed italic"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  &ldquo;The moment I knew I had to build something different was in a policy meeting where a minister asked me whether a particular app would actually help his population. Everyone else was answering diplomatically. I was the only person there who could answer honestly. That&apos;s what SandiQ is.&rdquo;
                </p>
              </blockquote>

              <div className="border-t border-[var(--sq-ink-8)] pt-6 flex flex-wrap gap-3">
                {["MBBS", "MSc Global Health", "Former ITU Clinical Lead", "WHO Contributor", "NHS Digital Health Advisor"].map((cred) => (
                  <span
                    key={cred}
                    className="px-3 py-1 text-sm border border-[var(--sq-ink-22)] text-[var(--sq-muted)] rounded-sm"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <a href="https://linkedin.com/in/shubs-upadhyay" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>LinkedIn →</a>
                <a href="https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=about" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>Shubstack →</a>
                <a href="https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=about" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>GPODH Podcast →</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ── FOOTER CTA ────────────────────────────────────────── */}
      <section className="relative bg-[var(--sq-bg2)] border-t border-[var(--sq-ink-6)] py-24 overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div
            className="w-[600px] h-[300px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(var(--sq-amber-rgb),0.06) 0%, transparent 65%)' }}
          />
        </div>
        <CtaGeometricGraphic />

        <FadeIn className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <h2
            className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            Tell us what you&apos;re building.
          </h2>
          <p className="text-base text-[var(--sq-muted)] max-w-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Every project starts with a conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:hello@sandiq.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm text-[var(--sq-muted)] border border-[var(--sq-ink-25)] rounded hover:border-[var(--sq-amber)] hover:text-[var(--sq-amber)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              hello@sandiq.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[var(--sq-amber)] text-[var(--sq-bg)] rounded hover:bg-[var(--sq-amber-d)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Book a call →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
