class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalValue() {
        return this.price * this.quantity;
      }
    
      toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
      }
    
      static applyDiscount(products, discount) {
        products.forEach(p => p.price -= p.price * discount);
      }
}

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
      }
    
      toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
      }
}
    
class Store {
    constructor() {
      this.inventory = [];
    }
  
    addProduct(product) {
      this.inventory.push(product);
    }
  
    getInventoryValue() {
      return this.inventory.reduce((sum, product) => sum + product.getTotalValue(), 0);
    }
  
    findProductByName(name) {
      return this.inventory.find(p => p.name.toLowerCase() === name.toLowerCase()) || null;
    }
  }

  const output = document.getElementById("output");

  
  const apple = new ProductProperties("Apple", 2.5, 50);
  const chair = new ProductProperties("Chair", 35.0, 10);
  const tv = new ProductProperties("TV", 400.0, 5);

  
  const milk = new PerishableProductProperties("Milk", 1.5, 10, "2025-05-01");
  const yogurt = new PerishableProductProperties("Yogurt", 0.99, 20, "2025-04-25");

  const store = new Store();
  store.addProduct(apple);
  store.addProduct(chair);
  store.addProduct(tv);
  store.addProduct(milk);
  store.addProduct(yogurt);

  output.innerText += " Inventory System \n\n";
  output.innerText += `Before Discount: $${store.getInventoryValue().toFixed(2)}\n\n`;

  ProductProperties.applyDiscount(store.inventory, 0.15);

  output.innerText += `After 15% Discount: $${store.getInventoryValue().toFixed(2)}\n\n`;
