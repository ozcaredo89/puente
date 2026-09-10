import { especificacionesMateriales, marcoNormativo } from "@/data/proyecto";
import { SectionHeading } from "./DatosTecnicos";

export default function EspecificacionesTabla() {
  return (
    <section
      id="normativa"
      className="relative bg-rio-900 py-20 md:py-28 border-t border-rio-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Marco normativo y materiales"
          title="Cumplimiento normativo, no capricho estético"
          description="El diseño se rige por el Código Colombiano de Diseño de Puentes
            (CCP-14), complementado por la NSR-10 en geotecnia y materiales.
            Cada especificación responde a una exigencia legal para
            estructuras esenciales en zona de amenaza sísmica alta."
        />

        {/* Tarjetas normativas */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <NormaCard
            titulo="Categoría de importancia"
            valor="Puente Esencial"
            texto={marcoNormativo.categoriaDescripcion}
          />
          <NormaCard
            titulo="Amenaza sísmica"
            valor="Zona Alta"
            texto={`${marcoNormativo.amenazaSismica}. Exige disipación de energía mediante aislamiento sísmico de base.`}
          />
          <NormaCard
            titulo="Riesgo geotécnico"
            valor="Licuación"
            texto={marcoNormativo.riesgoGeotecnico}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {marcoNormativo.normas.map((n) => (
            <span
              key={n}
              className="rounded-full border border-acero-600/40 bg-acero-600/10 px-4 py-1.5 text-xs font-mono text-acero-400"
            >
              {n}
            </span>
          ))}
        </div>

        {/* Tabla de materiales */}
        <div className="mt-14 overflow-x-auto rounded-2xl border border-rio-700">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-rio-800 text-left text-xs uppercase tracking-wide text-acero-400">
                <th className="px-5 py-4 font-semibold">Componente</th>
                <th className="px-5 py-4 font-semibold">Material requerido</th>
                <th className="px-5 py-4 font-semibold">
                  Especificación técnica
                </th>
              </tr>
            </thead>
            <tbody>
              {especificacionesMateriales.map((fila, i) => (
                <tr
                  key={fila.componente}
                  className={
                    i % 2 === 0 ? "bg-rio-900/40" : "bg-rio-900/70"
                  }
                >
                  <td className="px-5 py-4 align-top font-medium text-slate-100 whitespace-nowrap">
                    {fila.componente}
                  </td>
                  <td className="px-5 py-4 align-top text-acero-400 whitespace-nowrap">
                    {fila.material}
                  </td>
                  <td
                    className="px-5 py-4 align-top text-slate-400 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: fila.especificacion }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-slate-500 font-mono">
          fy = límite de fluencia · f&apos;c = resistencia a compresión del
          concreto · MPa = megapascales
        </p>
      </div>
    </section>
  );
}

function NormaCard({ titulo, valor, texto }) {
  return (
    <div className="rounded-2xl border border-rio-700 bg-rio-950/50 p-6">
      <span className="text-xs font-mono uppercase tracking-wide text-slate-500">
        {titulo}
      </span>
      <p className="mt-1 text-xl font-bold text-slate-100">{valor}</p>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed">{texto}</p>
    </div>
  );
}
