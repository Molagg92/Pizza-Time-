# _{Erik's Pizza Time All the Time Pizza Parlor}_

#### By _**{Erik Z., Molagg92}**_

#### _{This app consists of 4 lists of 4 options for a single pizza a user can make!}_

## Technologies Used

* _Git_
* _HTML_
* _JavaScript_
* _CSS_
*_TDD style of testing_
## Description

_{This is a small and humble pizza creator application that lets a user make a single pizza out of menu choices, and it accuratly retuns the total cost to our user, and clears the previous entry when you submit a new one. Very Simple!}_

## Setup/Installation Requirements

* _Travel to molagg92's github repository https://github.com/Molagg92/Pizza-Time-.git_
* _Witin the green "Code" button at the top right corner of the file, coppy the link under 'Clone'_
* _Open your Git terminal, type 'git clone' and paste the coppied URL_
* _Using your preffered Code Editor program, open the newly cloned file, and at the bottom, click "Go Live"._
* _After clicking "Go Live", you wil be at the home page of my Pizza Creator  app! Now you can make a custom Pizza!_

_{Follow these intructions, and you will make your way to tmy simple pizza creator app! There are many pretenders and off brand copies, rest assured that you are about to experience the Orignial Erik's Pizza Time All the Time Pizza Parlor app. TIME Magazine described this app as the "Classic Coke" of Pizza Maker apps, or so I've been told.}_

## Known Bugs

* _This is the Mark I varient of the EPTATPP app, currently it is written to handle a sigle pizza order at a time, placing a second order will clear the first order._
* _Curretly the app cannot double up on toppings, users will only be able to place orders with a single meat and toppings choice._

## License

_{This is an Open Source Project. Please feel free yo use this app and make changes in good faith for the betterment of the human race. All are welcome in the house of Programming. Blessed be the Father HTML, the Son CSS, and the JavaScript Holy Spirit.}_

Copyright (c) _4/16/2023_ _Erik Z., Molagg92_

-----------------------


Describe:Pizza()
Test:Should create the parameters for the new pizzas that are going to be made
Code:const myPizza = new Pizza([], "medium");
Expected output: Pizza { toppings: [], size: "medium" }

-----------------------


Describe: priceTracker()
Test:should keep accurate track of the cost of the size, crust, meats and toppings for the pizza being ordered
Code:priceTracekr(order2)
Expected output:  10

-----------------------

Test:should return the sum of size and crust
Code: classicAmerican
Expected output:13

-----------------------

Test:should return the sum of all 4 perameters
Code:hawaiianChicken.priceTracker()
Expected output:19

-----------------------


Describe: function userPizzaMaker(size, crust, meat, toppings)
Test:should create a new pizza based on the users input also return the price for pizza.
Code:small, pepp, mushroom on golden
Expected output:12

-----------------------

Test: plug in varaibles for the user's input values, and run the price tracker on the new pizza instance, returning a total cost to our user when they submit a new pizza order.
Code: make a pizza, click submit
Expected output: "Order Placed!" + correct total of the users custom pizza + an image confirming our dilevery timeline.

-----------------------
