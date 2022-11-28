import { useNavigate } from "react-router-dom";
import {
  GetterHeaderContainer,
  LogoImg,
  Image1,
  ButtonC,
} from "./getter-header.styles";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../assets/svg/logo.png";
import Search from "../../Getter/search/search";
import Search2 from "../../Getter/search2/search2";
import "./getter.css";
import Usdsettings from "../../../assets/svg/usdsettings.svg";

export default function GetterHeader() {
  let navigate = useNavigate();
  return (
    <GetterHeaderContainer>
      <Navbar bg="transparent" expand="lg" className="big-header">
        <Container fluid>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            <LogoImg src={Logo} />
          </Navbar.Brand>
          <Form className="ms-auto my-2" id="openonmobile">
            <Search2 />
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="option-nav">
                <Form>
                  <Search placeholder="search coin name" />
                </Form>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/swap");
                }}
                className="option-nav"
              >
                swap
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/marketplace");
                }}
                className="option-nav"
              >
                marketplace
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/marketplace");
                }}
                className="option-nav"
              >
                NFT
              </Nav.Link>
              {/* <Nav.Link
                  onClick={() => {
                    navigate("/marketplace");
                  }}
                  className="option-nav"
                >
                  cryptocurrencies
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/marketplace");
                  }}
                  className="option-nav"
                >
                  exchanges
                </Nav.Link> */}
              {/* <Nav.Link
                onClick={() => {
                  navigate("/marketplace");
                }}
                className="option-nav"
              >
                learn
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/marketplace");
                }}
                className="option-nav"
              >
                product
              </Nav.Link> */}
              <Nav.Link
                onClick={() => {
                  navigate("/marketplace");
                }}
                className="option-nav"
              >
                portfolio
              </Nav.Link>
              <Nav.Link className="option-nav">
                <ButtonC>&#36;USD</ButtonC>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </GetterHeaderContainer>
  );
}
