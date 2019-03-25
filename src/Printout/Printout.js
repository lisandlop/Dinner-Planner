import React, { Component } from "react";
// import modelInstance from "../data/DinnerModel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Printout.css";

class Printout extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     numberOfGuests: this.props.model.getNumberOfGuests()
    //   };
    // }

    render() {
        return (
            <div className="Printout col-md-12">
                <Row>
                    <Col>
                        <p>Image</p>
                    </Col>
                    <Col>
                        <p>Title</p>
                    </Col>
                    <Col>
                        <p>Preparation</p>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Printout;