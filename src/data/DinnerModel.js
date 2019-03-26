import ObservableModel from "./ObservableModel";

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
      this.notifyObservers('numberOfGuests');
    }
  }

  addDishToMenu(dish) {
    // IMPLEMENT
  }

  removeDishFromMenu() {
    // IMPLEMENT
  }


  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  getAllDishes() {
    const url = `${BASE_URL}/recipes/search`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  getDish(id) {
    const url = `${BASE_URL}/recipes/` + id + `/`;
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
