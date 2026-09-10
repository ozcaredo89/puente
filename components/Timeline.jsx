import { fasesConstruccion } from "@/data/proyecto";
import { SectionHeading } from "./DatosTecnicos";

export default function Timeline() {
  return (
    <section
      id="fases"
      className="relative bg-rio-900 py-20 md:py-28 border-t border-rio-800"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="Cronograma constructivo"
          title="Fases de construcción"
          description="Cuatro fases secuenciales, desde la atención de emergencia hasta la
            entrega del puente definitivo. El pilotaje profundo (Fase 2) es la
            actividad crítica: allí se instalan las verdaderas zapatas del
            puente, a 35 metros bajo el lecho del río."
        />

        <ol className="mt-16 relative">
          <div
            className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-acero-500 via-acero-600/50 to-transparent"
            aria-hidden="true"
          />

          {fasesConstruccion.map((fase, idx) => (
            <li key={fase.id} className="relative pl-20 pb-14 last:pb-0">
              <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-acero-500 bg-rio-950 font-mono text-lg font-bold text-acero-400">
                {String(fase.numero).padStart(2, "0")}
              </div>

              <div className="rounded-2xl border border-rio-700 bg-rio-950/60 p-6 hover:border-acero-600/50 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-100">
                    Fase {fase.numero} · {fase.titulo}
                  </h3>
                  <span className="rounded-full bg-acero-600/10 px-3 py-1 text-xs font-mono text-acero-400">
                    {fase.duracionEstimada}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {fase.descripcion}
                </p>

                <ul className="mt-4 grid sm:grid-cols-3 gap-2">
                  {fase.entregables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-400"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-acero-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
