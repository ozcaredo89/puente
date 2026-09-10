// Fondo decorativo tipo curvas de nivel (mapa topográfico), usado como
// textura sutil detrás de secciones para reforzar el lenguaje cartográfico
// del sitio. Puramente ornamental: no representa curvas de nivel reales.

export default function LineasContorno({ className = "", opacity = 0.16 }) {
  const lineas = [8, 26, 44, 62, 80, 98, 116];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      preserveAspectRatio="none"
      viewBox="0 0 400 200"
      aria-hidden="true"
    >
      {lineas.map((y, i) => (
        <path
          key={y}
          d={`M -20 ${y} C 60 ${y - 22}, 120 ${y + 22}, 200 ${y} S 340 ${y - 20}, 420 ${y}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={i % 3 === 0 ? 1.1 : 0.6}
        />
      ))}
    </svg>
  );
}
