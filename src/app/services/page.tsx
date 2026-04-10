import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ServicesMeshGraphic from "@/components/ServicesMeshGraphic";
import ProcessStepIcon from "@/components/ProcessStepIcon";
import CtaGeometricGraphic from "@/components/CtaGeometricGraphic";
import FlatlineGraphic from "@/components/FlatlineGraphic";

export const metadata: Metadata = {
  title: "Services | SandiQ",
  description:
    "Three services for digital health organisations serious about clinical credibility, real impact, and sustainable growth.",
};

const pillars: { id: string; stream: string; title: string; tagline: string; description: string; rightFor: string[]; cta: string }[] = [
  {
    id: "pillar-medical-quality-ai",
    stream: "Stream 01",
    title: "Because what gets measured shapes what gets built, and most digital health is measuring the wrong things.",
    tagline: "Medical Quality & AI",
    description: "Most digital health products fail at the point of clinical integration, not because the technology doesn't work, but because clinical workflows, safety considerations, and regulatory expectations were never built in from the start. And the evidence base that might have validated them was never designed to measure what health systems and payers actually care about. We integrate clinical insight from day one and build the evaluation frameworks that turn promising technology into something worth commissioning.",
    rightFor: [
      "Regulated & clinically-adjacent software teams",
      "CE marking, DTAC, or FDA navigation",
      "NHS procurement & NICE assessment",
      "Demonstrating ROI or QALY-equivalent impact",
    ],
    cta: "Discuss your product →",
  },
  {
    id: "pillar-storytelling-impact",
    stream: "Stream 02",
    title: "Because the distance between your evidence and the decision you need is almost always a communications problem.",
    tagline: "Storytelling & Impact",
    description: "The gap between your evidence and the decision you need is almost always a communications problem. But navigating health systems requires more than a good narrative. It requires understanding the procurement culture, clinical hierarchies, regulatory expectations, and political pressures that shape how decisions get made. We help organisations turn rigorous evidence into compelling arguments and provide the strategic counsel needed for the rooms and contexts that matter most.",
    rightFor: [
      "Impact reports, investment decks & grant applications",
      "Regulatory & procurement positioning",
      "New health system or market entry",
      "Clinical & strategic due diligence",
    ],
    cta: "Discuss your impact →",
  },
  {
    id: "pillar-deep-clinical-leadership",
    stream: "Stream 03",
    title: "Because clinical credibility is what separates the organisations that scale from those that stall.",
    tagline: "Deep Clinical Leadership",
    description: "Senior clinical leadership doesn't have to mean a full-time hire. And health system procurement is a different game from what most digital health commercial teams are built for. Understanding what commissioners, NHSX leads, or international payers actually need, and how to speak their language, requires a different discipline entirely. We embed experienced clinical leaders directly into your organisation and navigate this complexity on your behalf.",
    rightFor: [
      "Pre-NHS or payer engagement startups",
      "Scale-ups without a full-time CMO",
      "NHS & international market entry",
      "Communicating clinical value to non-technical buyers",
    ],
    cta: "Discuss your strategy →",
  },
];

const process = [
  {
    step: "01",
    label: "LISTEN",
    type: "listen" as const,
    desc: "We begin every engagement by deeply understanding your context: not just the brief, but the pressures, histories, and blind spots that shape it.",
  },
  {
    step: "02",
    label: "MATCH",
    type: "match" as const,
    desc: "We identify the right approach and skill set for the specific challenge at hand, bringing in trusted independent specialists where the engagement calls for it.",
  },
  {
    step: "03",
    label: "EMBED",
    type: "embed" as const,
    desc: "We work with your team, not at them. Our model is collaborative by design and we transfer knowledge as we deliver.",
  },
  {
    step: "04",
    label: "DELIVER",
    type: "deliver" as const,
    desc: "We are accountable to outcomes. Every engagement ends with something tangible: a strategy, a product, an evidence base, a deal.",
  },
];

const audiences: { label: string; title: string; desc: string; points: string[]; relevantStreams: string[] }[] = [
  {
    label: "People building",
    title: "Digital health founders and their teams",
    desc: "You are building something that needs to work in clinical reality, not just in a demo. From early product decisions through to major health system procurements, we bring the clinical credibility, evidence strategy, and leadership depth that gets your product taken seriously by commissioners, payers, and the clinicians who actually have to use it.",
    points: [
      "Fractional CMO and clinical leadership embedded in your team",
      "Clinical product strategy and evidence frameworks from day one",
      "NHS, international, and payer market access",
      "Impact narrative and positioning for buyers that need clinical proof",
    ],
    relevantStreams: ["Deep Clinical Leadership", "Medical Quality & AI", "Storytelling & Impact"],
  },
  {
    label: "People investing",
    title: "Philanthropy, foundations, and impact investors",
    desc: "You are deploying capital or grants into digital health and need to know whether it is going somewhere meaningful, and whether the organisations you fund have what it takes to deliver. We provide the clinical intelligence, due diligence depth, and impact frameworks that help you back the right work and help that work succeed.",
    points: [
      "Clinical due diligence and honest portfolio assessment",
      "Impact measurement frameworks that go beyond adoption metrics",
      "Strategic and clinical support for grantees building credibility",
      "Evaluation of what a programme can realistically deliver",
    ],
    relevantStreams: ["Medical Quality & AI", "Storytelling & Impact", "Deep Clinical Leadership"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      {/* Graphic: ServicesMeshGraphic — particle network in right column */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-amber-rgb),0.08) 0%, transparent 65%)' }} />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-teal-rgb),0.10) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--sq-amber)]" />
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Services
                </p>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl text-[var(--sq-ink)] leading-[1.1] max-w-3xl mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                Clinical expertise, deployed where it counts.
              </h1>
              <p className="text-base lg:text-lg text-[var(--sq-muted)] leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Three services: Medical Quality &amp; AI, Storytelling &amp; Impact, and Deep Clinical Leadership. Deployed individually or together for organisations serious about building digital health that actually works.
              </p>
            </div>

            {/* Particle mesh graphic */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-[380px] h-[320px] opacity-80">
                <ServicesMeshGraphic />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── WHO WE WORK WITH ──────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(var(--sq-amber-rgb),0.06) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--sq-amber)]" />
              <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                Who we work with
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              Built for builders and those who back them.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--sq-ink-8)] rounded-sm overflow-hidden">
            {audiences.map((aud, i) => (
              <FadeIn key={aud.label} delay={i * 100}>
                <div className={`p-10 lg:p-12 flex flex-col gap-6 h-full ${i % 2 === 0 ? "bg-[var(--sq-bg)]" : "bg-[var(--sq-bg3)]"}`}>
                  <div>
                    <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase mb-3" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      {aud.label}
                    </p>
                    <h3 className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                      {aud.title}
                    </h3>
                  </div>
                  <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {aud.desc}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {aud.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-[var(--sq-muted)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--sq-amber)] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber)] hover:text-[var(--sq-bg)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Start a conversation →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── PULL QUOTE ────────────────────────────────────────── */}
      <section className="relative bg-[var(--sq-bg2)] border-y border-[var(--sq-ink-6)] py-20 overflow-hidden">
        <FlatlineGraphic />
        <FadeIn>
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <blockquote className="text-3xl lg:text-4xl xl:text-5xl leading-[1.15] italic text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
              &ldquo;We don&apos;t add clinical credibility as a final audit. We build it in from the start.&rdquo;
            </blockquote>
          </div>
        </FadeIn>
      </section>


      {/* ── STREAM NAV ────────────────────────────────────────── */}
      <nav aria-label="Jump to stream" className="sticky top-16 z-20 bg-[var(--sq-bg)] border-b border-[var(--sq-ink-8)] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-stretch overflow-x-auto scrollbar-none">
            {pillars.map((pillar, i) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="flex items-center gap-3 px-6 py-4 shrink-0 border-r border-[var(--sq-ink-8)] last:border-r-0 text-[var(--sq-muted)] hover:text-[var(--sq-amber)] hover:bg-[var(--sq-amber-5)] transition-colors duration-200 group"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <span className="text-xs text-[var(--sq-amber)] opacity-60 group-hover:opacity-100 transition-opacity duration-200 shrink-0" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium whitespace-nowrap">{pillar.tagline}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>


      {/* ── PILLAR SECTIONS ───────────────────────────────────── */}
      <section className="relative pb-24 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-teal-rgb),0.06) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-8">
          <FadeIn className="flex flex-col gap-4 pt-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--sq-amber)]" />
              <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                Our services
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              Three streams. Every engagement.
            </h2>
          </FadeIn>

          {pillars.map((pillar, pi) => (
            <FadeIn key={pillar.id} delay={pi * 80}>
              <div id={pillar.id} className={`scroll-mt-24 border border-[var(--sq-ink-8)] rounded-sm overflow-hidden flex flex-col lg:flex-row ${pi % 2 === 0 ? "bg-[var(--sq-bg)]" : "bg-[var(--sq-bg3)]"}`}>

                {/* Left — eyebrow, why statement, description */}
                <div className="flex-1 p-10 flex flex-col gap-6">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase whitespace-nowrap" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      {pillar.stream}
                    </p>
                    <span className="text-[var(--sq-amber)] opacity-40 shrink-0" aria-hidden>·</span>
                    <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase whitespace-nowrap" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      {pillar.tagline}
                    </p>
                    <div className="h-px flex-1 shrink bg-[var(--sq-amber-20)]" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {pillar.title}
                  </h2>
                  <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {pillar.description}
                  </p>
                </div>

                {/* Right — chips + CTA */}
                <div className={`lg:w-80 xl:w-96 p-10 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-[var(--sq-ink-8)] ${pi % 2 === 0 ? "bg-[var(--sq-bg3)]" : "bg-[var(--sq-bg)]"}`}>
                  <div className="flex flex-col gap-4">
                    <p className="text-xs text-[var(--sq-amber)] tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      Ideal for
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.rightFor.map((point, j) => (
                        <span key={j} className="px-4 py-2 text-xs border border-[var(--sq-ink-15)] text-[var(--sq-muted)] rounded-full leading-snug" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-2">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber)] hover:text-[var(--sq-bg)] transition-colors duration-200 whitespace-nowrap" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {pillar.cta}
                    </Link>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </section>


      {/* ── PROCESS ───────────────────────────────────────────── */}
      {/* Graphic: ProcessStepIcon — unique animation per step */}
      <section className="bg-[var(--sq-bg2)] border-y border-[var(--sq-ink-6)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--sq-amber)]" />
              <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                How we work
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              A process built on depth, not haste.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--sq-ink-6)] rounded-sm overflow-hidden">
            {process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 100}>
                <div className="bg-[var(--sq-bg2)] p-8 flex flex-col gap-4 h-full">
                  {/* Animated step icon */}
                  <div className="mb-1">
                    <ProcessStepIcon type={step.type} />
                  </div>
                  <p className="text-sm text-[var(--sq-muted)] tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {step.step}
                  </p>
                  <h3 className="text-2xl text-[var(--sq-amber)] tracking-wide" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {step.label}
                  </h3>
                  <p className="text-sm text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="mt-10 flex justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[var(--sq-amber)] text-[var(--sq-bg)] rounded hover:bg-[var(--sq-amber-d)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Tell us what you need →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ── FOOTER CTA ────────────────────────────────────────── */}
      {/* Graphic: CtaGeometricGraphic — rotating diamonds (reused from homepage) */}
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
          <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
            Building or backing? Let&apos;s talk.
          </h2>
          <p className="text-base text-[var(--sq-muted)] max-w-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Whether you are building a digital health product that needs clinical credibility, or investing in the organisations doing that work, every conversation starts with understanding what you are actually trying to achieve.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:hello@sandiq.com" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm text-[var(--sq-muted)] border border-[var(--sq-ink-25)] rounded hover:border-[var(--sq-amber)] hover:text-[var(--sq-amber)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
              hello@sandiq.com
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[var(--sq-amber)] text-[var(--sq-bg)] rounded hover:bg-[var(--sq-amber-d)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Book a call →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
