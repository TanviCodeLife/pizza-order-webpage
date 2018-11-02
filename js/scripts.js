//Business Logic for User
// function User (){
//   this.pizza = pizza;
// }

//Business Logic for Pizza
function Pizza (){
  this.toppings = [];
  this.size = size;
  this.cost = 0;
}

//Add topping to Pizza prototype
Pizza.protoype.addTopping = function (toppingName){
 var newTopping = new Topping(toppingName);
 this.toppings.push(newTopping);
}


//Cost prototype for Pizza Selections
Pizza.prototype.addCost = function(size, topping){
for(var i = 0; i < this.toppings.length; i++){
  if(this.toppings[i].toppingName === "olives"){
      this.cost += 2;
      console.log(this.cost);
  } else if(this.toppings[i].toppingName === "artichoke"){
      this.toppings.push("artichokes");
      this.cost += 3;
      console.log(this.cost);
  } else if(this.toppings[i].toppingName === "anchovy"){
      this.toppings.push("anchovy");
      this.cost += 3;
      console.log(this.cost);
  } else if(this.toppings[i].toppingName === "cheese"){
      this.toppings.push("anchovy");
      this.cost +=1;
      console.log(this.cost);
  }
}
}

//Business Logic for Topping
function Topping (topping){
  this.toppingName = topping;
}

//Sizes:  12" = $10; 16" = $12; 20" = $15
//Toppings:  cheese = $1; olives = $2;  artichoke = $3; anchovy = $3
var pizza = new Pizza();
var newTopping = new Topping("olives");
var newTopping = new Topping("artichokes")
