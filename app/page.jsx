import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DatosTecnicos from "@/components/DatosTecnicos";
import Timeline from "@/components/Timeline";
import PlanosSVG from "@/components/PlanosSVG";
import EspecificacionesTabla from "@/components/EspecificacionesTabla";
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
      </main>
      <Footer />
    </>
  );
}
