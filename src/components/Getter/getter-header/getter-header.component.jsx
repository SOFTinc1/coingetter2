import {
  GetterHeaderContainer,
  LogoImg,
  Image1,
  Usd,
  // Image2,
} from "./getter-header.styles";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../assets/svg/logo.svg";
import Search from "../../Getter/search/search";
import "./getter.css";
import Usdsettings from "../../../assets/svg/usdsettings.svg";
// import "./header.css";
// import DarkMode from "../DarkMode/DarkMode";
// import Usdarrow from "../../assets/svg/usdarrow1.svg";

const GetterHeader = () => (
  <GetterHeaderContainer>
    <Navbar bg="transparent" expand="lg" className="big-header">
      <Container fluid>
        <Navbar.Brand href="/">
          <LogoImg src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            navbarScroll
          >
            <Form>
              <Search placeholder="search coin name" />
            </Form>
            <Nav.Link href="#action2" className="option-nav">
              cryptocurrencies
            </Nav.Link>
            <Nav.Link href="#action2" className="option-nav">
              exchanges
            </Nav.Link>
            <Nav.Link href="#action2" className="option-nav">
              NFT
            </Nav.Link>
            <Nav.Link href="#action2" className="option-nav">
              learn
            </Nav.Link>
            <Nav.Link href="#action2" className="option-nav">
              product
            </Nav.Link>
            <Nav.Link href="#action2" className="option-nav">
              portfolio
            </Nav.Link>
            <Nav.Link href="#action2" className="usd-button">
              <Image1 src={Usdsettings} />
              <Usd>usd</Usd>
              {/* <Image2 src={Usdarrow} /> */}
            </Nav.Link>
            {/* <Nav.Link href="#action2">
              <DarkMode />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </GetterHeaderContainer>
);

export default GetterHeader;
