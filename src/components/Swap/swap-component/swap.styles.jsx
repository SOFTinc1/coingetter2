import styled from "styled-components";
import Button from "../../button/button";
// import Tabs from "react-bootstrap/Tabs";
// import Tab from "react-bootstrap/Tab";

export const SwapContainer = styled.div`
  padding: 0;
  font-family: euclid;

  @media only screen and (max-width: 800px) {
  }
`;
export const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  padding: 40px 200px;

  @media only screen and (max-width: 800px) {
    display: block;
    padding: 40px 0;
  }
`;
export const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 7px;
  border: 1px solid #e0e0e0;
  // box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
`;
export const Title = styled.h1`
  // font-family: euclid;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #732eff;
  letter-spacing: 1px;
  text-transform: capitalize;
`;
export const P = styled.p`
  // font-family: euclid;
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
  display: grid;
  grid-template-columns: 3.6fr 1fr;
  grid-gap: 32px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
export const From = styled.div`
  // font-family: euclid;
  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;
`;
export const Equi = styled.div`
  // font-family: euclid;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;

  @media only screen and (max-width: 800px) {
    margin: 0 0 0 65px;
  }
`;
export const Down = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 32px;
  margin: 10px 0 0 0;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px;
  }
`;
export const UserInput = styled.input`
  // font-family: euclid;
  border: none;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  color: #732eff;
  letter-spacing: 1px;
  background: transparent;

  &::placeholder {
    // font-family: euclid;
    font-weight: 600;
    font-size: 16px;
    color: #732eff;
    letter-spacing: 1px;
  }
`;
export const Flex = styled.div`
  display: flex;
  gap: 3px;
  background: #e0e0e0;
  padding: 10px 8px;
  border-radius: 50px;

  @media only screen and (max-width: 400px) {
    width: 85px;
    padding: 10px;
    margin: 0;
  }
  // @media only screen and (max-width: 525px) {
  //   margin: 0 0 0 20px;
  // }
`;
export const CoinLogo = styled.img`
  width: 25%;
`;
export const CoinName = styled.p`
  // font-family: euclid;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 9px;
  margin: 2.5px 0 0 0;
  text-transform: uppercase;
`;
export const SwapIcon = styled.img`
  width: 40px;
  display: block;
  margin: 20px auto;
  background: #732eff;
  padding: 10px;
  border-radius: 50%;
`;
export const ToDiv = styled.div``;
export const PriceDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 32px;
  padding: 20px;

  @media only screen and (max-width: 800px) {
    padding: 10px;
  }
`;
export const Price = styled.div`
  // font-family: euclid;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 14px;
  text-transform: capitalize;
`;
export const Amount = styled.h1`
  font-size: 14px;
  margin: 4px 0 0 130px;
  font-family: euclid;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;

  @media only screen and (max-width: 390px) {
    margin: 4px 0 0 45px;
  }
  @media only screen and (max-width: 420px) {
    margin: 4px 0 0 80px;
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

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin: 30px 0 0 0;
  }
`;
export const Card2 = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 7px;
  border: 1px solid #e0e0e0;

  @media only screen and (max-width: 800px) {
    margin: 30px 0 0 0;
  }
`;
export const DetailsDiv = styled.div`
  margin: 50px 0 0 0;
`;
export const Div = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;
export const Recieved = styled.h1`
  // font-family: euclid;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 16px;
  text-transform: capitalize;
`;
export const RecievedA = styled.h1`
  // font-family: euclid;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 16px;
  text-transform: capitalize;
`;
export const Green = styled.h1`
  // font-family: euclid;
  color: green;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 16px;
  text-transform: capitalize;
`;

// export const TabsContainer = styled(Tabs)`
// color: #000;
// `;
// export const TabContainer = styled(Tab)`
//   color: #000;
// `;
