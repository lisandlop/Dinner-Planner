import React, { Component } from 'react'
import "../Dishes/Dishes.js"

class Search extends Component {
    state = {
        query: '',
    }

handleInputChange = () => {
    this.setState({
        query: this.search.value
    })
}

/*render() {
return (
    
        <form className = "searchform" onSubmit = {this.handleSubmit}>
          <input id = "dishFilter" type = "text" className = "form-control col-sm-4" placeholder = "Search dish..."
              ref={filter => this.search = filter} onChange = {this.handleFilterChange}/>
              <p>{this.state.query}</p>
    
        <select id ="dishType" className = "form-control col-sm-3"
            ref={type => this.search = type} onChange = {this.handleTypeChange}>
            <p>{this.state.query}</p>
          <option value ="all">All</option>
          <option value = "appetizer">Appetizer</option>
          <option value = "appetizer">Breakfast</option>
          <option value = "appetizer">Main course</option>
          <option value = "appetizer">Side dish</option>
          <option value = "appetizer">Soup</option>
          <option value = "appetizer">Salad</option>
          <option value = "appetizer">Dessert</option>
          <option value = "appetizer">Bread</option>
          <option value = "appetizer">Sauce</option>
          <option value = "appetizer">Beverage</option>
          <option value = "appetizer">Drink</option>
        </select>
      </form>


  
  );

}*/
}

export default Search