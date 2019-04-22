import ObservableModel from "./ObservableModel";

let type = ""
let filter = ""

const API_KEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"

const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/3"; 
const httpOptions = {
  headers: { "X-Mashape-Key": API_KEY }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this._numberOfGuests = 4;
    this.getNumberOfGuests();
    this._menu = []; 

    if (!isNaN(parseInt(localStorage.getItem("numberOfGuests"), 10))) {
      this._numberOfGuests = parseInt(localStorage.getItem("numberOfGuests"), 10);
    }
    if (JSON.parse(localStorage.getItem("menu"))) {
      this._selectedMenu = JSON.parse(localStorage.getItem("menu"));
    }

  }

  /**
   * Get the number of guests
   * @returns {number}
   */
  getNumberOfGuests() {
    return this._numberOfGuests;
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    if (num >= 1) {
      this._numberOfGuests = num;
      localStorage.setItem("numberOfGuests", this._numberOfGuests); 
      this.notifyObservers('numberOfGuests');
    }
  }

  getFullMenu() {
    return this._menu;
  }

  getFilter = function() {
    return filter;
  }

  getType = function() {
    return type;
  }

  getTotalMenuPrice() {
    var totalPrice = 0; 
    for (var i = 0; i < this._menu.length; i++) {
      totalPrice += this._menu[i].pricePerServing * this._numberOfGuests; 
    }
    return totalPrice; 
  }

  addDishToMenu(dish) {
    for (var i = 0; i < this._menu.length; i++) {
      if (this._menu[i].id === dish.id) {
        this.removeDishFromMenu(this._menu[i].id, true);
      }
    }
    this._menu.push(dish);
    localStorage.setItem("menu", JSON.stringify(this._menu));
    this.notifyObservers();
  }

  removeDishFromMenu(id, muted=false) {
    var index = null;
    for (let i = 0; i < this._menu.length; i++) {
      if (this._menu[i].id === id) {
        index = i;
      }
    }
    if (index > -1) { this._menu.splice(index, 1); }
    if (!muted) {
      localStorage.setItem("menu", JSON.stringify(this._menu));
      this.notifyObservers();
    }
  }

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  getAllDishes(type, filter) {
    const url = `${BASE_URL}/recipes/search?type=${type}&query=${filter}`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  getDish(id) {
    const url = `${BASE_URL}/recipes/` + id + `/information`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }
}

// Export an instance of DinnerModel
const modelInstance = new DinnerModel();
export default modelInstance;
