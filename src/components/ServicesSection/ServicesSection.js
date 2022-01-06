import React from "react";
import ServicesOffered from "./ServicesOffered";
import {
   Container,
   ServicesSubtitle,
   ServicesTitle,
   ServicesWrapper,
} from "./ServicesSection.elements";

function ServicesSection() {
   return (
      <>
         <Container id="services">
            <ServicesWrapper>
               <ServicesTitle>
                  Guaranteed professional and reliable service.
               </ServicesTitle>
               <ServicesSubtitle>
                  We offer interior and exterior cleaning, gutter cleaning,
                  house washing, and pressure washing for residential and
                  commercial properties.
               </ServicesSubtitle>
            </ServicesWrapper>
            <ServicesOffered></ServicesOffered>
         </Container>
      </>
   );
}

export default ServicesSection;
