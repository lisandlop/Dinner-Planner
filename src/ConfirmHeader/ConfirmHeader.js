import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

import "./ConfirmHeader.css";

class ConfirmHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfGuests: this.props.model.getNumberOfGuests()
        }
    };


    render() {
        return(
            <div className="Header col-md-12">
                <Row>
                    <Col>
                        <h2 id="helloHeader">
                            My Dinner: {this.state.numberOfGuests} people 
                        </h2>    
                    </Col>
                    <Col className="goBackCol">
                        <Link to="/search">
                            <button id="backEditDinnerButton">Go back and edit dinner</button>
                        </Link>
                    </Col>  
                </Row>

            </div>
        );
    }

}

export default ConfirmHeader; 
