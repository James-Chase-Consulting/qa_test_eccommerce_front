import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  goToCheckout() {
    // prevent navigation if cart is empty
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    this.router.navigate(['/checkout']);
  }

  removeFromCart(item: any) {
    /*const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }*/
  }

  clearCart() {
    this.cartItems = [];
    localStorage.removeItem('cartItems');
  }
}
