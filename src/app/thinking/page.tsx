import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import PodcastArtGraphic from "@/components/PodcastArtGraphic";
import CtaGeometricGraphic from "@/components/CtaGeometricGraphic";
import NeuralGlobeGraphic from "@/components/NeuralGlobeGraphic";
import VideoCarousel from "@/components/VideoCarousel";
import ShubstackArticles from "@/components/ShubstackArticles";

export const metadata: Metadata = {
  title: "Thinking | SandiQ",
  description:
    "Digital health strategy, evidence, and equity. Perspectives from Dr Shubs Upadhyay via Shubstack and the GPODH podcast.",
};

const articles = [
  {
    title: "Evaluating tech in healthcare: measuring what matters",
    date: "Nov 2025",
    excerpt:
      "Why most digital health evaluation frameworks measure the wrong things, and what rigorous value assessment actually looks like in practice. A guide for founders, commissioners, and funders.",
    href: "https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=thinking",
  },
  {
    title: "Level up your evidence comms",
    date: "Jul 2025",
    excerpt:
      "The gap between what your data shows and what your audience understands is almost always a communications problem. Here's a practical framework for closing it without oversimplifying.",
    href: "https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=thinking",
  },
  {
    title: "Spotlight on underserved communities at HLTH Europe",
    date: "Jun 2025",
    excerpt:
      "Reflections from HLTH Europe on who was in the room, who wasn't, and what it tells us about the structural blind spots in mainstream digital health investment and innovation.",
    href: "https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=thinking",
  },
  {
    title: "Can Global Health and Venture Capital get along?",
    date: "May 2025",
    excerpt:
      "On the deep structural tensions between impact-driven global health work and the return expectations of venture capital, and whether alignment is actually possible, or just well-branded.",
    href: "https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=thinking",
  },
  {
    title: "Mental health and digital health solutions",
    date: "Mar 2025",
    excerpt:
      "Digital mental health is one of the most overhyped and underevidenced corners of the industry. Here's an honest assessment of what works, what doesn't, and why it matters.",
    href: "https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=thinking",
  },
  {
    title: "Negotiating ethical approaches to product development",
    date: "Feb 2025",
    excerpt:
      "Ethics in digital health product development is rarely a binary decision. More often it's a negotiation between speed and safety, between ideal and possible. How to navigate it honestly.",
    href: "https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=thinking",
  },
];

const episodes = [
  {
    title: "The economics of digital health in Sub-Saharan Africa",
    desc: "A frank conversation about what makes digital health business models viable, or not, across different African health system contexts.",
    href: "https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=thinking",
  },
  {
    title: "What the NHS really wants from digital health vendors",
    desc: "An insider perspective on NHS procurement, what commissioners actually read, and how to stop pitching to the wrong people.",
    href: "https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=thinking",
  },
  {
    title: "AI in diagnostics: hype, evidence, and deployment reality",
    desc: "Moving beyond the press releases: what clinical AI actually looks like when deployed in under-resourced health systems.",
    href: "https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=thinking",
  },
  {
    title: "Designing for the last mile: lessons from implementation science",
    desc: "Why so many evidence-based interventions fail to reach the people who need them most, and what implementation science tells us to do differently.",
    href: "https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=thinking",
  },
];

export default function ThinkingPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 80% 20%, rgba(var(--sq-amber-rgb),0.09) 0%, transparent 65%)' }} aria-hidden />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-teal-rgb),0.07) 0%, transparent 65%)' }} aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--sq-amber)]" />
                <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Thinking
                </p>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl text-[var(--sq-ink)] leading-[1.1] max-w-3xl mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                Clinical depth. Strategic clarity.
              </h1>
              <p className="text-base lg:text-lg text-[var(--sq-muted)] leading-relaxed max-w-2xl mb-8" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Perspectives from Dr Shubs Upadhyay on digital health strategy, evidence, equity, and the uncomfortable questions the industry tends to avoid.
              </p>
              <p className="text-sm text-[var(--sq-muted)] max-w-xl mb-6" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Read the thinking on{" "}
                <a href="https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=thinking" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">
                  Shubstack
                </a>
                , listen to the conversations on the{" "}
                <a href="https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=thinking" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">
                  GPODH podcast
                </a>
                , or{" "}
                <a href="/contact" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">
                  get in touch
                </a>{" "}
                if something raises a question worth exploring further. We respond to everything.
              </p>
            </div>

            {/* Right: neural globe graphic */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-[380px] h-[380px] opacity-85" style={{ animation: 'slow-spin 90s linear infinite' }}>
                <NeuralGlobeGraphic />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── VIDEO ─────────────────────────────────────────────── */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 20% 30%, rgba(var(--sq-teal-rgb),0.06) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-[var(--sq-teal)]" />
            <p className="text-xs tracking-widest text-[var(--sq-teal)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
              On Video
            </p>
          </FadeIn>
          <FadeIn delay={80} className="max-w-3xl">
            <VideoCarousel />
          </FadeIn>
        </div>
      </section>


      {/* ── ARTICLES ──────────────────────────────────────────── */}
      <section className="relative pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(var(--sq-amber-rgb),0.05) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ShubstackArticles articles={articles} />

          <FadeIn delay={520} className="flex justify-center mt-10">
            <a
              href="https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=thinking&utm_content=read-more-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded hover:bg-[var(--sq-amber-10)] hover:border-[var(--sq-amber)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Read more thinking on Shubstack →
            </a>
          </FadeIn>
        </div>
      </section>


      {/* ── PODCAST ───────────────────────────────────────────── */}
      {/* Graphic: PodcastArtGraphic replaces bare placeholder; BroadcastGraphic accent */}
      <section className="bg-[var(--sq-bg2)] border-y border-[var(--sq-ink-6)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-14">
            {/* Animated podcast artwork */}
            <FadeIn className="lg:col-span-1 flex items-center justify-center">
              <div className="aspect-square max-w-[240px] w-full rounded-sm overflow-hidden">
                <PodcastArtGraphic />
              </div>
            </FadeIn>

            <FadeIn delay={120} className="lg:col-span-2 flex flex-col gap-5 justify-center">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[var(--sq-teal)]" />
                <p className="text-xs tracking-widest text-[var(--sq-teal)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  The GPODH Podcast
                </p>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                Global Perspectives on Digital Health
              </h2>
              <p className="text-base text-[var(--sq-muted)] leading-relaxed max-w-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Candid, substantive conversations with the people reshaping digital health across 60+ countries. No press releases. No PR spin. Just honest thinking about hard problems.
              </p>
              <a
                href="https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=thinking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-6 py-3 text-sm font-medium border border-[var(--sq-teal)] text-[var(--sq-ink)] rounded hover:bg-[var(--sq-teal)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Listen on gpodh.org →
              </a>
            </FadeIn>
          </div>

          <FadeIn className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[var(--sq-teal)]" />
            <p className="text-xs tracking-widest text-[var(--sq-teal)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
              GPODH highlights
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {episodes.map((ep, i) => (
              <FadeIn key={i} delay={i * 90}>
                <a
                  href={ep.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--sq-ink-8)] rounded-sm p-7 flex flex-col gap-4 hover:border-[var(--sq-teal-40)] transition-colors duration-200 group h-full"
                >
                  <p className="text-xs text-[var(--sq-teal)] tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    Episode
                  </p>
                  <h3 className="text-xl text-[var(--sq-ink)] leading-snug group-hover:text-[var(--sq-teal)] transition-colors duration-200" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {ep.title}
                  </h3>
                  <p className="text-sm text-[var(--sq-muted)] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {ep.desc}
                  </p>
                  <span className="text-sm text-[var(--sq-teal)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Listen →
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400} className="flex justify-center mt-10">
            <a
              href="https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=thinking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--sq-teal)] text-[var(--sq-ink)] rounded hover:bg-[var(--sq-teal)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Listen to all episodes on gpodh.org →
            </a>
          </FadeIn>
        </div>
      </section>


      {/* ── SUBSCRIBE CTA ─────────────────────────────────────── */}
      {/* Graphic: rotating diamonds (reused from homepage) */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div
            className="w-[500px] h-[260px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(var(--sq-amber-rgb),0.06) 0%, transparent 65%)' }}
          />
        </div>
        <CtaGeometricGraphic />

        <FadeIn className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[var(--sq-amber)]" />
            <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
              Subscribe
            </p>
            <div className="h-px w-8 bg-[var(--sq-amber)]" />
          </div>
          <h2 className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
            Honest thinking, direct to your inbox.
          </h2>
          <p className="text-base text-[var(--sq-muted)] max-w-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Subscribe to Shubstack for thinking on digital health strategy, evidence, and equity. Written by Dr Shubs Upadhyay. No filler.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://shubstack.substack.com?utm_source=sandiq&utm_medium=website&utm_campaign=thinking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-[var(--sq-amber)] text-[var(--sq-bg)] rounded hover:bg-[var(--sq-amber-d)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Subscribe to Shubstack →
            </a>
            <a
              href="https://gpodh.org?utm_source=sandiq&utm_medium=website&utm_campaign=thinking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium border border-[var(--sq-teal)] text-[var(--sq-ink)] rounded hover:bg-[var(--sq-teal)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Listen to GPODH →
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
