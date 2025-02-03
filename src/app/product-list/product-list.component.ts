import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
    },
  ];

  cartItems: any[] = [];

  addToCart(product: any) {
    this.cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    alert('Product added to cart!');
  }
}
