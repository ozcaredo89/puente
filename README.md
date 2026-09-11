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

## Sección de comentarios y calificaciones

La sección "Comentarios y calificaciones" (`#comentarios` en `index.html`)
usa **Firebase** (Authentication + Firestore) de Google: los visitantes
inician sesión con su cuenta de Google (no requiere GitHub ni ninguna otra
cuenta), dejan una calificación de 1 a 5 estrellas y un comentario opcional,
y pueden borrar solo sus propios comentarios. Todo corre en el navegador,
sin backend propio.

### Activarla (una sola vez)

1. Ve a la [consola de Firebase](https://console.firebase.google.com/) →
   **Agregar proyecto** (el plan gratuito "Spark" alcanza de sobra).
2. **Authentication** → pestaña *Sign-in method* → habilita **Google**.
3. **Firestore Database** → **Crear base de datos** → modo producción →
   elige una región cercana (ej. `us-central` o `southamerica-east1`).
4. En *Reglas* de Firestore, reemplaza el contenido por:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /comentarios/{comentarioId} {
         allow read: if true;
         allow create: if request.auth != null
           && request.resource.data.uid == request.auth.uid
           && request.resource.data.rating is int
           && request.resource.data.rating >= 1
           && request.resource.data.rating <= 5
           && request.resource.data.text is string
           && request.resource.data.text.size() <= 1000;
         allow update: if false;
         allow delete: if request.auth != null && resource.data.uid == request.auth.uid;
       }
     }
   }
   ```

   Esto permite que cualquiera lea los comentarios, que solo un usuario
   autenticado con Google cree comentarios propios (con calificación 1–5 y
   texto de máximo 1000 caracteres), y que cada quien solo pueda borrar los
   suyos.

5. Panel del proyecto (ícono de engranaje → *Configuración del proyecto*) →
   sección *Tus apps* → agrega una **app Web** (ícono `</>`) → copia el
   objeto `firebaseConfig` que te muestra.
6. Pega esos valores (`apiKey`, `authDomain`, `projectId`, `storageBucket`,
   `messagingSenderId`, `appId`) en las constantes correspondientes dentro
   de `index.html`, sección `#comentarios`, reemplazando los valores
   `"TODO_..."`.
7. **Authentication** → *Settings* → *Authorized domains* → agrega el
   dominio real donde vive el sitio (ej. `tusitio.netlify.app` y tu dominio
   propio si tienes uno). Sin este paso, el inicio de sesión con Google
   falla en producción.

Mientras el paso 6 no esté hecho, la sección muestra un aviso de
"pendiente de activar" en vez del widget. Estos valores de `firebaseConfig`
son públicos por diseño en cualquier app de Firebase — la seguridad real la
dan las *Firestore Security Rules* del paso 4, no el secreto de estas
claves.

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
