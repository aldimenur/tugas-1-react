import React from "react";
import { Container, Stack } from "react-bootstrap";
import GalleryLayout from "../components/layouts/Gallery.layout";

function Gallery() {
  return (
    <React.Fragment>
      <Container>
        <Stack gap={3}>
          <h1 className="mx-auto"> GALLERY </h1>
          <GalleryLayout />
        </Stack>
      </Container>
    </React.Fragment>
  );
}

export default Gallery;
