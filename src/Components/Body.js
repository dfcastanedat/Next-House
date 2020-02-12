import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import "../App.css"
import HouseCard from "./HouseCard";

class Body extends Component {

    componentDidMount() {
        this.renderMap();
    }

    constructor(props) {
        super(props);
        this.state={
            viewport:
                {
                latitude: 45.4211,
                longitude: -75.6903,
                width: "100vw",
                height: "100vh",
                zoom: 10,
                },
            houses:[
                {
                    house: "",
                    offer: "",
                    type: "",
                    state: "",
                    description: "",
                    city: "",
                    code: "",
                    locationmaps: "",
                }
            ],
            toshow:[
                {

                }
            ]
        }
    }

    renderMap(){
        let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWNhczk5aCIsImEiOiJjazRhYnQ5ZGQwMmp3M21wN2E3Z2drNHRtIn0.B2RLxhIyvTQ0_qkYwinqwA';
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11'
        });
    }

    render() {
        return(
            <div>
                <Container className="body" fluid={"true"}>
                    <Row >
                        <Col md="auto">

                        </Col>
                    </Row>
                    <hr />
                    <Row >
                        <Col >

                        </Col>
                        <Col >
                            <h1 className="subtitle">Inmuebles Destacados</h1>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row>
                        <Col >

                        </Col>
                        <Col md="auto">
                            <ButtonToolbar className="mb-3 justify-content-between" aria-label="Toolbar with Button groups">
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            Tipo inmueble
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Casa</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Apartamento</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            Estado
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Nuevo</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Usado</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            Tipo oferta
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Arriendo</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Venta</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            Ciudad
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Zipaquirá</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Chía</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button variant="warning">Buscar</Button>
                                </ButtonGroup>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="btnGroupAddon">Cod. Inmueble</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type="text"
                                        placeholder="Input group example"
                                        aria-label="Input group example"
                                        aria-describedby="btnGroupAddon"
                                    />
                                </InputGroup>
                            </ButtonToolbar>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        </Col>
                        <Col xs={6}>
                            <Row>
                                <HouseCard>

                                </HouseCard>
                                <HouseCard>

                                </HouseCard>
                                <HouseCard>

                                </HouseCard>
                                <HouseCard>

                                </HouseCard>
                                <HouseCard>

                                </HouseCard>

                            </Row>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row >
                        <Col >

                        </Col>
                        <Col >
                            <h1 className="subtitle">Inmuebles Cerca</h1>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        </Col>
                        <Col>
                            <div id="map" className="map">

                            </div>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Body;