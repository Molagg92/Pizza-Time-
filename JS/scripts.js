//>Buisnesss Logic< --------------------
//--------------------------------------

//Global Variables---------------------

const veggiesArray = ["mushrooms", "olives", "pineapple", "peppers"]
const meatArray = ["pepperoni", "sausage", "chicken", "anchovies" ]
const crustArray = ["golden", "stuffed", "gluten-free", "thin"]
const sizesArray = ["small", "medium", "large", "xl"]










// //Pizza constructor logic------------------

function  Pizza ( size, crust, meat, topping ) {
  this.size = size;
  this.crust = crust;
  this.meat = meat;
  this.topping = topping;  
  return 'Order UP!' ;
  };

let classicAmerican = new Pizza ("medium", "golden", "pepperoni", "mushrooms");

//Price Tracker-------------------------------

Pizza.prototype.priceTracker= function() {
  const sizePrices ={
  "small": 5.00,
  "medium": 10,
  "large": 13,
  "xl": 15,
  }
  const crustPrices ={
    "golden": 3,
    "stuffed": 5,
    "gluten-free": 7,
    "thin": 3,
  }
  const meatPrices ={
    "pepperoni": 2,
    "sausage": 2,
    "chicken": 2,
    "anchovies": 2,
  }
  const toppingPrices = {
    "mushrooms": 2,
    "olives": 2,
    "pineapple": 2,
    "peppers": 2,
  }
  return sizePrices[this.size] + crustPrices[this.crust] + meatPrices[this.meat] + toppingPrices[this.topping]
}




//>User Interface Logic< --------------------
//-------------------------------------------