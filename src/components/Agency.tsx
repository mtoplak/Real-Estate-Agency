import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Agency() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Image
            src="https://properties-away.com/wp-content/uploads/real_esate_agent_koh_samui-800x321.jpg"
            fluid
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12}>
          <h1>About Our Real Estate Agency</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>
            At our real estate agency, we pride ourselves on providing the
            highest level of service to our clients. We believe that buying or
            selling a home should be a smooth and enjoyable process, and we are
            committed to making that happen for you.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Our Mission</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>
            Our mission is to help you achieve your real estate goals, whether
            you are looking to buy, sell, or rent a property. We understand that
            every client is unique, and we tailor our approach to meet your
            specific needs and preferences. Our goal is to provide you with
            expert guidance, exceptional service, and outstanding results.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Our Team</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>
            Our team consists of experienced and knowledgeable professionals who
            are dedicated to helping you achieve your real estate goals. We have
            a deep understanding of the local market and are committed to
            staying up-to-date with the latest trends and developments. We
            believe that communication, honesty, and integrity are key to
            building strong relationships with our clients, and we work hard to
            earn your trust and confidence.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Agency;
