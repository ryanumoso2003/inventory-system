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
  