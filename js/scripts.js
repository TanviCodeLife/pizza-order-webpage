//Business Logic for User
// function User (){
//   this.pizza = pizza;
// }

//Business Logic for Pizza
function Pizza (){
  this.toppings = [];
  //this.size = size;
  this.cost = 0;
}

//Add topping to Pizza prototype
Pizza.prototype.addTopping = function (topping){
 var newTopping = new Topping(topping)
 this.toppings.push(newTopping);
}


//Cost prototype for Pizza topping selections
Pizza.prototype.addCost = function(topping, cost){
for(var i = 0; i < topping.length; i++){
  if(topping[i].toppingName === "olives"){
      cost += 2;
      console.log(cost);
  } else if(topping[i].toppingName === "artichokes"){
      cost += 3;
      console.log(cost);
  } else if(topping[i].toppingName === "anchovy"){
      cost += 3;
      console.log(cost);
  } else if(topping[i].toppingName === "cheese"){
      cost +=1;
      console.log(cost);
  }
}
console.log("total cost = " + cost);
}

//Business Logic for Topping
function Topping (name){
  this.toppingName = name;
}

//Sizes:  12" = $10; 16" = $12; 20" = $15
//Toppings:  cheese = $1; olives = $2;  artichoke = $3; anchovy = $3
var pizza = new Pizza();
var newTopping = new Topping("olives");
var newTopping = new Topping("artichokes")
pizza.addTopping("olives");
pizza.addCost(pizza.toppings, pizza.cost)
