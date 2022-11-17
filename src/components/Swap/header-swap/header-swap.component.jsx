import { SwapHeaderContainer, LogoImg } from "./header-swap.styles";
import "./header-swap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../assets/svg/logo.svg";
// import "./dark-mode-settings.css";
// import DarkMode from "../../Landing/DarkMode/DarkMode";

const SwapHeader = () => (
  <SwapHeaderContainer>
    <Navbar bg="transparent" expand="md" className="navbar-swap">
      <Container fluid>
        <Navbar.Brand href="/">
          <LogoImg src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 big-header" navbarScroll>
            <Nav.Link href="#action2" className="option-nav2">
              cryptocurrencies
            </Nav.Link>
            <Nav.Link href="#action2" className="option-nav2">
              exchanges
            </Nav.Link>
            <Nav.Link href="#action2" className="option-nav2">
              NFT
            </Nav.Link>
            <Nav.Link href="#action2" className="option-nav2">
              learn
            </Nav.Link>
            <Nav.Link href="#action2" className="option-nav2">
              product
            </Nav.Link>
            <Nav.Link href="#action2" className="option-nav2">
              portfolio
            </Nav.Link>
            {/* <Nav.Link href="#action2" className="option-nav">
              <DarkMode />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </SwapHeaderContainer>
);

export default SwapHeader;
