import React, { Component } from "react";
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sidebar from "../Sidebar/Sidebar";
import Dishes from "../Dishes/Dishes";
import "./SelectDish.css";

class SelectDish extends Component {
//här ska det in lite saker: 
//något som fixar urlen
//något som hanterar sökfunktionen --> filter och type
//något som summerar sökfunktionen --> ändrar urlen
  render() {
    return (
      <div className="row"> {/*gör en rad med sidebaren*/}     
    
      <div className="SelectDish">
        <h2>This is the whole container</h2>
        {/*sökrutan*/}

        {/* We pass the model as property to the Sidebar component */}

        <Row>
          <Sidebar model={this.props.model} />
          {/* Kanske göra en component för search-bar osv?*/}
          <Dishes />
        </Row>
      </div>
      </div> 
    );
  }
}

export default SelectDish;
