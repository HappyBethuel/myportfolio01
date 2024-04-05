// listen for button clicks
    document.getElementById("placeOrder").addEventListener("click", placeOrder);

    /**
     * gets form values
     * calculates prices
     * produces output
     */
    function placeOrder() {
        // get form values
        var numPizzas = document.getElementById("numPizzas").value;
        var typePizza = document.getElementById("typePizza").value;
        var deliveryCity = document.getElementById("deliveryCity").value;

        console.log("Num Pizzas:", numPizzas);
        console.log("Type Pizza:", typePizza);
        console.log("Delivery City:", deliveryCity);

        // get the pizza price
        var orderPrice = calculatePrice(numPizzas, typePizza);

        console.log("Order Price:", orderPrice);

        // get the delivery price
        var deliveryPrice = calculateDelivery(orderPrice, deliveryCity);

        console.log("Delivery Price:", deliveryPrice);

        // create the output
        var theOutput = "<p>Thank you for your order.</p>";
    

        // output the delivery price, if there is one
        if (deliveryPrice === 0) {
            theOutput += "<p>You get free delivery!</p>";
        } else {
            theOutput += "<p>Delivery fee: $" + deliveryPrice.toFixed(2) + "</p>";
        }

        theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice).toFixed(2) + "</p>";

        // display the output
        document.getElementById("displayTotal").innerHTML = theOutput;
    }

    /**
     * calculates pizza price
     */
    function calculatePrice(numPizzas, typePizza) {
        var orderPrice = Number(numPizzas) * 10;
        var extraCharge = 0;
        
        // calculate extraCharge, if there is one.
        if (typePizza === "supreme") {
            extraCharge = Number(numPizzas) * 2;
        }
        
        orderPrice += extraCharge;
        return orderPrice;
    }

    /**
     * calculates delivery price
     */
    function calculateDelivery(orderPrice, deliveryCity) {
        var deliveryPrice = 0;
        
        // calculate delivery price, if there is one
        if (deliveryCity === "kwagga") {
            // Free delivery for kwagga
            deliveryPrice = 0;
        } else {
            // Standard delivery fee for other cities
            deliveryPrice = 5;
        }
        
        return deliveryPrice;
    }
