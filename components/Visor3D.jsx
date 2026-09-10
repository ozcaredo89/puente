"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, ContactShadows } from "@react-three/drei";
import { perfilLongitudinal } from "@/data/proyecto";

/**
 * Visor 3D — Placeholder funcional
 * ---------------------------------------------------------------------
 * Geometría paramétrica construida con primitivas de Three.js (cajas,
 * cilindros) que representa el puente a escala relativa (1 unidad = 1 m,
 * escalado /10 para la escena). El modelo definitivo se modelará en
 * Blender/FreeCAD y se cargará aquí como .GLTF/.GLB mediante
 * useGLTF("/models/puente.glb") sin cambiar el resto del visor.
 */

const ESCALA = 1 / 10; // 1 unidad three.js = 10 metros reales
const LUZ_TOTAL = perfilLongitudinal.luzTotal * ESCALA; // 14
const MITAD = LUZ_TOTAL / 2;

function Agua() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.opacity =
        0.55 + Math.sin(clock.getElapsedTime() * 0.6) * 0.05;
    }
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[40, 24]} />
      <meshStandardMaterial
        color="#1c4f63"
        transparent
        opacity={0.55}
        roughness={0.15}
        metalness={0.2}
      />
    </mesh>
  );
}

function Lecho() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.85, 0]}
      receiveShadow
    >
      <planeGeometry args={[40, 24]} />
      <meshStandardMaterial color="#3b3226" roughness={1} />
    </mesh>
  );
}

function Pilote({ x, z, profundidad = 0.85, radio = 0.14 }) {
  const alto = profundidad + 0.15;
  return (
    <mesh position={[x, -profundidad / 2 + 0.15 / 2, z]} castShadow>
      <cylinderGeometry args={[radio, radio, alto, 20]} />
      <meshStandardMaterial color="#8a8f97" roughness={0.85} />
    </mesh>
  );
}

function CabezalPilotes({ x }) {
  const separaciones = [-0.5, -0.17, 0.17, 0.5];
  return (
    <group position={[x, 0, 0]}>
      {separaciones.map((z, i) => (
        <Pilote key={i} x={0} z={z} />
      ))}
      <mesh position={[0, 0.18, 0]} castShadow>
        <boxGeometry args={[0.55, 0.3, 1.3]} />
        <meshStandardMaterial color="#9aa0a8" roughness={0.7} />
      </mesh>
    </group>
  );
}

function Pila({ x, alturaAgua = 0.9 }) {
  return (
    <group position={[x, 0, 0]}>
      <CabezalPilotes x={0} />
      <mesh position={[0, alturaAgua / 2 + 0.33, 0]} castShadow>
        <boxGeometry args={[0.42, alturaAgua, 0.9]} />
        <meshStandardMaterial color="#c9cdd3" roughness={0.6} />
      </mesh>
      {/* Aislador sísmico FPS */}
      <mesh position={[0, alturaAgua + 0.33 + 0.06, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.12, 24]} />
        <meshStandardMaterial
          color="#c98a2c"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

function Estribo({ x }) {
  return (
    <mesh position={[x, 0.55, 0]} castShadow>
      <boxGeometry args={[0.6, 1.3, 1.6]} />
      <meshStandardMaterial color="#b7bcc3" roughness={0.75} />
    </mesh>
  );
}

function Tablero() {
  const y = 1.22;
  return (
    <group position={[0, y, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[LUZ_TOTAL, 0.22, 1.4]} />
        <meshStandardMaterial color="#e7e9ec" roughness={0.5} />
      </mesh>
      {/* Vigas cajón (nervios longitudinales) */}
      {[-0.5, 0, 0.5].map((z, i) => (
        <mesh key={i} position={[0, -0.16, z]} castShadow>
          <boxGeometry args={[LUZ_TOTAL, 0.18, 0.12]} />
          <meshStandardMaterial color="#b7bcc3" roughness={0.6} />
        </mesh>
      ))}
      {/* Barandas peatonales */}
      {[-0.68, 0.68].map((z, i) => (
        <mesh key={i} position={[0, 0.18, z]}>
          <boxGeometry args={[LUZ_TOTAL, 0.14, 0.03]} />
          <meshStandardMaterial color="#2e6f95" metalness={0.3} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function Etiqueta({ x, y, z, children }) {
  return (
    <Html position={[x, y, z]} center distanceFactor={10} occlude>
      <div className="pointer-events-none rounded bg-rio-950/90 px-2 py-1 text-[10px] font-mono text-acero-400 border border-acero-600/40 whitespace-nowrap">
        {children}
      </div>
    </Html>
  );
}

function ModeloPuente({ mostrarEtiquetas, corteSubacuatico, autoRotate }) {
  const grupo = useRef();

  useFrame((_, delta) => {
    if (grupo.current && autoRotate) {
      grupo.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={grupo}>
      <Estribo x={-MITAD} />
      <Estribo x={MITAD} />
      <Pila x={-MITAD / 3} />
      <Pila x={MITAD / 3} />
      <Tablero />

      {mostrarEtiquetas && (
        <>
          <Etiqueta x={-MITAD} y={1.6} z={0.9}>
            Estribo · La Unión
          </Etiqueta>
          <Etiqueta x={MITAD} y={1.6} z={0.9}>
            Estribo · La Victoria
          </Etiqueta>
          <Etiqueta x={-MITAD / 3} y={0.5} z={0.9}>
            Aislador FPS · Pila 1
          </Etiqueta>
          <Etiqueta x={MITAD / 3} y={0.5} z={0.9}>
            Aislador FPS · Pila 2
          </Etiqueta>
          <Etiqueta x={-MITAD / 3} y={-0.85} z={0.9}>
            Pilotes a 35 m
          </Etiqueta>
        </>
      )}

      {corteSubacuatico && <Agua />}
    </group>
  );
}

export default function Visor3D({
  className = "",
  autoRotate = true,
  mostrarControles = true,
  alturaClase = "h-[420px] md:h-[560px]",
}) {
  const [etiquetas, setEtiquetas] = useState(true);
  const [agua, setAgua] = useState(true);
  const [rotando, setRotando] = useState(autoRotate);

  const cameraPos = useMemo(() => [9, 5, 11], []);

  return (
    <div
      className={`relative w-full ${alturaClase} rounded-2xl overflow-hidden border border-acero-600/30 bg-gradient-to-b from-rio-900 to-rio-950 ${className}`}
    >
      <Canvas
        shadows
        camera={{ position: cameraPos, fov: 42 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#0a1220"]} />
        <fog attach="fog" args={["#0a1220", 18, 34]} />
        <ambientLight intensity={0.55} />
        <hemisphereLight args={["#7fb8d6", "#0a1220", 0.6]} />
        <directionalLight
          position={[8, 10, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-6, 4, -8]} intensity={0.35} color="#4a90b8" />

        <Suspense fallback={null}>
          <ModeloPuente
            mostrarEtiquetas={etiquetas}
            corteSubacuatico={agua}
            autoRotate={rotando}
          />
          <Lecho />
          <ContactShadows
            position={[0, -0.84, 0]}
            opacity={0.35}
            scale={30}
            blur={2}
            far={4}
          />
        </Suspense>

        <OrbitControls
          enablePan={false}
          minDistance={4}
          maxDistance={22}
          maxPolarAngle={Math.PI / 2 - 0.02}
          autoRotate={false}
        />
      </Canvas>

      {mostrarControles && (
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex gap-2">
            <ToggleBtn activo={rotando} onClick={() => setRotando((v) => !v)}>
              {rotando ? "⏸ Pausar rotación" : "▶ Rotar automáticamente"}
            </ToggleBtn>
            <ToggleBtn activo={etiquetas} onClick={() => setEtiquetas((v) => !v)}>
              🏷 Etiquetas
            </ToggleBtn>
            <ToggleBtn activo={agua} onClick={() => setAgua((v) => !v)}>
              🌊 Nivel del río
            </ToggleBtn>
          </div>
          <span className="hidden sm:inline text-acero-400/70 font-mono">
            arrastra para girar · scroll para zoom
          </span>
        </div>
      )}
    </div>
  );
}

function ToggleBtn({ activo, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-2.5 py-1.5 rounded-lg border font-mono transition-colors ${
        activo
          ? "bg-acero-600/30 border-acero-500 text-acero-400"
          : "bg-rio-900/70 border-rio-700 text-slate-400 hover:border-acero-600/50"
      }`}
    >
      {children}
    </button>
  );
}
