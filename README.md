# Puente Mariano Ospina Pérez — Sitio Interactivo

Sitio web interactivo que presenta el diseño del nuevo **Puente Mariano
Ospina Pérez** sobre el río Cauca, conectando los municipios de **La Unión**
y **La Victoria** (Valle del Cauca, Colombia), en reemplazo de la estructura
colapsada por un sismo en 2026.

Construido para comunicar el proyecto tanto a la comunidad como a las
autoridades: un visor 3D interactivo, ficha técnica, fases de construcción,
planos 2D paramétricos y la tabla de especificaciones de materiales exigidas
por el **CCP-14** (Código Colombiano de Diseño de Puentes) y la **NSR-10**
(Título H, geotecnia).

## Stack

Página estática de un solo archivo (`index.html`): HTML + CSS + JavaScript
vanilla, con **Three.js** (vía CDN) para el visor 3D y SVG paramétrico
(sin librerías) para los planos 2D. No requiere build ni dependencias.

## Desarrollo local

Abre `index.html` directamente en el navegador, o sirve la carpeta con
cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

## Reemplazar el placeholder 3D por el modelo definitivo

El visor 3D construye el puente con primitivas de Three.js (cajas para el
tablero, cilindros para los pilotes) como *placeholder* funcional. Para usar
un modelo real modelado en Blender o FreeCAD, dentro del bloque
`initViewer()` en `index.html`, reemplaza la construcción manual del grupo
`puente` por la carga de un `.glb`/`.gltf` con el `GLTFLoader` de Three.js
(colocando el archivo en `public/models/puente.glb`).

El resto del visor (controles de órbita, botones de rotación/etiquetas/nivel
del río, iluminación) sigue funcionando sin cambios.

## Sección de comentarios

La sección "Comentarios" usa [giscus](https://giscus.app), que guarda los
comentarios como hilos de **GitHub Discussions** de este mismo repositorio
(no requiere backend ni base de datos propia). Ya está configurada y
apuntando al repo `ozcaredo89/puente`, categoría `General`.

Si alguna vez necesitas regenerar la configuración (por ejemplo, si cambias
de repositorio o de categoría), vuelve a <https://giscus.app>, escribe el
repositorio, elige la categoría y copia los nuevos valores `data-repo-id` /
`data-category-id` en el `<script>` de giscus dentro de `index.html`
(sección `#comentarios`).

## Despliegue

El sitio es HTML/CSS/JS estático: se publica tal cual, sin paso de build.
`netlify.toml` ya apunta al directorio raíz como carpeta de publicación.
Compatible con cualquier hosting estático (Netlify, Vercel, GitHub Pages,
etc.).

## Fuente del contenido técnico

Todas las cifras de diseño (luz de 140 m, ancho de 12 m, pilotes a 35 m,
resistencias de materiales, normativa CCP-14/NSR-10, etc.) están
centralizadas como datos JavaScript dentro de `index.html` (arrays `DATOS`,
`FASES`, `SPECS`) para mantener coherencia entre la ficha técnica, la línea
de tiempo, los planos y la tabla de normativa.

## ¿Quieres colaborar?

Las contribuciones son bienvenidas: correcciones, mejoras de la interfaz,
nuevas secciones o ajustes a los datos técnicos. Consulta la
[guía de contribución](CONTRIBUTING.md) para conocer el flujo de trabajo y
cómo enviar tu Pull Request.
