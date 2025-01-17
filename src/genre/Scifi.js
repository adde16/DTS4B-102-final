import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Scifi = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/discover/movie?sort_by=popularity.desc&with_genres=878&`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
          },
        }
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <div className="intro myBG">
        <h2 className="title">WEBSITE MENCARI FILM FAVORIT</h2>
      </div>
      <Container>
        <h2 className="subTitle">DAFTAR FILM GENRE SCIENCE FICTION</h2>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col key={index} className="cards">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{result.title}</Card.Title>
                    <Card.Text>Tanggal Rilis : {result.release_date}</Card.Text>
                    <Button variant="warning">Detail</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Scifi;
