// Business Logic
function NewPizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

var numberOfPizzas = 1;

var deliveryCost = 200;

var smallPizza = 150;
var mediumPizza = 300;
var largePizza = 450;

var stuffedCrust = 110;
var flatBreadCrust = 70;
var thinCrust = 50;
var thickCrust = 80;

var smPep = 40;
var smBac = 60;
var smMush = 70;
var smChee = 40;
var smGrePepp = 50;
var smPine = 30;
var smChick = 55;
var smBeef = 80;

var medPep = 60;
var medBac = 80;
var medMush = 90;
var medChee = 60;
var medGrePepp = 70;
var medPine = 50;
var medChick = 75;
var medBeef = 100;

var larPep = 80;
var larBac = 100;
var larMush = 110;
var larChee = 80;
var larGrePepp = 90;
var larPine = 70;
var larChick = 95;
var larBeef = 120;


// User Interface
$(document).ready(function() {
  $("#newPizza").click(function() {
    numberOfPizzas += 1;
    $("#pizzas").append('<br>' +
    '<br>' +
    '<div class="layoutPage">' +
    '<div class="form-group box1">' +
    '<label for="pizzaSize" class="display-6">Please select your pizza size:</label>' +
    '<br>' +
    '<br>' +
    '<select class="form-control" class="pizzaSize">' +
    '<option value="1">Small</option>' +
    '<option value="2">Medium</option>' +
    '<option value="3">Large</option>' +
    '</select>' +
    '</div>' +
    '<br>' +
    '<br>' +
    '<div class="form-group box2">' +
    '<label for="crustType" class="display-6">Please select the type of crust you would like:</label>' +
    '<select class="form-control" class="crustType">' +
    '<option value="1">Stuffed Crust</option>' +
    '<option value="2">Flat Bread Crust</option>' +
    '<option value="3">Thin Crust</option>' +
    '<option value="4">Thick Crust</option>' +
    '</select>' +
    '</div>' +
    '<br>' +
    '<br>' +
    '<div class="form-group box3">' +
    '<label for="toppings" class="display-6">Please select the toppings you would like on your pizza:</label>' +
    '<div class="toppings">' +
    '<input class="toppingsDisplayed" type="checkbox" value="pepperoni" name="topping" /> Pepperoni' +
    '<br>' +
    '<input class="toppingsDisplayed" type="checkbox" value="mushrooms" name="topping" /> Mushrooms' +
    '<br>' +
    '<input class="toppingsDisplayed" type="checkbox" value="bacon" name="topping" /> Bacon' +
    '<br>' +
    '<input class="toppingsDisplayed" type="checkbox" value="extraCheese" name="topping" /> Extra Cheese' +
    '<br>' +
    '<input class="toppingsDisplayed" type="checkbox" value="greenPeppers" name="topping" /> Green Peppers' +
    '<br>' +
    '<input class="toppingsDisplayed" type="checkbox" value="pineapple" name="topping" /> Pineapple' +
    '<br>' +
    '<input class="toppingsDisplayed" type="checkbox" value="chicken" name="topping" /> Chicken' +
    '<br>' +
    '<input class="toppingsDisplayed" type="checkbox" value="beef" name="topping" /> Beef' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>');
  });
  $("#pizzaInput").submit(function(event) {
    event.preventDefault();
    console.log(document.forms.length);

    $("#pizzas").each(function() {

    var pizzaSize = $(this).find(".pizzaSize").val();
    var pizzaCrust = $(this).find(".crustType").val();

    var pizzaOrdered = new NewPizza(pizzaSize, pizzaCrust);

      var checkboxField = document.forms[0].topping;
      console.log(checkboxField, typeof(checkboxField));

      for (var i=0; i<checkboxField.length; i++) {
        if (checkboxField[i].checked) {
          pizzaOrdered.toppings.push(checkboxField[i].value);
          console.log(pizzaOrdered.toppings);
        }
      }

      $("#checkoutHeading").show(300, "linear");
      $("#orderForm").show(300, "linear");
      $("#location").submit(function(event) {
        event.preventDefault();

        var totalPizzaCost = 0;
        if (pizzaOrdered.size === "1") {
          totalPizzaCost += smallPizza
        }
        else if (pizzaOrdered.size === "2") {
          totalPizzaCost += mediumPizza
        }
        else if (pizzaOrdered.size === "3") {
          totalPizzaCost += largePizza
        }
        if (pizzaOrdered.crust === "Stuffed Crust") {
          totalPizzaCost += stuffedCrust
        }
        else if (pizzaOrdered.crust === "Flat Bread Crust") {
          totalPizzaCost += flatBreadCrust
        }
        else if (pizzaOrdered.crust === "Thin Crust") {
          totalPizzaCost += thinCrust
        }
        else if (pizzaOrdered.crust = "Thick Crust") {
          totalPizzaCost += thickCrust
        }
        for (var j=0; j<pizzaOrdered.toppings.length; j++) {
          if (pizzaOrdered.size === "1" && pizzaOrdered.toppings[j] === "pepperoni") {
            totalPizzaCost += smPep
          }
          else if (pizzaOrdered.size === "1" && pizzaOrdered.toppings[j] === "mushrooms") {
            totalPizzaCost += smMush
          }
          else if (pizzaOrdered.size === "1" && pizzaOrdered.toppings[j] === "bacon") {
            totalPizzaCost += smBac
          }
          else if (pizzaOrdered.size === "1" && pizzaOrdered.toppings[j] === "extraCheese") {
            totalPizzaCost += smChee
          }
          else if (pizzaOrdered.size === "1" && pizzaOrdered.toppings[j] === "greenPeppers") {
            totalPizzaCost += smGrePepp
          }
          else if (pizzaOrdered.size === "1" && pizzaOrdered.toppings[j] === "pineapple") {
            totalPizzaCost += smPine
          }
          else if (pizzaOrdered.size === "1" && pizzaOrdered.toppings[j] === "chicken") {
            totalPizzaCost += smChick
          }
          else if (pizzaOrdered.size === "1" && pizzaOrdered.toppings[j] === "bacon") {
            totalPizzaCost += smBac
          }
          else if (pizzaOrdered.size === "2" && pizzaOrdered.toppings[j] === "pepperoni") {
            totalPizzaCost += medPep
          }
          else if (pizzaOrdered.size === "2" && pizzaOrdered.toppings[j] === "mushrooms") {
            totalPizzaCost += medMush
          }
          else if (pizzaOrdered.size === "2" && pizzaOrdered.toppings[j] === "bacon") {
            totalPizzaCost += medBac
          }
          else if (pizzaOrdered.size === "2" && pizzaOrdered.toppings[j] === "extraCheese") {
            totalPizzaCost += medChee
          }
          else if (pizzaOrdered.size === "2" && pizzaOrdered.toppings[j] === "greenPeppers") {
            totalPizzaCost += medGrePepp
          }
          else if (pizzaOrdered.size === "2" && pizzaOrdered.toppings[j] === "pineapple") {
            totalPizzaCost += medPine
          }
          else if (pizzaOrdered.size === "2" && pizzaOrdered.toppings[j] === "chicken") {
            totalPizzaCost += medChick
          }
          else if (pizzaOrdered.size === "2" && pizzaOrdered.toppings[j] === "bacon") {
            totalPizzaCost += medBac
          }
          else if (pizzaOrdered.size === "3" && pizzaOrdered.toppings[j] === "pepperoni") {
            totalPizzaCost += larPep
          }
          else if (pizzaOrdered.size === "3" && pizzaOrdered.toppings[j] === "mushrooms") {
            totalPizzaCost += larMush
          }
          else if (pizzaOrdered.size === "3" && pizzaOrdered.toppings[j] === "bacon") {
            totalPizzaCost += larBac
          }
          else if (pizzaOrdered.size === "3" && pizzaOrdered.toppings[j] === "extraCheese") {
            totalPizzaCost += larChee
          }
          else if (pizzaOrdered.size === "3" && pizzaOrdered.toppings[j] === "greenPeppers") {
            totalPizzaCost += larGrePepp
          }
          else if (pizzaOrdered.size === "3" && pizzaOrdered.toppings[j] === "pineapple") {
            totalPizzaCost += larPine
          }
          else if (pizzaOrdered.size === "3" && pizzaOrdered.toppings[j] === "chicken") {
            totalPizzaCost += larChick
          }
          else if (pizzaOrdered.size === "3" && pizzaOrdered.toppings[j] === "bacon") {
            totalPizzaCost += larBac
          }
        }

        var jsdelivr = document.forms[1].deliveryOption;
        console.log(jsdelivr);
        if (jsdelivr.value === "No") {
          $("#costOutput").text("Dear Esteemed Customer, your total cost will be ksh. " + totalPizzaCost.toString());
        }
        else if (jsdelivr.value === "Yes") {
          totalPizzaCost += deliveryCost;
          $("#costOutput").text("Dear Esteemed Customer, your total cost will be ksh " + totalPizzaCost.toString() + ". Your order will be delivered to your location.");
        }
        $("#summary").show(300, "linear");
        $("#numOfPizzas").text("Number of pizzas: " + numberOfPizzas.toString());
        $("#crustChosen").text("Crust(s) chosen: " + pizzaOrdered.crust);
        $("#toppingsChosen").text("Topping(s) chosen: " + pizzaOrdered.toppings);
      });
    });
  });
});
