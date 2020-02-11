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
                <Body/>
        </div>
    );
}

export default App;
