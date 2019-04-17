import React, { Component } from "react";
import { Link } from "react-router-dom";
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import modelInstance from "../data/DinnerModel";
import "./Dishes.css";
//import SearchField from "react-search-field";


class Dishes extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      status: "LOADING"
    };
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount() {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance
      .getAllDishes()
      .then(dishes => {
        this.setState({
          status: "LOADED",
          dishes: dishes.results
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  }


  render() {
    let dishesList = null;

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {

      case "LOADING":
        dishesList = <em>Loading...</em>;
        break;

      case "LOADED":
        dishesList = this.state.dishes.map(dish => (
          <Link key={dish.id} to={"/details/" + dish.id} style={{ textDecoration: 'none' }}>
            <div className="SearchDishBox">
              <div className="SearchImage">
                <img id="DishImage" src={"https://spoonacular.com/recipeImages/" + dish.image} alt={dish.title} />
              </div>
              <div className="SearchTitle">
                {dish.title}
              </div>
            </div>
          </Link>
        ));
        break;

      default:
        dishesList = <b>Failed to load data, please try again</b>;
        break;
    }

    return (
      <div className="Dishes col-md-8">
        <h3>Find a dish</h3>
  
          <form className = "searchform" onSubmit = {this.handleSubmit}>
            <input id = "dishFilter" type = "text" className = "form-control col-sm-4" placeholder = "Search dish..."
                defaultValue = {this.filter} onChange = {this.handleFilterChange}/>
      
          <select id ="dishType" className = "form-control col-sm-3"
              defaultValue = {this.type} onChange = {this.handleTypeChange}>
            <option value ="all">All</option>
            <option value = "appetizer">Appetizer</option>
            <option value = "appetizer">Breakfast</option>
            <option value = "appetizer">Main course</option>
            <option value = "appetizer">Side dish</option>
            <option value = "appetizer">Soup</option>
            <option value = "appetizer">Salad</option>
            <option value = "appetizer">Dessert</option>
            <option value = "appetizer">Bread</option>
            <option value = "appetizer">Sauce</option>
            <option value = "appetizer">Beverage</option>
            <option value = "appetizer">Drink</option>
          </select>
        </form>

        <Link to="/search">
          <button id="searchButton">Search</button>
        </Link>
        <hr></hr>
        <div className="DishRow">{dishesList}</div>
      </div>
    
    );
    
  }
}

export default Dishes;