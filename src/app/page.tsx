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
  title: "Shubs Upadhyay | Clinical Rigour at Product Speed",
  description:
    "Dr Shubs Upadhyay helps founders, product leaders, and medical leaders build digital health that holds up — clinically, commercially, and at scale.",
};

const pillars: { num: string; slug: string; title: string; tagline: string; desc: string; services: string[] }[] = [
  {
    num: "01",
    slug: "pillar-clinical-product-integration",
    title: "Clinical and Product Integration",
    tagline: "Clinical & Product",
    desc: "Level up how clinical, product, QARA, data science, and engineering teams make decisions together. The pre-deployment work on product quality and robust monitoring lets you ship at pace and catch the right things proactively, without becoming a bottleneck or safety becoming an afterthought. Whether your clinicians are embedded or advising in, I help you build the working relationships and processes that make the whole system reliable.",
    services: ["Pre-deployment quality and QARA that keeps you moving", "Monitoring frameworks that catch the right things proactively"],
  },
  {
    num: "02",
    slug: "pillar-commercial-clinical-alignment",
    title: "Commercial and Clinical Alignment",
    tagline: "Commercial Alignment",
    desc: "As digital health companies scale, the sales narrative, the product roadmap, and the evidence strategy tend to drift apart. I work across commercial, product, and clinical teams to bring them back into a single line, so that what you're selling, what you're building, and what you're proving are the same story. Not a messaging project. An integrated strategic alignment that sets the priorities, the data, and the methodology to deliver and evidence the value you're promising.",
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #FDF4E8 50%, #FDF8F3 100%)' }}>
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
        {/* Warm coral blob — top right */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none -translate-y-1/4 translate-x-1/4"
          style={{ background: 'radial-gradient(circle, rgba(212,112,10,0.08) 0%, rgba(232,98,42,0.04) 40%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[var(--sq-amber)]/30 shrink-0">
                  <Image src="/images/shubs-headshot.webp" alt="Dr Shubs Upadhyay" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[var(--sq-amber)]" />
                  <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>Hi, I&apos;m Shubs.</p>
                </div>
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
              After a decade working inside venture-backed digital health, the NHS, and global health agencies, I know what separates the products that hold up from the ones that don&apos;t. I built SandiQ to put that experience in your corner.
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
                  The gap I keep seeing.
                </h2>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Most of the digital health products I&apos;ve worked with or reviewed are built by smart, motivated people. The problem isn&apos;t the technology or the intent. It&apos;s that the definition of value gets decided too late, in the wrong room, by people who aren&apos;t equipped to make it.
                </p>
                <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Clinical input arrives at the end to sign things off rather than at the start to shape decisions. Evidence gets retrofitted to a roadmap that&apos;s already locked. Commercial messaging promises things the product can&apos;t yet demonstrate. And everyone wonders why procurement stalls, commissioners ask hard questions, or investors push back.
                </p>
                <div className="border-l-2 border-[var(--sq-amber-30)] pl-5 flex flex-col gap-1 my-1">
                  <p className="text-sm text-[var(--sq-muted)]" style={{ fontFamily: "var(--font-dm-sans)" }}>Value in digital health means:</p>
                  {["What good looks like", "For which patients", "Against what counterfactual", "Over what horizon"].map((item) => (
                    <p key={item} className="text-sm text-[var(--sq-muted)] italic" style={{ fontFamily: "var(--font-dm-sans)" }}>{item}</p>
                  ))}
                </div>
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
                  What it costs when this goes wrong.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-[var(--sq-ink-8)] rounded-sm p-7 flex flex-col gap-3">
                    <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>For the teams I work with</p>
                    <p className="text-sm text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Deals stall in procurement because the clinical story wasn&apos;t built into the product from the start. Safety and quality incidents surface late and expensively. Regulatory submissions take three times as long as they should. The team is capable — the ways of working just weren&apos;t set up for this.
                    </p>
                  </div>
                  <div className="border border-[var(--sq-ink-8)] rounded-sm p-7 flex flex-col gap-3">
                    <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>For funders and investors</p>
                    <p className="text-sm text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Portfolio companies report impressive activity metrics while missing the clinical outcomes that determine whether a health system buys, renews, or recommends. The gap between what was pitched and what holds up to clinical scrutiny widens quietly — until it doesn&apos;t.
                    </p>
                  </div>
                </div>
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
                    There&apos;s a better way to work — and I can help you build it.
                  </h2>
                  <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Clinical rigour and product velocity are not opposites. They are a function of how clinical, product, commercial, and regulatory work is set up to happen together. When I come in early — shaping product decisions rather than reviewing them at the end — teams ship faster, build stronger evidence, and arrive at conversations with commissioners, regulators, and investors with a story that holds.
                  </p>
                  <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    I work with founders, product leaders, and medical leaders to build that way of working — tuned to where your organisation actually is, not lifted from a framework.
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
                Who I work with
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              Who I work with.
            </h2>
            <p className="text-base text-[var(--sq-muted)] leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Whether you&apos;re building or backing digital health, I work with you directly.
            </p>
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
                  If you&apos;re building a digital health product and the clinical, product, commercial, and evidence challenges are starting to compound on each other — this is the engagement. I come in early, stay close, and help you build the ways of working that mean the next stage actually works.
                </p>
                <div className="mt-auto">
                  <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber)] hover:text-[var(--sq-bg)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    See how I can help →
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
                  Not every challenge needs a long engagement. I run focused Workshops and Sprints designed to resolve specific friction, align teams, or build foundational practices before problems compound — whatever stage you&apos;re at.
                </p>
                <div className="mt-auto">
                  <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber)] hover:text-[var(--sq-bg)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    See my engagements →
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
                  I work with foundations, philanthropies, and impact investors to bring senior clinical-strategic perspective into diligence, portfolio support, and cohort programming — helping the organisations you back build toward outcomes that actually hold up.
                </p>
                <div className="mt-auto">
                  <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber)] hover:text-[var(--sq-bg)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    See how I help investors →
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
                What I do
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              Two practice areas. One discipline.
            </h2>
            <p className="text-base text-[var(--sq-muted)] leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
              My work flows from a single conviction: real value in digital health demands clinical rigour, honest communication, and leadership that knows what outcomes actually mean.
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
                How I work · Three Engagement Formats
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
                Fifteen years of clinical and strategic work across the NHS, multilateral agencies, and private sector digital health organisations.
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


      {/* ── WHY SANDIQ ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading block */}
          <FadeIn className="flex flex-col gap-4 mb-14 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--sq-amber)]" />
              <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                Why work with me
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              Lived, not lifted.
            </h2>
          </FadeIn>

          {/* Body copy */}
          <FadeIn delay={80} className="max-w-3xl flex flex-col gap-6 mb-20">
            <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
              I&apos;m a physician who has spent a decade at the point where these problems actually get solved. As senior clinical and medical director at a venture-backed digital health company deploying regulated AI across multiple markets, my work was defining what good looked like — for which patients, against what counterfactual — and then building the clinical, product, and evidence practices that could deliver it at the pace the business demanded.
            </p>
            <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
              That work has continued since. Co-chairing a WHO working group on AI evaluation. Clinical practice across different health systems. Keynotes and leadership sessions for senior tech and product audiences at companies like Doctolib, the Wellcome Trust, and at conferences and accelerators across Europe. A podcast built around a single question: whether digital health actually reaches and helps the people it claims to serve.
            </p>
            <p className="text-base text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
              What I bring is not a playbook. It is hard-won lessons from having lived these problems, and the ability to translate credibly across every discipline in the room — clinicians, product, data science, engineering, regulatory, commercial. That fluency is the work. Very few advisors can hold all of those conversations. That is why founders, product leaders, medical leaders, and the investors who back them bring me in to help them build towards what matters.
            </p>
          </FadeIn>

          {/* Testimonial placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="border border-[var(--sq-ink-8)] rounded-sm p-8 flex flex-col gap-6 h-full">
                  {/* Quote mark */}
                  <span className="text-4xl leading-none text-[var(--sq-amber)] opacity-60" style={{ fontFamily: "var(--font-cormorant)" }}>&ldquo;</span>
                  {/* Placeholder quote */}
                  <p className="text-base text-[var(--sq-muted)] leading-relaxed flex-1 italic" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>
                    Testimonial coming soon.
                  </p>
                  {/* Attribution */}
                  <div className="border-t border-[var(--sq-ink-8)] pt-5 flex flex-col gap-1">
                    <p className="text-sm text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                      Name, Role
                    </p>
                    <p className="text-xs text-[var(--sq-muted)]" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      Organisation
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
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
              What I&apos;ve delivered.
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
              The industry talks to itself. I don&apos;t.
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
            Whether you&apos;re building a digital health product that needs to hold up to clinical scrutiny, or investing in the organisations doing that work, every conversation starts by understanding what you&apos;re actually trying to achieve.
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
