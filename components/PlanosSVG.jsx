"use client";

import { useState } from "react";
import { perfilLongitudinal, datosLuz, referenciaGeografica } from "@/data/proyecto";
import { SectionHeading } from "./DatosTecnicos";
import Brujula from "./cartografia/Brujula";
import MarcoEsquinas from "./cartografia/MarcoEsquinas";
import EscalaGrafica from "./cartografia/EscalaGrafica";

/**
 * PlanosSVG — Perfil longitudinal paramétrico del puente sobre el río Cauca.
 *
 * Todas las coordenadas se calculan a partir de `perfilLongitudinal`
 * (data/proyecto.js) mediante las funciones escalaX/escalaY, de modo que
 * el plano permanece fiel a las cifras de diseño (luz, profundidad del
 * lecho, longitud de pilotes) sin valores mágicos repetidos en el JSX.
 */

const VB_W = 1000;
const VB_H = 480;
const MARGEN_IZQ = 70;
const MARGEN_DER = 40;
const ANCHO_UTIL = VB_W - MARGEN_IZQ - MARGEN_DER;

// Rango vertical real representado (metros): desde -40 (punta de pilotes
// con margen) hasta +14 (parte superior de barandas con margen).
const Y_MIN_REAL = -40;
const Y_MAX_REAL = 14;
const MARGEN_SUP = 30;
const MARGEN_INF = 30;
const ALTO_UTIL = VB_H - MARGEN_SUP - MARGEN_INF;

function escalaX(xReal) {
  return MARGEN_IZQ + (xReal / perfilLongitudinal.luzTotal) * ANCHO_UTIL;
}

function escalaY(yReal) {
  const t = (yReal - Y_MAX_REAL) / (Y_MIN_REAL - Y_MAX_REAL);
  return MARGEN_SUP + t * ALTO_UTIL;
}

const NIVEL_TABLERO = perfilLongitudinal.altoTableroSobreAgua;
const NIVEL_AGUA = perfilLongitudinal.nivelAguaMedio;

// Perfil del lecho: puntos (x, y) que dibujan la variación de profundidad
// del río (5 a 8 m) usados por DatosTecnicos/Hero como referencia textual.
const perfilLecho = [
  { x: 0, y: 1.5 },
  { x: 20, y: -1 },
  { x: 35, y: -5 },
  { x: 55, y: -7.5 },
  { x: 70, y: -8 },
  { x: 85, y: -7.5 },
  { x: 105, y: -5 },
  { x: 120, y: -1 },
  { x: 140, y: 1.5 },
];

const lechoPath = perfilLecho
  .map((p, i) => `${i === 0 ? "M" : "L"} ${escalaX(p.x)} ${escalaY(p.y)}`)
  .join(" ");

// Polígono de agua: línea del N.A.M. de izquierda a derecha, seguida del
// perfil del lecho de derecha a izquierda, para cerrar el área a rellenar.
const aguaPath =
  `M ${escalaX(0)} ${escalaY(NIVEL_AGUA)} L ${escalaX(140)} ${escalaY(NIVEL_AGUA)} ` +
  [...perfilLecho]
    .reverse()
    .map((p) => `L ${escalaX(p.x)} ${escalaY(p.y)}`)
    .join(" ") +
  " Z";

const elementos = [
  {
    id: "estribo-izq",
    nombre: perfilLongitudinal.estriboIzq.nombre,
    tipo: "Estribo",
    detalle:
      "Estribo de concreto reforzado que transmite la reacción del tablero al terreno natural en la margen de La Unión.",
  },
  {
    id: "pila-1",
    nombre: perfilLongitudinal.pilas[0].nombre,
    tipo: "Pila + aislador FPS",
    detalle:
      "Pila de concreto f'c = 28 MPa sobre cabezal de pilotes, con aislador de péndulo por fricción en su cabeza.",
  },
  {
    id: "pila-2",
    nombre: perfilLongitudinal.pilas[1].nombre,
    tipo: "Pila + aislador FPS",
    detalle:
      "Segunda pila del cauce, geometría simétrica a la Pila 1, define los dos vanos de 35 m junto al tramo central de 70 m.",
  },
  {
    id: "estribo-der",
    nombre: perfilLongitudinal.estriboDer.nombre,
    tipo: "Estribo",
    detalle:
      "Estribo de concreto reforzado en la margen de La Victoria, con aletas de contención del terraplén de acceso.",
  },
  {
    id: "tablero",
    nombre: "Tablero postensado",
    tipo: "Superestructura",
    detalle: `Viga cajón en concreto postensado (f'c = 35–40 MPa), ${datosLuz.anchoTablero} m de ancho, luz continua de ${datosLuz.longitudTotal} m sin apoyos en el agua.`,
  },
  {
    id: "pilotes",
    nombre: "Pilotes excavados",
    tipo: "Cimentación profunda",
    detalle:
      "Pilotes de concreto reforzado excavados hasta 35 m de profundidad, fundidos bajo agua con tubo Tremi, apoyados en roca o estrato duro.",
  },
];

function EstriboSVG({ xReal, orientacion, onSelect, activo }) {
  const x = escalaX(xReal);
  const yTope = escalaY(NIVEL_TABLERO + 1.4);
  const yBase = escalaY(1.5);
  const ancho = 46;
  const dx = orientacion === "izq" ? 0 : -ancho;

  return (
    <g
      className="cursor-pointer"
      onClick={() => onSelect("estribo-" + orientacion)}
      opacity={activo === false ? 0.35 : 1}
    >
      <polygon
        points={`${x + dx},${yTope} ${x + dx + ancho},${yTope} ${x + dx + ancho * 0.65},${yBase} ${x + dx + ancho * 0.35},${yBase}`}
        fill="#8f97a3"
        stroke="#4a90b8"
        strokeWidth={1}
      />
    </g>
  );
}

function PilaSVG({ pila, onSelect, activo }) {
  const x = escalaX(pila.x);
  const yTablero = escalaY(NIVEL_TABLERO - 0.3);
  const yAislador = escalaY(NIVEL_TABLERO - 0.9);
  const yFuste = escalaY(1.2);
  const yPunta = escalaY(perfilLongitudinal.profundidadPilotes);

  const anchoFuste = 16;
  const anchoCabezal = 60;
  const yCabezal = escalaY(0.4);

  return (
    <g
      className="cursor-pointer"
      onClick={() => onSelect(pila.id)}
      opacity={activo === false ? 0.35 : 1}
    >
      {/* Pilotes */}
      {[-20, -7, 7, 20].map((off, i) => (
        <line
          key={i}
          x1={x + off}
          y1={yCabezal}
          x2={x + off}
          y2={yPunta}
          stroke="#7f8894"
          strokeWidth={4}
          strokeDasharray={i % 2 === 0 ? "0" : "0"}
        />
      ))}
      <circle cx={x} cy={yPunta} r={3} fill="#e0b93d" />
      <text
        x={x}
        y={yPunta + 14}
        textAnchor="middle"
        className="fill-alerta-500"
        fontSize="9"
        fontFamily="monospace"
      >
        -35 m
      </text>

      {/* Cabezal */}
      <rect
        x={x - anchoCabezal / 2}
        y={yCabezal - 6}
        width={anchoCabezal}
        height={12}
        fill="#9aa0a8"
        stroke="#4a90b8"
      />

      {/* Fuste de la pila */}
      <rect
        x={x - anchoFuste / 2}
        y={yTablero}
        width={anchoFuste}
        height={yCabezal - yTablero}
        fill="#c9cdd3"
        stroke="#4a90b8"
      />

      {/* Aislador FPS */}
      <rect
        x={x - anchoFuste / 2 - 4}
        y={yTablero}
        width={anchoFuste + 8}
        height={yAislador - yTablero}
        fill="#c98a2c"
        stroke="#8f4b21"
      />
    </g>
  );
}

export default function PlanosSVG() {
  const [seleccion, setSeleccion] = useState(null);
  const elementoActivo = elementos.find((e) => e.id === seleccion);

  return (
    <section
      id="planos"
      className="relative bg-rio-950 py-20 md:py-28 border-t border-rio-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Planos de diseño"
          title="Perfil longitudinal sobre el río Cauca"
          description="Corte esquemático del puente y su cimentación. Haz clic sobre un
            elemento (estribos, pilas, tablero) para ver su detalle técnico.
            El plano es paramétrico: las cotas provienen de las mismas cifras
            de diseño mostradas en la ficha técnica."
        />

        <div className="mt-10 relative rounded-lg border border-rio-700 bg-rio-900/50 p-4 md:p-8">
          <MarcoEsquinas tamano={20} className="text-acero-500/70" />

          <div className="absolute top-3 right-3 flex flex-col items-end gap-1 text-acero-400/70 z-10">
            <Brujula className="w-7 h-7" title="Norte (referencial)" />
            <span className="font-mono text-[9px]">N</span>
          </div>

          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="w-full h-auto select-none"
            role="img"
            aria-label="Perfil longitudinal del puente Mariano Ospina Pérez"
          >
            {/* Cota general de longitud */}
            <g stroke="#4a5568" strokeWidth={1} fontFamily="monospace">
              <line
                x1={MARGEN_IZQ}
                y1={escalaY(NIVEL_TABLERO + 3.2)}
                x2={escalaX(perfilLongitudinal.luzTotal)}
                y2={escalaY(NIVEL_TABLERO + 3.2)}
                markerStart="url(#flecha)"
                markerEnd="url(#flecha)"
              />
              <text
                x={(MARGEN_IZQ + escalaX(perfilLongitudinal.luzTotal)) / 2}
                y={escalaY(NIVEL_TABLERO + 3.2) - 8}
                textAnchor="middle"
                fontSize="13"
                fill="#7fb8d6"
              >
                {datosLuz.longitudTotal} m — luz continua sin apoyos en el río
              </text>
            </g>

            <defs>
              <marker
                id="flecha"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 Z" fill="#4a5568" />
              </marker>
              <linearGradient id="aguaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2e6f95" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#0a1220" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Terreno / lecho relleno */}
            <path
              d={`${lechoPath} L ${escalaX(140)} ${VB_H - MARGEN_INF} L ${escalaX(0)} ${VB_H - MARGEN_INF} Z`}
              fill="#241d14"
              stroke="none"
            />

            {/* Agua */}
            <path d={aguaPath} fill="url(#aguaGrad)" />
            <line
              x1={escalaX(0)}
              y1={escalaY(NIVEL_AGUA)}
              x2={escalaX(140)}
              y2={escalaY(NIVEL_AGUA)}
              stroke="#7fb8d6"
              strokeWidth={1}
              strokeDasharray="4 3"
            />
            <text
              x={escalaX(140) + 6}
              y={escalaY(NIVEL_AGUA) + 4}
              fontSize="10"
              fill="#7fb8d6"
              fontFamily="monospace"
            >
              N.A.M.
            </text>

            {/* Lecho línea */}
            <path d={lechoPath} fill="none" stroke="#6b5a3f" strokeWidth={2} />
            <text
              x={escalaX(70)}
              y={escalaY(-8) + 16}
              textAnchor="middle"
              fontSize="9"
              fill="#8a7a5c"
              fontFamily="monospace"
            >
              lecho aluvial (arcillas y limos blandos) · 5–8 m
            </text>

            {/* Pilas */}
            {perfilLongitudinal.pilas.map((pila, i) => (
              <PilaSVG
                key={pila.nombre}
                pila={{ ...pila, id: i === 0 ? "pila-1" : "pila-2" }}
                onSelect={setSeleccion}
                activo={seleccion ? seleccion === (i === 0 ? "pila-1" : "pila-2") : undefined}
              />
            ))}

            {/* Estribos */}
            <EstriboSVG
              xReal={perfilLongitudinal.estriboIzq.x}
              orientacion="izq"
              onSelect={setSeleccion}
              activo={seleccion ? seleccion === "estribo-izq" : undefined}
            />
            <EstriboSVG
              xReal={perfilLongitudinal.estriboDer.x}
              orientacion="der"
              onSelect={setSeleccion}
              activo={seleccion ? seleccion === "estribo-der" : undefined}
            />

            {/* Tablero */}
            <g
              className="cursor-pointer"
              onClick={() => setSeleccion("tablero")}
              opacity={seleccion && seleccion !== "tablero" ? 0.35 : 1}
            >
              <rect
                x={escalaX(0)}
                y={escalaY(NIVEL_TABLERO + 0.9)}
                width={escalaX(140) - escalaX(0)}
                height={escalaY(NIVEL_TABLERO - 0.9) - escalaY(NIVEL_TABLERO + 0.9)}
                fill="#e7e9ec"
                stroke="#4a90b8"
                strokeWidth={1.5}
              />
              <text
                x={escalaX(70)}
                y={escalaY(NIVEL_TABLERO + 0.9) - 8}
                textAnchor="middle"
                fontSize="10"
                fill="#e7e9ec"
                fontFamily="monospace"
              >
                tablero — viga cajón postensada
              </text>
            </g>

            {/* Pilotes leyenda click target invisible ancho */}
            <g
              className="cursor-pointer"
              onClick={() => setSeleccion("pilotes")}
              opacity={seleccion && seleccion !== "pilotes" ? 0 : 0}
              pointerEvents="none"
            />

            {/* Ejes de referencia niveles */}
            <g fontFamily="monospace" fontSize="9" fill="#64748b">
              <text x={12} y={escalaY(NIVEL_TABLERO)}>
                +{NIVEL_TABLERO} m
              </text>
              <text x={12} y={escalaY(NIVEL_AGUA)}>
                0 m
              </text>
              <text x={8} y={escalaY(perfilLongitudinal.profundidadPilotes)}>
                -35 m
              </text>
            </g>

            {/* Coordenadas geográficas de referencia en cada margen */}
            <g fontFamily="monospace" fontSize="9" fill="#4a90b8" opacity="0.8">
              <text x={escalaX(0)} y={VB_H - MARGEN_INF + 16} textAnchor="middle">
                {referenciaGeografica.laUnion.etiqueta}
              </text>
              <text x={escalaX(140)} y={VB_H - MARGEN_INF + 16} textAnchor="middle">
                {referenciaGeografica.laVictoria.etiqueta}
              </text>
            </g>
          </svg>

          {/* Cajetín tipo plano de ingeniería */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-rio-700 pt-3 font-mono text-[10px] text-slate-500">
            <span>PLANO · PERFIL LONGITUDINAL</span>
            <span>DATUM {referenciaGeografica.datum} · UTM {referenciaGeografica.zonaUTM}</span>
            <EscalaGrafica distanciaTotal={140} segmentos={4} className="text-slate-500" />
            <span>HOJA 1/1 · ESC. GRÁF.</span>
          </div>
        </div>

        {/* Panel de detalle */}
        <div className="mt-6 grid md:grid-cols-[1fr,1.4fr] gap-4">
          <div className="flex flex-wrap gap-2">
            {elementos.map((el) => (
              <button
                key={el.id}
                onClick={() => setSeleccion(el.id === seleccion ? null : el.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-mono transition-colors ${
                  seleccion === el.id
                    ? "border-acero-500 bg-acero-600/20 text-acero-400"
                    : "border-rio-700 text-slate-400 hover:border-acero-600/50"
                }`}
              >
                {el.nombre}
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-dashed border-rio-700 bg-rio-900/50 p-5 min-h-[92px]">
            <span className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-600">
              Leyenda
            </span>
            {elementoActivo ? (
              <>
                <span className="text-xs font-mono uppercase tracking-wide text-acero-500">
                  {elementoActivo.tipo}
                </span>
                <h4 className="mt-1 font-semibold text-slate-100">
                  {elementoActivo.nombre}
                </h4>
                <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                  {elementoActivo.detalle}
                </p>
              </>
            ) : (
              <p className="text-sm text-slate-500">
                Selecciona un elemento del plano o de la lista para ver su
                detalle técnico.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
