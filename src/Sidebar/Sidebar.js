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
      numberOfGuests: this.props.model.getNumberOfGuests(),
      menu: this.props.model.getFullMenu(), 
      totalPrice: this.props.model.getTotalMenuPrice()
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
      numberOfGuests: this.props.model.getNumberOfGuests(),
      menu: this.props.model.getFullMenu(), 
      totalPrice: this.props.model.getTotalMenuPrice()
    });
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = e => {
    this.props.model.setNumberOfGuests(e.target.value);
  };

  render() {

    var menuList = this.state.menu.map((dish) =>
      <tr key={dish.id}>
        <td>{dish.title}</td>
        <td style={{textAlign: 'right'}}>{(dish.pricePerServing * this.state.numberOfGuests).toFixed(2)}</td>
      </tr>
    )

    var totalMenuPrice = (
      <thead>
          <tr>
            <th colSpan = "2" style={{textAlign: 'center'}}>Total menu price: {this.state.totalPrice === 0 ? '0 SEK' : this.state.totalPrice.toFixed(2) + 'SEK'}</th>
          </tr>
      </thead>
      )

    return (
      <div className="Sidebar col-md-4">

        <Col id="SidebarColumn">
          <Row className="sidebarText">
            <h3>My Dinner</h3>
          </Row>

          <Row className="sidebarText">
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

          <Row className="sidebarText">
            <p>
              Total number of guests: {this.state.numberOfGuests}
            </p>
          </Row>

          <Table striped>
            <thead>
              <tr>
                <th>Dish</th>
                <th style={{textAlign: 'right'}}>Cost</th>
              </tr>
            </thead>
            <tbody>
              {menuList}
            </tbody>
            {totalMenuPrice}
          </Table>

          <Row className="confirmButton1">
            <Link to="/overview" className="confirmButton2">
              <button id="confirmButton">Confirm dinner</button>
            </Link>
          </Row>
        </Col>

      </div>
    );
  }
}

export default Sidebar;