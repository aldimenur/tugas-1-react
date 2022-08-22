import React, { useEffect, useState } from "react";
import { Stack, Container, Row } from "react-bootstrap";
import "./Posts.css";
import axios from "axios";
import { Button, Card, Col, Modal } from "react-bootstrap";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [jumlahPost, setJumlahPost] = useState(4);
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState("");
  const [disabledN, setDisabledN] = useState("");

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

  const handleTambahPost = () => {
    if (jumlahPost === 20) {
      setJumlahPost(jumlahPost + 0);
      setDisabled("disabled");
    } else if (jumlahPost !== 20) {
      setJumlahPost(jumlahPost + 1);
      setDisabledN("");
    }
  };
  const handleKurangPost = () => {
    if (jumlahPost === 1) {
      setJumlahPost(jumlahPost - 0);
      setDisabledN("disabled");
    } else if (jumlahPost !== 0) {
      setJumlahPost(jumlahPost - 1);
      setDisabled("");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ModalClick = (props) => {
    return (
      <div key={props.key}>
        <Button variant="primary" onClick={handleShow}>
          Read
        </Button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Container>
        <Stack gap={3}>
          <h1 className="mx-auto"> POSTS </h1>
          <div className="button-container">
            <Button onClick={handleTambahPost} className={`button ${disabled}`}>
              TAMBAH
            </Button>
            <Button
              onClick={handleKurangPost}
              className={`button ${disabledN}`}
            >
              KURANG
            </Button>
          </div>
        </Stack>
        <div className="container-posts">
          <Row xl={4} md={2} xs={1}>
            {posts.map((e, index) => {
              return (
                <Col key={index}>
                  <Card className="my-4">
                    <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Text>{e.body}</Card.Text>
                      <ModalClick key={index} body={e.body} title={e.title} />
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Posts;
