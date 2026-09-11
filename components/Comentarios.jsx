"use client";

import { useEffect, useRef } from "react";
import { SectionHeading } from "./DatosTecnicos";
import MarcoEsquinas from "./cartografia/MarcoEsquinas";

// Configuración de giscus (github.com/giscus/giscus) para el repo
// ozcaredo89/puente. GISCUS_REPO_ID ya corresponde a este repositorio.
// GISCUS_CATEGORY_ID queda pendiente porque el repo aún no tiene GitHub
// Discussions habilitado: sin ese valor real el widget no carga (solo se ve
// el marco vacío). Para completarlo:
//   1. Habilita Discussions en Settings → General → Features del repo.
//   2. Instala la app de giscus: https://github.com/apps/giscus
//   3. Genera la configuración en https://giscus.app (pestaña "repositorio")
//      y copia aquí los valores data-category y data-category-id.
const GISCUS_REPO = "ozcaredo89/puente";
const GISCUS_REPO_ID = "R_kgDOUVtqpw";
const GISCUS_CATEGORY = "General";
const GISCUS_CATEGORY_ID = ""; // TODO: pegar aquí el data-category-id de giscus.app

export default function Comentarios() {
  const contenedorRef = useRef(null);

  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor || !GISCUS_CATEGORY_ID) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", GISCUS_REPO);
    script.setAttribute("data-repo-id", GISCUS_REPO_ID);
    script.setAttribute("data-category", GISCUS_CATEGORY);
    script.setAttribute("data-category-id", GISCUS_CATEGORY_ID);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "dark_dimmed");
    script.setAttribute("data-lang", "es");

    contenedor.appendChild(script);

    return () => {
      contenedor.innerHTML = "";
    };
  }, []);

  return (
    <section
      id="comentarios"
      className="relative bg-rio-950 py-20 md:py-28 border-t border-rio-800"
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Participación"
          title="Comentarios de la comunidad"
          description="¿Tienes preguntas, observaciones o información adicional sobre el
            proyecto? Deja tu comentario aquí. Se inicia sesión con una cuenta
            de GitHub y los comentarios quedan guardados como discusiones
            públicas del repositorio del sitio."
        />

        <div className="mt-12 relative rounded-lg border border-dashed border-acero-600/50 bg-rio-900/60 p-6 md:p-10">
          <MarcoEsquinas tamano={22} className="text-acero-500/70" />
          {GISCUS_CATEGORY_ID ? (
            <div ref={contenedorRef} className="giscus" />
          ) : (
            <p className="font-mono text-xs text-slate-500">
              Comentarios pendientes de activar: falta habilitar GitHub
              Discussions en el repositorio y completar{" "}
              <code className="text-acero-400">GISCUS_CATEGORY_ID</code> en{" "}
              <code className="text-acero-400">components/Comentarios.jsx</code>.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
