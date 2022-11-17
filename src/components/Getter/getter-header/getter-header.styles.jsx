import styled from "styled-components";

export const GetterHeaderContainer = styled.div`
  padding: 2px 20px 2px 10px;
  border-radius: 50px;
  width: 90%;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 800px) {
    padding: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
`;
export const LogoImg = styled.img`
  align-items: center;
  padding: 0px;
  gap: 4.34px;
  width: 195.02px;
  height: 34.69px;
`;
export const Image1 = styled.img`
  width: 30%;

  @media screen and (max-width: 800px) {
    width: 10%;
  }
`;
export const Usd = styled.h1`
  font-family: typo;
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
  margin: 3px 0 0 0;
  letter-spacing: 1px;
`;
export const Image2 = styled.img`
  width: 50%;
  padding: 0 5px 0 0;
`;