import React, { useEffect, useState } from "react";
import { Stack, Container } from "react-bootstrap";
import "./Posts.css";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [jumlahPost, setJumlahPost] = useState(1);

  useEffect(() => {
    axios({
      method: "GET",
      url: process.env.REACT_APP_BASEURL + "/posts?_limit=" + jumlahPost,
    })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log("ERROR");
      });
  }, [jumlahPost]);

  useEffect(() => {
    document.title = "Posts";
  });

  function handleTambahPost() {
    setJumlahPost(jumlahPost + 1);
  }
  function handleKurangPost() {
    setJumlahPost(jumlahPost - 1);
  }

  console.log(posts);

  return (
    <React.Fragment>
      <Container>
        <Stack gap={3}>
          <h1 className="mx-auto"> POSTS </h1>
          <Button onClick={handleTambahPost}> TAMBAH </Button>
          <Button onClick={handleKurangPost}> KURANG </Button>
        </Stack>
        {posts.map((post, index) => {
          return (
            <Card style={{ width: "width=100px" }} key={index} className="my-4">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button variant="primary">{}</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </React.Fragment>
  );
}

export default Posts;
