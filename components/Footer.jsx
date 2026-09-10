import { proyecto, referenciaGeografica } from "@/data/proyecto";
import Brujula from "./cartografia/Brujula";

export default function Footer() {
  return (
    <footer className="border-t border-rio-800 bg-rio-950 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-3">
          <Brujula className="w-6 h-6 text-acero-500/60 mt-1 shrink-0" />
          <div>
            <p className="font-semibold text-slate-100">{proyecto.nombre}</p>
            <p className="mt-1 text-sm text-slate-500 max-w-md">
              {proyecto.ubicacion}. Proyecto de reconstrucción diseñado bajo el
              CCP-14 y la NSR-10 como puente esencial de la red vial del norte
              del Valle del Cauca.
            </p>
            <p className="mt-2 font-mono text-[10px] text-slate-600 tracking-wide">
              {referenciaGeografica.laUnion.etiqueta} · {referenciaGeografica.laVictoria.etiqueta} ·
              Datum {referenciaGeografica.datum} · Zona UTM {referenciaGeografica.zonaUTM}
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-600 font-mono leading-relaxed">
          <p>Maqueta interactiva de socialización técnica y comunitaria.</p>
          <p>Cifras de diseño sujetas a validación en estudios de detalle.</p>
        </div>
      </div>
    </footer>
  );
}
