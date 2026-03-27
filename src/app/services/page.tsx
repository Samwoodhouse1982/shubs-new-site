import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ServicesMeshGraphic from "@/components/ServicesMeshGraphic";
import ProcessStepIcon from "@/components/ProcessStepIcon";
import CtaGeometricGraphic from "@/components/CtaGeometricGraphic";

const services = [
  {
    num: "01",
    title: "Fractional CMO",
    description:
      "Senior clinical leadership doesn't have to mean a full-time hire. Our Fractional CMO service embeds experienced clinical leaders directly into your organisation, attending leadership meetings, shaping product roadmaps, and bridging the gap between clinical reality and commercial ambition.",
    rightFor: [
      "Health tech startups that need credible clinical leadership ahead of NHS or payer engagement",
      "Scale-ups managing rapid growth without the budget for a full-time Chief Medical Officer",
    ],
  },
  {
    num: "02",
    title: "Clinical Product Development",
    description:
      "Most digital health products fail at the point of clinical integration, not because the technology doesn't work, but because clinical workflows, safety considerations, and regulatory expectations were never properly built in. We integrate clinical insight from day one, not as a final audit.",
    rightFor: [
      "Product teams building regulated or clinically-adjacent software for healthcare settings",
      "Founders navigating CE marking, DTAC, or FDA pathways for the first time",
    ],
  },
  {
    num: "03",
    title: "Evidence Strategy & Generation",
    description:
      "We help you design evaluation frameworks that measure what actually matters to health systems, payers, and patients, not just what's easy to measure. From study design to health economic modelling, we build the evidence base that underpins sustainable commercial growth.",
    rightFor: [
      "Companies preparing for NHS procurement or NICE assessment",
      "Organisations that need to demonstrate ROI or QALY-equivalent impact to commissioners",
    ],
  },
  {
    num: "04",
    title: "Market Access & Clinical Credibility",
    description:
      "Health system procurement is a different game. Understanding what commissioners, NHSX leads, or international payers actually need, and how to speak their language, is not something most digital health commercial teams are equipped for. We navigate this complexity on your behalf.",
    rightFor: [
      "Companies seeking to enter NHS, European, US, or international health markets",
      "Startups that have great technology but struggle to communicate clinical value to non-technical buyers",
    ],
  },
  {
    num: "05",
    title: "Impact Communications",
    description:
      "The gap between your evidence and the decision you need is almost always a communications problem. We help you turn rigorous evidence into compelling narratives, for investors, commissioners, global health donors, and media, without oversimplifying or overstating.",
    rightFor: [
      "Organisations preparing impact reports, investment decks, or grant applications",
      "Companies that need to position their evidence clearly for regulatory or procurement audiences",
    ],
  },
  {
    num: "06",
    title: "Health System Intelligence",
    description:
      "Every health system has its own logic: its own procurement culture, clinical hierarchies, regulatory expectations, and political pressures. Understanding that logic is as important as having good technology. We provide strategic counsel for organisations navigating complex or unfamiliar health system contexts, drawing on deep experience across international agencies and health systems in multiple regions.",
    rightFor: [
      "Organisations expanding into new national health systems or regulatory environments",
      "Investors and funders conducting clinical or strategic due diligence on digital health opportunities",
    ],
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

const segments = [
  {
    title: "Startups & Scale-ups",
    desc: "From MVP to market, we provide the clinical and strategic infrastructure that helps digital health companies move faster without cutting corners.",
  },
  {
    title: "Investors & Donors",
    desc: "Due diligence, portfolio support, and impact measurement for VCs, development finance institutions, and philanthropic funders in digital health.",
  },
  {
    title: "Health Systems & Agencies",
    desc: "Strategic and clinical counsel for national health bodies, multilateral agencies, and large health organisations commissioning or evaluating digital health programmes.",
  },
  {
    title: "Implementers & Researchers",
    desc: "Implementation science support, evidence generation, and knowledge translation for academic institutions and delivery organisations.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      {/* Graphic: ServicesMeshGraphic — particle network in right column */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#C9933A]" />
                <p className="text-xs tracking-widest text-[#C9933A] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Services
                </p>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl text-[#F2EFE9] leading-tight max-w-3xl mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                Clinical expertise, deployed where it counts.
              </h1>
              <p className="text-base lg:text-lg text-[#A8A49D] leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Six interconnected services, deployed individually or in combination, for organisations serious about building digital health that actually works.
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


      {/* ── SERVICE CARDS ─────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-px">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 60}>
              <div className={`border border-[#F2EFE9]/8 rounded-sm p-10 flex flex-col lg:flex-row gap-10 ${i % 2 === 0 ? "bg-[#0C0F0D]" : "bg-[#0e1210]"}`}>
                <div className="lg:w-16 shrink-0">
                  <p className="text-xs text-[#C9933A] tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {service.num}
                  </p>
                </div>

                <div className="flex-1 flex flex-col gap-5">
                  <h2 className="text-3xl lg:text-4xl text-[#F2EFE9] leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {service.title}
                  </h2>
                  <p className="text-base text-[#A8A49D] leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {service.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-[#C9933A] tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      Right for you if...
                    </p>
                    <ul className="flex flex-col gap-2">
                      {service.rightFor.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-[#A8A49D]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9933A] shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:flex lg:items-end lg:shrink-0">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[#C9933A]/40 text-[#C9933A] rounded hover:bg-[#C9933A] hover:text-[#0C0F0D] transition-colors duration-200 whitespace-nowrap" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Get in touch →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>


      {/* ── PROCESS ───────────────────────────────────────────── */}
      {/* Graphic: ProcessStepIcon — unique animation per step */}
      <section className="bg-[#111410] border-y border-[#F2EFE9]/6 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9933A]" />
              <p className="text-xs tracking-widest text-[#C9933A] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                How we work
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#F2EFE9]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              A process built on depth, not speed.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F2EFE9]/6 rounded-sm overflow-hidden">
            {process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 100}>
                <div className="bg-[#111410] p-8 flex flex-col gap-4 h-full">
                  {/* Animated step icon */}
                  <div className="mb-1">
                    <ProcessStepIcon type={step.type} />
                  </div>
                  <p className="text-xs text-[#A8A49D] tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {step.step}
                  </p>
                  <h3 className="text-2xl text-[#C9933A] tracking-wide" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {step.label}
                  </h3>
                  <p className="text-sm text-[#A8A49D] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── WHO WE WORK WITH ──────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9933A]" />
              <p className="text-xs tracking-widest text-[#C9933A] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
                Who we work with
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#F2EFE9]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              Built for the full ecosystem.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((seg, i) => (
              <FadeIn key={seg.title} delay={i * 80}>
                <div className="border border-[#F2EFE9]/8 rounded-sm p-7 flex flex-col gap-4 hover:border-[#C9933A]/30 transition-colors duration-200 h-full">
                  <h3 className="text-xl text-[#F2EFE9]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
                    {seg.title}
                  </h3>
                  <p className="text-sm text-[#A8A49D] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {seg.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── FOOTER CTA ────────────────────────────────────────── */}
      {/* Graphic: CtaGeometricGraphic — rotating diamonds (reused from homepage) */}
      <section className="relative bg-[#111410] border-t border-[#F2EFE9]/6 py-24 overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div
            className="w-[600px] h-[300px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(201,147,58,0.06) 0%, transparent 65%)' }}
          />
        </div>
        <CtaGeometricGraphic />

        <FadeIn className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl lg:text-5xl text-[#F2EFE9] leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
            Tell us what you&apos;re building.
          </h2>
          <p className="text-base text-[#A8A49D] max-w-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Every project starts with a conversation. Tell us what you&apos;re working on and we&apos;ll tell you honestly whether and how we can help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:hello@sandiq.com" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm text-[#A8A49D] border border-[#F2EFE9]/15 rounded hover:border-[#C9933A] hover:text-[#C9933A] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
              hello@sandiq.com
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#C9933A] text-[#0C0F0D] rounded hover:bg-[#b8832e] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Book a call →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
