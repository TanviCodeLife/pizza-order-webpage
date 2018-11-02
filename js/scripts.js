//Business Logic for User
function userOrder (){
  this.pizza = pizza;
}

//Business Logic for Pizza
function Pizza (size){
  this.toppings = [];
  this.size = size;
  this.cost = 0;
}

//Add topping to Pizza prototype
Pizza.prototype.addTopping = function (topping){
  var newTopping = new Topping(topping)
  this.toppings.push(newTopping);
}


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

//Business Logic for Topping
function Topping (name){
  this.toppingName = name;
}

//Sizes:  12" = $10; 16" = $12; 20" = $15
//Toppings:  cheese = $1; olives = $2;  artichoke = $3; anchovy = $3
var pizza = new Pizza('10"');
pizza.addTopping("olives");
pizza.addTopping("artichokes");
pizza.addCost(pizza.toppings, pizza.size, pizza.cost)
