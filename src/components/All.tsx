import React from "react";
import { AdInterface } from "./Add";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface AllProps {
  ads: AdInterface[];
}

function All({ ads }: AllProps) {
  return (
    <>
      {ads.length === 0 ? (
        <h1>Currently there aren't any ads</h1>
      ) : (
        <h1>All Ads</h1>
      )}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {ads.map((ad) => (
          <Col key={ad.id}>
            <Card>
              <Card.Img variant="top" src={ad.image1} />
              <Card.Body>
                <Card.Title>{ad.address}</Card.Title>
                <Card.Text>{ad.region}</Card.Text>
                <Card.Text>{ad.price}€</Card.Text>
                <Button variant="outline-dark">
                  <Link className="link" to={"/details/" + ad.id}>More</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default All;
