import React, { Component } from "react";
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ConfirmHeader from "../ConfirmHeader/ConfirmHeader";
import Overview from "../Overview/Overview";
// import "./SelectDish.css";

class DinnerOverview extends Component {
    render() {
      return (
        <div className="DinnerOverview">
        
          <Row>
            <ConfirmHeader model={this.props.model} />
          </Row>
          <Row>
            <Overview model={this.props.model} />
          </Row>
        </div>
      );
    }
  }
  
  export default DinnerOverview;