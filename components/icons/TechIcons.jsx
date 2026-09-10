// Iconos SVG minimalistas (trazo, sin dependencias externas) usados en las
// tarjetas de datos técnicos. Cada uno se referencia por clave en
// data/proyecto.js (campo `icono`).

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconSpan(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 17h20" />
      <path d="M2 17c3-6 6-9 10-9s7 3 10 9" />
      <path d="M2 17v3M22 17v3" />
    </svg>
  );
}

export function IconWidth(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 12h18" />
      <path d="M3 12l4-4M3 12l4 4" />
      <path d="M21 12l-4-4M21 12l-4 4" />
      <rect x="6" y="7" width="12" height="10" rx="1" opacity="0.35" />
    </svg>
  );
}

export function IconRiver(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    </svg>
  );
}

export function IconFoundation(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 4h16" />
      <path d="M7 4v16M12 4v16M17 4v16" />
      <path d="M7 20l0 0M12 20l0 0M17 20l0 0" />
    </svg>
  );
}

export function IconGirder(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="2" y="6" width="20" height="5" rx="1" />
      <path d="M5 11v3M10 11v3M14 11v3M19 11v3" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function IconSeismic(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 12h4l2-7 4 14 3-10 2 3h5" />
      <circle cx="18" cy="12" r="2.2" opacity="0.5" />
    </svg>
  );
}

export const iconMap = {
  span: IconSpan,
  width: IconWidth,
  river: IconRiver,
  foundation: IconFoundation,
  girder: IconGirder,
  seismic: IconSeismic,
};
