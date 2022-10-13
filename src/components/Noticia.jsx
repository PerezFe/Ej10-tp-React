import { Button, Card } from "react-bootstrap";

const Noticia = () => {
  return (
    <Card style={{ width: '20rem' }} className="m-2">
      <Card.Img variant="top" src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=" className="my-2"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="text-center">
        <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Noticia;
