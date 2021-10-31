// Business Logic
function NewPizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}
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

var medPep =



// User Interface
$(document).ready(function() {
  $("#newPizza").click(function() {
    $("#pizzas").append('<div class="form-group">' +
      '<label for="pizzaSize" class="display-6">Please select your pizza size:</label>' +
      '<select class="form-control" id="pizzaSize">' +
        '<option id="small" value="1">Small</option>' +
        '<option id="medium" value="2">Medium</option>' +
        '<option id="large" value="3">Large</option>' +
      '</select>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="crustType" class="display-6">Please select the type of crust you would like:</label>' +
      '<select class="form-control" id="crustType">' +
        '<option id="stuffed" value="1">Stuffed Crust</option>' +
        '<option id="flatBread" value="2">Flat Bread Crust</option>' +
        '<option id="thin" value="3">Thin Crust</option>' +
        '<option id="thick" value="4">Thick Crust</option>' +
      '</select>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="toppings" class="display-6">Please select the toppings you would like on your pizza:</label>' +
      '<div id="toppings">' +
        '<input class="" type="checkbox" id="pepperoni" /> Pepperoni' +
        '<br>' +
        '<input class="" type="checkbox" id="mushrooms" /> Mushrooms' +
        '<br>' +
        '<input class="" type="checkbox" id="bacon" /> Bacon' +
        '<br>' +
        '<input class="" type="checkbox" id="extraCheese" /> Extra Cheese' +
        '<br>' +
        '<input class="" type="checkbox" id="greenPeppers" /> Green Peppers' +
        '<br>' +
        '<input class="" type="checkbox" id="pineapple" /> Pineapple' +
        '<br>' +
        '<input class="" type="checkbox" id="chicken" /> Chicken' +
        '<br>' +
        '<input class="" type="checkbox" id="beef" /> Beef' +
      '</div>' +
    '</div>');
  });
  $("#pizzaInput").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("#pizzaSize").val();
    /*alert(pizzaSize);*/
    var pizzaCrust = $("#crustType").val();
    /*alert(pizzaCrust);*/
    var pizzaOrdered = new NewPizza(pizzaSize, pizzaCrust);
    var checkboxField = document.forms[0].topping;
    console.log(checkboxField, typeof(checkboxField));
    for (var i=0; i<checkboxField.length; i++) {
      if (checkboxField[i].checked) {
        pizzaOrdered.toppings.push(checkboxField[i].value);
        console.log(pizzaOrdered.toppings);
        /*alert("The selected option was " + checkboxField[i].value);*/
      }
    }
    $("#orderForm").show(600, "linear");
    $("#location").submit(function(event2) {
      event2.preventDefault();

      var jsdelivr = document.forms[1].deliveryOption;
      console.log(jsdelivr);
      if (jsdelivr.value === "No") {
        $("#costOutput").text("Your total cost will be ");
      }
    });
  });
});
