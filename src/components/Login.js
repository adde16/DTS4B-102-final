import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 4 }}>
          <h2 className="subTitle">MASUK</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Masuk
            </Button>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Belum punya Akun ? <Link to="/register">DAFTAR</Link>
              </Form.Label>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
