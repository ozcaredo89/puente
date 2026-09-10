"use client";

import { useState } from "react";
import { proyecto } from "@/data/proyecto";
import Brujula from "./cartografia/Brujula";

const enlaces = [
  { href: "#visor", label: "Modelo 3D" },
  { href: "#datos-tecnicos", label: "Ficha técnica" },
  { href: "#fases", label: "Fases" },
  { href: "#planos", label: "Planos" },
  { href: "#normativa", label: "Normativa" },
  { href: "#apoyo", label: "Apoyar" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-rio-800/80 bg-rio-950/85 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <Brujula className="w-5 h-5 text-acero-500" />
          <span className="font-semibold text-slate-100 text-sm md:text-base">
            {proyecto.nombre}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm text-slate-400">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a href={e.href} className="hover:text-acero-400 transition-colors">
                {e.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-slate-300"
          onClick={() => setAbierto((v) => !v)}
          aria-label="Abrir menú"
        >
          {abierto ? "✕" : "☰"}
        </button>
      </nav>

      {abierto && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-slate-300 bg-rio-950 border-t border-rio-800">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                onClick={() => setAbierto(false)}
                className="block py-2.5 hover:text-acero-400"
              >
                {e.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
