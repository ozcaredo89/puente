import "./globals.css";

export const metadata = {
  title: "Puente Mariano Ospina Pérez | Reconstrucción sobre el río Cauca",
  description:
    "Sitio interactivo del nuevo Puente Mariano Ospina Pérez entre La Unión y La Victoria, Valle del Cauca: visor 3D, ficha técnica, fases de construcción y planos, diseñado bajo el CCP-14 y la NSR-10 como puente esencial en zona de amenaza sísmica alta.",
  keywords: [
    "puente Mariano Ospina Pérez",
    "río Cauca",
    "La Unión",
    "La Victoria",
    "Valle del Cauca",
    "CCP-14",
    "NSR-10",
    "puente esencial",
    "aisladores sísmicos",
    "pilotaje profundo",
  ],
};

export const viewport = {
  themeColor: "#0a1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-rio-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
