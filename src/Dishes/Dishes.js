import React, { Component } from "react";
import { Link } from "react-router-dom";

// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

// import modelInstance from "../data/DinnerModel";

import "./Dishes.css";
//import SearchField from "react-search-field";


class Dishes extends Component {
  constructor(props) {
    super(props);

    let url = new URL(document.URL);

    this.filter = url.searchParams.get("filter") == null ? '' : url.searchParams.get("filter");
    this.type = url.searchParams.get("type") == null ? '' : url.searchParams.get("type");

    this.updated = false;

    this.state = {
      status: "LOADING", 
      type: url.searchParams.get("type") == null ? '' : url.searchParams.get("type"),
      filter: url.searchParams.get("filter") == null ? '' : url.searchParams.get("filter")
    };
  }

  componentDidMount() {
    this.searchFunction(); 

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.type !== this.state.type || prevState.filter !== this.state.filter) {
      this.searchFunction();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.type !== prevState.type || nextProps.filter !== prevState.filter) {
      return {status: "LOADING", type: nextProps.type, filter: nextProps.filter};
    }
    return null;
  }

  handleFilterChange = (e) => {
		this.filter = e.target.value;
		this.updated = true;
  }

  handleTypeChange = (e) => {
    this.type = e.target.value;
    this.updated = true;
  }

  handleSubmit = (e) => {
    e.preventDefault()

	    if (this.updated) {
        let url = 'search?'
        
			if (this.type && this.type !== 'all') { 
        url += 'type=' + this.type }
      if (this.type && this.type !== 'all' && this.filter) {
        url += '&filter=' + this.filter }
			else if (this.filter) { 
        url += 'filter=' + this.filter }

			window.history.pushState({}, '', url)
			this.updated = false;
			this.setState({updated: true})
      }
  }

  searchFunction(){
    this.props.model
      .getAllDishes(this.state.type, this.state.filter)
      .then(dishes => {
        if (dishes.results.length === 0) {
          this.setState({
            status: "EMPTY"
          });
        }
        else {
          this.setState({
            status: "LOADED",
            dishes: dishes.results
          });
        }
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  };

  handleFilterChange(e) {
      var filter = modelInstance.getFilter();
      this.setState({
        filter: filter
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

      // EN version
      <div className="col">
      {/* <h2>Find a dish</h2>
      <div className="col-12">
        <div className="row"> 
          <form className="form-inline" onSubmit={this.handleSubmit}>

            <input id="searchFilter" className="form-control mr-sm-3" 
              type="text" 
              placeholder="Enter keywords"
              defaultValue={this.filter} 
              onChange={this.handleFilterChange}/>

            <select id="dishType" className="form-control mr-sm-3" 
              defaultValue={this.type} 
              onChange={this.handleTypeChange}>

              <option value="all">All</option>
              <option value="appetizer">Appetizer</option>
              <option value="breakfast">Breakfast</option>
              <option value="main course">Main Course</option>
              <option value="side dish">Side dish</option>
              <option value="soup">Soup</option>
              <option value="salad">Salad</option>
              <option value="dessert">Dessert</option>
              <option value="bread">Bread</option>
              <option value="sauce">Sauce</option>
              <option value="beverage">Beverage</option>
              <option value="drink">Drink</option>
            </select>
            <button id="searchButton" className="btn btn-warning mr-sm-3">Search</button>
          </form>
        </div>
      </div>
      <br/> */}
      <div className="DishRow">{dishesList}</div>
    </div>

      // TVÅ version
        // <Col className="Dishes col-md-9">
        //   <Row className="searchPart">
        //     <h3>Find a dish</h3>

        //     <Form.Group className="searchform" id="dishFilter">
        //       <Form.Control className="form-control col-sm-4" type="text" defaultValue={this.filter} onChange={this.handleFilterChange} placeholder="Search dish..."/>
        //     </Form.Group>

        //     <Form.Group id="dishType" className="form-control col-sm-3">
        //       <Form.Control as="select" defaultValue={this.type} onChange={this.handleTypeChange}>
        //         <option value ="all">All</option>
        //         <option disabled>-----------</option>
        //         <option value = "appetizer">Appetizer</option>
        //         <option value = "breakfast">Breakfast</option>
        //         <option value = "main course">Main course</option>
        //         <option value = "side dish">Side dish</option>
        //         <option value = "soup">Soup</option>
        //         <option value = "salad">Salad</option>
        //         <option value = "dessert">Dessert</option>
        //         <option value = "bread">Bread</option>
        //         <option value = "sauce">Sauce</option>
        //         <option value = "beverage">Beverage</option>
        //         <option value = "drink">Drink</option>
        //       </Form.Control> 
        //     </Form.Group>

        //   {/* lägga till to="/search/" + type / filter något */}
        //   {/* så att faktiskt går till sidan med filter/type */}
        //     <Link to={"/search/?type=" + this.type + "filter=" + this.filter}> 
        //       <Button id="searchButton" type="submit" >Search</Button>
        //     </Link>

        //   </Row>
        // <div className="DishRow">{dishesList}</div>
        // </Col>
      // allt ovan är ny version


      // <div className="Dishes col-md-9">
      //   <h3>Find a dish</h3>
  
      //     <form className = "searchform" onSubmit = {this.handleSubmit}>
      //       <input id = "dishFilter" type = "text" className = "form-control col-sm-4" placeholder = "Search dish..."
      //           defaultValue = {this.filter} onChange = {this.handleFilterChange}/>
      
      //     <select id ="dishType" className = "form-control col-sm-3"
      //         defaultValue = {this.type} onChange = {this.handleTypeChange}>
      //       <option value ="all">All</option>
    //           <option value = "appetizer">Appetizer</option>
    //           <option value = "breakfast">Breakfast</option>
    //           <option value = "main course">Main course</option>
    //           <option value = "side dish">Side dish</option>
    //           <option value = "soup">Soup</option>
    //           <option value = "salad">Salad</option>
    //           <option value = "dessert">Dessert</option>
    //           <option value = "bread">Bread</option>
    //           <option value = "sauce">Sauce</option>
    //           <option value = "beverage">Beverage</option>
    //           <option value = "drink">Drink</option>
      //     </select>
      //   </form>

      //   <Link to="/search">
      //     <button id="searchButton">Search</button>
      //   </Link> 
      //   <hr></hr>
      //   <div className="DishRow">{dishesList}</div>
      // </div>

    );
    
  }
}

export default Dishes;