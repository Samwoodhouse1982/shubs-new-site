const articles = [
  {
    title: "Evaluating tech in healthcare: measuring what matters",
    date: "Nov 2025",
    excerpt:
      "Why most digital health evaluation frameworks measure the wrong things, and what rigorous value assessment actually looks like in practice. A guide for founders, commissioners, and funders.",
    href: "https://shubstack.substack.com",
  },
  {
    title: "Level up your evidence comms",
    date: "Jul 2025",
    excerpt:
      "The gap between what your data shows and what your audience understands is almost always a communications problem. Here's a practical framework for closing it without oversimplifying.",
    href: "https://shubstack.substack.com",
  },
  {
    title: "Spotlight on underserved communities at HLTH Europe",
    date: "Jun 2025",
    excerpt:
      "Reflections from HLTH Europe on who was in the room, who wasn't, and what it tells us about the structural blind spots in mainstream digital health investment and innovation.",
    href: "https://shubstack.substack.com",
  },
  {
    title: "Can Global Health and Venture Capital get along?",
    date: "May 2025",
    excerpt:
      "On the deep structural tensions between impact-driven global health work and the return expectations of venture capital, and whether alignment is actually possible, or just well-branded.",
    href: "https://shubstack.substack.com",
  },
  {
    title: "Mental health and digital health solutions",
    date: "Mar 2025",
    excerpt:
      "Digital mental health is one of the most overhyped and underevidenced corners of the industry. Here's an honest assessment of what works, what doesn't, and why it matters.",
    href: "https://shubstack.substack.com",
  },
  {
    title: "Negotiating ethical approaches to product development",
    date: "Feb 2025",
    excerpt:
      "Ethics in digital health product development is rarely a binary decision. More often it's a negotiation between speed and safety, between ideal and possible. How to navigate it honestly.",
    href: "https://shubstack.substack.com",
  },
];

const episodes = [
  {
    title: "The economics of digital health in Sub-Saharan Africa",
    desc: "A frank conversation about what makes digital health business models viable, or not, across different African health system contexts.",
    href: "https://gpodh.org",
  },
  {
    title: "What the NHS really wants from digital health vendors",
    desc: "An insider perspective on NHS procurement, what commissioners actually read, and how to stop pitching to the wrong people.",
    href: "https://gpodh.org",
  },
  {
    title: "AI in diagnostics: hype, evidence, and deployment reality",
    desc: "Moving beyond the press releases: what clinical AI actually looks like when deployed in under-resourced health systems.",
    href: "https://gpodh.org",
  },
  {
    title: "Designing for the last mile: lessons from implementation science",
    desc: "Why so many evidence-based interventions fail to reach the people who need them most, and what implementation science tells us to do differently.",
    href: "https://gpodh.org",
  },
];

export default function ThinkingPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9933A]" />
            <p
              className="text-xs tracking-widest text-[#C9933A] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Thinking
            </p>
          </div>
          <h1
            className="text-5xl lg:text-6xl xl:text-7xl text-[#F2EFE9] leading-tight max-w-3xl mb-8"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            The work demands honest thinking.
          </h1>
          <p
            className="text-base lg:text-lg text-[#A8A49D] leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Essays, analysis, and perspective from the SandiQ network, on
            digital health strategy, evidence, equity, and the uncomfortable
            questions the industry tends to avoid.
          </p>
        </div>
      </section>

      {/* ── ARTICLES ──────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-[#C9933A]" />
            <p
              className="text-xs tracking-widest text-[#C9933A] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Shubstack, by Dr Shubs Upadhyay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <a
                key={i}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#F2EFE9]/8 rounded-sm p-8 flex flex-col gap-5 hover:border-[#C9933A]/30 transition-colors duration-200 group"
              >
                <p
                  className="text-xs text-[#A8A49D] tracking-widest"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {article.date}
                </p>
                <h2
                  className="text-xl lg:text-2xl text-[#F2EFE9] leading-snug group-hover:text-[#C9933A] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                  }}
                >
                  {article.title}
                </h2>
                <p
                  className="text-sm text-[#A8A49D] leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {article.excerpt}
                </p>
                <span
                  className="text-xs text-[#C9933A] group-hover:text-[#F2EFE9] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Read on Substack →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PODCAST ───────────────────────────────────────────── */}
      <section className="bg-[#111410] border-y border-[#F2EFE9]/6 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-14">
            <div className="lg:col-span-1">
              <div className="aspect-square max-w-[240px] bg-[#2A6B62]/15 border border-[#2A6B62]/25 rounded-sm flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="text-3xl text-[#2A6B62]/70"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 600,
                    }}
                  >
                    GPODH
                  </p>
                  <p
                    className="text-xs text-[#A8A49D]/60 mt-1"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Podcast artwork
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-5 justify-center">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#2A6B62]" />
                <p
                  className="text-xs tracking-widest text-[#2A6B62] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  The GPODH Podcast
                </p>
              </div>
              <h2
                className="text-4xl lg:text-5xl text-[#F2EFE9] leading-tight"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                Global Perspectives on Digital Health
              </h2>
              <p
                className="text-base text-[#A8A49D] leading-relaxed max-w-lg"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Candid, substantive conversations with the people reshaping
                digital health across 60+ countries. No press releases. No PR
                spin. Just honest thinking about hard problems.
              </p>
              <a
                href="https://gpodh.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-6 py-3 text-sm font-medium border border-[#2A6B62] text-[#F2EFE9] rounded hover:bg-[#2A6B62] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Listen on gpodh.org →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {episodes.map((ep, i) => (
              <a
                key={i}
                href={ep.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#F2EFE9]/8 rounded-sm p-7 flex flex-col gap-4 hover:border-[#2A6B62]/40 transition-colors duration-200 group"
              >
                <p
                  className="text-xs text-[#2A6B62] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Episode
                </p>
                <h3
                  className="text-xl text-[#F2EFE9] leading-snug group-hover:text-[#2A6B62] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                  }}
                >
                  {ep.title}
                </h3>
                <p
                  className="text-sm text-[#A8A49D] leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {ep.desc}
                </p>
                <span
                  className="text-xs text-[#2A6B62]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Listen →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE CTA ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#C9933A]" />
            <p
              className="text-xs tracking-widest text-[#C9933A] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Subscribe
            </p>
            <div className="h-px w-8 bg-[#C9933A]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl text-[#F2EFE9] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            Honest thinking, direct to your inbox.
          </h2>
          <p
            className="text-base text-[#A8A49D] max-w-lg"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Subscribe to Shubstack for essays on digital health strategy,
            evidence, and equity. Written by Dr Shubs Upadhyay. No filler.
          </p>
          <a
            href="https://shubstack.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-[#C9933A] text-[#0C0F0D] rounded hover:bg-[#b8832e] transition-colors duration-200"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Subscribe to Shubstack →
          </a>
        </div>
      </section>
    </>
  );
}
