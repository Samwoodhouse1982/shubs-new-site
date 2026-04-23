import Link from "next/link";
import Image from "next/image";
import HeroGlobe from "@/components/HeroGlobe";
import FadeIn from "@/components/FadeIn";
import StatCounter from "@/components/StatCounter";
import BroadcastGraphic from "@/components/BroadcastGraphic";
import CtaGeometricGraphic from "@/components/CtaGeometricGraphic";
import PopulationFigureGraphic from "@/components/PopulationFigureGraphic";
import VennGraphic from "@/components/VennGraphic";
import { BuildersIcon, ScaleupsIcon, InvestorsIcon } from "@/components/WhoIcons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SandiQ | Clinical Rigour at Product Speed",
  description:
    "SandiQ helps founders, product leaders, and medical leaders build the ways of working that align clinical, product, and commercial teams toward outcomes that matter.",
};

const pillars: { num: string; slug: string; title: string; tagline: string; desc: string; services: string[] }[] = [
  {
    num: "01",
    slug: "pillar-clinical-product-integration",
    title: "Clinical and Product Integration",
    tagline: "Clinical & Product",
    desc: "Level up how clinical, product, QARA, data science, and engineering teams make decisions together. The pre-deployment work on product quality and robust monitoring lets you ship at pace and catch the right things proactively, without becoming a bottleneck or safety becoming an afterthought. Whether your clinicians are embedded or advising in, we help you build the working relationships and processes that make the whole system reliable.",
    services: ["Pre-deployment quality and QARA that keeps you moving", "Monitoring frameworks that catch the right things proactively"],
  },
  {
    num: "02",
    slug: "pillar-commercial-clinical-alignment",
    title: "Commercial and Clinical Alignment",
    tagline: "Commercial Alignment",
    desc: "As digital health companies scale, the sales narrative, the product roadmap, and the evidence strategy tend to drift apart. We work across commercial, product, and clinical teams to bring them back into a single line, so that what you're selling, what you're building, and what you're proving are the same story. Not a messaging project. An integrated strategic alignment that sets the priorities, the data, and the methodology to deliver and evidence the value you're promising.",
    services: ["Sales narrative aligned with clinical evidence", "Product, commercial, and evidence strategy as a single line"],
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
    title: "On solving actual problems in healthcare",
    date: "Mar 2026",
    excerpt: "Don't start with what tech or dataset you have. Start with the actual outcome and goal, and work with the people who have the problem.",
    href: "https://shubstack.substack.com/p/on-solving-actual-problems-in-healthcare?utm_source=sandiq&utm_medium=website&utm_campaign=homepage",
  },
  {
    title: "Same same, but different",
    date: "Mar 2026",
    excerpt: "On choosing what matters and defining better health outcomes in digital health — and why ambitious claims about AI deserve more scepticism than they usually get.",
    href: "https://shubstack.substack.com/p/same-same-but-different?utm_source=sandiq&utm_medium=website&utm_campaign=homepage",
  },
  {
    title: "Evaluating tech in healthcare: measuring what matters",
    date: "Nov 2025",
    excerpt: "Why most digital health evaluation frameworks miss the point, and what rigorous value measurement actually looks like.",
    href: "https://shubstack.substack.com/p/evaluating-tech-in-healthcare-measuring?utm_source=sandiq&utm_medium=website&utm_campaign=homepage",
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
                  Built to hold up
                </p>
              </div>

              <h1 className="text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                <span style={{
                  background: 'linear-gradient(135deg, #E8B86D 0%, #C9933A 55%, #D4A050 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Clinical rigour
                </span>
                <br />
                <span className="text-[var(--sq-ink)]">at product speed.</span>
              </h1>
            </div>

            <p className="text-base lg:text-lg text-[var(--sq-muted)] leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Most digital health companies can ship fast, but struggle to know if that is in the direction of what matters. SandiQ helps founders, product leaders, and medical leaders build the ways of working that resolve it: where clinical, product and commercial teams agree on what outcomes they&apos;re building toward, and ship in that direction reliably.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[var(--sq-amber)] text-[var(--sq-bg)] rounded hover:bg-[var(--sq-amber-d)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Work with SandiQ →
              </Link>
              <Link href="#how-we-work" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-[var(--sq-ink-20)] text-[var(--sq-ink)] rounded hover:border-[var(--sq-amber)] hover:text-[var(--sq-amber)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                How we work →
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






      {/* ── PROBLEM / COST / SOLUTION ───────────────────────────── */}
      <section className="bg-[var(--sq-bg2)] border-y border-[var(--sq-ink-6)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-16">

          {/* The Problem */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3 lg:pt-1">
                <div className="h-px w-8 bg-[var(--sq-amber)] hidden lg:block" />
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>The Problem</p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                  Shipping fast is not the same as shipping toward outcomes.
                </h2>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  The digital health industry celebrates the wrong signals. Accuracy scores, engagement metrics, adoption curves. Easy to report, and none of it the same as health outcomes. We are wowed by model performance while clinical impact stays unmeasured. Investors and health system leaders see dashboards full of green, yet can&apos;t tell whether the product is actually changing anyone&apos;s health trajectory.
                </p>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  When outcomes aren&apos;t sharply defined from the start, teams default to what&apos;s easily measurable. Roadmaps fill with features that move the visible metrics and drift from the things that would move outcomes. The company ships fast. It just doesn&apos;t ship toward what matters.
                </p>
                <div className="border-l-2 border-[var(--sq-amber-30)] pl-5 flex flex-col gap-1 my-1">
                  {["What good looks like", "For which patients", "Against what counterfactual", "Over what horizon"].map((item) => (
                    <p key={item} className="text-sm text-[var(--sq-muted)] italic" style={{ fontFamily: "var(--font-dm-sans)" }}>{item}</p>
                  ))}
                </div>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Alongside this, a second pattern compounds the first. Clinical governance becomes a bottleneck that slows the roadmap, or the team learns to work around it, building at pace while issues accumulate unseen. Risks then surface late: in a post-market signal, a regulator&apos;s review, a procurement audit, or a clinical incident, long after they were cheaper and easier to address.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          {/* The Cost */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3 lg:pt-1">
                <div className="h-px w-8 bg-[var(--sq-amber)] hidden lg:block" />
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>The Cost</p>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                  Not acting in the right way threatens the future of the business.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-[var(--sq-ink-8)] rounded-sm p-7 flex flex-col gap-3">
                    <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>For builders</p>
                    <p className="text-sm text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Deals stall in procurement because the evidence proves the wrong things. Clinical hires disengage because their input arrives too late to shape direction. Safety incidents surface in post-market review instead of design. Sales narratives promise outcomes the product was never instrumented to measure. Trust erodes. Competitors with weaker technology but sharper outcomes discipline win the contracts you should have won.
                    </p>
                  </div>
                  <div className="border border-[var(--sq-ink-8)] rounded-sm p-7 flex flex-col gap-3">
                    <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>For funders and investors</p>
                    <p className="text-sm text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Portfolio companies report impressive activity quarter after quarter without ever demonstrating the outcomes that justified the thesis. Diligence reveals evidence strategies that cannot answer the question a health system, regulator, or donor board will eventually ask. The vanity metric was hit, but people&apos;s lives are unchanged. Capital deployed, adoption achieved, outcomes unproven.
                    </p>
                  </div>
                </div>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  In both cases, the failure is not a lack of effort or lack of innovation. It is effort pointed at the wrong target.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          {/* The Solution */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3 lg:pt-1">
                <div className="h-px w-8 bg-[var(--sq-amber)] hidden lg:block" />
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>The Solution</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-center">
                <div className="flex flex-col gap-5">
                  <h2 className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    There is a way of working that holds both.
                  </h2>
                  <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Clinical rigour and product velocity need not be opposites. They are a function of how clinical, product, commercial, and regulatory disciplines are set up to work together. When clinical input shapes product decisions early rather than blocking them late, when evidence generation runs alongside the roadmap rather than bolted on at the end, and when commercial messaging, product prioritisation, and evidence strategy are built in alignment from the start, the result is faster shipping, fewer safety incidents, stronger evidence, and a clinical story that holds up everywhere it needs to.
                  </p>
                  <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    SandiQ helps founders, product leaders, and medical leaders build that way of working, tuned to where your organisation is, not lifted from a framework.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end w-full max-w-[280px] lg:max-w-[320px] mx-auto lg:mx-0">
                  <VennGraphic />
                </div>
              </div>
            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--sq-ink-8)] rounded-sm overflow-hidden">
            {/* Founders */}
            <FadeIn>
              <div className="bg-[var(--sq-bg)] p-10 lg:p-12 flex flex-col gap-5 h-full">
                <BuildersIcon />
                <div>
                  <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase mb-3" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    People building
                  </p>
                  <h3 className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    Digital health founders and their teams
                  </h3>
                </div>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  The primary engagement for early-stage companies past early validation, where clinical, product, commercial, and evidence challenges are becoming organisational rather than individual, and where getting the way of working right now determines whether the next stage works.
                </p>
                <div className="mt-auto">
                  <Link href="/services#pillar-medical-quality-ai" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber)] hover:text-[var(--sq-bg)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    See how we help builders →
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Sprints */}
            <FadeIn delay={100}>
              <div className="bg-[var(--sq-bg2)] p-10 lg:p-12 flex flex-col gap-5 h-full">
                <ScaleupsIcon />
                <div>
                  <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase mb-3" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    Workshops &amp; Sprints
                  </p>
                  <h3 className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    Startups and scale-ups of any size
                  </h3>
                </div>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Focused engagements through Workshops and Sprints designed to resolve specific friction, align teams, or build foundational practices before problems compound.
                </p>
                <div className="mt-auto">
                  <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber)] hover:text-[var(--sq-bg)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    See our engagements →
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Investors */}
            <FadeIn delay={200}>
              <div className="bg-[var(--sq-bg3)] p-10 lg:p-12 flex flex-col gap-5 h-full">
                <InvestorsIcon />
                <div>
                  <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase mb-3" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    People investing
                  </p>
                  <h3 className="text-3xl lg:text-4xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    Philanthropy, foundations, and impact investors
                  </h3>
                </div>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Derisking early-stage portfolio ventures and grantees by bringing senior clinical-strategic perspective into diligence, portfolio support, and cohort programming. Helping the organisations you back build the ways of working that determine whether they scale.
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


      {/* ── TWO PRACTICE AREAS ──────────────────────────────────── */}
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
              Two practice areas. One discipline.
            </h2>
            <p className="text-base text-[var(--sq-muted)] leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Our work flows from a single conviction: real value in digital health demands clinical rigour, honest communication, and leadership that knows what outcomes actually mean.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--sq-ink-6)] rounded-sm overflow-hidden">
              {pillars.map((p) => (
                <Link key={p.num} href={`/services#${p.slug}`} className="bg-[var(--sq-bg)] p-10 flex flex-col gap-6 group hover:bg-[var(--sq-surface)] transition-colors duration-300">
                  <div className="flex items-center justify-between gap-3 overflow-hidden">
                    <div className="flex items-center gap-2 min-w-0">
                      <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase whitespace-nowrap" style={{ fontFamily: "var(--font-dm-mono)" }}>
                        Practice Area {p.num}
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


      {/* ── HOW WE WORK ─────────────────────────────────────────── */}
      <section id="how-we-work" className="bg-[var(--sq-bg2)] border-y border-[var(--sq-ink-6)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--sq-amber)]" />
              <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                How we work · Three Engagement Formats
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              Three ways to level up your impact.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Retainer Advisory",
                desc: "Ongoing senior counsel to founders and leadership teams. On-site presence where it matters, in the real decisions: board conversations, clinical-product reviews, evidence strategy, commercial alignment. For companies that need a seasoned clinical-strategic partner integrated into the leadership cadence.",
              },
              {
                num: "02",
                title: "Three-Month Sprint",
                desc: "Focused engagement to resolve a specific, thorny challenge: restructuring how clinical and product teams work, untangling a stalled evidence strategy, aligning commercial narrative to roadmap and data, or diagnosing why safety incidents or governance bottlenecks keep recurring. Clear scope, clear outcome, clear exit.",
              },
              {
                num: "03",
                title: "Workshop Series",
                desc: "Structured cross-functional sessions that bring product, clinical, commercial, QA, and regulatory teams into alignment on specific decisions or practices. Useful for startups finding their footing, scale-ups realigning after a growth phase, or accelerators and investors derisking early ventures. Designed to leave the team with shared language, shared priorities, and a set of working practices they own.",
              },
            ].map((format, i) => (
              <FadeIn key={format.num} delay={i * 100}>
                <div className="border border-[var(--sq-ink-8)] rounded-sm p-10 flex flex-col gap-5 h-full">
                  <div className="flex items-center gap-3">
                    <span className="text-xs tracking-widest text-[var(--sq-amber)] opacity-60" style={{ fontFamily: "var(--font-dm-mono)" }}>{format.num}</span>
                    <div className="h-px flex-1 bg-[var(--sq-amber)] opacity-20" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {format.title}
                  </h3>
                  <p className="text-sm text-[var(--sq-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {format.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-10 flex justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm border border-[var(--sq-ink-20)] text-[var(--sq-muted)] rounded hover:border-[var(--sq-amber)] hover:text-[var(--sq-amber)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Discuss which format fits →
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
                with fifteen years of experience across clinical practice, health
                technology, and health system strategy. He has led clinical and
                strategic initiatives across the NHS, international health
                agencies, and private sector organisations, from early-stage
                startups through to multilateral programmes.
              </p>

              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                He has served as a clinical lead at the International
                Telecommunication Union (ITU) and co-chaired a WHO working group on clinical AI evaluation, leading a guideline publication on digital health standards. He founded SandiQ to provide
                the kind of senior, independent clinical and strategic counsel
                that digital health organisations rarely have access to: the
                perspective of someone who has sat on both the clinical and the
                commercial side of the table.
              </p>

              <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                He hosts the GPODH (Global Perspectives on Digital Health)
                podcast and writes the Shubstack newsletter on digital health
                strategy, evidence, and equity.
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
                <a href={article.href} target="_blank" rel="noopener noreferrer" className="block border border-[var(--sq-ink-8)] rounded-sm p-7 flex flex-col gap-4 h-full hover:border-[var(--sq-amber)] transition-colors duration-200">
                  <p className="text-sm text-[var(--sq-muted)] tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>{article.date}</p>
                  <h3 className="text-xl text-[var(--sq-ink)] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--sq-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{article.excerpt}</p>
                </a>
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
            Ready to build something the right way?
          </h2>
          <p className="text-base text-[var(--sq-muted)] max-w-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Whether you&apos;re building a digital health product that needs to hold up to clinical scrutiny, or investing in the organisations doing that work, every conversation with us starts by understanding what you&apos;re actually trying to achieve.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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
