// eslint-disable-next-line no-unused-vars
import { Button, Stack, Row, Col, Container } from "react-bootstrap";
import React from "react";

function MenuHome() {
  return (
    <React.Fragment>
      <Row>
        <Button href="/home" variant="primary" size="lg" className="m-2">
          Home
        </Button>
        <Button href="/posts" variant="primary" size="lg" className="m-2">
          Posts
        </Button>
        <Button href="/gallery" variant="primary" size="lg" className="m-2">
          Gallery
        </Button>
      </Row>
    </React.Fragment>
  );
}

export default MenuHome;
