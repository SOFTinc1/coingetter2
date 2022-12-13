import styled from "styled-components";
import Button from "../../button/button";

export const SwapBannerContainer = styled.div`
  padding: 0;
  font-family: euclid;
  margin: 0;

  @media only screen and (max-width: 830px) {
    padding: 0 60px;
  }
  @media only screen and (max-width: 525px) {
    padding: 0 5px;
  }
  @media only screen and (max-width: 400px) {
    padding: 0 5px;
  }
`;
export const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  padding: 40px 200px;

  @media only screen and (max-width: 830px) {
    display: block;
    padding: 40px 0;
  }
`;
export const Card = styled.div`
  background: #fff;
  padding: 20px;
  border: none;
  border-radius: 0px;
  // border-radius: 7px;
  // border: 1px solid #e0e0e0;
  // box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
`;
export const Title = styled.h1`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #732eff;
  letter-spacing: 1px;
  text-transform: capitalize;
`;
export const P = styled.p`
  font-weight: 400;
  font-size: 16px;
`;
export const FromDiv = styled.div``;
export const Row = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 7px;
`;
export const Up = styled.div`
  display: flex;
  grid-gap: 32px;

  @media only screen and (max-width: 830px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
export const From = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;
`;
export const Equi = styled.div`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 0 25px 0 auto;

  @media only screen and (max-width: 830px) {
    margin: 0 15px 0 auto;
  }
`;
export const Down = styled.div`
  display: flex;
  grid-gap: 32px;
  margin: 10px 0 0 0;

  @media only screen and (max-width: 830px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px;
  }
`;
export const UserInput = styled.input`
  border: none;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  color: #732eff;
  letter-spacing: 1px;
  background: transparent;

  &::placeholder {
    font-weight: 600;
    font-size: 16px;
    color: #732eff;
    letter-spacing: 1px;
  }
`;
export const Flex = styled.div`
  display: flex;
  gap: 0;
  background: #e0e0e0;
  padding: 10px 8px;
  border-radius: 50px;
  margin: 0 0 0 auto;

  @media only screen and (max-width: 400px) {
    gap: 1px;
    margin: 0 0 0 auto;
  }
`;
export const CoinLogo = styled.img`
  width: 30%;

  @media only screen and (max-width: 400px) {
    width: 25%;
  }
`;
export const CoinName = styled.p`
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 10px;
  margin: auto 10px auto auto;
  text-transform: uppercase;

  @media only screen and (max-width: 400px) {
    
  }
`;
export const SwapIcon = styled.img`
  width: 40px;
  display: block;
  margin: 20px auto;
  // background: #732eff;
  background: #eaddff21; 
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
`;
export const ToDiv = styled.div``;
export const PriceDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 32px;
  padding: 20px;

  @media only screen and (max-width: 830px) {
    padding: 10px;
  }
`;
export const Price = styled.div`
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 14px;
  text-transform: capitalize;
`;
export const Amount = styled.h1`
  font-size: 14px;
  margin: auto 0 auto auto;
  font-family: euclid;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;

  @media only screen and (max-width: 830px) {
    
  }
`;
export const TokenName = styled.span`
  text-transform: uppercase;
`;
export const ButtonC = styled(Button)`
  width: 100%;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 15px 10px;
  text-align: center;
  border-radius: 50px;
  font-size: 18px;

  @media only screen and (max-width: 830px) {
    width: 100%;
    margin: 30px 0 0 0;
  }
`;
export const Card2 = styled.div`
  background: #fff;
  padding: 20px;
  border: none;
  border-radius: 0px;
  // border-radius: 7px;
  // border: 1px solid #e0e0e0;

  @media only screen and (max-width: 830px) {
    margin: 30px 0 0 0;
  }
`;
export const DetailsDiv = styled.div`
  margin: 50px 0 0 0;
`;
export const Div = styled.span`
  display: flex;
  grid-gap: 20px;
`;
export const Recieved = styled.h1`
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 16px;
  text-transform: capitalize;
`;
export const RecievedA = styled.h1`
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 16px;
  text-transform: capitalize;
  margin: 0 10px 0 auto;
`;
export const Green = styled.h1`
  color: green;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 16px;
  text-transform: capitalize;
  margin: 0 10px 0 auto;
`;