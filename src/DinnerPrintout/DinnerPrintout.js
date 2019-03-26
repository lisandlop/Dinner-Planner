import React, { Component } from "react";
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ConfirmHeader from "../ConfirmHeader/ConfirmHeader";
import Printout from "../Printout/Printout";
// import "./SelectDish.css";

class DinnerPrintout extends Component {
    render() {
      return (
        <div className="DinnerPrintour">
        
          <Row>
            <ConfirmHeader model={this.props.model} />
          </Row>
          <Row>
            <Printout model={this.props.model} />
          </Row>
        </div>
      );
    }
  }
  
  export default DinnerPrintout;