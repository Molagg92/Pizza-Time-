//>Buisnesss Logic< --------------------
//--------------------------------------

//Global Variables---------------------

window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) { userPizzaMaker(e);});
})


const sizeInput = document.querySelectorAll('input[name="size"]:checked').value;


let classicAmerican = new Pizza ("medium", "golden", "pepperoni", "mushrooms");
let hawaiianChicken = new Pizza ("medium", "stuffed", "chicken", "pineapple");





// //Pizza constructor logic------------------
function  Pizza ( size, crust, meat, topping ) {
  this.size = size;
  this.crust = crust;
  this.meat = meat;
  this.topping = topping;  
  };
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



function userPizzaMaker(e) {
  e.preventDefault();

}