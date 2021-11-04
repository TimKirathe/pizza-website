// Business Logic
function Pizza(size, crust, toppings, orderNo, total) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.orderNo = orderNo;
  this.size = total;
}

var pizzaToppings = [];
var toppingsCost = 0;

var deliveryCost = 200;


// User Interface
$(document).ready(function() {
  $('#anotherOrderButton, .priceDisplay').hide();

  $("#orderSubmit").submit(function(event) {
    event.preventDefault();

      let pizzaSize = $("#pizzaSize").val();
      alert(pizzaSize);
      let pizzaCrust = $("#pizzaCrust").val();
      alert(pizzaCrust);

      $.each($('input[name="toppings"]:checked'), function() {
        pizzaToppings.push($(this).val());
      });
      alert(pizzaToppings);
      for (var i=0; i<pizzaToppings.length; i++) {
        toppingsCost += parseInt(pizzaToppings[i]);
      }
      alert(toppingsCost);
      var total = parseInt(pizzaSize) + parseInt(pizzaCrust) + parseInt(toppingsCost);
      var orderNo = 1;

      $("#anotherOrderButton").show();
      $(".priceDisplay").show();

  });
});
