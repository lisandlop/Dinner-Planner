import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <p>Let's plan your dinner!</p>

        <Link to="/search">
          <button id="startButton">Start planning</button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
