import React from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import ContactForm from "../components/ContactSection/Form";

function Home() {
   return (
      <>
         <HeroSection />
         <ServicesSection />
         <AboutSection />
         <ContactForm />
      </>
   );
}

export default Home;
