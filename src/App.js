import React from 'react';
import {Navbar} from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css"
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
          </Navbar>
      </div>
  );
}

export default App;
