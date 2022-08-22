// eslint-disable-next-line no-unused-vars
import { Button, Stack, Row, Col, Container, Nav } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

function MenuHome() {
  return (
    <React.Fragment>
      <Row>
        <Link to="/home" className="btn btn-primary mx-1 my-2">
          Home
        </Link>
        <Link to="/gallery" className="btn btn-primary mx-1 my-2">
          Gallery
        </Link>
        <Link to="/posts" className="btn btn-primary mx-1 my-2">
          Posts
        </Link>
      </Row>
    </React.Fragment>
  );
}

export default MenuHome;
