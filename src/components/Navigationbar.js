import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">GANOOL MOVIES</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/genre/action"
                >
                  ACTION
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/genre/horror"
                >
                  HORROR
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/genre/family"
                >
                  FAMILY
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/genre/scifi"
                >
                  SCIENCE FICTION
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/genre/animation"
                >
                  ANIMATION
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/cari"
                >
                  CARI FILM
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/login"
              >
                MASUK
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
