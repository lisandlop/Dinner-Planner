import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import modelInstance from "../data/DinnerModel";
import Sidebar from "../Sidebar/Sidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./DishDetails.css";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        numberOfGuests: this.props.model.getNumberOfGuests()
      };
    }

    render() {
        return (
            <div className="Details">
                <Row>
                    <Col sx={3}>
                        <Sidebar model={this.props.model} />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Details;
