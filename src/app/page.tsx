import Link from "next/link";
import { networkMembers } from "@/data/network";

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
  { value: "20+", label: "Countries in the SandiQ Network" },
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

          {/* Right — abstract globe SVG */}
          <div className="hidden lg:flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              width="420"
              height="420"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              {/* Outer circle */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="#C9933A"
                strokeWidth="0.8"
                opacity="0.4"
              />
              <circle
                cx="200"
                cy="200"
                r="130"
                fill="none"
                stroke="#2A6B62"
                strokeWidth="0.6"
                opacity="0.3"
              />
              <circle
                cx="200"
                cy="200"
                r="80"
                fill="none"
                stroke="#C9933A"
                strokeWidth="0.5"
                opacity="0.25"
              />

              {/* Latitude lines */}
              {[-120, -80, -40, 0, 40, 80, 120].map((offset, i) => {
                const y = 200 + offset;
                const halfWidth = Math.sqrt(
                  Math.max(0, 180 * 180 - offset * offset)
                );
                return (
                  <line
                    key={i}
                    x1={200 - halfWidth}
                    y1={y}
                    x2={200 + halfWidth}
                    y2={y}
                    stroke="#C9933A"
                    strokeWidth="0.5"
                    opacity="0.2"
                  />
                );
              })}

              {/* Longitude lines */}
              {[0, 30, 60, 90, 120, 150].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 200 + 180 * Math.cos(rad);
                const y1 = 200 + 180 * Math.sin(rad);
                const x2 = 200 - 180 * Math.cos(rad);
                const y2 = 200 - 180 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#2A6B62"
                    strokeWidth="0.5"
                    opacity="0.2"
                  />
                );
              })}

              {/* Scattered dots representing global network nodes */}
              {[
                [200, 170],
                [140, 210],
                [260, 190],
                [180, 250],
                [230, 150],
                [170, 140],
                [290, 220],
                [150, 260],
                [240, 270],
                [200, 200],
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={i === 9 ? 4 : 2.5}
                  fill={i % 2 === 0 ? "#C9933A" : "#2A6B62"}
                  opacity={i === 9 ? 0.9 : 0.6}
                />
              ))}

              {/* Connection lines */}
              <line
                x1="200"
                y1="200"
                x2="200"
                y2="170"
                stroke="#C9933A"
                strokeWidth="0.6"
                opacity="0.3"
              />
              <line
                x1="200"
                y1="200"
                x2="140"
                y2="210"
                stroke="#C9933A"
                strokeWidth="0.6"
                opacity="0.3"
              />
              <line
                x1="200"
                y1="200"
                x2="260"
                y2="190"
                stroke="#2A6B62"
                strokeWidth="0.6"
                opacity="0.3"
              />
              <line
                x1="200"
                y1="200"
                x2="180"
                y2="250"
                stroke="#2A6B62"
                strokeWidth="0.6"
                opacity="0.3"
              />
              <line
                x1="200"
                y1="200"
                x2="290"
                y2="220"
                stroke="#C9933A"
                strokeWidth="0.6"
                opacity="0.3"
              />
            </svg>
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

      {/* ── SANDIQ NETWORK ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C9933A]" />
                <p
                  className="text-xs tracking-widest text-[#C9933A] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  The SandiQ Network
                </p>
              </div>
              <h2
                className="text-4xl lg:text-5xl text-[#F2EFE9] leading-tight"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                One consultancy.
                <br />A global collective.
              </h2>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <p
                className="text-base text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                SandiQ draws on a curated international network of clinical,
                policy, and implementation experts, assembled project by
                project to match the specific challenge at hand.
              </p>
              <p
                className="text-base text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                This isn&apos;t a directory. It&apos;s a working collective of
                people who have delivered difficult things in hard contexts.
              </p>
              <Link
                href="/about"
                className="text-sm text-[#C9933A] hover:text-[#F2EFE9] transition-colors duration-200 self-start"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Meet the team →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {networkMembers.slice(0, 3).map((member) => (
              <div
                key={member.id}
                className="border border-[#F2EFE9]/8 rounded-sm p-7 flex flex-col gap-4 hover:border-[#C9933A]/30 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#2A6B62]/30 border border-[#2A6B62]/40 flex items-center justify-center">
                  <span
                    className="text-xs text-[#2A6B62]"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {member.name
                      .split(" ")
                      .slice(-1)[0]
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                </div>
                <div>
                  <p
                    className="text-base text-[#F2EFE9] font-medium"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-xs text-[#C9933A] mt-1"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {member.role} · {member.country}
                  </p>
                </div>
                <p
                  className="text-sm text-[#A8A49D] leading-relaxed line-clamp-3"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
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
                From the SandiQ Network
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
            already have. Let&apos;s talk.
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
