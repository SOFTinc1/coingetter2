import styled from "styled-components";

export const GetterHeaderContainer = styled.div`
  padding: 0 80px;
  // background: #eaddff21;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const LogoImg = styled.img`
  align-items: center;
  padding: 0;
  width: 30%;
  margin: auto;

  @media screen and (max-width: 800px) {
    width: 150px;
  }
`;
export const ImageWallet = styled.img`
  padding: 10px 15px;
  width: 50px;
  background: #eaddff21;
  border-radius: 50px;

  @media screen and (max-width: 800px) {
    width: 50px;
    margin: auto;
    border-radius: 40px;
  }
`;