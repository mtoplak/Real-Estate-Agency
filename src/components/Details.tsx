import React, { SetStateAction } from "react";
import { useParams } from "react-router-dom";
import { AdInterface } from "./Add";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

interface DetailsProps {
  ads: AdInterface[];
  setAds: React.Dispatch<SetStateAction<AdInterface[]>>;
}

function Details({ ads, setAds }: DetailsProps) {
  const { id } = useParams<{ id: string }>();
  // check if id is not undefined
  if (!id) {
    return <div>Ad not found.</div>;
  }
  const ad = ads.find((ad) => ad.id === parseInt(id));

  if (!ad) {
    return <div>Ad not found.</div>;
  }

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={7}>
          <Carousel>
            <Carousel.Item>
              <Image src={ad.image1} fluid className="rounded" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={ad.image2} fluid className="rounded" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={ad.image3} fluid className="rounded" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={5}>
          <Card
            border="secondary"
            bg="light"
            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
          >
            <Card.Body>
              <Card.Title>{ad.type}</Card.Title>
              <h2 className="mb-3">{ad.address}</h2>
              <h4 className="text-muted mb-3">{ad.region}</h4>
              <p className="mb-1">
                <strong>Floor:</strong> {ad.floor}
              </p>
              <p className="mb-1">
                <strong>Owner:</strong> {ad.owner}
              </p>
              <p className="mb-1">
                <strong>Seller:</strong> {ad.seller}
              </p>
              <p className="mb-1">
                <strong>Contact:</strong> {ad.contact}
              </p>
              <p className="mb-1">
                <strong>Cadastral:</strong> {ad.cadastral}
              </p>
              <h4 className="mt-4">{ad.price}€</h4>
              <p className="text-muted mb-0">
                <strong>Possible handover:</strong> {ad.date}
              </p>
              <Button
                variant="primary"
                className="mt-4 btn-block"
                style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                Contact Seller
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
