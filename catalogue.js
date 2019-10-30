//The variables below are capturing the most utilized html elements
let addToCartButtons = document.getElementsByClassName('btn'); //buttons which are going to add products to cart
let Prices = sessionStorage.getItem("disc"); //activating sessionStorage to remember which items were added to cart between page loads
let cartPrice = document.getElementById("cartPriceOutput"); //the price which will be displayed on the [age]
let whatsInCart = document.getElementById("cartOutput"); //the items which will be represented in the cart

//The code below runs on the catalogue.html page to enable quick Add To Cart Functionality
let disc = [] //make choices accept data inside an array
for (let i = 0; i < addToCartButtons.length; i++) { //loop through all of the Add to Cart buttons
    let button = addToCartButtons[i]; //iterate through each Add to Cart button stored as a counting variable 
    button.addEventListener('click', function(event) { //target the event of a click
        let buttonClicked = event.target
        disc.push(parseFloat(buttonClicked.id)); //convert the id (which is the price which is inside a string, refer to catalogue.html) of the clicked Add To Cart Button into a float number and add it into the array called choices
        const reducer = (accumulator, currentValue) => accumulator + currentValue; //this function accepts two parameters which are then added to each other
        alert("Your current total is R" + disc.reduce(reducer)); //take all of the numbers inside of the array and add them together and alert the user of their total
        sessionStorage.setItem("disc", disc.reduce(reducer)); //set a sessionStorage variable called choices which holds the sum of the choices array

    })
}

//An Object holding each product's description, prize, price and total VAT inside a string so that it can be captured inside the cart.
sPrices = {

    disc1: "Platinum disc R699.99 (R6.25 VAT)",

    disc2: "Gold disc R549.99 (R4.85 VAT)",

    disc3: "Platinum disc R549.99 (R11.50 VAT)",

    disc4: "Tripple Gold album R289.99 (R6.00 VAT)",

    disc5: "Double Silver Tape R239.99 (R4.00 VAT)",

    disc6: "Gold label R259.99 (R2.00 VAT)"


}


function getPrice1() {

    let cart1 = sPrices.can1;
    sessionStorage.setItem("cart1", cart1);

}

function getPrice2() {

    let cart2 = sPrices.can2;
    sessionStorage.setItem("cart2", cart2);
}

function getPrice3() {

    let cart3 = sPrices.can3;
    sessionStorage.setItem("cart3", cart3);
}

function getPrice4() {

    let cart4 = sPrices.can4;
    sessionStorage.setItem("cart4", cart4);
}

function getPrice5() {

    let cart5 = sPrices.can5;
    sessionStorage.setItem("cart5", cart5);
}

function getPrice6() {

    let cart6 = sPrices.can6;
    sessionStorage.setItem("cart6", cart6);
}

//The below function runs as soon as the shopping_cart.html body loads
function addcart() {
    /*  For each disc, a sessionStorage variable was created if the item was added to cart,
        the if statement tests if the sessionStorage variable was initially created (!= null), and if it is then
        retrieves the sessionStorage variable and appends it as a paragraph to the selected element. The function
        called underneath styles the cart element.
    */
    if (sessionStorage.getItem("cart1") != null) {
        let cartItem1 = document.createElement("p");
        whatsInCart.appendChild(cartItem1);
        cartItem1.innerHTML = sessionStorage.getItem("cart1");
        ItemStyler();
    }

    if (sessionStorage.getItem("cart2") != null) {
        let cartItem2 = document.createElement("p");
        whatsInCart.appendChild(cartItem2);
        cartItem2.innerHTML = sessionStorage.getItem("cart2");
        ItemStyler();
    }

    if (sessionStorage.getItem("cart3") != null) {
        let cartItem3 = document.createElement("p");
        whatsInCart.appendChild(cartItem3);
        cartItem3.innerHTML = sessionStorage.getItem("cart3");
        ItemStyler();
    }

    if (sessionStorage.getItem("cart4") != null) {
        let cartItem4 = document.createElement("p");
        whatsInCart.appendChild(cartItem4);
        cartItem4.innerHTML = sessionStorage.getItem("cart4");
        ItemStyler();
    }

    if (sessionStorage.getItem("cart5") != null) {
        let cartItem5 = document.createElement("p");
        whatsInCart.appendChild(cartItem5);
        cartItem5.innerHTML = sessionStorage.getItem("cart5");
        ItemStyler();
    }

    if (sessionStorage.getItem("cart6") != null) {
        let cartItem6 = document.createElement("p");
        whatsInCart.appendChild(cartItem6);
        cartItem6.innerHTML = sessionStorage.getItem("cart6");
        ItemStyler();
    }

    if (sessionStorage.getItem("disc") != null) { //If the session variable "choices" is NOT equal to null (meaning is HAS been assigned),
        let priceTotal = document.createElement("p"); // grab the selected html element and append the price of the headphones added to cart
        cartPrice.appendChild(priceTotal);
        priceTotal.innerHTML = "Total: R" + Prices; // Update the price displayed with the new price/ or load the price for the first time
        PriceStyler(); //Style the price displayed

    } else { //Should the cart be empty, display the following message in a pragraph that is appended to the selected ID
        let empty = document.createElement("p");
        empty.innerHTML = "Your Cart is currently empty";
        whatsInCart.appendChild(empty);
        ItemStyler(); //Style the innerHTML
        $("#orderOptions").hide(); //hide() function utilized to hide collect or deliver radio buttons as nothing is in the cart yet
        $(".firstBigHeading").hide(); //hide() function utilized to hide the order intro heading as nothing is in the cart yet
    }

}

//variables which are going to do the math for either the delivery or collectio on the sessionStorage variable:
let collectSum = parseFloat(sessionStorage.getItem("disc")) + 0.00; //convert the sessionStorage variable into a float(number) and add 15.00 to it
let deliverSum = parseFloat(sessionStorage.getItem("disc")) + 150.00; //convert the sessionStorage variable into a float(number) and add 180.00 to it

//as soon as the collect radio button is clicked, the rest of the collect form is shown and the price is ammended and styled
function showCollectForm() {

    document.getElementById("collectChoice").style.display = "inline";
    cartPrice.innerHTML = "Total: R" + collectSum + " (R0.00 charge for collection has been added)";
    PriceStyler();
}

//as soon as the delivery radio button is clicked, the rest of the delivery form is shown and the price is ammended and styled
function showDeliverForm() {

    document.getElementById("deliverChoice").style.display = "inline";
    cartPrice.innerHTML = "Total: R" + deliverSum + " (R150.00 charge for delivery has been added)";
    PriceStyler();
}

/* “confirm order” button which alerts the user that their order was
successful and generates them a reference number*/

function confirmIt() { //this function is run on the click of the confirm order button which is on the cart.html page

    alert("Congratulations! You have purchased amazing soulection disc!" + "\n" +
        "Here is your Reference Number: " + "\n" + Math.random().toString(36).substr(2, 9)); //this generates a random reference number every time
}