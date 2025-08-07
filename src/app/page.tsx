"use client"

import About from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Objective from "@/components/ObjectiveSection";
import ServicesSection from "@/components/ServicesSection";
import UnderFooter from "@/components/UnderFooter";
import { ParallaxProvider } from 'react-scroll-parallax';
import UpperHeader from "@/components/UpperHeader";
import ImagesSection from "@/components/ImagesSection";

export default function Home() {

  return (
      <>
      <UpperHeader />
       <Header />
        <main>
          <HeroSection />
          <ParallaxProvider>
            <Objective />
          </ParallaxProvider>
          <ImagesSection />
          
          <ServicesSection />
          <ParallaxProvider>
            <About />
          </ParallaxProvider>
        </main>
       <Footer />
       <UnderFooter />
       
      </>
  );
}
