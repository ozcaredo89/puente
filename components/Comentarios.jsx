"use client";

import { useEffect, useRef } from "react";
import { SectionHeading } from "./DatosTecnicos";
import MarcoEsquinas from "./cartografia/MarcoEsquinas";

// Configuración de giscus (github.com/giscus/giscus) generada en
// https://giscus.app para el repo ozcaredo89/puente, con GitHub Discussions
// habilitado y la categoría "General".
const GISCUS_REPO = "ozcaredo89/puente";
const GISCUS_REPO_ID = "R_kgDOUVtqpw";
const GISCUS_CATEGORY = "General";
const GISCUS_CATEGORY_ID = "DIC_kwDOUVtqp84DFWC_";

export default function Comentarios() {
  const contenedorRef = useRef(null);

  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor) return;

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
          <div ref={contenedorRef} className="giscus" />
        </div>
      </div>
    </section>
  );
}
