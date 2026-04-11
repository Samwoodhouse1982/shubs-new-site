import Link from "next/link";
import Image from "next/image";
import HeroGlobe from "@/components/HeroGlobe";
import FadeIn from "@/components/FadeIn";
import StatCounter from "@/components/StatCounter";
import FlatlineGraphic from "@/components/FlatlineGraphic";
import VennGraphic from "@/components/VennGraphic";
import BroadcastGraphic from "@/components/BroadcastGraphic";
import CtaGeometricGraphic from "@/components/CtaGeometricGraphic";
import PopulationFigureGraphic from "@/components/PopulationFigureGraphic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SandiQ | Real Value in Digital Health",
  description:
    "For digital health founders building what matters, and the investors and donors backing their work. Clinical leadership, evidence strategy, and impact counsel that makes the difference.",
};

const pillars: { num: string; slug: string; title: string; tagline: string; desc: string; services: string[] }[] = [
  {
    num: "01",
    slug: "pillar-medical-quality-ai",
    title: "Because what gets measured shapes what gets built, and most digital health is measuring the wrong things.",
    tagline: "Medical Quality & AI",
    desc: "Linking product thinking to real clinical impact. We build the evidence frameworks and clinical infrastructure that turn good intentions into measurable results health systems trust.",
    services: ["Clinical product strategy built from day one", "Evidence frameworks that measure what health systems trust"],
  },
  {
    num: "02",
    slug: "pillar-storytelling-impact",
    title: "Because the distance between your evidence and the decision you need is almost always a communications problem.",
    tagline: "Storytelling & Impact",
    desc: "We help you talk about your impact honestly and compellingly, bringing that story into your positioning, communications, and the rooms that matter, without oversimplifying or overstating.",
    services: ["Rigorous evidence turned into compelling narratives", "Strategic counsel for navigating the rooms that matter"],
  },
  {
    num: "03",
    slug: "pillar-deep-clinical-leadership",
    title: "Because clinical credibility is what separates the organisations that scale from those that stall.",
    tagline: "Deep Clinical Leadership",
    desc: "Focused on what matters most: the leaders, decisions, and strategies that win by making the clinical-commercial link explicit, credible, and impossible to ignore.",
    services: ["Embedded clinical leadership in your real meetings", "Market access and health system procurement navigation"],
  },
];

const stats = [
  { value: "15+", label: "Years across the digital health ecosystem" },
  { value: "5",   label: "Countries with multi-million pound contracts protected" },
  { value: "50+", label: "International experts led at ITU/WHO" },
  { value: "20+", label: "Countries with active client engagements" },
  { value: "60+", label: "Countries reached via podcast" },
];

const outcomes = [
  {
    title: "NHS-grade clinical credibility for a Series B startup",
    desc: "Embedded clinical leadership helped a digital therapeutics company restructure its evidence strategy, resulting in a successful NHS procurement worth £3.4M.",
  },
  {
    title: "Policy positioning across international health systems",
    desc: "Strategic counsel shaped national digital health roadmaps in partnership with ITU and WHO, securing political and institutional buy-in across multiple health system contexts.",
  },
  {
    title: "From pilot to scale in 18 months",
    desc: "Implementation science support transformed a promising maternal health pilot into a government-endorsed programme reaching 200,000 women.",
  },
];

const articles = [
  {
    title: "Evaluating tech in healthcare: measuring what matters",
    date: "Nov 2025",
    excerpt: "Why most digital health evaluation frameworks miss the point, and what rigorous value measurement actually looks like.",
    href: "https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=homepage",
  },
  {
    title: "Level up your evidence comms",
    date: "Jul 2025",
    excerpt: "The gap between what your data shows and what your audience hears is a communications problem. Here's how to close it.",
    href: "https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=homepage",
  },
  {
    title: "Can Global Health and Venture Capital get along?",
    date: "May 2025",
    excerpt: "On the structural tensions between impact-driven global health work and the return expectations of venture capital.",
    href: "https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=homepage",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--sq-amber)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Amber glow — top left */}
        <div
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-amber-rgb),0.12) 0%, transparent 70%)' }}
        />
        {/* Teal glow — behind globe */}
        <div
          className="absolute -bottom-20 -right-20 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-teal-rgb),0.15) 0%, transparent 68%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[var(--sq-amber)]" />
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Tackling global digital health
                </p>
              </div>

              <h1 className="text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                <span style={{
                  background: 'linear-gradient(135deg, #E8B86D 0%, #C9933A 55%, #D4A050 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Real value
                </span>
                <br />
                <span className="text-[var(--sq-ink)]">in digital health.</span>
              </h1>
            </div>

            <p className="text-base lg:text-lg text-[var(--sq-muted)] leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
              For founders and teams building digital health that actually works,
              and for the investors, foundations, and donors who back them.
              Clinical leadership, evidence strategy, and impact counsel that makes
              the difference between promising and proven.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[var(--sq-amber)] text-[var(--sq-bg)] rounded hover:bg-[var(--sq-amber-d)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Work with SandiQ →
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-[var(--sq-ink-20)] text-[var(--sq-ink)] rounded hover:border-[var(--sq-amber)] hover:text-[var(--sq-amber)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Our services →
              </Link>
            </div>
          </div>

          {/* Right — animated globe, larger and more prominent */}
          <div className="flex items-center justify-center">
            <div className="w-72 h-72 sm:w-[380px] sm:h-[380px] lg:w-[520px] lg:h-[520px]">
              <HeroGlobe />
            </div>
          </div>
        </div>
      </section>


      {/* ── PROBLEM BAND ───────────────────────────────────────── */}
      <section className="relative bg-[var(--sq-bg2)] border-y border-[var(--sq-ink-6)] py-20 overflow-hidden">
        <FlatlineGraphic />
        <FadeIn>
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <blockquote className="text-3xl lg:text-4xl xl:text-5xl leading-[1.1] italic text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
              &ldquo;Most digital health fails not because of bad technology. It
              fails because it&apos;s built against the wrong definition of
              value.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[var(--sq-amber)]" />
              <Link href="/thinking" className="text-sm text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Read our thinking →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>


      {/* ── FOUNDER VOICE ──────────────────────────────────────── */}
      <section className="py-20 border-b border-[var(--sq-ink-6)]">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-8">
            <blockquote
              className="text-2xl lg:text-3xl text-[var(--sq-ink)] leading-relaxed italic"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
            >
              &ldquo;I&apos;ve sat in clinical settings across three continents and the gap is always the same: technology that doesn&apos;t understand the system it&apos;s entering. I started SandiQ because that gap is fixable, but only if someone is being honest about it.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-[var(--sq-amber-25)]">
                <Image
                  src="/images/shubs-headshot.webp"
                  alt="Dr Shubs Upadhyay"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-sm text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>Dr Shubs Upadhyay</p>
                <p className="text-xs text-[var(--sq-muted)]" style={{ fontFamily: "var(--font-dm-mono)" }}>Founding Partner, SandiQ</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>


      {/* ── ABOUT SANDIQ ───────────────────────────────────────── */}
      {/*
        Venn is now the right column — full column width at ~500px on desktop.
        Manifesto sits below as a full-width panel.
      */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <FadeIn className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[var(--sq-amber)]" />
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  About SandiQ
                </p>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                We exist because the industry keeps asking the wrong questions.
              </h2>
              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                SandiQ was founded on a simple but uncomfortable observation:
                the digital health industry has a systemic tendency to optimise
                for the wrong outcomes. It chases adoption metrics instead of
                health outcomes. It talks about disruption without engaging with
                systems. It builds for idealised users rather than real ones.
              </p>
              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                We work at the intersection of clinical rigour, implementation
                reality, and strategic clarity, helping organisations from
                seed-stage startups to major health systems build digital health
                solutions that are genuinely effective, commercially sustainable,
                and trusted by the clinicians and patients they serve.
              </p>
            </FadeIn>

            {/* Right: Venn — large feature graphic */}
            <FadeIn delay={120}>
              <div className="w-full max-w-[480px] mx-auto" style={{ height: 390 }}>
                <VennGraphic />
              </div>
            </FadeIn>
          </div>

          {/* Full-width manifesto below */}
          <FadeIn delay={200} className="mt-14">
            <aside className="border border-[var(--sq-amber-25)] rounded-sm p-10 bg-[var(--sq-amber-5)]" style={{ backdropFilter: 'blur(4px)' }}>
              <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase mb-6" style={{ fontFamily: "var(--font-dm-mono)" }}>
                The SandiQ Manifesto
              </p>
              <blockquote className="text-xl lg:text-2xl xl:text-3xl text-[var(--sq-ink)] leading-snug italic max-w-4xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                &ldquo;Digital health must be built around clinical reality, not
                around what is easy to build or easy to sell. The organisations
                that understand this are the ones that last.&rdquo;
              </blockquote>
              <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Read our full manifesto →
              </Link>
            </aside>
          </FadeIn>
        </div>
      </section>


      {/* ── WHO THIS IS FOR ────────────────────────────────────── */}
      <section className="relative bg-[var(--sq-bg2)] border-y border-[var(--sq-ink-6)] py-24 overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-teal-rgb),0.07) 0%, transparent 65%)' }} />
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
            {/* Builders */}
            <FadeIn>
              <div className="bg-[var(--sq-bg)] p-10 lg:p-12 flex flex-col gap-5 h-full">
                <div>
                  <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase mb-3" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    People building
                  </p>
                  <h3 className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    Digital health founders and their teams
                  </h3>
                </div>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  From early product decisions through to major health system procurements, we bring the clinical credibility, evidence strategy, and leadership depth that gets your product taken seriously by the people who matter.
                </p>
                <div className="mt-auto">
                  <Link href="/services#pillar-medical-quality-ai" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber)] hover:text-[var(--sq-bg)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    See how we help builders →
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Investors */}
            <FadeIn delay={100}>
              <div className="bg-[var(--sq-bg3)] p-10 lg:p-12 flex flex-col gap-5 h-full">
                <div>
                  <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase mb-3" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    People investing
                  </p>
                  <h3 className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    Philanthropy, foundations, and impact investors
                  </h3>
                </div>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  We provide the clinical intelligence, due diligence depth, and impact frameworks that help you back the right work and help the organisations you fund turn promise into proof.
                </p>
                <div className="mt-auto">
                  <Link href="/services#pillar-storytelling-impact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber)] hover:text-[var(--sq-bg)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    See how we help investors →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ── THREE PILLARS ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--sq-amber)]" />
              <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                What we do
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              Three streams. One discipline.
            </h2>
            <p className="text-base text-[var(--sq-muted)] leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Our work flows from a single conviction: real value in digital health demands clinical rigour, honest communication, and leadership that knows what outcomes actually mean.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--sq-ink-6)] rounded-sm overflow-hidden">
              {pillars.map((p) => (
                <Link key={p.num} href={`/services#${p.slug}`} className="bg-[var(--sq-bg)] p-10 flex flex-col gap-6 group hover:bg-[var(--sq-surface)] transition-colors duration-300">
                  <div className="flex items-center justify-between gap-3 overflow-hidden">
                    <div className="flex items-center gap-2 min-w-0">
                      <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase whitespace-nowrap" style={{ fontFamily: "var(--font-dm-mono)" }}>
                        Stream {p.num}
                      </p>
                      <span className="text-[var(--sq-amber)] opacity-40 shrink-0" aria-hidden>·</span>
                      <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase whitespace-nowrap" style={{ fontFamily: "var(--font-dm-mono)" }}>
                        {p.tagline}
                      </p>
                    </div>
                    <div className="h-px flex-1 bg-[var(--sq-amber)] opacity-30 group-hover:opacity-80 transition-opacity duration-300 shrink" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--sq-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {p.desc}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {p.services.map((svc) => (
                      <li key={svc} className="flex items-center gap-2 text-sm text-[var(--sq-muted)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        <span className="w-1 h-1 rounded-full bg-[var(--sq-amber)] shrink-0" />
                        {svc}
                      </li>
                    ))}
                  </ul>
                  <span className="text-sm text-[var(--sq-amber)] group-hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Explore services →
                  </span>
                </Link>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-8 flex justify-center">
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 text-sm border border-[var(--sq-ink-20)] text-[var(--sq-muted)] rounded hover:border-[var(--sq-amber)] hover:text-[var(--sq-amber)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                View all services →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ── IMPACT NUMBERS ─────────────────────────────────────── */}
      <section className="relative bg-[var(--sq-bg2)] py-20 border-y border-[var(--sq-ink-6)] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          <div className="w-[700px] h-[220px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(var(--sq-amber-rgb),0.07) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col gap-4 mb-14 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-[var(--sq-amber)]" />
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Track record
                </p>
                <div className="h-px w-8 bg-[var(--sq-amber)]" />
              </div>
              <p className="text-base text-[var(--sq-muted)] max-w-xl mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Fifteen years of clinical and strategic work across the NHS, multilateral agencies, and private sector digital health organisations, delivered by our founding partner.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((stat) => (
                <div key={stat.value} className="flex flex-col items-center text-center gap-3">
                  <StatCounter
                    value={stat.value}
                    className="text-5xl lg:text-6xl text-[var(--sq-amber)]"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
                  />
                  <p className="text-sm text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ── THE FOUNDER ────────────────────────────────────────── */}
      <section className="py-24">
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
                <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                  Dr Shubs Upadhyay
                </h2>
              </div>

              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Dr Shubs Upadhyay is a physician and digital health strategist
                with over 15 years of experience across clinical practice, health
                technology, and health system strategy. He has led clinical and
                strategic initiatives across the NHS, international health
                agencies, and private sector organisations, from early-stage
                startups through to multilateral programmes.
              </p>

              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                He has served as a clinical lead at the International
                Telecommunication Union (ITU) and contributed to WHO working
                groups on digital health standards. He founded SandiQ to provide
                the kind of senior, independent clinical and strategic counsel
                that digital health organisations rarely have access to: the
                perspective of someone who has sat on both the clinical and the
                commercial side of the table.
              </p>

              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                He hosts the GPODH (Global Perspectives on Digital Health)
                podcast, which has reached listeners in over 60 countries, and
                writes the Shubstack newsletter on digital health strategy,
                evidence, and equity.
              </p>

              <div className="border-t border-[var(--sq-ink-8)] pt-6 flex flex-wrap gap-3">
                {["MBBS", "MSc Global Health", "Former ITU Clinical Lead", "WHO Contributor", "NHS Digital Health Advisor"].map((cred) => (
                  <span key={cred} className="px-3 py-1 text-sm border border-[var(--sq-ink-22)] text-[var(--sq-muted)] rounded-sm" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <a href="https://linkedin.com/in/shubs-upadhyay" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>LinkedIn →</a>
                <a href="https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=homepage" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>Shubstack →</a>
                <a href="https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=homepage" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>GPODH Podcast →</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ── WHAT WE'VE DELIVERED ───────────────────────────────── */}
      <section className="bg-[var(--sq-bg2)] py-24 border-y border-[var(--sq-ink-6)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--sq-amber)]" />
              <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                Outcomes
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              What our founding partner has delivered.
            </h2>
          </FadeIn>

          {/* Population impact visual */}
          <FadeIn delay={80}>
            <div className="mb-14 flex flex-col md:flex-row items-center gap-10 border border-[var(--sq-ink-8)] rounded-sm p-8 bg-[var(--sq-bg)]">
              <div className="shrink-0">
                <PopulationFigureGraphic total={120} highlighted={30} cols={12} className="w-64 h-auto opacity-90" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Population impact
                </p>
                <p className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                  200,000 women reached through a single digital health programme.
                </p>
                <p className="text-sm text-[var(--sq-muted)] leading-relaxed max-w-md" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Implementation science support helped transform a promising maternal health pilot into a government-endorsed programme. Each figure here is a real person in the system.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="relative border-l-2 border-[var(--sq-amber)] pl-6 py-2 flex flex-col gap-3 h-full">
                  <span className="absolute -top-1 -left-[4px] w-2 h-2 rounded-full bg-[var(--sq-amber-30)] sonar-ring" style={{ animationDelay: `${i * 0.4}s` }} aria-hidden />
                  <span className="absolute -top-1 -left-[4px] w-2 h-2 rounded-full bg-[var(--sq-amber-30)] sonar-ring-delay" style={{ animationDelay: `${i * 0.4 + 1.1}s` }} aria-hidden />
                  <span className="absolute -top-[3px] -left-[3px] w-[6px] h-[6px] rounded-full bg-[var(--sq-amber)]" aria-hidden />
                  <h3 className="text-xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {outcome.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── THOUGHT LEADERSHIP ─────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--sq-amber)]" />
              <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                From the founder
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              The industry talks to itself. We don&apos;t.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {articles.map((article, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="border border-[var(--sq-ink-8)] rounded-sm p-7 flex flex-col gap-4 h-full">
                  <p className="text-sm text-[var(--sq-muted)] tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>{article.date}</p>
                  <h3 className="text-xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--sq-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{article.excerpt}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="flex justify-center mb-16">
              <a href="https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=homepage" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber-10)] hover:border-[var(--sq-amber)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Read these and more on Shubstack →
              </a>
            </div>
          </FadeIn>

          {/* Podcast strip */}
          <FadeIn delay={100}>
            <div className="border border-[var(--sq-teal-30)] rounded-sm p-8 flex flex-col md:flex-row items-center gap-8 bg-[var(--sq-teal-5)]">
              <div className="shrink-0 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[var(--sq-teal)]/30">
                  <Image
                    src="/images/shubs-headshot.webp"
                    alt="Dr Shubs Upadhyay — host"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <BroadcastGraphic size={56} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[var(--sq-teal)] tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Hosted by Dr Shubs Upadhyay · The GPODH Podcast
                </p>
                <p className="text-lg text-[var(--sq-ink)] mb-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                  Global Perspectives on Digital Health
                </p>
                <p className="text-sm text-[var(--sq-muted)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Candid conversations with the people reshaping digital health across 60+ countries.
                </p>
              </div>
              <a href="https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=homepage" target="_blank" rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-teal)] text-[var(--sq-ink)] rounded hover:bg-[var(--sq-teal)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Listen on gpodh.org →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER CTA BAND ────────────────────────────────────── */}
      <section className="relative bg-[var(--sq-bg2)] border-t border-[var(--sq-ink-6)] py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          <div className="w-[600px] h-[300px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(var(--sq-amber-rgb),0.07) 0%, transparent 65%)' }} />
        </div>
        <CtaGeometricGraphic />

        <FadeIn className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
            Ready to build something that actually works?
          </h2>
          <p className="text-base text-[var(--sq-muted)] max-w-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Whether you are building a digital health product that needs clinical credibility,
            or investing in the organisations doing that work. Every conversation with us
            starts by understanding what you are actually trying to achieve.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:hello@sandiq.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm text-[var(--sq-muted)] border border-[var(--sq-ink-25)] rounded hover:border-[var(--sq-amber)] hover:text-[var(--sq-amber)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              hello@sandiq.com
            </a>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[var(--sq-amber)] text-[var(--sq-bg)] rounded hover:bg-[var(--sq-amber-d)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              Book a call →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
