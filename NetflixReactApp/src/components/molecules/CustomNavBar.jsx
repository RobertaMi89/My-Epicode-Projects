import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomDropDown from "../atoms/CustomDropDown";
import { Link } from "react-router-dom";

const CustomNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="../src/assets/netflix_logo.png" width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="text-secondary">
              Home
            </Link>
            <Link to={"/tv-shows"} className="text-secondary">
              Tv Shows
            </Link>
            <Link to={"/movies"} className="text-secondary">
              Movies
            </Link>
            <Link to={"/recently-added"} className="text-secondary">
              Recently Added
            </Link>
            <Link to={"/my-list"} className="text-secondary">
              My List
            </Link>
          </Nav>
        </Navbar.Collapse>
        <CustomDropDown />
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
