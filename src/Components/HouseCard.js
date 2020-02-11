import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class HouseCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/5e/ff/30/5eff305327dd634da3110514c7cb1187.jpg" />
                    <Card.Body>
                        <Card.Title> asd</Card.Title>
                        <Card.Subtitle>asd </Card.Subtitle>
                        <Card.Text> asd</Card.Text>
                        <Button variant="warning">Ver más</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}