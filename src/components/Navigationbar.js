import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigationbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">GANOOL MOVIES</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/genre/action">ACTION</Nav.Link>
              <Nav.Link href="/genre/horror">HORROR</Nav.Link>
              <Nav.Link href="/genre/horror">FAMILY</Nav.Link>
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
