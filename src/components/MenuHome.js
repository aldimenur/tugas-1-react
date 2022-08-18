import { Button, Stack } from "react-bootstrap";
import React from "react";

function MenuHome() {
  return (
    <React.Fragment>
      <Stack gap={3}>
        <Button href="/home">Home</Button>
        <Button href="/posts">Posts</Button>
        <Button href="/gallery">Gallery</Button>
      </Stack>
    </React.Fragment>
  );
}

export default MenuHome;
