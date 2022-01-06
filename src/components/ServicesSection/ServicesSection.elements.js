import styled from "styled-components/macro";

export const Container = styled.div`
  z-index: 1;
  max-width: 100%;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;
  padding-bottom: 75px;
  background-color: #eff8fd;


  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const ServicesWrapper = styled.div`
  z-index: 1;
  max-width: 100%;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;
  text-align: center;

  @media screen and (max-width: 991px) {
    padding-right: 10px;
    padding-left: 10px;
    margin-top:-50px;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 31px;
  line-height: 1.1em;
  font-weight: 600;
  color: #444444;
  font-family: "Poppins", Sans-serif;
  text-align: center;
  padding-top: 70px;
  margin-bottom: 15px;

  @media screen and (max-width: 991px) {
     max-width: 100%;
  }
`;

export const ServicesSubtitle = styled.h3`
  font-size: 17px;
  line-height: 1.3em;
  font-weight: 500;
  max-width: 50%;
  margin: auto;
  color: #444444;
  font-family: "Poppins", Sans-serif;
  text-align: center;

  @media screen and (max-width: 991px) {
     max-width: 100%;
  }
`;
