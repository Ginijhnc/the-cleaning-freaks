import styled from "styled-components/macro";

export const CleaningContainer = styled.div`
   height: 45vh;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   object-fit: cover;
   border-style: none;
   background-size: cover;
   padding-top: 40px;
`;

export const CleaningTitle = styled.h2`
   font-size: 34px;
   line-height: 1.3em;
   font-weight: 500;
   color: white;
   font-family: "Poppins", Sans-serif;
   text-align: center;
   text-shadow: -4px 0px 25px rgba(0, 0, 0, 1), 4px 0px 25px rgba(0, 0, 0, 0.6);
   padding-bottom: 15px;
`;

export const CleaningSubTitle = styled.h4`
   font-size: 17px;
   line-height: 1.4em;
   font-weight: 500;
   color: white;
   font-family: "Poppins", Sans-serif;
   text-align: center;
   text-shadow: -4px 0px 25px rgba(0, 0, 0, 1), 4px 0px 25px rgba(0, 0, 0, 0.8);
   width: 55%;

   @media (max-width: 1000px) {
      font-size: 19px;
      width: 85%;
   }
`;
