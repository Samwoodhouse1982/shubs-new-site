import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CtaGeometricGraphic from "@/components/CtaGeometricGraphic";
import ConvergenceGraphic from "@/components/ConvergenceGraphic";

export const metadata: Metadata = {
  title: "About | Shubs Upadhyay",
  description:
    "The thinking behind the practice. Dr Shubs Upadhyay, physician, digital health strategist, and independent advisor to founders, product leaders, and investors.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ background: "#F0306A" }} />
                <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#F0306A" }}>
                  About
                </p>
              </div>
              <h1
                className="text-5xl lg:text-6xl xl:text-7xl leading-[1.05] max-w-3xl mb-8"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
              >
                The thinking behind<br />
                <em style={{ color: "#F0306A" }}>the practice.</em>
              </h1>
              <p className="text-base lg:text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                Most digital health fails not because of bad technology. It fails because it is built against the wrong definition of value, and I set up my practice to fix that.
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-[380px] h-[340px] opacity-90">
                <ConvergenceGraphic />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── WHY WE EXIST ──────────────────────────────────────── */}
      <section className="py-24" style={{ borderTop: "1px solid rgba(9,9,11,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <FadeIn>
              <h2
                className="text-4xl lg:text-5xl leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
              >
                Founded on an honest answer to an inconvenient question.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                What I&apos;ve seen, across the NHS, multilateral agencies, and venture-backed companies, is that the industry builds well. It is less good at building things that hold up: products that work as intended in clinical practice, investment theses that survive contact with real health systems, policies that do more than signal intent.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                I think that gap matters more as AI moves to the centre of health products and health decisions. Clinical expertise in those conversations, from someone who can speak honestly to what these systems actually do in a care context across commercial, product, investor, and policy rooms, is the difference between a well-funded assumption and something that lasts.
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                I built my practice around that. Not to sign off at the end, but to be in the room from the start.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ── MANIFESTO ─────────────────────────────────────────── */}
      <section className="py-24" style={{ borderTop: "1px solid rgba(9,9,11,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <aside className="pl-8 py-2" style={{ borderLeft: "4px solid #0055FF" }}>
              <p className="text-[10px] tracking-[0.22em] uppercase mb-8" style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}>
                How I work
              </p>
              <div className="flex flex-col gap-6 max-w-3xl">
                <p
                  className="text-2xl lg:text-3xl leading-snug italic"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "var(--sq-ink)" }}
                >
                  &ldquo;Digital health must be built around clinical reality, not around what is easy to build or easy to sell.&rdquo;
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "I don\u2019t accept that speed and rigour are in tension.",
                    "I don\u2019t accept that evidence is only for academics.",
                    "I don\u2019t accept that commercial success and genuine clinical value are different goals.",
                  ].map((line) => (
                    <li
                      key={line}
                      className="text-2xl lg:text-3xl leading-snug italic list-none"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "var(--sq-ink)" }}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                <p
                  className="text-2xl lg:text-3xl leading-snug italic"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, color: "var(--sq-ink)" }}
                >
                  &ldquo;The organisations that understand this are the ones that last.&rdquo;
                </p>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>


      {/* ── FOUNDING PARTNER ──────────────────────────────────── */}
      <section className="py-24" style={{ borderTop: "1px solid rgba(9,9,11,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="mb-12">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#0055FF" }} />
              <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}>
                The person behind it
              </p>
            </div>
          </FadeIn>
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
                <h2
                  className="text-4xl lg:text-5xl leading-[1.1]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                >
                  Dr Shubs Upadhyay
                </h2>
              </div>

              <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                I&apos;m a physician and digital health strategist with fifteen years of experience across clinical practice, health technology, and health system strategy. I&apos;ve led clinical and strategic initiatives across the NHS, international health agencies, and private sector organisations, from early-stage startups through to multilateral programmes.
              </p>

              <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                I&apos;ve served as a clinical lead at the International Telecommunication Union (ITU) and co-chaired a WHO working group on clinical AI evaluation, leading a guideline publication on digital health standards. I set up independently to provide the kind of senior clinical and strategic counsel that digital health organisations rarely have access to: the perspective of someone who has sat on both the clinical and the commercial side of the table.
              </p>

              <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                I host the <Link href="/thinking" style={{ color: "#0055FF" }}>GPODH (Global Perspectives on Digital Health) podcast</Link> and write the <Link href="/thinking" style={{ color: "#0055FF" }}>Shubstack newsletter</Link> on digital health strategy, evidence, and equity.
              </p>

              <div className="pt-4 flex flex-wrap gap-2" style={{ borderTop: "1px solid rgba(9,9,11,0.08)" }}>
                {["MBBS", "MSc Global Health", "Former ITU Clinical Lead", "WHO Contributor", "NHS Digital Health Advisor"].map((cred) => (
                  <span
                    key={cred}
                    className="px-3 py-1 text-xs"
                    style={{ fontFamily: "var(--font-dm-mono)", color: "var(--sq-muted)", border: "1px solid rgba(9,9,11,0.15)", borderRadius: 2 }}
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <a href="https://linkedin.com/in/shubs-upadhyay" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)", color: "#0055FF" }}>LinkedIn →</a>
                <a href="https://shubstack.substack.com?utm_source=shubs&utm_medium=website&utm_campaign=about" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)", color: "#0055FF" }}>Shubstack →</a>
                <a href="https://gpodh.org?utm_source=shubs&utm_medium=website&utm_campaign=about" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)", color: "#0055FF" }}>GPODH Podcast →</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ── FOOTER CTA ────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundColor: "#0055FF",
          "--sq-ink": "#FFFFFF",
          "--sq-muted": "rgba(255,255,255,0.75)",
        } as React.CSSProperties}
      >
        <CtaGeometricGraphic />
        <FadeIn className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <h2
            className="text-4xl lg:text-5xl text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            Have a conversation with <em style={{ color: "#F0306A" }}>Shubs.</em>
          </h2>
          <p className="text-base max-w-lg" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.75)" }}>
            Every engagement starts by understanding what you are actually trying to achieve. No pitch, no hard sell. Just an honest conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white rounded transition-colors duration-200"
            style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#F0306A" }}
          >
            Book a call →
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
