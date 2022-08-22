import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import MenuHome from "../components/MenuHome";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <React.Fragment>
      <Container>
        <Row xs={1} lg={2}>
          <Col>
            <div className="profile-pict">
              <h1>ALDIANSYAH</h1>
              <Image src="https://via.placeholder.com/350" />
            </div>
          </Col>
          <Col>
            <div className="menu-home">
              <MenuHome />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Home;
