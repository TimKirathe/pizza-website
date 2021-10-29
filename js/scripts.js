












// User Interface
$(document).ready(function() {
  $("#newPizza").click(function() {
    $("#pizzas").append('<div class="form-group">' +
      '<label for="pizzaSize" class="display-4">Please select your pizza size:</label>' +
      '<select class="form-control" id="pizzaSize">' +
        '<option id="small" value="1">Small</option>' +
        '<option id="medium" value="2">Medium</option>' +
        '<option id="large" value="3">Large</option>' +
      '</select>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="crustType" class="display-4">Please select the type of crust you would like:</label>' +
      '<select class="form-control" id="crustType">' +
        '<option id="stuffed" value="1">Stuffed Crust <blockquote>Stuffed crust pizza is pizza topped with cheese and glazed with garlic and herb sauce and then rolled around mozzarella.</blockquote></option>' +
        '<option id="flatBread" value="2">Flat Bread Crust <blockquote>The flatbread crust is a lighter, thin pizza crust often eaten as an appetizer. It has become incredibly popular over the past couple of years especially as more people look for more health conscious kind of pizzas.</blockquote></option>' +
        '<option id="thin" value="3">Thin Crust <blockquote>Thin crust pizzas are characterized by a crunchy edge and a slightly slimmer center where cheese, sauce and other ingredients are placed. To get this kind of crust you have to stretch out the dough until it forms edges. Fair warning though, this kind of pizza can only accommodate not so many toppings.</blockquote></option>' +
        '<option id="thick" value="4">Thick Crust <blockquote>The thick crust pizza is a pizza that typically ranges between 1/8 to ¼ inches in thickness. It is generally rolled out on a board and molded into shape in the pan used to bake it to make it as thick as possible.</blockquote></option>' +
      '</select>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="toppings" class="display-4">Please select the toppings you would like on your pizza:</label>' +
      '<select class="form-control" id="toppings">' +
        '<option id="pepperoni" value="1">Pepperoni</option>' +
        '<option id="mushrooms" value="2">Mushrooms</option>' +
        '<option id="bacon" value="3">Bacon</option>' +
        '<option id="extra-cheese" value="4">Extra cheese</option>' +
        '<option id="green-peppers" value="5">Green peppers</option>' +
        '<option id="pineapple" value="6">Pineapple</option>' +
        '<option id="chicken" value="7">Chicken</option>' +
        '<option id="beef" value="8">Beef</option>' +
      '</select>' +
    '</div>');
  });
});
