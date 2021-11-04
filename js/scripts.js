// Business Logic
function Pizza(size, crust, toppings, orderNo, total) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.orderNo = orderNo;
  this.size = total;
}

var deliveryCost = 200;


// User Interface
$(document).ready(function() {
  $("#anotherOrderButton").hide();
  $("#orderSubmit").submit(function(event) {
    event.preventDefault();
    $("#orderButton").click(function() {
      let pizzaCost = $("#pizzaCrust")
    });
  });
});
