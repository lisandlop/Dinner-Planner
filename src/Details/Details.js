import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import modelInstance from "../data/DinnerModel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        numberOfGuests: this.props.model.getNumberOfGuests()
      };
    }

    render() {
        return (
            <div className="Details col-md-8">
                <Row>
                    <Col>
                        <h3>Dish title</h3>
                        <p>Image of dish</p>
                        <Link to="/search">
                            <button hover id="backToSearchButton">Back to search</button>
                        </Link>
                    </Col>
                    <Col>
                        <p>Ingredient box</p>
                        <Link to="/search">
                            <button hover id="addToMenuButton">Add dish to menu</button>
                        </Link>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Details;