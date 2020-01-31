import React from 'react';
import {Navbar} from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css"
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
      <div>
          <Navbar className="header">
              <Navbar.Brand className="header-name" href="#home">
                  <img
                      alt="Logo"
                      src={logo}
                      width="50"
                      height="50"
                      className="d-inline-block align-top"
                  />{' '}
                  Next House
              </Navbar.Brand>
              <Nav className="session-buttons">
                  <Nav.Link href="#reg">Registro</Nav.Link>
                  <Nav.Link href="#log">Iniciar Sesión</Nav.Link>
              </Nav>
          </Navbar>
          <Container className="body" fluid={"true"}>
              <Row >
                  <Col md="auto">

                  </Col>
              </Row>
              <hr/>
              <Carousel>
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://i.pinimg.com/originals/e0/63/b6/e063b6ee69fde060d5f4c063a002c9ec.jpg"
                          alt="Casa 1"
                          width="750"
                          height="350"
                      />
                      <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://i.pinimg.com/originals/5d/7e/80/5d7e8095de543443153a701d2926710f.jpg"
                          alt="Casa 2"
                          width="750"
                          height="350"
                      />

                      <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://st3.idealista.com/news/archivos/styles/news_detail/public/2018-11/casa_prefabricada.jpg?sv=pX_Hqy9d&itok=kCOtbqgQ"
                          alt="Casa 3"
                          width="750"
                          height="350"
                      />

                      <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
          </Container>
      </div>
  );
}

export default App;
