import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";


import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    };
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this);
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    });
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = e => {
    this.props.model.setNumberOfGuests(e.target.value);
  };

  render() {
    return (
      <div className="Sidebar col-md-4">

        <Col id="SidebarColumn">
          <Row>
            <h3>My Dinner</h3>
          </Row>
          <Row>
            <p>
              People:
              <input
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.onNumberOfGuestsChanged}
              />
              <br />
            </p>
          </Row>
          <Row>
            <p>
              Total number of guests: {this.state.numberOfGuests}
            </p>
          </Row>
          <Table striped>
            <thead>
              <tr>
                <th>Dish</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Selected dish</td>
                <td>Dish cost</td>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Link to="/overview">
              <button id="confirmButton">Confirm dinner</button>
            </Link>
          </Row>
        </Col>

      </div>
    );
  }
}

export default Sidebar;