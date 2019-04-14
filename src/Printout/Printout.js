import React, { Component } from "react";
// import modelInstance from "../data/DinnerModel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Printout.css";

class Printout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfGuests: this.props.model.getNumberOfGuests(), 
            menu: this.props.model.getFullMenu(), 
            totalPrice: this.props.model.getTotalMenuPrice()
        };
    }

    render() {

        var printOutDish = this.state.menu.map((dish) =>
        <div key={dish.id}>
            <Row>
                <Col>
                {/* <Col xs="12" sm="4"> */}
                    <h3>{dish.title}</h3>
                    <img src={dish.image} />
                </Col>
                {/* <Col xs="12" sm="6"> */}
                <Col>
                    <p>{dish.instructions}</p>
                </Col> 
            </Row>
            <br/><br/>
        </div>

        );


        return (
            <div className="Printout col-md-12">
                <Row>
                    {printOutDish}
                </Row>
            </div>
        );
    }

}

export default Printout;