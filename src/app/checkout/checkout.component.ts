import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    address: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log(this.checkoutForm.value);
      alert('Order placed successfully!');
      localStorage.removeItem('cartItems');
      this.router.navigate(['/']);
    }
  }
}
