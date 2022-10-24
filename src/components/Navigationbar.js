import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">GANOOL MOVIES</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/genre/action">ACTION</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/genre/horror">HORROR</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/genre/family">FAMILY</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/genre/scifi">SCIENCE FICTION</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/genre/animation">ANIMATION</Link>
              </Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Cari"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="warning">Cari</Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link>MASUK</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="intro myBG">
        <h2 className="title">WEBSITE MENCARI FILM FAVORIT</h2>
      </div>
    </div>
  );
}

export default Navigationbar;
