import { tarjetasDatosTecnicos } from "@/data/proyecto";
import { iconMap } from "./icons/TechIcons";

export default function DatosTecnicos() {
  return (
    <section
      id="datos-tecnicos"
      className="relative bg-rio-950 py-20 md:py-28 border-t border-rio-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Ficha técnica"
          title="Datos técnicos del proyecto"
          description="Parámetros de diseño que definen la geometría, los materiales y el
            comportamiento sísmico del nuevo puente. Cada cifra responde a una
            condición real del sitio: el lecho aluvial del río Cauca y la
            amenaza sísmica alta del Valle del Cauca."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tarjetasDatosTecnicos.map((item) => {
            const Icon = iconMap[item.icono];
            return (
              <article
                key={item.id}
                className="group relative rounded-lg border border-dashed border-rio-700 bg-rio-900/60 p-6 hover:border-acero-600/60 transition-colors"
              >
                <PuntoControl className="absolute -top-1.5 -left-1.5 text-acero-500/50" />
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-acero-600/10 p-3 text-acero-400">
                    {Icon ? <Icon className="w-6 h-6" /> : null}
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-100">
                    {item.valor}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-100">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.descripcion}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Marca de punto de control geodésico (motivo cartográfico reutilizado
// como viñeta decorativa en tarjetas y encabezados de sección).
export function PuntoControl({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" className={`w-3 h-3 ${className}`} aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M8 0v4M8 12v4M0 8h4M12 8h4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function SectionHeading({ eyebrow, title, description, light }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest ${
            light ? "text-acero-600" : "text-acero-500"
          }`}
        >
          <PuntoControl />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-2 text-3xl md:text-4xl font-bold tracking-tight ${
          light ? "text-rio-950" : "text-slate-100"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-rio-800/80" : "text-slate-400"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
