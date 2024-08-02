import EventEmitter from "node:events";

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.initializeListeners();
  }

  createOrder(pizzaType) {
    console.log(`making you a ${pizzaType}`);
    setTimeout(() => {
      this.emit("order-ready");
    }, 1000);
  }

  initializeListeners() {
    this.on("order-ready", () => {
      console.log("Your pizza is ready!");
    });

    this.on("order", () => {
      this.createOrder("hawaiian");
    });
  }
}

const lukesPizza = new PizzaShop();

lukesPizza.emit("order");
