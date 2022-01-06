import React from "react";
import { ErrorCode, Title, Container } from "./NotFoundSection.elements";
import { Button } from "../../globalStyles";
import { useNavigate } from "react-router-dom";

function NotFoundSection() {
   const navigate = useNavigate();

   return (
      <>
         <Container>
            <ErrorCode>404</ErrorCode>
            <Title>That page wasn't found.</Title>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
         </Container>
      </>
   );
}

export default NotFoundSection;
