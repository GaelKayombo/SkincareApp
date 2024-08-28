import { Component } from '@angular/core';

// Interface to define the structure of a Product
interface Product {
  name: string;
  type: string;
  expirationDate: Date;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage {
  // Array to hold products
  products: Product[] = [];

  // Object to hold a new product being added
  newProduct: Product = { name: '', type: '', expirationDate: new Date() };

  constructor() {}

  // Method to add a new product to the list
  addProduct() {
    if (this.newProduct.name && this.newProduct.type) {
      this.products.push({ ...this.newProduct }); // Add the new product to the list
      this.newProduct = { name: '', type: '', expirationDate: new Date() }; // Reset the new product object
    }
  }

  // Method to remove a product from the list
  removeProduct(product: Product) {
    this.products = this.products.filter((p) => p !== product); // Filter out the product to be removed
  }
}
