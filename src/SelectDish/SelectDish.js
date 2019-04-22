import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sidebar from "../Sidebar/Sidebar";
import Dishes from "../Dishes/Dishes";
import "./SelectDish.css";

class SelectDish extends Component {
  constructor(props) {
    super(props); 

    let url = new URL(document.URL); 

    this.type = url.searchParams.get("type") == null ? '' : url.searchParams.get("type");
    this.filter = url.searchParams.get("filter") == null ? '' : url.searchParams.get("filter");

    this.updated = false;
  }

  handleTypeChange = (e) => {
    this.type = e.target.value
    this.updated = true
  }

  handleFilterChange = (e) => {
    this.filter = e.target.value
    this.updated = true
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.updated) {
      let url = '/search?'

      if (this.type && this.type !== 'all') { url += 'type=' + this.type }
      if (this.type && this.type !== 'all' && this.filter) url += '&filter=' + this.filter
      else if (this.filter) url += 'filter=' + this.filter

      window.history.pushState({}, '', url)
      this.updated = false;
      this.setState({updated: true})
    }
  }

  render() {
    return (
      <div className="row"> {/*gör en rad med sidebaren*/}     
        <div className="SelectDish">

          <Row>
            <Sidebar model={this.props.model} />
            <Col>
              <div className="col">
                <h2>Find a dish</h2>
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
                  <br/>
                </div>
              <Row>
                <Dishes model={this.props.model} type={this.type} filter={this.filter}/>
              </Row>
            </Col>
            

          </Row>
        </div>
      </div> 
    );
  }
}

export default SelectDish;
