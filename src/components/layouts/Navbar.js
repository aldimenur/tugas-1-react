import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">Tugas React Cuy</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/posts">Posts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
