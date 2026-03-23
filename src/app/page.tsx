import Link from "next/link";
import HeroGlobe from "@/components/HeroGlobe";

const services = [
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
    title: "Global Health Intelligence",
    desc: "Strategic counsel on digital health in LMICs.",
  },
];

const stats = [
  { value: "15+", label: "Years across the digital health ecosystem" },
  { value: "5", label: "Countries with multi-million pound contracts protected" },
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
    title: "WHO-aligned policy positioning across 12 LMICs",
    desc: "Strategic counsel shaped national digital health roadmaps in partnership with ITU, securing political buy-in across three WHO regions.",
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
    excerpt:
      "Why most digital health evaluation frameworks miss the point, and what rigorous value measurement actually looks like.",
    href: "https://shubstack.substack.com",
  },
  {
    title: "Level up your evidence comms",
    date: "Jul 2025",
    excerpt:
      "The gap between what your data shows and what your audience hears is a communications problem. Here's how to close it.",
    href: "https://shubstack.substack.com",
  },
  {
    title: "Can Global Health and Venture Capital get along?",
    date: "May 2025",
    excerpt:
      "On the structural tensions between impact-driven global health work and the return expectations of venture capital.",
    href: "https://shubstack.substack.com",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background grid decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#C9933A"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C9933A]" />
                <p
                  className="text-xs tracking-widest text-[#C9933A] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Global Digital Health Consultancy
                </p>
              </div>

              <h1
                className="text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                <span className="text-[#C9933A]">Real value</span>
                <br />
                <span className="text-[#F2EFE9]">in digital health.</span>
              </h1>
            </div>

            <p
              className="text-base lg:text-lg text-[#A8A49D] leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              We help digital health companies, investors, and global
              organisations build solutions that are clinically sound, equitable,
              and trusted by the people they&apos;re meant to serve.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#C9933A] text-[#0C0F0D] rounded hover:bg-[#b8832e] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Work with SandiQ →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-[#F2EFE9]/20 text-[#F2EFE9] rounded hover:border-[#C9933A] hover:text-[#C9933A] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Our services →
              </Link>
            </div>
          </div>

          {/* Right — animated globe */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              <HeroGlobe />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM BAND ───────────────────────────────────────── */}
      <section className="bg-[#111410] border-y border-[#F2EFE9]/6 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote
            className="text-3xl lg:text-4xl xl:text-5xl leading-tight italic text-[#F2EFE9]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
          >
            &ldquo;Most digital health fails not because of bad technology. It
            fails because it&apos;s built against the wrong definition of
            value.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#C9933A]" />
            <Link
              href="/thinking"
              className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Read our thinking →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SANDIQ ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C9933A]" />
                <p
                  className="text-xs tracking-widest text-[#C9933A] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  About SandiQ
                </p>
              </div>
              <h2
                className="text-4xl lg:text-5xl text-[#F2EFE9] leading-tight"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                We exist because the industry keeps asking the wrong questions.
              </h2>
              <p
                className="text-base text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                SandiQ was founded on a simple but uncomfortable observation:
                the digital health industry has a systemic tendency to optimise
                for the wrong outcomes. It chases adoption metrics instead of
                health outcomes. It talks about disruption without engaging with
                systems. It builds for idealised users rather than real ones.
              </p>
              <p
                className="text-base text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                We work at the intersection of clinical rigour, implementation
                reality, and strategic clarity — helping organisations from
                seed-stage startups to WHO programmes build digital health
                solutions that are genuinely effective, equitable, and trusted.
                Not just funded.
              </p>
            </div>

            <aside className="border border-[#C9933A]/25 rounded-sm p-8 bg-[#C9933A]/5 flex flex-col justify-center">
              <p
                className="text-xs tracking-widest text-[#C9933A] uppercase mb-6"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                The SandiQ Manifesto
              </p>
              <blockquote
                className="text-xl lg:text-2xl text-[#F2EFE9] leading-snug italic"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                &ldquo;Digital health must be built with the communities it
                serves, evaluated by the outcomes that matter to patients, and
                held accountable to the systems it claims to improve.
                <br /><br />
                We don&apos;t accept that speed and safety are in tension. We
                don&apos;t accept that evidence is only for academics. We
                don&apos;t accept that global health and commercial health are
                different games. The stakes are just higher for some players
                than others.&rdquo;
              </blockquote>
            </aside>
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9933A]" />
              <p
                className="text-xs tracking-widest text-[#C9933A] uppercase"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                What we do
              </p>
            </div>
            <h2
              className="text-4xl lg:text-5xl text-[#F2EFE9]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            >
              Services built for complex health systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F2EFE9]/6 rounded-sm overflow-hidden">
            {services.map((s) => (
              <div
                key={s.num}
                className="bg-[#0C0F0D] p-8 flex flex-col gap-4 group hover:bg-[#111410] transition-colors duration-200"
              >
                <p
                  className="text-xs text-[#C9933A] tracking-widest"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {s.num}
                </p>
                <h3
                  className="text-xl text-[#F2EFE9] leading-snug"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-[#A8A49D] leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {s.desc}
                </p>
                <Link
                  href="/services"
                  className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200 mt-2"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ─────────────────────────────────────── */}
      <section className="bg-[#111410] py-20 border-y border-[#F2EFE9]/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-4 mb-14 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#C9933A]" />
              <p
                className="text-xs tracking-widest text-[#C9933A] uppercase"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Track record
              </p>
              <div className="h-px w-8 bg-[#C9933A]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center text-center gap-3"
              >
                <p
                  className="text-5xl lg:text-6xl text-[#C9933A]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs text-[#A8A49D] leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE FOUNDER ────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Portrait placeholder */}
            <div className="lg:col-span-1">
              <div className="w-full aspect-square max-w-xs bg-[#2A6B62]/15 border border-[#2A6B62]/25 rounded-sm flex items-center justify-center">
                <span
                  className="text-4xl text-[#2A6B62]/50"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  SU
                </span>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#C9933A]" />
                  <p
                    className="text-xs tracking-widest text-[#C9933A] uppercase"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Founding Partner
                  </p>
                </div>
                <h2
                  className="text-4xl lg:text-5xl text-[#F2EFE9]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
                >
                  Dr Shubs Upadhyay
                </h2>
              </div>

              <p
                className="text-base text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Dr Shubs Upadhyay is a physician, digital health strategist, and
                global health advocate with over 15 years of experience spanning
                clinical practice, health technology, and international
                development. He has led clinical and strategic initiatives across
                five continents, working with startups, NHS trusts, multilateral
                agencies, and development finance institutions.
              </p>

              <p
                className="text-base text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Shubs has served as a clinical lead at the International
                Telecommunication Union (ITU) and contributed to WHO working
                groups on digital health standards and equity. He founded SandiQ
                to provide the kind of senior, independent clinical and strategic
                counsel that digital health organisations rarely have access to —
                without the overhead of a large consultancy.
              </p>

              <p
                className="text-base text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                He hosts the GPODH (Global Perspectives on Digital Health)
                podcast, which has reached listeners in over 60 countries, and
                writes the Shubstack newsletter on digital health strategy,
                evidence, and equity.
              </p>

              {/* Credentials */}
              <div className="border-t border-[#F2EFE9]/8 pt-6 flex flex-wrap gap-3">
                {[
                  "MBBS",
                  "MSc Global Health",
                  "Former ITU Clinical Lead",
                  "WHO Contributor",
                  "NHS Digital Health Advisor",
                ].map((cred) => (
                  <span
                    key={cred}
                    className="px-3 py-1 text-xs border border-[#F2EFE9]/12 text-[#A8A49D] rounded-sm"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {cred}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://linkedin.com/in/shubs-upadhyay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  LinkedIn →
                </a>
                <a
                  href="https://shubstack.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Shubstack →
                </a>
                <a
                  href="https://gpodh.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  GPODH Podcast →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE'VE DELIVERED ───────────────────────────────── */}
      <section className="bg-[#111410] py-24 border-y border-[#F2EFE9]/6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9933A]" />
              <p
                className="text-xs tracking-widest text-[#C9933A] uppercase"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Outcomes
              </p>
            </div>
            <h2
              className="text-4xl lg:text-5xl text-[#F2EFE9]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            >
              What we&apos;ve delivered.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome, i) => (
              <div
                key={i}
                className="border-l-2 border-[#C9933A] pl-6 py-2 flex flex-col gap-3"
              >
                <h3
                  className="text-xl text-[#F2EFE9] leading-snug"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                  }}
                >
                  {outcome.title}
                </h3>
                <p
                  className="text-sm text-[#A8A49D] leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {outcome.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THOUGHT LEADERSHIP ─────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9933A]" />
              <p
                className="text-xs tracking-widest text-[#C9933A] uppercase"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                From the founder
              </p>
            </div>
            <h2
              className="text-4xl lg:text-5xl text-[#F2EFE9]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            >
              The industry talks to itself. We don&apos;t.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {articles.map((article, i) => (
              <a
                key={i}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#F2EFE9]/8 rounded-sm p-7 flex flex-col gap-4 hover:border-[#C9933A]/30 transition-colors duration-200 group"
              >
                <p
                  className="text-xs text-[#A8A49D] tracking-widest"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {article.date}
                </p>
                <h3
                  className="text-xl text-[#F2EFE9] leading-snug group-hover:text-[#C9933A] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                  }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-sm text-[#A8A49D] leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {article.excerpt}
                </p>
                <span
                  className="text-xs text-[#C9933A]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Read on Substack →
                </span>
              </a>
            ))}
          </div>

          {/* Podcast strip */}
          <div className="border border-[#2A6B62]/30 rounded-sm p-8 flex flex-col md:flex-row items-center gap-8 bg-[#2A6B62]/5">
            <div className="w-20 h-20 rounded-sm bg-[#2A6B62]/20 border border-[#2A6B62]/40 flex items-center justify-center shrink-0">
              <span
                className="text-[10px] text-[#2A6B62] text-center leading-tight"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                GPODH
              </span>
            </div>
            <div className="flex-1">
              <p
                className="text-xs text-[#2A6B62] tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                The GPODH Podcast
              </p>
              <p
                className="text-lg text-[#F2EFE9] mb-2"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                Global Perspectives on Digital Health
              </p>
              <p
                className="text-sm text-[#A8A49D]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Candid conversations with the people reshaping digital health
                across 60+ countries.
              </p>
            </div>
            <a
              href="https://gpodh.org"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[#2A6B62] text-[#F2EFE9] rounded hover:bg-[#2A6B62] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Listen on gpodh.org →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA BAND ────────────────────────────────────── */}
      <section className="bg-[#111410] border-t border-[#F2EFE9]/6 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl text-[#F2EFE9] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            Ready to build something
            <br />
            that actually works?
          </h2>
          <p
            className="text-base text-[#A8A49D] max-w-lg"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Whether you&apos;re launching a new digital health product, seeking
            to enter a new market, or trying to prove the value of what you
            already have — start with a conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:hello@sandiq.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm text-[#A8A49D] border border-[#F2EFE9]/15 rounded hover:border-[#C9933A] hover:text-[#C9933A] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              hello@sandiq.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#C9933A] text-[#0C0F0D] rounded hover:bg-[#b8832e] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Book a call →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
