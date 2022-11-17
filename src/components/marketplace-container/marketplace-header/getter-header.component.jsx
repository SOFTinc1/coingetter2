import { useNavigate } from "react-router-dom";
import {
  GetterHeaderContainer,
  LogoImg,
  ButtonC,
} from "./getter-header.styles";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../assets/svg/logo.png";
import "./getter.css";

export default function MarketplaceHeader() {
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
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link
                href="#action2"
                className="option-nav"
                onClick={() => {
                  navigate("/swap");
                }}
              >
                swap
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="option-nav"
                onClick={() => {
                  navigate("/getter");
                }}
              >
                getter
              </Nav.Link>
              <Nav.Link href="#action2" className="option-nav">
                <ButtonC>connect wallet</ButtonC>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </GetterHeaderContainer>
  );
}
