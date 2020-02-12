import React from 'react';
import { Navbar } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css"
import Nav from "react-bootstrap/Nav";
import Body from "./Components/Body"
import Container from "react-bootstrap/Container";
function App() {
    return (
        <div>
            <Navbar className="header">
                <Navbar.Brand className="header-name" href="#home">
                    <img
                        alt="Logo"
                        src={logo}
                        width="75"
                        height="75"
                        className="d-inline-block align-top"
                    />{' '}
                    Next House
              </Navbar.Brand>
                <Nav className="session-buttons">
                    <Nav.Link href="#reg">Registro</Nav.Link>
                    <Nav.Link href="#log">Iniciar Sesión</Nav.Link>
                </Nav>
            </Navbar>
            <Body/>
            <Navbar className="header">
                <Navbar.Brand className="footer-brand" href="#home">
                    <img
                        alt="Logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Martha Torres
                </Navbar.Brand>
                    320 397 5900
                    Calle 4A 16-15 Algarra 3 Zipaquirá
                <Nav className="session-buttons">
                    <Nav.Link href="#reg">Registro</Nav.Link>
                    <Nav.Link href="#log">Iniciar Sesión</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default App;
