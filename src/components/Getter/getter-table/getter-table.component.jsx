import GetterTableData from "../getter-table-data/getter-table-data.component";
import {
  GetterTableContainer,
  TabsContainer,
  TabContainer,
  H1,
  Table,
  TrFixed,
  Tr
} from "./getter-table.styles";
import "./getter-table.css";

const GetterTable = () => (
  <GetterTableContainer>
    <TabsContainer defaultActiveKey="first">
      <TabContainer eventKey="first" title="Cryptocurrencies" className="nav-item nav-link">
        <GetterTableData />
      </TabContainer>
      <TabContainer eventKey="second" title="Categories" className="nav-item nav-link">
        <H1>Categories</H1>
      </TabContainer>
      <TabContainer eventKey="thirld" title="DeFi" className="nav-item nav-link">
        <H1>DeFi</H1>
      </TabContainer>
      <TabContainer eventKey="fourth" title="NFT" className="nav-item nav-link">
        <H1>NFT</H1>
      </TabContainer>
      <TabContainer eventKey="fifth" title="Metaverse" className="nav-item nav-link">
        <H1>Metaverse</H1>
      </TabContainer>
      <TabContainer eventKey="sixth" title="Polkadot" className="nav-item nav-link">
        <H1>Polkadot</H1>
      </TabContainer>
      <TabContainer eventKey="seventh" title="BNB Chain" className="nav-item nav-link">
        <H1>BNB Chain</H1>
      </TabContainer>
      <TabContainer eventKey="eight" title="Solana" className="nav-item nav-link">
        <H1>Solana</H1>
      </TabContainer>
      <TabContainer eventKey="ninth" title="Avalanche" className="nav-item nav-link">
        <H1>Avalanche</H1>
      </TabContainer>
      <TabContainer eventKey="tenth" title="Portfolio" className="nav-item nav-link">
        <H1>Portfolio</H1>
      </TabContainer>
      <TabContainer eventKey="eleventh" title="Watchlist" className="nav-item nav-link">
        <H1>Watchlist</H1>
      </TabContainer>
    </TabsContainer>
  </GetterTableContainer>
);

export default GetterTable;
