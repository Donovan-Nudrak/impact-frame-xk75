type DiagramProps = {
  className?: string;
};

const plateOpenings = Array.from({ length: 4 }, (_, row) => {
  if (row === 3) {
    return [
      { key: "r3-0", x: 52, y: 52 + 3 * 17.5, width: 15.4 },
      { key: "r3-1", x: 52 + 21.4, y: 52 + 3 * 17.5, width: 15.4 },
      { key: "r3-2", x: 52 + 21.4 * 2, y: 52 + 3 * 17.5, width: 15.4 },
      { key: "r3-space", x: 52 + 21.4 * 3, y: 52 + 3 * 17.5, width: 21.4 * 5 - 6 },
      { key: "r3-10", x: 52 + 21.4 * 8, y: 52 + 3 * 17.5, width: 15.4 },
      { key: "r3-11", x: 52 + 21.4 * 9, y: 52 + 3 * 17.5, width: 15.4 },
      { key: "r3-12", x: 52 + 21.4 * 10, y: 52 + 3 * 17.5, width: 15.4 },
      { key: "r3-13", x: 52 + 21.4 * 11, y: 52 + 3 * 17.5, width: 15.4 },
    ];
  }

  return Array.from({ length: 12 }, (_, col) => ({
    key: `r${row}-${col}`,
    x: 52 + col * 21.4,
    y: 52 + row * 17.5,
    width: 15.4,
  }));
}).flat();

const foamCells = [
  [58, 58],
  [86, 50],
  [114, 58],
  [142, 50],
  [170, 58],
  [198, 50],
  [226, 58],
  [254, 50],
  [282, 58],
  [72, 82],
  [100, 90],
  [128, 82],
  [156, 90],
  [184, 82],
  [212, 90],
  [240, 82],
  [268, 90],
  [86, 114],
  [114, 106],
  [142, 114],
  [170, 106],
  [198, 114],
  [226, 106],
  [254, 114],
] as const;

export function PlateDiagram({ className }: DiagramProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 168"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#354047" strokeWidth="1" opacity="0.45">
        <path d="M18 18h14M18 18v14" />
        <path d="M342 18h-14M342 18v14" />
        <path d="M18 150h14M18 150v-14" />
        <path d="M342 150h-14M342 150v-14" />
      </g>
      <rect
        x="36"
        y="36"
        width="288"
        height="96"
        fill="#0D1215"
        stroke="#89959B"
        strokeOpacity="0.55"
      />
      <rect
        x="44"
        y="44"
        width="272"
        height="80"
        fill="#1B2429"
        stroke="#354047"
      />
      {plateOpenings.map((opening) => (
        <rect
          key={opening.key}
          x={opening.x}
          y={opening.y}
          width={opening.width}
          height={11.5}
          rx="1"
          fill="#050708"
          stroke="#24D8F0"
          strokeOpacity="0.28"
        />
      ))}
      <path d="M36 84h-8M324 84h8" stroke="#24D8F0" strokeOpacity="0.45" />
    </svg>
  );
}

export function FoamDiagram({ className }: DiagramProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 168"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#354047" strokeWidth="1" opacity="0.45">
        <path d="M18 18h14M18 18v14" />
        <path d="M342 18h-14M342 18v14" />
        <path d="M18 150h14M18 150v-14" />
        <path d="M342 150h-14M342 150v-14" />
      </g>
      <rect
        x="48"
        y="44"
        width="272"
        height="88"
        fill="#0D1215"
        stroke="#354047"
      />
      <rect
        x="40"
        y="36"
        width="272"
        height="88"
        fill="#1B2429"
        stroke="#89959B"
        strokeOpacity="0.5"
      />
      {foamCells.map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="7.5"
          fill="#050708"
          fillOpacity="0.55"
          stroke="#24D8F0"
          strokeOpacity="0.22"
        />
      ))}
      <rect
        x="52"
        y="48"
        width="248"
        height="64"
        stroke="#354047"
        strokeDasharray="3 4"
        opacity="0.8"
      />
    </svg>
  );
}
