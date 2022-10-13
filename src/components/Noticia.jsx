import { Button, Container } from "react-bootstrap";

const Noticia = () => {
  return (
    <Container className="border my-4">
      <img className="d-block mx-auto img-fluid w-50 my-3" src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=" alt="" />
      <h2 className="text-center">Titulo noticia</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        aspernatur.
      </p>
      <div className="text-center">
      <Button variant="primary" href="#">Ver noticia completa</Button>
      </div>
    </Container>
  );
};

export default Noticia;
