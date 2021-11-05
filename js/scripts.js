// Business Logic
function Pizza(size, crust, orderNo, total) {
  this.size = size;
  this.crust = crust;
  this.orderNo = orderNo;
  this.total = total;
}

var pizzaToppings = [];
var pizzaToppingsNames = [];
var toppingsCost = 0;
var grandTotal = 0;

var deliveryCost = 200;


// User Interface
$(document).ready(function() {
  $('#anotherOrderButton, .priceDisplay, .checkoutSection, .orderingSection').hide();

  $("#startOrderButton").click(function() {

    $("#orderButton").click(function() {

      $(".checkoutSection").show();

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
        else if (pizzaToppings[i] === "105") {
          pizzaToppingsNames.push("Green Pepper")
        }
        else if (pizzaToppings[i] === "70") {
          pizzaToppingsNames.push("Extra Cheese")
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

      grandTotal += total;

      $("#orderButton").hide();
      $("#anotherOrderButton").show();
      $(".priceDisplay").show();
      $("#orderNo").html('OrderNo: ' + orderNo + ' | ');
      $("#sizeOfPizza").html('Pizza size: ' + $("#pizzaSize option:selected").text() + ' | ');
      $("#crust").html('Crust: ' + $("#pizzaCrust option:selected").text() + ' | ');
      $("#toppingsChosen").html('Toppings Chosen: ' + pizzaToppingsNames.join(", ") + ' | ');
      $("#totalAmount").html('Total: ' + total);
      $("#grandTotal").html('Grand total: ' + grandTotal);

      $("#checkoutButton").click(function() {
        var delivery = prompt("Would you like your pizza(s) delivered? Y / n");

        if (delivery === "Y") {
          var locationInput = prompt("Please enter your location:");
          alert("Dear Esteemed Customer, thank you for for order. Your delivery will be made to your location");
        }
        else if (delivery === "n") {
          alert("Dear Esteemed Customer, thank you for your order. We look forward to serving you again soon");
        }



        $("#anotherOrderButton").click(function() {
          orderNo = orderNo + 1;

          pizzaToppingsNames.splice(0, 9);
          pizzaToppings.splice(0, 9);

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
              pizzaToppingsNames.push("Extra Cheese")
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
          grandTotal += total;

          let anotherPizza = new Pizza(pizzaSize, pizzaCrust, orderNo, total);

          let anotherPizzaOrder = '<p>' + '<span id="orderNo">' + 'Order No: ' + anotherPizza.orderNo + ' | ' + '</span>' + '<span id="sizeOfPizza">' + 'Pizza Size: ' + $("#pizzaSize option:selected").text() + ' | ' + '</span>' + '<span id="crust">' + 'Pizza Crust: ' + $("#pizzaCrust option:selected").text() + ' | ' + '</span>' + '<span id="toppingsChosen">' + 'Toppings Chosen: ' + pizzaToppingsNames.join(", ") + ' | ' + '</span>' + '<span id="totalAmount">' + 'Total: ' + anotherPizza.total + '</span>' + '</p>'

          $(".priceDisplay").append(anotherPizzaOrder);
          $("#grandTotal").html('Grand total: ' + grandTotal);

        });
      });

    });
  });
});
