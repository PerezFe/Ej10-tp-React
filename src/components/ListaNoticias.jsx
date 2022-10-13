import { Col, Container, Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Noticia></Noticia>
        <Noticia></Noticia>
        <Noticia></Noticia>
        <Noticia></Noticia>
        <Noticia></Noticia>
      </Row>
    </Container>
  );
};

export default ListaNoticias;
