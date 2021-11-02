// Business Logic
function Pizza() {size, crust
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

var numberOfPizzas = 1;

var totalPizzaCost = 0;

var small = "";
var medium = "";
var large = "";

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
  $("#newPizza").click(function() {
    numberOfPizzas += 1;
    var sizeInput = $(".pizzaSize").val();
    var crustInput = $(".crustType").val();
    var toppingsInput = function () {
      for (var i=0; i<checkboxField.length; i++) {
      return checkboxField[i].checked.value
    }
  }
    var newPiz = new Pizza(sizeInput, crustInput, toppingsInput);
    console.log(newPiz.toppings);
    $("#pizzas").append('<br>' +
    '<br>' +
    '<div class="layoutPage">' +
    '<div class="form-group box1">' +
    '<label for="pizzaSize" class="display-6">Please select your pizza size:</label>' +
    '<br>' +
    '<br>' +
    '<select class="form-control pizzaSize">' +
    '<option value="1">Small</option>' +
    '<option value="2">Medium</option>' +
    '<option value="3">Large</option>' +
    '</select>' +
    '</div>' +
    '<br>' +
    '<br>' +
    '<div class="form-group box2">' +
    '<label for="crustType" class="display-6">Please select the type of crust you would like:</label>' +
    '<select class="form-control crustType">' +
    '<option value="Stuffed Crust">Stuffed Crust</option>' +
    '<option value="Flat Bread Crust">Flat Bread Crust</option>' +
    '<option value="Thin Crust">Thin Crust</option>' +
    '<option value="Thin Crust">Thick Crust</option>' +
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
    '</div>');
  });

  $("#pizzaInput").submit(function(event) {
    event.preventDefault();

    $(".pizzaSize").each(function() {
      pizzaSizes.push($(this).val());
      console.log(pizzaSizes);
    });

    $(".crustType").each(function() {
      pizzaCrusts.push($(this).val());
      console.log(pizzaCrusts);
    });

    var checkboxField = document.forms[0].topping;
    console.log(checkboxField, typeof(checkboxField));

    for (var i=0; i<checkboxField.length; i++) {
      if (checkboxField[i].checked) {
        pizzaToppings.push(checkboxField[i].value);
        console.log(pizzaToppings);
      }
    }

    $("#checkoutHeading").show(300, "linear");
    $("#orderForm").show(300, "linear");
    $("#location").submit(function(event) {
      event.preventDefault();

      for (var h=0; h<numberOfPizzas; h++) {
        if (pizzaSizes[h] === "1") {
          totalPizzaCost += smallPizza
          for (var e=0; e<pizzaToppings.length; e++) {
            if (pizzaToppings[e] === "pepperoni") {
              totalPizzaCost += smPep
            }
            else if (pizzaToppings[e] === "mushrooms") {
              totalPizzaCost += smMush
            }
            else if (pizzaToppings[e] === "bacon") {
              totalPizzaCost += smBac
            }
            else if (pizzaToppings[e] === "extraCheese") {
              totalPizzaCost += smChee
            }
            else if (pizzaToppings[e] === "greenPeppers") {
              totalPizzaCost += smGrePepp
            }
            else if (pizzaToppings[e] === "pineapple") {
              totalPizzaCost += smPine
            }
            else if (pizzaToppings[e] === "chicken") {
              totalPizzaCost += smChick
            }
            else if (pizzaToppings[e] === "beef") {
              totalPizzaCost += smBeef
            }
          }
        }
        console.log(totalPizzaCost);
        if (pizzaSizes[h] === "2") {
          totalPizzaCost += mediumPizza
          for (var e=0; e<pizzaToppings.length; e++) {
            if (pizzaToppings[e] === "pepperoni") {
              totalPizzaCost += medPep
            }
            else if (pizzaToppings[e] === "mushrooms") {
              totalPizzaCost += medMush
            }
            else if (pizzaToppings[e] === "bacon") {
              totalPizzaCost += medBac
            }
            else if (pizzaToppings[e] === "extraCheese") {
              totalPizzaCost += medChee
            }
            else if (pizzaToppings[e] === "greenPeppers") {
              totalPizzaCost += medGrePepp
            }
            else if (pizzaToppings[e] === "pineapple") {
              totalPizzaCost += medPine
            }
            else if (pizzaToppings[e] === "chicken") {
              totalPizzaCost += medChick
            }
            else if (pizzaToppings[e] === "beef") {
              totalPizzaCost += medBeef
            }
          }
        }
        else if (pizzaSizes[h] === "3") {
          totalPizzaCost += largePizza
          for (var e=0; e<pizzaToppings.length; e++) {
            if (pizzaToppings[e] === "pepperoni") {
              totalPizzaCost += larPep
            }
            else if (pizzaToppings[e] === "mushrooms") {
              totalPizzaCost += larMush
            }
            else if (pizzaToppings[e] === "bacon") {
              totalPizzaCost += larBac
            }
            else if (pizzaToppings[e] === "extraCheese") {
              totalPizzaCost += larChee
            }
            else if (pizzaToppings[e] === "greenPeppers") {
              totalPizzaCost += larGrePepp
            }
            else if (pizzaToppings[e] === "pineapple") {
              totalPizzaCost += larPine
            }
            else if (pizzaToppings[e] === "chicken") {
              totalPizzaCost += larChick
            }
            else if (pizzaToppings[e] === "beef") {
              totalPizzaCost += larBeef
            }
          }
        }
        if (pizzaCrusts[h] === "Stuffed Crust") {
          totalPizzaCost += stuffedCrust
        }
        else if (pizzaCrusts[h] === "Flat Bread Crust") {
          totalPizzaCost += flatBreadCrust
        }
        else if (pizzaCrusts[h] === "Thin Crust") {
          totalPizzaCost += thinCrust
        }
        else if (pizzaCrusts[h] === "Thick Crust") {
          totalPizzaCost += thickCrust
        }
      }
        /*if (pizzaCrusts[h] === "Stuffed Crust") {
          totalPizzaCost += stuffedCrust
        }
        else if (pizzaCrusts[h] === "Flat Bread Crust") {
          totalPizzaCost += flatBreadCrust
        }
        else if (pizzaCrusts[h] === "Thin Crust") {
          totalPizzaCost += thinCrust
        }
        else if (pizzaCrusts[h] === "Thick Crust") {
          totalPizzaCost += thickCrust
        }*/
      /*console.log(large);
      for (var j=0; j<pizzaToppings.length; j++) {
        if (pizzaToppings[j] === "pepperoni" && small === "small") {
          totalPizzaCost += smPep
        }
        else if (pizzaToppings[j] === "mushrooms" && small === "small") {
          totalPizzaCost += smMush
        }
        else if (pizzaToppings[j] === "bacon" && small === "small") {
          totalPizzaCost += smBac
        }
        else if (pizzaToppings[j] === "extraCheese" && small === "small") {
          totalPizzaCost += smChee
        }
        else if (pizzaToppings[j] === "greenPeppers" && small === "small") {
          totalPizzaCost += smGrePepp
        }
        else if (pizzaToppings[j] === "pineapple" && small === "small") {
          totalPizzaCost += smPine
        }
        else if (pizzaToppings[j] === "chicken" && small === "small") {
          totalPizzaCost += smChick
        }
        else if (pizzaToppings[j] === "beef" && small === "small") {
          totalPizzaCost += smBac
        }
        else if (pizzaToppings[j] === "pepperoni" && medium === "medium") {
          totalPizzaCost += medPep
        }
        else if (pizzaToppings[j] === "mushrooms" && medium === "medium") {
          totalPizzaCost += medMush
        }
        else if (pizzaToppings[j] === "bacon" && medium === "medium") {
          totalPizzaCost += medBac
        }
        else if (pizzaToppings[j] === "extraCheese" && medium === "medium") {
          totalPizzaCost += medChee
        }
        else if (pizzaToppings[j] === "greenPeppers" && medium === "medium") {
          totalPizzaCost += medGrePepp
        }
        else if (pizzaToppings[j] === "pineapple" && medium === "medium") {
          totalPizzaCost += medPine
        }
        else if (pizzaToppings[j] === "chicken" && medium === "medium") {
          totalPizzaCost += medChick
        }
        else if (pizzaToppings[j] === "beef" && medium === "medium") {
          totalPizzaCost += medBac
        }
        else if (pizzaToppings[j] === "pepperoni" && large === "large") {
          totalPizzaCost += larPep
        }
        else if (pizzaToppings[j] === "mushrooms" && large === "large") {
          totalPizzaCost += larMush
        }
        else if (pizzaToppings[j] === "bacon" && large === "large") {
          totalPizzaCost += larBac
        }
        else if (pizzaToppings[j] === "extraCheese" && large === "large") {
          totalPizzaCost += larChee
        }
        else if (pizzaToppings[j] === "greenPeppers" && large === "large") {
          totalPizzaCost += larGrePepp
        }
        else if (pizzaToppings[j] === "pineapple" && large === "large") {
          totalPizzaCost += larPine
        }
        else if (pizzaToppings[j] === "chicken" && large === "large") {
          totalPizzaCost += larChick
        }
        else if (pizzaToppings[j] === "beef" && large === "large") {
          totalPizzaCost += larBac
        }
      }*/
      console.log(totalPizzaCost);
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
      $("#crustChosen").text("Crust(s) chosen: " + pizzaCrusts);
      $("#toppingsChosen").text("Topping(s) chosen: " + pizzaToppings);
    });
    /*$("#pizzaInput")[0].reset();*/
  });
});
