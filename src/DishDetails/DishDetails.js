import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import modelInstance from "../data/DinnerModel";
import Sidebar from "../Sidebar/Sidebar";
import Details from "../Details/Details";
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import "./DishDetails.css";

class DishDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        numberOfGuests: this.props.model.getNumberOfGuests()
      };
    }

    render() {
        return (
            <div className="DishDetails">
                <Row>
                    <Sidebar model={this.props.model} />
                    <Details model={this.props.model} />
                </Row>
            </div>
        );
    }

}

export default DishDetails;
