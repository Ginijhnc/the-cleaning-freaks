import React from "react";
import HeroInfo from "./HeroInfo";
import { HeroContainer } from "./HeroSection.elements";
import HeroBackground from "../../media/HeroBackground.jpg";

function HeroSection() {
   return (
      <>
         <HeroContainer
            style={{ backgroundImage: `url(${HeroBackground})` }}
            id="home"
         >
            <HeroInfo />
         </HeroContainer>
      </>
   );
}

export default HeroSection;
