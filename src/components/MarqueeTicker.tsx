const KEYWORDS = [
  "Clinical Leadership",
  "Product Velocity",
  "Evidence Strategy",
  "Digital Health",
  "NHS",
  "WHO",
  "Clinical Rigour",
  "Impact at Scale",
  "Founder Advisory",
  "Implementation Science",
  "Global Health",
  "Evidence Design",
];

export default function MarqueeTicker() {
  const doubled = [...KEYWORDS, ...KEYWORDS];
  return (
    <div
      className="relative overflow-hidden border-y"
      style={{ backgroundColor: "#09090B", borderColor: "rgba(255,255,255,0.07)" }}
      aria-hidden="true"
    >
      <div
        className="flex items-center py-3"
        style={{ width: "max-content", animation: "marquee 45s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="px-6 text-[10px] uppercase tracking-[0.22em] whitespace-nowrap"
              style={{ fontFamily: "var(--font-dm-mono)", color: "rgba(255,255,255,0.38)" }}
            >
              {item}
            </span>
            <span style={{ color: "#F0306A", fontSize: "7px", lineHeight: 1 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
