// Fuente única de contenido técnico y de copywriting del proyecto.
// Centralizar aquí permite que Hero, DatosTecnicos, Timeline y PlanosSVG
// se mantengan sincronizados si cambia una cifra de diseño.

export const proyecto = {
  nombre: "Puente Mariano Ospina Pérez",
  rio: "Río Cauca",
  ubicacion: "Límite entre los municipios de La Unión y La Victoria, Valle del Cauca, Colombia",
  colapso: {
    anio: 2026,
    resumen:
      "La estructura original, que conectaba a La Unión con La Victoria sobre el río Cauca, colapsó tras un evento sísmico de alta intensidad, dejando incomunicadas a las comunidades ribereñas y interrumpiendo el corredor vial que soporta la carga agroindustrial del norte del Valle.",
  },
};

export const datosLuz = {
  longitudTotal: 140, // metros, luz libre continua sin apoyos intermedios en el cauce
  anchoTablero: 12, // metros
  carriles: { cantidad: 2, anchoM: 3.6 },
  pasosPeatonales: { cantidad: 2, segregados: true },
  profundidadRioMin: 5,
  profundidadRioMax: 8,
  profundidadPilotesM: 35,
};

export const tarjetasDatosTecnicos = [
  {
    id: "luz",
    titulo: "Luz Libre del Puente",
    valor: "140 m",
    descripcion:
      "Tramo continuo sin apoyos en el centro del cauce, eliminando pilas dentro del río y el riesgo de socavación durante crecientes.",
    icono: "span",
  },
  {
    id: "ancho",
    titulo: "Ancho de Tablero",
    valor: "12 m",
    descripcion:
      "2 carriles vehiculares de 3.6 m, bermas de seguridad y 2 pasos peatonales segregados con barrera física del tráfico vehicular.",
    icono: "width",
  },
  {
    id: "rio",
    titulo: "Condiciones del Río Cauca",
    valor: "5 – 8 m",
    descripcion:
      "Profundidad variable con lecho aluvial de arcillas y limos blandos, con alto riesgo de licuación ante sismo (Título H, NSR-10).",
    icono: "river",
  },
  {
    id: "cimentacion",
    titulo: "Cimentación Profunda",
    valor: "35 m",
    descripcion:
      "Pilotes excavados en concreto reforzado hasta encontrar roca firme o estrato duro, fundidos bajo agua mediante tubo Tremi.",
    icono: "foundation",
  },
  {
    id: "superestructura",
    titulo: "Superestructura",
    valor: "Postensado / Acero A709",
    descripcion:
      "Vigas cajón en concreto postensado de alta resistencia (5000 psi) o arco en acero estructural ASTM A709, sin apoyos en el agua.",
    icono: "girder",
  },
  {
    id: "sismo",
    titulo: "Sismorresistencia",
    valor: "Aisladores FPS",
    descripcion:
      "Aisladores sísmicos de péndulo por fricción entre pilas y tablero, cumpliendo NSR-10 y CCP-14 para puentes esenciales.",
    icono: "seismic",
  },
];

export const especificacionesMateriales = [
  {
    componente: "Vigas y Tablero",
    material: "Concreto Postensado",
    especificacion:
      "Resistencia f'c = 35 a 40 MPa (5000–5800 psi). Concreto de baja permeabilidad para resistir la humedad del entorno fluvial.",
  },
  {
    componente: "Acero Estructural (arcos o celosías)",
    material: "Acero ASTM A709",
    especificacion:
      "Grado 50W (tipo Corten). Genera una pátina de óxido protectora natural, eliminando la necesidad de repintar sobre el río.",
  },
  {
    componente: "Acero de Refuerzo",
    material: "Acero Corrugado",
    especificacion:
      "Límite de fluencia fy = 420 MPa (Grado 60), cumpliendo la Norma Técnica Colombiana NTC 2289.",
  },
  {
    componente: "Pilas y Pilotes",
    material: "Concreto Reforzado (Subacuático)",
    especificacion:
      "Resistencia f'c = 28 MPa (4000 psi). Aditivos impermeabilizantes y plastificantes para fundición bajo agua con tubo Tremi.",
  },
  {
    componente: "Apoyos Sísmicos",
    material: "Aisladores de Péndulo por Fricción (FPS)",
    especificacion:
      "Acero inoxidable y teflón bajo el tablero. Permiten desplazamientos laterales &gt; 40 cm sin transferir fuerza letal a la vía.",
  },
];

export const marcoNormativo = {
  normas: ["CCP-14 (Código Colombiano de Diseño de Puentes)", "NSR-10, Título H (Geotecnia)"],
  categoria: "Puente Esencial",
  categoriaDescripcion:
    "Por clasificación legal debe mantener su integridad estructural para garantizar el paso de ambulancias, bomberos y logística de emergencia inmediatamente después de un sismo severo.",
  amenazaSismica: "Zona de Amenaza Sísmica Alta (Valle del Cauca)",
  riesgoGeotecnico:
    "El lecho del río Cauca contiene suelos aluviales arenosos y limosos con alto riesgo de licuación: el suelo pierde firmeza y se comporta como líquido durante el sismo. Esto prohíbe zapatas superficiales y exige pilotaje profundo hasta estratos rocosos.",
  disipacionEnergia:
    "Es obligatorio el uso de sistemas de aislamiento en la base para evitar que la aceleración del suelo fracture la superestructura.",
};

export const fasesConstruccion = [
  {
    id: "fase-1",
    numero: 1,
    titulo: "Desmonte de Escombros y Puente Militar Temporal",
    duracionEstimada: "4 – 6 semanas",
    descripcion:
      "Remoción controlada de los restos de la estructura colapsada y montaje de un puente militar tipo Bailey o Acrow como paso provisional, restableciendo de inmediato la conectividad vital entre La Unión y La Victoria mientras avanza la obra definitiva.",
    entregables: [
      "Limpieza y disposición de escombros en el cauce",
      "Habilitación de accesos provisionales",
      "Puente militar temporal operativo para tráfico liviano",
    ],
  },
  {
    id: "fase-2",
    numero: 2,
    titulo: "Estudios Geotécnicos y Pilotaje Profundo",
    duracionEstimada: "10 – 14 semanas",
    descripcion:
      "Exploración geotécnica (SPT, CPT y sondeos) para caracterizar el lecho aluvial y ubicar el estrato rocoso. Excavación e instalación de pilotes de concreto reforzado a 35 m de profundidad: las verdaderas zapatas del puente, diseñadas para anular el riesgo de licuación.",
    entregables: [
      "Sondeos geotécnicos y perfil estratigráfico del cauce",
      "Pilotes excavados fundidos con tubo Tremi bajo agua",
      "Verificación de capacidad portante en roca o estrato duro",
    ],
  },
  {
    id: "fase-3",
    numero: 3,
    titulo: "Elevación de Pilas y Aisladores Sísmicos",
    duracionEstimada: "8 – 10 semanas",
    descripcion:
      "Construcción de las pilas de concreto reforzado sobre los cabezales de pilotes e instalación de aisladores sísmicos de péndulo por fricción (FPS) entre pilas y tablero, el sistema de disipación de energía exigido por la NSR-10 para puentes esenciales.",
    entregables: [
      "Pilas de concreto reforzado f'c = 28 MPa",
      "Montaje de aisladores FPS en acero inoxidable y teflón",
      "Pruebas de desplazamiento lateral de los aisladores",
    ],
  },
  {
    id: "fase-4",
    numero: 4,
    titulo: "Lanzamiento del Tablero Postensado",
    duracionEstimada: "6 – 8 semanas",
    descripcion:
      "Lanzamiento incremental o izaje de las dovelas de la superestructura en concreto postensado (o montaje del arco en acero A709), tensionado de cables, fundida de la losa de rodadura y entrega de los 140 m de luz libre sin apoyos en el agua.",
    entregables: [
      "Lanzamiento de dovelas y cierre del tramo central",
      "Tensionado de cables postensados",
      "Losa de rodadura, barandas y señalización final",
    ],
  },
];

export const perfilLongitudinal = {
  // Coordenadas conceptuales usadas por PlanosSVG.jsx (en metros, eje X a lo largo del puente)
  luzTotal: 140,
  altoTableroSobreAgua: 9,
  nivelAguaMedio: 0,
  profundidadMaxLecho: -8,
  profundidadPilotes: -35,
  estriboIzq: { x: 0, nombre: "Estribo La Unión" },
  estriboDer: { x: 140, nombre: "Estribo La Victoria" },
  pilas: [
    { x: 35, nombre: "Pila 1" },
    { x: 105, nombre: "Pila 2" },
  ],
};
