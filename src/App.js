import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DinnerModel";
import SelectDish from "./SelectDish/SelectDish";
import DishDetails from "./DishDetails/DishDetails";
import DinnerOverview from "./DinnerOverview/DinnerOverview";
import DinnerPrintout from "./DinnerPrintout/DinnerPrintout";

import { Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dinner Planner"
    };

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>

          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome} />
          <Route path="/search"
            render={() => <SelectDish model={modelInstance} />}
          />
        </header>
      </div>
    );
  }
}

export default App;
