"use client";

import dynamic from "next/dynamic";
import { proyecto, datosLuz } from "@/data/proyecto";

const Visor3D = dynamic(() => import("./Visor3D"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] md:h-[560px] w-full rounded-2xl border border-acero-600/30 bg-rio-900 animate-pulse flex items-center justify-center text-acero-400/60 font-mono text-sm">
      Cargando modelo 3D del puente…
    </div>
  ),
});

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-rio-950 text-slate-100"
    >
      {/* Fondo: grid técnico sutil */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-rio-950 via-rio-950/95 to-rio-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-alerta-500/40 bg-alerta-500/10 px-3 py-1 text-xs font-mono text-alerta-500 mb-6">
              ● Proyecto de reconstrucción · Puente Esencial NSR-10
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              {proyecto.nombre}
            </h1>
            <p className="mt-2 text-lg md:text-xl text-acero-400 font-medium">
              Nueva conexión sobre el {proyecto.rio} entre La Unión y La Victoria
            </p>

            <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
              En {proyecto.colapso.anio}, el puente original que unía a estas
              dos comunidades del norte del Valle del Cauca{" "}
              <span className="text-slate-100 font-semibold">
                colapsó durante un sismo de alta intensidad
              </span>
              , cortando el paso a ambulancias, transporte escolar y la
              carga agroindustrial de la región. Este proyecto reemplaza esa
              estructura por un puente diseñado para{" "}
              <span className="text-acero-400 font-semibold">
                seguir en pie después del próximo gran sismo
              </span>
              .
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#visor"
                className="rounded-lg bg-acero-500 hover:bg-acero-600 transition-colors px-5 py-3 text-sm font-semibold text-rio-950"
              >
                Explorar el modelo 3D
              </a>
              <a
                href="#datos-tecnicos"
                className="rounded-lg border border-acero-600/50 hover:border-acero-500 transition-colors px-5 py-3 text-sm font-semibold text-acero-400"
              >
                Ver ficha técnica
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500 font-mono">
                  Luz libre
                </dt>
                <dd className="text-2xl font-bold text-slate-100">
                  {datosLuz.longitudTotal} m
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500 font-mono">
                  Ancho
                </dt>
                <dd className="text-2xl font-bold text-slate-100">
                  {datosLuz.anchoTablero} m
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500 font-mono">
                  Pilotes
                </dt>
                <dd className="text-2xl font-bold text-slate-100">
                  {datosLuz.profundidadPilotesM} m
                </dd>
              </div>
            </dl>
          </div>

          {/* Visor 3D */}
          <div id="visor" className="scroll-mt-24">
            <Visor3D autoRotate mostrarControles alturaClase="h-[380px] md:h-[520px]" />
            <p className="mt-3 text-center text-xs text-slate-500 font-mono">
              Modelo paramétrico de referencia — el modelo final se producirá en
              Blender/FreeCAD y se exportará en formato .GLTF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
