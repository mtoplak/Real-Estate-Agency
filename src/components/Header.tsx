import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Real Estate Agency
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/all">
            All
          </Nav.Link>
          <Nav.Link as={Link} to="/add">
            Add
          </Nav.Link>
          <Nav.Link as={Link} to="/archived">
            Archived
          </Nav.Link>
          <Nav.Link as={Link} to="/search">
            Search
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
