import styled from "styled-components";

export const SwapHeaderContainer = styled.div`
  padding: 2px 60px;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  width: 90%;

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