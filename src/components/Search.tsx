import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AdInterface } from "./Add";

interface SearchProps {
  ads: AdInterface[];
}

function Search({ ads }: SearchProps) {
  const [region, setRegion] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const filteredAds = ads.filter((ad) => {
    if (region && ad.region !== region) return false;
    if (minPrice && ad.price < parseInt(minPrice)) return false;
    if (maxPrice && ad.price > parseInt(maxPrice)) return false;
    return true;
  });

  return (
    <div>
      <h1>Search ads by filters</h1>
      <Form onSubmit={handleFilter} style={{ marginBottom: "2rem" }}>
        <Form.Label>Region</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Select region</option>
          <option value="Podravska">Podravska</option>
          <option value="Savinjska">Savinjska</option>
          <option value="Primorska">Primorska</option>
          <option value="Gorenjska">Gorenjska</option>
          <option value="Pomurska">Pomurska</option>
          <option value="Osrednjeslovenska">Osrednjeslovenska</option>
          <option value="Koroška">Koroška</option>
        </Form.Select>
        <Form.Group>
          <Form.Label>Price Range</Form.Label>
          <div className="d-flex align-items-center">
            <InputGroup>
              <Form.Control
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <InputGroup.Text id="basic-addon2">€</InputGroup.Text>
            </InputGroup>
            <span className="mx-2">-</span>
            <InputGroup>
              <Form.Control
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <InputGroup.Text id="basic-addon2">€</InputGroup.Text>
            </InputGroup>
          </div>
        </Form.Group>
      </Form>

      <div>
        {filteredAds.length > 0 ? (
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {filteredAds.map((ad) => (
              <Col key={ad.id}>
                <Card>
                  <Card.Img variant="top" src={ad.image1} />
                  <Card.Body>
                    <Card.Title>{ad.address}</Card.Title>
                    <Card.Text>{ad.region}</Card.Text>
                    <Card.Text>{ad.price}€</Card.Text>
                    <Button variant="outline-dark">
                      <Link className="link" to={"/details/" + ad.id}>
                        More
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>No ads match the selected filters.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
