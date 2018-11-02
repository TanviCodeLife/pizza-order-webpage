//Business Logic for Order
function Order(){
  this.pizzas = [];
}


Order.prototype.addToppingAndSize = function(size, topping){
  var newPizza = new Pizza(size, topping);
  this.pizzas.push(newPizza);
}


//Business Logic for Pizza
function Pizza(size, topping){
  this.toppings = [];
  this.toppings = this.toppings.concat(topping);
  this.size = size;
  this.cost = 0;
}


Pizza.prototype.addCost = function(size, cost){
  for(var i = 0; i < this.toppings.length; i++){
    if(this.toppings[i] === "olives"){
      cost += 2;
    } else if(this.toppings[i] === "artichokes"){
      cost += 3;
    } else if(this.toppings[i] === "anchovy"){
      cost += 3;
    } else if(this.toppings[i] === "cheese"){
      cost +=1;
    }
    console.log(cost);
  }
  if(size === '12"'){
    cost += 10;
    console.log(cost);
  } else if(size === '16"'){
    cost += 12;
    console.log(cost);
  } else if(size === '20"'){
    cost += 20;
    console.log(cost);
  }
  console.log("total cost = $" + cost);
  return cost;
}

//User Interface Logic

var order = new Order;

function orderPizza(size, topping){
  order.addToppingAndSize(size, topping);
  var endCost = order.pizzas[0].addCost(order.pizzas[0].size, order.pizzas[0].cost);
  return endCost;
}

$(document).ready(function(){

  $("form#orderPizza").submit(function(event){
    event.preventDefault();
    var numbInput = $("select#add-numb").val();
    var arrayToppings = [];
    var sizeInput = $("select#add-size").val();
    $("input:checkbox[name=topping]:checked").each(function(){
      arrayToppings.push($(this).val());
    });

    var finalCost = orderPizza(sizeInput, arrayToppings);
    var stringToppings = arrayToppings.toString();

    $("#out-toppings").html(stringToppings);
    $("#out-size").html(sizeInput);
    $("#out-cost").html(finalCost);


  });

});
