import styled from "styled-components";
import Button from "../../button/button";

export const GetterHeaderContainer = styled.div`
  padding: 0 80px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  // background: #eaddff21;

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
export const ButtonC = styled(Button)`
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 16px;
`;