//>Buisnesss Logic< --------------------
//--------------------------------------

//Global Variables---------------------

window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) { userPizzaMaker(e);});
})



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
    "sausage": 4,
    "chicken": 2,
    "anchovies": 4,
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

  const sizeInput = document.querySelector('input[name="size"]:checked').value;
  const crustInput = document.querySelector('input[name="crust"]:checked').value;
  const meatInput = document.querySelector('input[name="meat"]:checked').value;
  const toppingsInput = document.querySelector('input[name="toppings"]:checked').value;
 


  const pizzaOrder = new Pizza (sizeInput, crustInput, meatInput, toppingsInput);
 
  let resultWindow = document.getElementById("resultWindow");
  resultWindow.innerHTML = "<h3>Order placed!</h3>"+ " $" + pizzaOrder.priceTracker() + " total";
  document.getElementById('resDiv').removeAttribute('class', 'hidden');

//  return(pizzaOrder.priceTracker());
}