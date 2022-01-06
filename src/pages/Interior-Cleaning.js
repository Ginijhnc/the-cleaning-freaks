import React from "react";
import ContentHeader from "../components/CleaningSection/ContentHeader";
import InteriorInfo from "../components/CleaningSection/InteriorInfo";
import InteriorData from "../components/CleaningSection/InteriorData.json";
import InteriorHeader from "../media/InteriorHeader.jpg";
import TopScroll from "../components/TopScroll";

function InteriorCleaning(props) {
   return (
      <>
         <TopScroll />
         <ContentHeader data={InteriorData} headerImage={InteriorHeader} />
         <InteriorInfo />
      </>
   );
}

export default InteriorCleaning;
