"use client";

interface Props {
  total?: number;
  highlighted?: number;
  cols?: number;
  className?: string;
}

export default function PopulationFigureGraphic({
  total = 100,
  highlighted = 25,
  cols = 10,
  className = "",
}: Props) {
  const rows = Math.ceil(total / cols);
  const cellW = 28;
  const cellH = 38;
  const headR = 5;
  const bodyW = 9;
  const bodyH = 13;
  const svgW = cols * cellW;
  const svgH = rows * cellH;

  const figures = Array.from({ length: total }, (_, i) => ({
    id: i,
    lit: i < highlighted,
  }));

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className={className}
      aria-hidden
    >
      {figures.map(({ id, lit }) => {
        const col = id % cols;
        const row = Math.floor(id / cols);
        const cx = col * cellW + cellW / 2;
        const cy = row * cellH + headR + 5;
        const bx = cx - bodyW / 2;
        const by = cy + headR + 3;

        return (
          <g key={id} opacity={lit ? 1 : 0.15}>
            <circle
              cx={cx}
              cy={cy}
              r={headR}
              fill={lit ? "var(--sq-amber)" : "var(--sq-ink)"}
            />
            <rect
              x={bx}
              y={by}
              width={bodyW}
              height={bodyH}
              rx={2.5}
              fill={lit ? "var(--sq-amber)" : "var(--sq-ink)"}
            />
          </g>
        );
      })}
    </svg>
  );
}
