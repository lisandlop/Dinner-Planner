import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sidebar from "../Sidebar/Sidebar";
import Dishes from "../Dishes/Dishes";
import "./SelectDish.css";

class SelectDish extends Component {
  render() {
    return (
      <div className="SelectDish">
        <h2>This is the Select Dish screen</h2>

        {/* We pass the model as property to the Sidebar component */}
        <Row>
          <Col sx={3}>
            <Sidebar model={this.props.model} />
          </Col>
          {/* Kanske göra en component för search-bar osv?*/}
          <Col sx={9}>
            <Dishes />
          </Col>
        </Row>

      </div>
    );
  }
}

export default SelectDish;
