import Link from "next/link";
import HeroGlobe from "@/components/HeroGlobe";
import FadeIn from "@/components/FadeIn";
import StatCounter from "@/components/StatCounter";
import FlatlineGraphic from "@/components/FlatlineGraphic";
import VennGraphic from "@/components/VennGraphic";
import BroadcastGraphic from "@/components/BroadcastGraphic";
import CtaGeometricGraphic from "@/components/CtaGeometricGraphic";
import HomeServiceIcon from "@/components/HomeServiceIcon";

type ServiceNum = '01' | '02' | '03' | '04' | '05' | '06'

const services: { num: ServiceNum; title: string; desc: string }[] = [
  {
    num: "01",
    title: "Fractional CMO",
    desc: "Senior clinical leadership embedded in your teams.",
  },
  {
    num: "02",
    title: "Clinical Product Development",
    desc: "Integrate clinical insight from day one.",
  },
  {
    num: "03",
    title: "Evidence Strategy & Generation",
    desc: "Measure what actually matters.",
  },
  {
    num: "04",
    title: "Market Access & Clinical Credibility",
    desc: "Navigate complex health system procurement.",
  },
  {
    num: "05",
    title: "Impact Communications",
    desc: "Turn evidence into narratives that move buyers.",
  },
  {
    num: "06",
    title: "Health System Intelligence",
    desc: "Strategic counsel for navigating complex health system contexts.",
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
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9933A" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Amber glow — top left */}
        <div
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,147,58,0.12) 0%, transparent 70%)' }}
        />
        {/* Teal glow — behind globe */}
        <div
          className="absolute -bottom-20 -right-20 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(42,107,98,0.15) 0%, transparent 68%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C9933A]" />
                <p className="text-xs tracking-widest text-[#C9933A] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
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
                <span className="text-[#F2EFE9]">in digital health.</span>
              </h1>
            </div>

            <p className="text-base lg:text-lg text-[#A8A49D] leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Senior clinical and strategic counsel for digital health companies,
              investors, and health organisations. We help you build solutions
              that are clinically sound, commercially credible, and trusted by
              the people who need to use them.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#C9933A] text-[#0C0F0D] rounded hover:bg-[#b8832e] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Work with SandiQ →
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-[#F2EFE9]/20 text-[#F2EFE9] rounded hover:border-[#C9933A] hover:text-[#C9933A] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
      <section className="relative bg-[#111410] border-y border-[#F2EFE9]/6 py-20 overflow-hidden">
        <FlatlineGraphic />
        <FadeIn>
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <blockquote className="text-3xl lg:text-4xl xl:text-5xl leading-tight italic text-[#F2EFE9]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
              &ldquo;Most digital health fails not because of bad technology. It
              fails because it&apos;s built against the wrong definition of
              value.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#C9933A]" />
              <Link href="/thinking" className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Read our thinking →
              </Link>
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
                <div className="h-px w-8 bg-[#C9933A]" />
                <p className="text-xs tracking-widest text-[#C9933A] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  About SandiQ
                </p>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#F2EFE9] leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                We exist because the industry keeps asking the wrong questions.
              </h2>
              <p className="text-base text-[#A8A49D] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                SandiQ was founded on a simple but uncomfortable observation:
                the digital health industry has a systemic tendency to optimise
                for the wrong outcomes. It chases adoption metrics instead of
                health outcomes. It talks about disruption without engaging with
                systems. It builds for idealised users rather than real ones.
              </p>
              <p className="text-base text-[#A8A49D] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
            <aside className="border border-[#C9933A]/25 rounded-sm p-10 bg-[#C9933A]/5" style={{ backdropFilter: 'blur(4px)' }}>
              <p className="text-xs tracking-widest text-[#C9933A] uppercase mb-6" style={{ fontFamily: "var(--font-dm-mono)" }}>
                The SandiQ Manifesto
              </p>
              <blockquote className="text-xl lg:text-2xl xl:text-3xl text-[#F2EFE9] leading-snug italic max-w-4xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                &ldquo;Digital health must be built around clinical reality, not
                around what is easy to build or easy to sell.
                We don&apos;t accept that speed and rigour are in tension. We
                don&apos;t accept that evidence is only for academics. We
                don&apos;t accept that commercial success and genuine clinical
                value are different goals. The organisations that understand
                this are the ones that last.&rdquo;
              </blockquote>
            </aside>
          </FadeIn>
        </div>
      </section>


      {/* ── SERVICES STRIP ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9933A]" />
              <p className="text-xs tracking-widest text-[#C9933A] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                What we do
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#F2EFE9]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              Services built for complex health challenges.
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F2EFE9]/6 rounded-sm overflow-hidden">
              {services.map((s) => (
                <div key={s.num} className="bg-[#0C0F0D] p-8 flex flex-col gap-4 group hover:bg-[#141810] transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    {/* Animated icon (replaces static SVG) */}
                    <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <HomeServiceIcon num={s.num} />
                    </div>
                    <p className="text-xs text-[#C9933A]/50 tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      {s.num}
                    </p>
                  </div>
                  <h3 className="text-xl text-[#F2EFE9] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#A8A49D] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {s.desc}
                  </p>
                  <Link href="/services" className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200 mt-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ── IMPACT NUMBERS ─────────────────────────────────────── */}
      <section className="relative bg-[#111410] py-20 border-y border-[#F2EFE9]/6 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          <div className="w-[700px] h-[220px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(201,147,58,0.07) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col gap-4 mb-14 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-[#C9933A]" />
                <p className="text-xs tracking-widest text-[#C9933A] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Track record
                </p>
                <div className="h-px w-8 bg-[#C9933A]" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((stat) => (
                <div key={stat.value} className="flex flex-col items-center text-center gap-3">
                  <StatCounter
                    value={stat.value}
                    className="text-5xl lg:text-6xl text-[#C9933A]"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
                  />
                  <p className="text-xs text-[#A8A49D] leading-relaxed" style={{ fontFamily: "var(--font-dm-mono)" }}>
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
              <div className="w-full aspect-square max-w-xs bg-[#2A6B62]/15 border border-[#2A6B62]/25 rounded-sm flex items-center justify-center">
                <span className="text-4xl text-[#2A6B62]/50" style={{ fontFamily: "var(--font-cormorant)" }}>SU</span>
              </div>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#C9933A]" />
                  <p className="text-xs tracking-widest text-[#C9933A] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    Founding Partner
                  </p>
                </div>
                <h2 className="text-4xl lg:text-5xl text-[#F2EFE9]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                  Dr Shubs Upadhyay
                </h2>
              </div>

              <p className="text-base text-[#A8A49D] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Dr Shubs Upadhyay is a physician and digital health strategist
                with over 15 years of experience across clinical practice, health
                technology, and health system strategy. He has led clinical and
                strategic initiatives across the NHS, international health
                agencies, and private sector organisations, from early-stage
                startups through to multilateral programmes.
              </p>

              <p className="text-base text-[#A8A49D] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                He has served as a clinical lead at the International
                Telecommunication Union (ITU) and contributed to WHO working
                groups on digital health standards. He founded SandiQ to provide
                the kind of senior, independent clinical and strategic counsel
                that digital health organisations rarely have access to: the
                perspective of someone who has sat on both the clinical and the
                commercial side of the table.
              </p>

              <p className="text-base text-[#A8A49D] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                He hosts the GPODH (Global Perspectives on Digital Health)
                podcast, which has reached listeners in over 60 countries, and
                writes the Shubstack newsletter on digital health strategy,
                evidence, and equity.
              </p>

              <div className="border-t border-[#F2EFE9]/8 pt-6 flex flex-wrap gap-3">
                {["MBBS", "MSc Global Health", "Former ITU Clinical Lead", "WHO Contributor", "NHS Digital Health Advisor"].map((cred) => (
                  <span key={cred} className="px-3 py-1 text-xs border border-[#F2EFE9]/12 text-[#A8A49D] rounded-sm" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <a href="https://linkedin.com/in/shubs-upadhyay" target="_blank" rel="noopener noreferrer" className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>LinkedIn →</a>
                <a href="https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=homepage" target="_blank" rel="noopener noreferrer" className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>Shubstack →</a>
                <a href="https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=homepage" target="_blank" rel="noopener noreferrer" className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>GPODH Podcast →</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ── WHAT WE'VE DELIVERED ───────────────────────────────── */}
      <section className="bg-[#111410] py-24 border-y border-[#F2EFE9]/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9933A]" />
              <p className="text-xs tracking-widest text-[#C9933A] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                Outcomes
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#F2EFE9]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              What we&apos;ve delivered.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="relative border-l-2 border-[#C9933A] pl-6 py-2 flex flex-col gap-3 h-full">
                  <span className="absolute -top-1 -left-[4px] w-2 h-2 rounded-full bg-[#C9933A]/30 sonar-ring" style={{ animationDelay: `${i * 0.4}s` }} aria-hidden />
                  <span className="absolute -top-1 -left-[4px] w-2 h-2 rounded-full bg-[#C9933A]/30 sonar-ring-delay" style={{ animationDelay: `${i * 0.4 + 1.1}s` }} aria-hidden />
                  <span className="absolute -top-[3px] -left-[3px] w-[6px] h-[6px] rounded-full bg-[#C9933A]" aria-hidden />
                  <h3 className="text-xl text-[#F2EFE9] leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-[#A8A49D] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
              <div className="h-px w-8 bg-[#C9933A]" />
              <p className="text-xs tracking-widest text-[#C9933A] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                From the founder
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#F2EFE9]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              The industry talks to itself. We don&apos;t.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {articles.map((article, i) => (
              <FadeIn key={i} delay={i * 100}>
                <a href={article.href} target="_blank" rel="noopener noreferrer"
                  className="border border-[#F2EFE9]/8 rounded-sm p-7 flex flex-col gap-4 hover:border-[#C9933A]/30 hover:bg-[#0F1209] transition-colors duration-200 group h-full">
                  <p className="text-xs text-[#A8A49D] tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>{article.date}</p>
                  <h3 className="text-xl text-[#F2EFE9] leading-snug group-hover:text-[#C9933A] transition-colors duration-200" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#A8A49D] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{article.excerpt}</p>
                  <span className="text-xs text-[#C9933A]" style={{ fontFamily: "var(--font-dm-sans)" }}>Read on Substack →</span>
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Podcast strip */}
          <FadeIn delay={100}>
            <div className="border border-[#2A6B62]/30 rounded-sm p-8 flex flex-col md:flex-row items-center gap-8 bg-[#2A6B62]/5">
              <div className="shrink-0">
                <BroadcastGraphic size={80} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#2A6B62] tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  The GPODH Podcast
                </p>
                <p className="text-lg text-[#F2EFE9] mb-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                  Global Perspectives on Digital Health
                </p>
                <p className="text-sm text-[#A8A49D]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Candid conversations with the people reshaping digital health across 60+ countries.
                </p>
              </div>
              <a href="https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=homepage" target="_blank" rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[#2A6B62] text-[#F2EFE9] rounded hover:bg-[#2A6B62] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Listen on gpodh.org →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER CTA BAND ────────────────────────────────────── */}
      <section className="relative bg-[#111410] border-t border-[#F2EFE9]/6 py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          <div className="w-[600px] h-[300px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(201,147,58,0.07) 0%, transparent 65%)' }} />
        </div>
        <CtaGeometricGraphic />

        <FadeIn className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[#F2EFE9] leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
            Ready to build something that actually works?
          </h2>
          <p className="text-base text-[#A8A49D] max-w-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Whether you&apos;re launching a new digital health product, seeking
            to enter a new market, or trying to prove the value of what you
            already have: start with a conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:hello@sandiq.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm text-[#A8A49D] border border-[#F2EFE9]/15 rounded hover:border-[#C9933A] hover:text-[#C9933A] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              hello@sandiq.com
            </a>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#C9933A] text-[#0C0F0D] rounded hover:bg-[#b8832e] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              Book a call →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
