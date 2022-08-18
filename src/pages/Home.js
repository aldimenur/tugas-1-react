import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import MenuHome from "../components/MenuHome";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <React.Fragment>
      <Container className="my-4">
        <MenuHome />
      </Container>
    </React.Fragment>
  );
}

export default Home;
