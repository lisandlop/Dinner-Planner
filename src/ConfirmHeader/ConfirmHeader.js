import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ConfirmHeader.css";

class ConfirmHeader extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = numberOfGuests: this.props.model.getNumberOfGuests()
    // };


    render() {
        return(
            <div className="Header col-md-12">
                <h2 id="helloHeader">
                    My Dinner: ? people 
                <Link to="/search">
                    <button hover id="backEditDinnerButton">Go back and edit dinner</button>
                </Link>
                </h2>
            </div>
        );
    }

}

export default ConfirmHeader; 
