var totalCosts = [];
function order(size, crust, vegTopping, ) {
    this.size = size;
    this.crust = crust;
    this.vegTopping = vegTopping;
    this.price = 0;
}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["BBQ", "Pineapple", "Peperonni"];
var pizzaVegTopping = ["Mushrooms", "Onions", "Capsicum",];
order.prototype.cost = function () {
    if (this.size === pizzaSize[0]) {
        this.price += 450;
    } else if (this.size === pizzaSize[1]) {
        this.price += 600;
    } else if (this.size === pizzaSize[2]) {
        this.price += 1000;
    }
    if (this.crust === pizzaCrust[0]) {
        this.price += 100;
    } else if (this.crust === pizzaCrust[1]) {
        this.price += 100;
    } else if (this.crust === pizzaCrust[2]) {
        this.price += 50;
    }
    if (this.vegTopping === pizzaVegTopping[0]) {
        this.price += 200;
    } else if (this.vegTopping === pizzaVegTopping[1]) {
        this.price += 200;
    } else if (this.vegTopping === pizzaVegTopping[2]) {
        this.price += 200;
    }

    return this.price;
}
order.prototype.totalCost = function () {
    var orderTotal = 0;
    for (var order = 0; order < totalCosts.length; order++) {
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}
$(document).ready(function () {
    $("input#order1").click(function (event) {
        event.preventDefault();
        var sizes = $("select#piz").val();
        var crusts = $("select#crus").val();
        var vegToppings = $("select#topveg").val();
        var newPizzaOrder = new order(sizes, crusts, vegToppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);
        $("#size").text(sizes);
        $("#crust").text(crusts);
        $("#veg").text(vegToppings);
        $("#total").text(newPizzaOrder.totalCost());
    });
    $("#order2").click(function () {
        prompt("Kindly insert you name")
        prompt("kindly insert you location")
        prompt("Kindly insert your addrress")
        alert("You will be charged an extra 150/= for delivery")
        alert("Thank you for purchasing from King pizza palace!Your order will be delivered to your location 🍕 🚚 in the next few minutes")
    });
})
$(document).ready(function () {
    $('#Contactus').submit(function (event) {
        var myName = $('#name').val();
        var myEmail = $('#email').val();
        var comment = $('#textarea').val();
        if (myName === '' || myEmail === '' || comment === '') {
            alert('Please fill in the required data');
        } else {
            alert(myName + ' ,we have received your message.Thank you for reaching out to us.');
        }
        event.preventDefault();
        $('#name').val('');
        $('#email').val('');
        $('#textarea').val('');
    });
});
