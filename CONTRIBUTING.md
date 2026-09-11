# Guía de contribución

¡Gracias por tu interés en colaborar con el sitio del **Puente Mariano Ospina
Pérez**! Este documento explica cómo proponer cambios mediante un Pull
Request (PR).

## Antes de empezar

1. Revisa los [Issues abiertos](../../issues) para ver si ya existe una
   discusión sobre lo que quieres cambiar, o abre uno nuevo si vas a proponer
   un cambio grande (nueva sección, cambio de datos técnicos, etc.). Para
   correcciones pequeñas (typos, ajustes de estilo, bugs menores) puedes ir
   directo al PR.
2. Lee el `README.md` para entender la estructura del proyecto (`app/`,
   `components/`, `data/`).

## Flujo de trabajo

1. Haz un **fork** del repositorio y clónalo localmente:

   ```bash
   git clone https://github.com/<tu-usuario>/puente.git
   cd puente
   ```

2. Crea una rama descriptiva a partir de `main`:

   ```bash
   git checkout -b tipo/descripcion-breve
   # ejemplos: fix/typo-footer, feat/nueva-seccion-planos
   ```

3. Instala las dependencias y levanta el entorno de desarrollo:

   ```bash
   npm install
   npm run dev
   ```

   El sitio queda disponible en [http://localhost:3000](http://localhost:3000).

4. Haz tus cambios. Algunas convenciones del proyecto:
   - Los textos y cifras técnicas (luces, resistencias, normativa CCP-14/NSR-10,
     etc.) se centralizan en `data/proyecto.js`. Evita duplicar esos valores
     directamente en los componentes.
   - Los componentes viven en `components/` y usan Tailwind CSS para estilos.
   - Si tu cambio afecta datos técnicos (medidas, materiales, normativa),
     indica la fuente en la descripción del PR.

5. Verifica que el lint pase antes de subir tus cambios:

   ```bash
   npm run lint
   ```

6. Confirma que el proyecto compila correctamente:

   ```bash
   npm run build
   ```

## Enviar el Pull Request

1. Sube tu rama a tu fork:

   ```bash
   git push -u origin tipo/descripcion-breve
   ```

2. Abre un Pull Request contra la rama `main` de este repositorio.
3. Describe claramente:
   - Qué problema resuelve o qué mejora aporta el cambio.
   - Cómo lo probaste (capturas de pantalla son bienvenidas para cambios
     visuales).
   - Si aplica, la fuente de cualquier dato técnico modificado.
4. Un mantenedor revisará el PR y puede pedir ajustes antes de aprobarlo.

## Buenas prácticas para los commits

- Usa mensajes claros y en modo imperativo (ej. `Corrige alineación del
  footer en móvil`).
- Evita mezclar cambios sin relación en un mismo commit o PR.

## ¿Dudas?

Si tienes preguntas sobre el proyecto o cómo puedes ayudar, abre un Issue
describiendo tu duda o propuesta.
