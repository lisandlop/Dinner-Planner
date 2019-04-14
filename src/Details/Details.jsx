import React, { Component } from "react";
import { Link } from "react-router-dom";
// import modelInstance from "../data/DinnerModel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Details.css";


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        numberOfGuests: this.props.model.getNumberOfGuests(),
        dish: null,
        status: "LOADING"
      };
    }
    componentDidMount() {
        var id = window.location.href.split('details/')[1]
        this.props.model.getDish(id).then(dish => {
            // this.state.dish = dish
            // this.state.status = "LOADED"

            this.setState({
                dish: dish,
                status: "LOADED"
            })
        })
    }

    update() {
        this.setState({
            numberOfGuests: this.props.model.getNumberOfGuests()
        }); 
    }

    render() {

        let dishTitle = null; 
        let dishImage = null; 
        let dishInstructions = null; 
        let ingredientList = null;
        let addDish = null; 
        let dishPrice = null; // ! 

        let guestNumber = this.state.numberOfGuests; 

        switch (this.state.status) {
            case "LOADING":
                dishTitle = <p>Loading...</p>
                break; 
            case "LOADED":

                dishTitle = <h3>{this.state.dish.title}</h3>;
                dishImage = <img className="DishImage" src={this.state.dish.image} />
                dishInstructions = <p>{this.state.dish.instructions}</p>

                ingredientList = this.state.dish["extendedIngredients"].map((ingredient) =>
                    <tr key={ingredient.id}>
                        <td>{(ingredient.amount).toFixed(1)*guestNumber + ' ' + ingredient.unit}</td>
                        <td>{ingredient.name}</td>
                        <td>SEK</td>
                        <td style={{textAlign: 'right'}}>{(1).toFixed(2)*guestNumber}</td>
                    </tr>);

                dishPrice = <h6 style={{textAlign: 'center'}}>Total cost: {(this.state.dish.pricePerServing * guestNumber)} SEK</h6>

                addDish = <button id="addToMenuButton" onClick={() => 
                    this.props.model.addDishToMenu(this.state.dish)}>Add to menu</button>
                break; 
        }

        return (
            <div className="Details col-md-8" >
                <Row>
                    <Col>
                        {dishTitle}
                        {/* this.props.title */}
                        {dishImage}
                        {dishInstructions}
                        <Link to="/search">
                            <button id="backToSearchButton">Back to search</button>
                        </Link>
                    </Col>

                    <Col>
                        <h6>Ingredients for {guestNumber} number of people:</h6>
                        <table className="table">
                            <tbody>{ingredientList}</tbody>
                        </table>
                        {dishPrice}
                        <Link to="/search">
                            {addDish}
                        </Link>
                    </Col>
                </Row>
                <br/> <br/>
            </div>
        );
    }

}

export default Details;