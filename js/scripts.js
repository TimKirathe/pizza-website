// Business Logic
function Pizza(size, crust, toppings, orderNo, total) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.orderNo = orderNo;
  this.size = total;
}

var pizzaToppings = [];
var pizzaToppingsNames = [];
var toppingsCost = 0;
var grandTotal = 0;

var deliveryCost = 200;


// User Interface
$(document).ready(function() {
  $('#anotherOrderButton, .priceDisplay').hide();

  $("#orderSubmit").submit(function(event) {
    event.preventDefault();

      let pizzaSize = $("#pizzaSize").val();
      let pizzaCrust = $("#pizzaCrust").val();

      $.each($('input[name="toppings"]:checked'), function() {
        pizzaToppings.push($(this).val());
      });
      for (var i=0; i<pizzaToppings.length; i++) {
        if (pizzaToppings[i] === "100") {
          pizzaToppingsNames.push("Pepperoni")
        }
        else if (pizzaToppings[i] === "80") {
          pizzaToppingsNames.push("Mushrooms")
        }
        else if (pizzaToppings[i] === "150") {
          pizzaToppingsNames.push("Bacon")
        }
        else if (pizzaToppings[i] === "100") {
          pizzaToppingsNames.push("Green Pepper")
        }
        else if (pizzaToppings[i] === "70") {
          pizzaToppingsNames.push("Extra Chees")
        }
        else if (pizzaToppings[i] === "90") {
          pizzaToppingsNames.push("Pineapple")
        }
        else if (pizzaToppings[i] === "200") {
          pizzaToppingsNames.push("Beef")
        }
        else if (pizzaToppings[i] === "210") {
          pizzaToppingsNames.push("Ham")
        }
        else if (pizzaToppings[i] === "110") {
          pizzaToppingsNames.push("Chicken")
        }
        toppingsCost += parseInt(pizzaToppings[i]);
      }

      var total = parseInt(pizzaSize) + parseInt(pizzaCrust) + parseInt(toppingsCost);
      var orderNo = 1;

      $("#orderButton").hide();
      $("#anotherOrderButton").show();
      $(".priceDisplay").show();
      $("#orderNo").html('OrderNo: ' + orderNo + ' | ');
      $("#sizeOfPizza").html('Pizza size: ' + $("#pizzaSize option:selected").text() + ' | ');
      $("#crust").html('Crust: ' + $("#pizzaCrust option:selected").text() + ' | ');
      $("#toppingsChosen").html('Toppings Chosen: ' + $.each($('input[name="toppings"]:checked').siblings().text()) + ' | ');
      $("#totalAmount").html('Total: ' + total + ' | ');

      $("#orderSubmit")[0].reset();
  });
});
