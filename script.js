// ProductProperties Class
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    // Calculates total value of product's stock
    getTotalValue() {
        return this.price * this.quantity;
      }
    
      // Returns string of the product details
      toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
      }
    
      // Applies discount to array of products
      static applyDiscount(products, discount) {
        products.forEach(p => p.price -= p.price * discount);
      }
}

// PerishableProductProperties subclass
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
      }
    
      // Overrides toString to include the expiration date
      toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
      }
}
 
// Store Class
class Store {
    constructor() {
      this.inventory = []; // Holds regular and perishable products
    }
  
    // Adds a product to the inventory
    addProduct(product) {
      this.inventory.push(product);
    }
  
    // Calculates total value off all items
    getInventoryValue() {
      return this.inventory.reduce((sum, product) => sum + product.getTotalValue(), 0);
    }
  
    // Finds a product by its name
    findProductByName(name) {
      return this.inventory.find(p => p.name.toLowerCase() === name.toLowerCase()) || null;
    }
  }

  // Inventory System


  const inventoryOutput = document.getElementById("inventoryOutput");
  const searchOutput = document.getElementById("searchOutput");
  
  // Create regular products
  const apple = new ProductProperties("Apple", 2.5, 50);
  const chair = new ProductProperties("Chair", 35.0, 10);
  const tv = new ProductProperties("TV", 400.0, 5);

  // Create perishable products
  const milk = new PerishableProductProperties("Milk", 1.5, 10, "2025-05-01");
  const yogurt = new PerishableProductProperties("Yogurt", 0.99, 20, "2025-04-25");

  // Create a new store and the products to its inventory
  const store = new Store();
  store.addProduct(apple);
  store.addProduct(chair);
  store.addProduct(tv);
  store.addProduct(milk);
  store.addProduct(yogurt);

  // Show inventory before discount
  inventoryOutput.innerText += "Inventory System\n\n";
  inventoryOutput.innerText += `Before Discount: $${store.getInventoryValue().toFixed(2)}\n\n`;
  
  // Apply a 15% discount to products in the inventory
  ProductProperties.applyDiscount(store.inventory, 0.15);
  
  // Show inventory value after discount
  inventoryOutput.innerText += `After 15% Discount: $${store.getInventoryValue().toFixed(2)}\n\n`;
  
  // Function to search for a prodcut by name
  function searchProduct() {
    // Get user input
    const searchInput = document.getElementById("searchInput").value.trim();
    // Search for product in the store
    const result = store.findProductByName(searchInput);
  
    // Display result of search
    searchOutput.innerText = `Search: ${searchInput}\n`;
    searchOutput.innerText += result ? result.toString() : "Product not found.";
  }
  
  window.searchProduct = searchProduct;