"use client";

import { useState } from "react";
import { SectionHeading } from "./DatosTecnicos";
import MarcoEsquinas from "./cartografia/MarcoEsquinas";

const NUMERO_NEQUI = "3113738912";

export default function Apoyo() {
  const [copiado, setCopiado] = useState(false);

  const copiarNumero = async () => {
    try {
      await navigator.clipboard.writeText(NUMERO_NEQUI);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Portapapeles no disponible (p. ej. contexto no seguro): el número
      // ya está visible en pantalla para copiarlo manualmente.
    }
  };

  return (
    <section
      id="apoyo"
      className="relative bg-rio-900 py-20 md:py-28 border-t border-rio-800"
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Punto de apoyo"
          title="¿Te sirvió esta documentación técnica?"
          description="Este sitio es un ejercicio independiente de divulgación técnica y
            comunitaria sobre la reconstrucción del puente: no es un canal
            oficial de recaudo para la obra ni reemplaza el presupuesto
            público del proyecto. Si te resultó útil y quieres invitar un
            café a quien lo construyó, puedes hacerlo voluntariamente por
            Nequi."
        />

        <div className="mt-12 relative rounded-lg border border-dashed border-acero-600/50 bg-rio-950/60 p-6 md:p-10">
          <MarcoEsquinas tamano={22} className="text-acero-500/70" />

          <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
            <div className="mx-auto md:mx-0 flex flex-col items-center gap-2">
              <div className="rounded-lg border border-rio-700 bg-white p-3 shadow-lg shadow-black/30">
                {/* SVG local pequeño (~1 KB): se sirve tal cual, sin pasar por
                    el optimizador de next/image (innecesario para un vector). */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/nequi-qr.svg"
                  alt={`Código QR con el número Nequi ${NUMERO_NEQUI}`}
                  width={168}
                  height={168}
                  className="block"
                />
              </div>
              <p className="max-w-[168px] text-center text-[11px] leading-snug text-slate-500">
                Oscar Eduardo Hincapié Vargas
                <br />
                Ing. de Sistemas (Ateño)
                <br />
                Hijo de Olga María Hincapié, Alba Cecilia Hincapié y Héctor
                Favio Valenzuela
              </p>
            </div>

            <div className="text-center md:text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-acero-500">
                Escanea o copia el número
              </span>
              <p className="mt-2 font-mono text-3xl md:text-4xl font-bold text-slate-100 tracking-wide">
                {NUMERO_NEQUI}
              </p>
              <p className="mt-1 text-sm text-slate-500">Nequi · Colombia</p>

              <button
                onClick={copiarNumero}
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-acero-600/50 hover:border-acero-500 transition-colors px-4 py-2.5 text-sm font-semibold text-acero-400"
              >
                {copiado ? "✓ Número copiado" : "Copiar número"}
              </button>

              <p className="mt-4 text-xs text-slate-600 max-w-sm">
                Aporte 100% voluntario y anónimo para el autor de este sitio.
                No constituye pago, contribución oficial ni compromiso alguno
                relacionado con la construcción del puente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
