import "./App.css";
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">Tugas React Cuy</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-center align-items-center">
              <div>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-secondary active mx-1"
                      : "btn btn-primary mx-1"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-secondary active mx-1"
                      : "btn btn-primary mx-1"
                  }
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/posts"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-secondary active mx-1"
                      : "btn btn-primary mx-1"
                  }
                >
                  Posts
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
    </React.Fragment>
  );
}

export default App;
