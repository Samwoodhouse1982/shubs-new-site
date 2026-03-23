import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Thinking", href: "/thinking" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0C0F0D] border-t border-[#F2EFE9]/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left — logo + tagline */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            >
              <span className="text-[#F2EFE9]">Sandi</span>
              <span className="text-[#C9933A]">Q</span>
            </Link>
            <p
              className="text-sm text-[#A8A49D] leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Real value in digital health.
            </p>
          </div>

          {/* Center — nav links */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-widest text-[#C9933A] uppercase mb-2"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Navigation
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#A8A49D] hover:text-[#F2EFE9] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right — contact + social */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-widest text-[#C9933A] uppercase mb-2"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Connect
            </p>
            <a
              href="mailto:hello@sandiq.com"
              className="text-sm text-[#A8A49D] hover:text-[#F2EFE9] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              hello@sandiq.com
            </a>
            <a
              href="https://linkedin.com/company/sandiq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A8A49D] hover:text-[#F2EFE9] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              LinkedIn
            </a>
            <a
              href="https://gpodh.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A8A49D] hover:text-[#F2EFE9] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              GPODH Podcast
            </a>
            <a
              href="https://shubstack.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A8A49D] hover:text-[#F2EFE9] transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Substack
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#F2EFE9]/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#A8A49D]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            © SandiQ Global, Registered in France
          </p>
          <p
            className="text-xs text-[#A8A49D]/60"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Real value in digital health.
          </p>
        </div>
      </div>
    </footer>
  );
}
