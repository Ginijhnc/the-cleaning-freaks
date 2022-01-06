import styled from "styled-components/macro";

export const Container = styled.div`
  z-index: 1;
  max-width: 100%;
  margin-right: auto;
  padding-right: 200px;
  padding-left: 200px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #2e365f;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px
  }
`;

export const ImgWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FooterDescription = styled.h5`
  text-align: center;
  color: #ffffff;
  font-family: "Poppins", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  font-style: oblique;
  line-height: 1.7em;
  padding-top: 25px;
`;

export const SocialsContainer = styled.div`
  display: flex;
  padding-top: 25px;

  > * {
    margin: 0 10px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  padding-top: 35px;

   > * {
    margin: 0 20px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
`;
