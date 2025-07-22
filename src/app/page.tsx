import About from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Objective from "@/components/Objective";
import ServicesSection from "@/components/ServicesSection";
import UnderFooter from "@/components/UnderFooter";
import Image from "next/image";

export default function Home() {
  return (
      <>
       <Header />
        <main>
          <HeroSection />
          <Objective />
          <ServicesSection />
          <About />
        </main>
       <Footer />
       <UnderFooter />
      </>
  );
}
