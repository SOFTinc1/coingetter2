import { SwapContainer, H1 } from "./swap.styles";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SwapBanner from "../../components/Swap/swap-banner/swap.component";
import "./swap.css";
import SwapHeader from "../../components/Swap/swap-header/getter-header.component";

const Swap = () => {
  return (
    <SwapContainer>
      <SwapHeader />
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 cover"
      >
        <Tab eventKey="home" title="swap">
          <SwapBanner />
        </Tab>
        <Tab eventKey="profile" title="other">
          <H1>coming soon</H1>
        </Tab>
      </Tabs>
    </SwapContainer>
  );
};

export default Swap;
