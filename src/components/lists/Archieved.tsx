import React from "react";
import { AdInterface } from "../forms/Add";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

interface ArchievedProps {
  finishedAds: AdInterface[];
}

function Archieved({ finishedAds }: ArchievedProps) {
  return (
    <>
      <h1 className="heading">Archived Ads</h1>
      {finishedAds.length === 0 ? (
        <p>There are no archived ads yet.</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {finishedAds.map((ad) => (
            <Col key={ad.id}>
              <Card>
                <Card.Img variant="top" src={ad.images[0]} />
                <Card.Body>
                  <Card.Title>{ad.address}</Card.Title>
                  <Card.Text>{ad.region}</Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Price: {ad.price}€{" "}
                      {(ad.type === "rent" || ad.type === "najem") && "/ month"}
                    </ListGroup.Item>
                    <ListGroup.Item>Floor: {ad.floor}</ListGroup.Item>
                    <ListGroup.Item>Type: {ad.type}</ListGroup.Item>
                    <ListGroup.Item>Seller: {ad.seller}</ListGroup.Item>
                    <ListGroup.Item>Owner: {ad.owner}</ListGroup.Item>
                    <ListGroup.Item>Contact: {ad.contact}</ListGroup.Item>
                    <ListGroup.Item>Cadastral: {ad.cadastral}</ListGroup.Item>
                    <ListGroup.Item>Handover Date: {ad.date}</ListGroup.Item>
                    <ListGroup.Item>
                      Finish Reason: {ad.finishReason}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default Archieved;
