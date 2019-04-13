import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./Overview.css";

class Overview extends Component {
    constructor(props) {
        super(props);

        this.state = {
        numberOfGuests: this.props.model.getNumberOfGuests(), 
        menu: this.props.model.getFullMenu(), 
        totalPrice: this.props.model.getTotalMenuPrice()
      };
    }

    render() {
        var overviewDishList = this.state.menu.map((dish) =>
                <Card key={dish.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dish.image} />
                    <Card.Body>
                        <Card.Title>{dish.title}</Card.Title>
                        <Card.Text>Dish price SEK</Card.Text>
                    </Card.Body>
                </Card>
        );

        var totalMenuPrice = (
            <h6>
                Total menu price: {this.state.totalPrice === 0 ? '0 SEK' : this.state.totalPrice.toFixed(2) + 'SEK'}
            </h6>
        )

        return (
            <div className="Overview col-md-12">
                <Row>
                    {overviewDishList}
                </Row>
                <Row>
                    {totalMenuPrice}
                </Row>
                <Link to="/printout">
                    <button id="printButton">Print full recipe</button>
                </Link>
            </div>
        );
    }

}

export default Overview;