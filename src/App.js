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
        <Link to="/">
          <header className="App-header">
            <h1 className="App-title">{this.state.title}</h1>
          </header>
        </Link>

        {/* We rended diffrent component based on the path */}
        <Route exact path="/" component={Welcome} />

        <Route
          path="/search"
          render={() => <SelectDish model={modelInstance} />}
        />

        <Route
          path="/details"
          render={() => <DishDetails model={modelInstance} />}
        />

        <Route
          path="/overview"
          render={() => <DinnerOverview model={modelInstance} />}
        />

        <Route
          path="/printout"
          render={() => <DinnerPrintout model={modelInstance} />}
        />

      </div>
    );
  }
}

export default App;
