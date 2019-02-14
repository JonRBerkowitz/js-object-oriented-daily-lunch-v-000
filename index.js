// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodIds = 0;
let customerIds = 0;
let mealIds = 0;
let deliveryIds = 0;

class Neighborhood {
  constructor(name) {
    this.id = neighborhoodIds++;
    this.name = name;
    store.neighborhoods.push(this);
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.id = customerIds++;
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this);
  }
}
