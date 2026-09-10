// Etiqueta de coordenadas geográficas, estilo anotación de plano/mapa.

export default function CoordTag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border border-acero-600/40 bg-rio-900/60 px-2 py-0.5 font-mono text-[10px] tracking-wide text-acero-400 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="currentColor">
        <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
      {children}
    </span>
  );
}
