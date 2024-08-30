import { Component } from '@angular/core'; // Import Component correctly

interface Product {
  name: string;
  type: string;
  expiryDate: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage {
  // Predefined example skincare products
  products: Product[] = [
    { name: 'Hydrating Cleanser', type: 'Cleanser', expiryDate: '2024-10-01' },
    { name: 'Vitamin C Serum', type: 'Serum', expiryDate: '2024-12-15' },
    { name: 'Moisturizing Cream', type: 'Moisturizer', expiryDate: '2024-11-20' },
    { name: 'Sunscreen SPF 50', type: 'Sunscreen', expiryDate: '2024-09-10' },
    { name: 'Exfoliating Scrub', type: 'Exfoliant', expiryDate: '2025-01-05' }
  ];

  newProduct: Product = { name: '', type: '', expiryDate: '' };

  addProduct() {
    this.products.push({ ...this.newProduct });
    this.newProduct = { name: '', type: '', expiryDate: '' };
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }
}
