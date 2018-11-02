//Business Logic for User
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


//Cost prototype for Pizza topping and size selections
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
}

//Sizes:  12" = $10; 16" = $12; 20" = $15
//Toppings:  cheese = $1; olives = $2;  artichoke = $3; anchovy = $3
var order = new Order;
var arrayToppings = ["olives", "artichokes"]
order.addToppingAndSize('12"', arrayToppings)
arrayToppings = ["anchovy", "cheese"]
order.addToppingAndSize('16"', arrayToppings)
order.pizzas[0].addCost(order.pizzas[0].size, order.pizzas[0].cost);
