import React from "react";
import ContentHeader from "../components/CleaningSection/ContentHeader";
import ExteriorInfo from "../components/CleaningSection/ExteriorInfo";
import ExteriorData from "../components/CleaningSection/ExteriorData.json";
import ExteriorHeader from "../media/ExteriorHeader.jpg";
import TopScroll from "../components/TopScroll";

function ExteriorCleaning(props) {
   return (
      <>
         <TopScroll />
         <ContentHeader data={ExteriorData} headerImage={ExteriorHeader} />
         <ExteriorInfo />
      </>
   );
}

export default ExteriorCleaning;
