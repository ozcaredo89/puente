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
                className="group relative rounded-2xl border border-rio-700 bg-rio-900/60 p-6 hover:border-acero-600/60 transition-colors"
              >
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

export function SectionHeading({ eyebrow, title, description, light }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <span className="text-xs font-mono uppercase tracking-widest text-acero-500">
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
