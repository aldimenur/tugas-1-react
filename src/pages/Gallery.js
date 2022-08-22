import React, { useEffect } from "react";
import { Container, Stack } from "react-bootstrap";
import GalleryLayout from "../components/layouts/Gallery.layout";

function Gallery() {
  useEffect(() => {
    document.title = "Gallery";
  });

  return (
    <React.Fragment>
      <Container>
        <Stack gap={2} className="align-items-center my-4">
          <h1> GALLERY </h1>
          <GalleryLayout />
        </Stack>
      </Container>
    </React.Fragment>
  );
}

export default Gallery;
