//>Buisnesss Logic< --------------------
//--------------------------------------

//Global Variables---------------------

const veggiesArray = ["mushrooms", "olives", "pineapple", "peppers"]
const meatArray = ["pepperoni", "sausage", "chicken", "anchovies" ]
const crustArray = ["golden", "stuffed", "gluten-free", "thin"]
const sizesArray = ["small", "medium", "large", "xl"]










// //Pizza constructor logic------------------

class  Pizza {
  constructor ( size, crust, meat, topping ) {
  this.size = size;
  this.crust = crust;
  this.meat = meat;
  this.topping = topping;  
  return 'Order UP!' 
  }
};

//Price Tracker-------------------------------

function priceTracker(order) {
  const crustPrices ={
  "small": 5.00,
  "medium": 10,
  "large": 13,
  "xl": 15
  }
  return crustPrices[order.size]
}




//>User Interface Logic< --------------------
//-------------------------------------------