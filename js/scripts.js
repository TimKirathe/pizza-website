// Business Logic
var totalPizzaCost = 0;

var pizzaSizes = [];
var pizzaCrusts = [];
var pizzaToppings = [];

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

  $("#pizzaInput").submit(function(event) {
    event.preventDefault();
    totalPizzaCost = totalPizzaCost - totalPizzaCost;
    pizzaSizes.splice(0, 1);
    pizzaSizes.push($(".pizzaSize").val());
    console.log(pizzaSizes);
    if (pizzaSizes[0] === "1") {
      totalPizzaCost += smallPizza
    }
    else if (pizzaSizes[0] === "2") {
      totalPizzaCost += mediumPizza
    }
    else if (pizzaSizes[0] === "3") {
      totalPizzaCost += largePizza
    }
    pizzaCrusts.splice(0, 2);
    pizzaCrusts.push($(".crustType").val());
    console.log(pizzaCrusts);
    if (pizzaCrusts[0] === "Stuffed Crust") {
      totalPizzaCost += stuffedCrust
    }
    else if (pizzaCrusts[0] === "Flat Bread Crust") {
      totalPizzaCost += flatBreadCrust
    }
    else if (pizzaCrusts[0] === "Thin Crust") {
      totalPizzaCost += thinCrust
    }
    else if (pizzaCrusts[0] === "Thick Crust") {
      totalPizzaCost += thickCrust
    }

    var checkboxField = document.forms[0].topping;
    console.log(checkboxField, typeof(checkboxField));

    pizzaToppings.splice(0, 8);
    for (var i=0; i<checkboxField.length; i++) {
      if (checkboxField[i].checked) {
        pizzaToppings.push(checkboxField[i].value);
        console.log(pizzaToppings);
      }
    }

    var numberOfPizzas = parseInt($("#numberOfPizzasInput").val());
    console.log(numberOfPizzas);

      for (d=0; d<pizzaToppings.length; d++) {
        if (pizzaSizes[0] === "1" && pizzaToppings[d] === "pepperoni") {
          totalPizzaCost += smPep
        }
        else if (pizzaSizes[0] === "1" && pizzaToppings[d] === "mushrooms") {
          totalPizzaCost += smMush
        }
        else if (pizzaSizes[0] === "1" && pizzaToppings[d] === "bacon") {
          totalPizzaCost += smBac
        }
        else if (pizzaSizes[0] === "1" && pizzaToppings[d] === "extraCheese") {
          totalPizzaCost += smChee
        }
        else if (pizzaSizes[0] === "1" && pizzaToppings[d] === "greenPeppers") {
          totalPizzaCost += smGrePepp
        }
        else if (pizzaSizes[0] === "1" && pizzaToppings[d] === "pineapple") {
          totalPizzaCost += smPine
        }
        else if (pizzaSizes[0] === "1" && pizzaToppings[d] === "chicken") {
          totalPizzaCost += smChick
        }
        else if (pizzaSizes[0] === "1" && pizzaToppings[d] === "beef") {
          totalPizzaCost += smBeef
        }
        else if (pizzaSizes[0] === "2" && pizzaToppings[d] === "pepperoni") {
          totalPizzaCost += medPep
        }
        else if (pizzaSizes[0] === "2" && pizzaToppings[d] === "mushrooms") {
          totalPizzaCost += mediumPizza + medMush
        }
        else if (pizzaSizes[0] === "2" && pizzaToppings[d] === "bacon") {
          totalPizzaCost += medBac
        }
        else if (pizzaSizes[0] === "2" && pizzaToppings[d] === "extraCheese") {
          totalPizzaCost += medChee
        }
        else if (pizzaSizes[0] === "2" && pizzaToppings[d] === "greenPeppers") {
          totalPizzaCost += medGrePepp
        }
        else if (pizzaSizes[0] === "2" && pizzaToppings[d] === "pineapple") {
          totalPizzaCost += medPine
        }
        else if (pizzaSizes[0] === "2" && pizzaToppings[d] === "chicken") {
          totalPizzaCost += medChick
        }
        else if (pizzaSizes[0] === "2" && pizzaToppings[d] === "beef") {
          totalPizzaCost += medBac
        }
        else if (pizzaSizes[0] === "3" && pizzaToppings[d] === "pepperoni") {
          totalPizzaCost += larPep
        }
        else if (pizzaSizes[0] === "3" && pizzaToppings[d] === "mushrooms") {
          totalPizzaCost += larMush
        }
        else if (pizzaSizes[0] === "3" && pizzaToppings[d] === "bacon") {
          totalPizzaCost += larBac
        }
        else if (pizzaSizes[0] === "3" && pizzaToppings[d] === "extraCheese") {
          totalPizzaCost += larChee
        }
        else if (pizzaSizes[0] === "3" && pizzaToppings[d] === "greenPeppers") {
          totalPizzaCost += larGrePepp
        }
        else if (pizzaSizes[0] === "3" && pizzaToppings[d] === "pineapple") {
          totalPizzaCost += larPine
        }
        else if (pizzaSizes[0] === "3" && pizzaToppings[d] === "chicken") {
          totalPizzaCost += larChick
        }
        else if (pizzaSizes[0] === "3" && pizzaToppings[d] === "beef") {
          totalPizzaCost += larBeef
        }
      }

      totalPizzaCost *= numberOfPizzas;

      $("#checkoutHeading").show(300, "linear");
      $("#orderForm").show(300, "linear");
      $("#location").submit(function(event) {
      event.preventDefault();

      var jsdelivr = document.forms[1].deliveryOption;
      console.log(jsdelivr);
      if (jsdelivr.value === "No") {
        $("#incrementOutputs").append($("#costOutput").text("Dear Esteemed Customer, your total cost will be ksh. " + totalPizzaCost.toString()));
      }
      else if (jsdelivr.value === "Yes") {
        totalPizzaCost += deliveryCost;
        $("#incrementOutputs").append($("#costOutput").text("Dear Esteemed Customer, your total cost will be ksh " + totalPizzaCost.toString() + ". Your order will be delivered to your location."));
      }
      $("#summary").show(300, "linear");
      $("#incrementOutputs").append($("#numOfPizzas").text("Number of pizzas: " + numberOfPizzas.toString()));
      $("#incrementOutputs").append($("#crustChosen").text("Crust chosen: " + pizzaCrusts));
      $("#incrementOutputs").append($("#toppingsChosen").text("Topping(s) chosen: " + pizzaToppings));

    });

    $("#pizzaInput")[0].reset();

  });
});
