import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  /* box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;  */
 } 
`;

export const Title = styled.h2`
   /* margin-bottom: 15px; */
   font-size: 33px;
   line-height: 1.3em;
   font-weight: 600;
   color: #444444;
   font-family: "Poppins", Sans-serif;
   text-align: center;
   padding-bottom: 20px;
   padding-top: 70px;
   margin-bottom: 15px;
`;

export const Button = styled.button`
   background: #424d87;
   font-weight: 400;
   font-family: "Poppins", Sans-serif;
   border: none;
   cursor: pointer;
   width: ${({ mediumSize }) => (mediumSize ? "180px" : "200px")};
   height: ${({ mediumSize }) => (mediumSize ? "50px" : "60px")};
   padding: 10px;
   color: #fff;
   font-size: ${({ mediumSize }) => (mediumSize ? "16px" : "25px")};
   transition: 0.3s ease all;

   &:hover {
      background: #5664b3;
   }
`;

export default GlobalStyle;
