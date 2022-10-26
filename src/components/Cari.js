import Form from "react-bootstrap/Form";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

const baseUrl = "https://api.themoviedb.org/3";

const Cari = () => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  async function searchMovie() {
    try {
      const response = await window.fetch(
        `${baseUrl}/search/movie?api_key=7cf4fbd949a60a5dd2c917c22cf2a9d6&query=${text}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Form className="d-flex" autoComplete="off">
            <Form.Control
              type="search"
              placeholder="Cari"
              className="me-2"
              aria-label="Search"
              name="query"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <Button variant="info" onClick={searchMovie}>
              Cari
            </Button>
          </Form>

          {movies &&
            movies.map((movie) => (
              <Col className="cards">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>Tanggal Rilis : {movie.release_date}</Card.Text>
                    <Button variant="warning">Detail</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cari;
