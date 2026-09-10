// Escala gráfica tipo plano de ingeniería: barra segmentada con cotas en
// metros, alternando tramos claros/oscuros como en las escalas impresas
// de cartografía y planos técnicos.

export default function EscalaGrafica({
  distanciaTotal = 140,
  segmentos = 4,
  unidad = "m",
  className = "",
}) {
  const paso = distanciaTotal / segmentos;
  const anchoSegmento = 26;

  return (
    <div className={`inline-flex items-end gap-0 font-mono text-[9px] ${className}`}>
      <div className="flex flex-col items-start">
        <div className="flex">
          {Array.from({ length: segmentos }).map((_, i) => (
            <div
              key={i}
              style={{ width: anchoSegmento }}
              className={`h-1.5 border-y border-current ${
                i === 0 ? "border-l" : ""
              } ${i === segmentos - 1 ? "border-r" : ""} ${
                i % 2 === 0 ? "bg-current opacity-70" : "bg-transparent"
              }`}
            />
          ))}
        </div>
        <div className="flex w-full justify-between mt-0.5 opacity-70">
          <span>0</span>
          <span>
            {Math.round(paso * Math.ceil(segmentos / 2))} {unidad}
          </span>
          <span>
            {distanciaTotal} {unidad}
          </span>
        </div>
      </div>
    </div>
  );
}
