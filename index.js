import EventEmitter from "node:events";

class PizzaShop extends EventEmitter {
  constructor() {
    super();
  }

  createOrder(pizzaType) {
    console.log(`making you a ${pizzaType}`);
    setTimeout(() => {
      console.log("Your pizza is ready!");
    }, 1000);
  }
}

const lukesPizza = new PizzaShop();

lukesPizza.on("order", () => {
  lukesPizza.createOrder("hawaiian");
});

lukesPizza.emit("order");
