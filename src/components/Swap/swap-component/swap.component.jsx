import SwapHeader from "../swap-header/getter-header.component";
import {
  SwapContainer,
  // TabsContainer,
  // TabContainer,
  Split,
  Card,
  Title,
  P,
  FromDiv,
  Row,
  Up,
  From,
  Equi,
  Down,
  UserInput,
  Flex,
  CoinLogo,
  CoinName,
  SwapIcon,
  ToDiv,
  PriceDiv,
  Price,
  Amount,
  TokenName,
  ButtonC,
  Card2,
  DetailsDiv,
  Div,
  Recieved,
  RecievedA,
  Green
} from "./swap.styles";
import "./swap.css";
import Coin from "../../../assets/svg/bitcoin.svg";
import SwapLogo from "../../../assets/svg/swap.png";

const Swap = () => (
  <SwapContainer>
    <SwapHeader />
    <Split>
      <Card className="card">
        <Title>exchange</Title>
        <P>trade token in an instant</P>

        <FromDiv>
          <Row>
            <Up>
              <From>from</From>
              <Equi>$200.02</Equi>
            </Up>
            <Down>
              <UserInput placeholder="0.00"></UserInput>
              <Flex>
                <CoinLogo src={Coin} />
                <CoinName>bitcoin</CoinName>
              </Flex>
            </Down>
          </Row>
        </FromDiv>

        <SwapIcon src={SwapLogo} />

        <ToDiv>
          <Row>
            <Up>
              <From>to</From>
              <Equi>$200.02</Equi>
            </Up>
            <Down>
              <UserInput placeholder="0.00"></UserInput>
              <Flex>
                <CoinLogo src={Coin} />
                <CoinName>bitcoin</CoinName>
              </Flex>
            </Down>
          </Row>
        </ToDiv>

        <PriceDiv>
          <Price>price</Price>
          <Amount>18,000 per <TokenName>bitcoin</TokenName></Amount>
        </PriceDiv>

        <ButtonC>unlock Wallet</ButtonC>
      </Card>
      

      <Card2>
        <Title>swap details</Title>
        <P>breakdown of transaction details</P>
        <DetailsDiv>
          <Div>
            <Recieved>minimum recieved:</Recieved>
            <RecievedA>54.83 <TokenName>bitcoin</TokenName></RecievedA>
          </Div>
          <Div>
          <Recieved>price imoact:</Recieved>
            <Green>0.006%</Green>
          </Div>
          <Div>
          <Recieved>liquidity provider fee: </Recieved>
            <RecievedA>0.05 <TokenName>bnb</TokenName></RecievedA>
          </Div>
        </DetailsDiv>
        
      </Card2>
    </Split>
  </SwapContainer>
);

export default Swap;

{
  /* <TabsContainer defaultActiveKey="first" className="swap">
      <TabContainer eventKey="first" title="Exchange" className="nav-item nav-link">
        works
      </TabContainer>
      <TabContainer eventKey="second" title="Liquidity" className="nav-item nav-link">
        works again
      </TabContainer>
    </TabsContainer> */
}
