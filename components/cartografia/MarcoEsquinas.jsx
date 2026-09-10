// Marcas de esquina tipo "crop marks" de plano impreso. Se coloca como
// hijo absoluto dentro de un contenedor con `position: relative`.

export default function MarcoEsquinas({ tamano = 16, className = "" }) {
  const brazo = tamano;
  const grosor = "border-acero-500/70";

  const base = "absolute pointer-events-none";
  const estilo = { width: brazo, height: brazo };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div
        className={`${base} top-0 left-0 border-t-2 border-l-2 ${grosor}`}
        style={estilo}
      />
      <div
        className={`${base} top-0 right-0 border-t-2 border-r-2 ${grosor}`}
        style={estilo}
      />
      <div
        className={`${base} bottom-0 left-0 border-b-2 border-l-2 ${grosor}`}
        style={estilo}
      />
      <div
        className={`${base} bottom-0 right-0 border-b-2 border-r-2 ${grosor}`}
        style={estilo}
      />
    </div>
  );
}
