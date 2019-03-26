import React, { Component } from "react";
// import modelInstance from "../data/DinnerModel";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import "./Overview.css";

class Overview extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     numberOfGuests: this.props.model.getNumberOfGuests()
    //   };
    // }

    render() {
        return (
            <div className="Overview col-md-12">
                <p>Image and cost of dish</p>
                <p>Image and cost of dish</p>
                <p>Total cost: </p>
                <Link to="/printout">
                    <button id="printButton">Print full recipe</button>
                </Link>
            </div>
        );
    }

}

export default Overview;