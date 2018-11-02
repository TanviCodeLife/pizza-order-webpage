//Business Logic for User
function Order(){
  this.pizzas = [];
}

Order.prototype.addToppingAndSize = function(size, toppings){
  var newPizza = new Pizza(size, toppings);
  this.pizzas.push(newPizza);
}

//Business Logic for Pizza
function Pizza(size, toppings){
  this.toppings = [];
  this.toppings.push(toppings);
  this.size = size;
  this.cost = [];
}

//Add topping to Pizza prototype
// Pizza.prototype.addTopping = function (topping){
//   var newTopping = new Topping(topping)
//   this.toppings.push(newTopping);
// }


//Cost prototype for Pizza topping and size selections
Pizza.prototype.addCost = function(topping, size, cost){
  for(var i = 0; i < topping.length; i++){
    if(topping[i].toppingName === "olives"){
      cost += 2;
    } else if(topping[i].toppingName === "artichokes"){
      cost += 3;
    } else if(topping[i].toppingName === "anchovy"){
      cost += 3;
    } else if(topping[i].toppingName === "cheese"){
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
order.addToppingsAndSize('12"',["artichoke", "anchovy"])
pizza.addCost(pizza.toppings, pizza.size, pizza.cost)
