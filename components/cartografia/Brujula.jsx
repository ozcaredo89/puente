// Rosa de los vientos minimalista usada como elemento decorativo de
// orientación (norte) en el Hero, el visor 3D y los planos.

export default function Brujula({ className = "w-8 h-8", title = "Norte" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={title}
    >
      <circle
        cx="24"
        cy="24"
        r="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle cx="24" cy="24" r="1.4" fill="currentColor" />
      {/* Aguja principal N-S */}
      <path d="M24 5 L29 24 L24 22 L19 24 Z" fill="currentColor" />
      <path
        d="M24 43 L29 24 L24 26 L19 24 Z"
        fill="currentColor"
        opacity="0.35"
      />
      {/* Marcas cardinales secundarias */}
      <path d="M43 24 L36 26 L36 22 Z" fill="currentColor" opacity="0.5" />
      <path d="M5 24 L12 26 L12 22 Z" fill="currentColor" opacity="0.5" />
      <text
        x="24"
        y="14"
        textAnchor="middle"
        fontSize="7"
        fontFamily="monospace"
        fill="currentColor"
      >
        N
      </text>
    </svg>
  );
}
