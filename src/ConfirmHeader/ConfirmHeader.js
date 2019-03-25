import React, { Component } from "react";
// import { Link } from "react-router-dom";

class ConfirmHeader extends Component {
    constructor(props) {
        super(props);

        this.state = numberOfGuests: this.props.model.getNumberOfGuests()
    };


    render() {
        return(
            <div>
                <h2>
                    My Dinner: 
                </h2>
            </div>
        );
    }

}

export default ConfirmHeader; 
