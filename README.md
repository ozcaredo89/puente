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

- **Next.js 14** (App Router) + **React 18**
- **Tailwind CSS** para la interfaz
- **React Three Fiber** (`@react-three/fiber` + `@react-three/drei`) para el
  visor 3D
- SVG paramétrico (sin librerías) para los planos 2D

## Estructura

```
app/
  layout.jsx          Layout raíz, metadata SEO
  page.jsx             Ensambla las secciones de la landing
  globals.css           Tailwind + estilos base
components/
  Hero.jsx              Sección de portada con el visor 3D embebido
  Visor3D.jsx            Visor 3D interactivo (React Three Fiber)
  DatosTecnicos.jsx      Grid de tarjetas con datos técnicos clave
  Timeline.jsx            Línea de tiempo vertical de fases constructivas
  PlanosSVG.jsx            Perfil longitudinal SVG interactivo
  EspecificacionesTabla.jsx Marco normativo + tabla de materiales
  Navbar.jsx / Footer.jsx   Navegación y pie de página
  icons/TechIcons.jsx        Iconografía SVG de las tarjetas técnicas
data/
  proyecto.js             Fuente única de contenido técnico y copywriting
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Reemplazar el placeholder 3D por el modelo definitivo

`Visor3D.jsx` construye el puente con primitivas de Three.js (cajas para el
tablero, cilindros para los pilotes) como *placeholder* funcional. Para usar
un modelo real modelado en Blender o FreeCAD:

1. Exporta el modelo en formato `.glb`/`.gltf`.
2. Colócalo en `public/models/puente.glb`.
3. En `components/Visor3D.jsx`, reemplaza el grupo `<ModeloPuente />` por:

   ```jsx
   import { useGLTF } from "@react-three/drei";

   function ModeloPuenteGLTF() {
     const { scene } = useGLTF("/models/puente.glb");
     return <primitive object={scene} />;
   }

   useGLTF.preload("/models/puente.glb");
   ```

El resto del visor (controles de órbita, botones de rotación/etiquetas/nivel
del río, iluminación) sigue funcionando sin cambios.

## Despliegue

El proyecto es compatible con cualquier plataforma que soporte Next.js
(Vercel, Netlify, etc.). Pasos generales:

```bash
npm run build
npm run start
```

O conecta el repositorio a tu plataforma de despliegue continuo preferida.

## Fuente del contenido técnico

Todas las cifras de diseño (luz de 140 m, ancho de 12 m, pilotes a 35 m,
resistencias de materiales, normativa CCP-14/NSR-10, etc.) están
centralizadas en `data/proyecto.js` para mantener coherencia entre el Hero,
la ficha técnica, la línea de tiempo y los planos.
