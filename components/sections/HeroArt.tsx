/** Abstract structural / blueprint graphic shown beside the hero copy. */
export default function HeroArt() {
  return (
    <div
      className="relative hidden aspect-[1/1.1] min-[901px]:block"
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 440" fill="none" className="h-full w-full">
        <rect
          x="60"
          y="120"
          width="280"
          height="300"
          stroke="#2E5E7E"
          strokeWidth="1.5"
          opacity=".7"
        />
        <rect
          x="100"
          y="60"
          width="200"
          height="360"
          stroke="#E8A317"
          strokeWidth="1.5"
          opacity=".85"
        />
        <path d="M100 60 L200 10 L300 60" stroke="#E8A317" strokeWidth="1.5" />
        <path
          d="M60 120 L100 60 M340 120 L300 60"
          stroke="#2E5E7E"
          strokeWidth="1.2"
          opacity=".6"
        />
        <g stroke="#F7F5F0" strokeWidth="1" opacity=".25">
          <path d="M100 140h200M100 200h200M100 260h200M100 320h200M100 380h200" />
          <path d="M150 60v360M200 60v360M250 60v360" />
        </g>
        <g stroke="#E8A317" strokeWidth="1.2">
          <path d="M40 430h320" />
          <path d="M40 424v12M120 426v8M200 424v12M280 426v8M360 424v12" />
        </g>
        <circle cx="200" cy="10" r="4" fill="#E8A317" />
        <text
          x="205"
          y="440"
          fill="#F7F5F0"
          opacity=".5"
          fontFamily="Space Grotesk"
          fontSize="10"
          letterSpacing="3"
          textAnchor="middle"
        >
          EST. 2069 B.S. — KATHMANDU
        </text>
      </svg>
    </div>
  );
}
