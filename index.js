import EventEmitter from "node:events";

class PizzaShop extends EventEmitter {
  constructor(company) {
    super();
    this.initializeListeners();
  }

  createOrder(type) {
    console.log(`making you a ${type} pizza`);
    setTimeout(() => {
      this.emit("order-ready");
    }, 1000);
  }

  initializeListeners() {
    this.on("order-ready", () => {
      console.log("Your pizza is ready!");
    });

    this.on("order", (type) => {
      this.createOrder(type);
    });
  }
}

const lukesPizza = new PizzaShop("Luke's Pizza");

lukesPizza.emit("order", "hawaiian");

const finnsPizza = new PizzaShop("Finn's Pizza");

finnsPizza.emit("order", "canadian");
