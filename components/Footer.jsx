import { proyecto } from "@/data/proyecto";

export default function Footer() {
  return (
    <footer className="border-t border-rio-800 bg-rio-950 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-slate-100">{proyecto.nombre}</p>
          <p className="mt-1 text-sm text-slate-500 max-w-md">
            {proyecto.ubicacion}. Proyecto de reconstrucción diseñado bajo el
            CCP-14 y la NSR-10 como puente esencial de la red vial del norte
            del Valle del Cauca.
          </p>
        </div>

        <div className="text-xs text-slate-600 font-mono leading-relaxed">
          <p>Maqueta interactiva de socialización técnica y comunitaria.</p>
          <p>Cifras de diseño sujetas a validación en estudios de detalle.</p>
        </div>
      </div>
    </footer>
  );
}
