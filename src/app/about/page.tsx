import Link from "next/link";
import { networkMembers } from "@/data/network";

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9933A]" />
            <p
              className="text-xs tracking-widest text-[#C9933A] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              About SandiQ
            </p>
          </div>
          <h1
            className="text-5xl lg:text-6xl xl:text-7xl text-[#F2EFE9] leading-tight max-w-4xl"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            We exist because the industry keeps asking the wrong questions.
          </h1>
        </div>
      </section>

      {/* ── COMPANY STORY ─────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <p
                className="text-base lg:text-lg text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                SandiQ was founded on a simple but uncomfortable observation:
                the digital health industry has a systemic tendency to optimise
                for the wrong outcomes. It chases adoption metrics instead of
                health outcomes. It talks about disruption without engaging with
                systems. It builds for idealized users rather than real ones.
              </p>
              <p
                className="text-base lg:text-lg text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                We work at the intersection of clinical rigour, implementation
                reality, and strategic clarity. Our consultancy exists to help
                organisations, from seed-stage startups to WHO programmes,
                build digital health solutions that are genuinely effective,
                equitable, and trusted. Not just funded.
              </p>
            </div>

            {/* Manifesto */}
            <aside className="border border-[#C9933A]/25 rounded-sm p-8 bg-[#C9933A]/5">
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
                <br />
                <br />
                We don&apos;t accept the framing that speed and safety are in
                tension. We don&apos;t accept that evidence is only for
                academics. We don&apos;t accept that global health and
                commercial health are different games.
                <br />
                <br />
                They are the same game. The stakes are just higher for some
                players than others. Our job is to make the stakes visible
                and to help build solutions worthy of them.&rdquo;
              </blockquote>
            </aside>
          </div>
        </div>
      </section>

      {/* ── SHUBS BIO ──────────────────────────────────────────── */}
      <section className="bg-[#111410] border-y border-[#F2EFE9]/6 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9933A]" />
            <p
              className="text-xs tracking-widest text-[#C9933A] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Founding Partner
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2
                  className="text-4xl lg:text-5xl text-[#F2EFE9]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                  }}
                >
                  Dr Shubs Upadhyay
                </h2>
                <p
                  className="text-sm text-[#C9933A] mt-2 tracking-wide"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Founding Partner, SandiQ
                </p>
              </div>

              <p
                className="text-base text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Dr Shubs Upadhyay is a physician, digital health strategist, and
                global health advocate with over 15 years of experience spanning
                clinical practice, health technology, and international
                development. He has led clinical and strategic initiatives
                across five continents, working with startups, NHS trusts,
                multilateral agencies, and development finance institutions.
              </p>

              <p
                className="text-base text-[#A8A49D] leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Shubs has served as a clinical lead at the International
                Telecommunication Union (ITU) and contributed to WHO working
                groups on digital health standards and equity. He founded
                SandiQ to provide the kind of senior, independent clinical and
                strategic counsel that digital health organisations rarely have
                access to, without the overhead of a large consultancy.
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
              <div className="flex flex-wrap gap-6 pt-2">
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

      {/* ── NETWORK SECTION ───────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-4 mb-6">
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
              className="text-4xl lg:text-5xl text-[#F2EFE9] max-w-2xl leading-tight"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            >
              A curated collective. Not a directory.
            </h2>
          </div>

          <p
            className="text-base text-[#A8A49D] leading-relaxed max-w-2xl mb-16"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Every member of the SandiQ Network has been hand-selected based on
            demonstrated expertise, contextual experience, and a shared
            commitment to evidence-based, equitable digital health. We do not
            list people. We work with them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkMembers.map((member) => (
              <div
                key={member.id}
                className="border border-[#F2EFE9]/8 rounded-sm p-7 flex flex-col gap-5 hover:border-[#C9933A]/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#2A6B62]/20 border border-[#2A6B62]/30 flex items-center justify-center shrink-0">
                    <span
                      className="text-sm text-[#2A6B62]"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(-2)
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-[#F2EFE9] leading-snug"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      }}
                    >
                      {member.name}
                    </p>
                    <p
                      className="text-xs text-[#C9933A] mt-0.5"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {member.country}
                    </p>
                  </div>
                </div>

                <p
                  className="text-xs text-[#C9933A] tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {member.role}
                </p>

                <p
                  className="text-sm text-[#A8A49D] leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="bg-[#111410] border-t border-[#F2EFE9]/6 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2
            className="text-4xl lg:text-5xl text-[#F2EFE9]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            Want to work with us?
          </h2>
          <p
            className="text-base text-[#A8A49D] max-w-lg"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Whether you need embedded clinical leadership, strategic counsel, or
            access to our global network: start with a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium bg-[#C9933A] text-[#0C0F0D] rounded hover:bg-[#b8832e] transition-colors duration-200"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
