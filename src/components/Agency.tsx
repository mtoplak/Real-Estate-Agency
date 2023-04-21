import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Agency() {
  return (
    <Container>
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
      <Row>
        <Col md={12}>
          <Image
            src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?b=1&s=170667a&w=0&k=20&c=41IYPuvIWQmDRUXdhWELlGb3IeQulHGQwRCJ_5MtgSo="
            fluid
          />
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default Agency;
