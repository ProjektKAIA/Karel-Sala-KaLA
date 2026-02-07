import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import AnkaufForm from "@/components/AnkaufForm";
import Abmeldung from "@/components/Abmeldung";
import FAQ from "@/components/FAQ";
import SeoContent from "@/components/SeoContent";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <Process />
        <AnkaufForm />
        <Abmeldung />
        <FAQ />
        <SeoContent />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
