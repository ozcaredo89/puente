import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DatosTecnicos from "@/components/DatosTecnicos";
import Timeline from "@/components/Timeline";
import PlanosSVG from "@/components/PlanosSVG";
import EspecificacionesTabla from "@/components/EspecificacionesTabla";
import Apoyo from "@/components/Apoyo";
import Comentarios from "@/components/Comentarios";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DatosTecnicos />
        <Timeline />
        <PlanosSVG />
        <EspecificacionesTabla />
        <Apoyo />
        <Comentarios />
      </main>
      <Footer />
    </>
  );
}
