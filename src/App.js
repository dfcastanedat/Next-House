import React from 'react';
import {Navbar} from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css"
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
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
                  <Nav.Link href="#deets">Registro</Nav.Link>
                  <Nav.Link href="#deets">Iniciar Sesión</Nav.Link>
              </Nav>
          </Navbar>
      </div>
  );
}

export default App;
