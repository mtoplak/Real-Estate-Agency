import React, { SetStateAction, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AdInterface } from "../models/ad";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import FinishModal from "./modals/FinishModal";

interface DetailsProps {
  ads: AdInterface[];
  setAds: React.Dispatch<SetStateAction<AdInterface[]>>;
  setFinishedAds: React.Dispatch<SetStateAction<AdInterface[]>>;
}

function Details({ ads, setAds, setFinishedAds }: DetailsProps) {
  const [finishReason, setFinishReason] = useState("");
  const [isShownModal, setIsShownModal] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  // check if id is not undefined
  if (!id) {
    return <div>Ad not found.</div>;
  }
  const ad = ads.find((ad) => ad.id === parseInt(id));

  if (!ad) {
    return <div>Ad not found.</div>;
  }

  const handleFinish = () => {
    setFinishedAds((prevState) => {
      // add this ad to finished ads and set reason for finishing it
      const nextState = [
        ...prevState,
        {
          ...ad,
          archived: true,
          finishReason,
        },
      ];
      return nextState;
    });
    setAds((prevState) => {
      // remove this ad from all ads
      const nextState = prevState.filter((ad) => ad.id !== parseInt(id));
      return nextState;
    });
    navigate("/");
  };

  const handleDelete = () => {
    setAds((prevState) => {
      // remove this ad from all ads
      const nextState = prevState.filter((ad) => ad.id !== parseInt(id));
      return nextState;
    });
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Real Estate Agency - Details about the ad"
        />
        <title>Ad {ad.address}</title>
      </Helmet>

      <Container className="my-4">
        <Row className="justify-content-center">
          <Col md={7}>
            <Carousel className="shadow">
              {ad.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <Image src={image} fluid className="rounded" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col md={5}>
            <Card border="secondary" bg="light" className="shadow">
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
                <Button variant="primary" className="mt-4 btn-block">
                  Contact Seller
                </Button>
              </Card.Body>
              <Card.Footer
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <Row className="align-items-center justify-content-end">
                  <Col md={6} className="d-flex justify-content-end">
                    <Button
                      variant="danger"
                      onClick={() => setIsShownModal(true)}
                    >
                      Finish
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
              <Card.Footer
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <Row className="align-items-center justify-content-between">
                  <Col md={6} className="d-flex">
                    <Link to={`/edit/${ad.id}`}>
                      <Button variant="secondary">Edit</Button>
                    </Link>
                  </Col>
                  <Col md={6} className="d-flex justify-content-end">
                    <Button variant="danger" onClick={handleDelete}>
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <FinishModal
        isShownModal={isShownModal}
        setIsShownModal={setIsShownModal}
        finishReason={finishReason}
        setFinishReason={setFinishReason}
        handleFinish={handleFinish}
      />
    </>
  );
}

export default Details;
