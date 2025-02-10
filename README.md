# Install Docker on your local machine

Visit docker website and download the appropriate version for your machine architecture

# Step 1: Build the Docker Image

```bash
docker build -t ecommerce-qa-test .
```

# Step 2: Run the Docker Container

```bash
docker run -p 4200:80 ecommerce-qa-test
```

# (Optional) Step 1 and 2 Combined in Docker Compose -

**N/B**: Skip this step if you have done step 1 and 2 else leave step 1 and 2 and do this step

```bash
docker-compose build --no-cache

docker-compose up
```

Stop the running container with

```bash
docker-compose down
```

# Step 3 Access the App

Step 1 and Step 2 will build the Docker Image and start the container and this ecommerce sample app will be available at

Open the browser and navigate to the link below:

```js
http://localhost:4200
```

## Introduction

This document outlines the steps for QA testing of the Angular-based shopping cart application. The application uses local storage to persist cart data. There is no backend server.

## Test Cases

### 1. Adding Products to the Cart

- **Objective:** Verify that products can be added to the cart from the product list.
- **Steps:**
  1.  Navigate to the “Products” page.
  2.  Click the “Add to Cart” button for various products.
  3.  Verify that an “Added to cart!” alert appears for each click.
  4.  Navigate to the “Cart” page.
  5.  Verify that the added products are displayed in the cart with a quantity of 1.

### 2. Viewing the Cart

- **Objective:** Verify that the cart displays the correct items and quantities.
- **Steps:**
  1.  Add several products to the cart (as in Test Case 1).
  2.  Navigate to the “Cart” page.
  3.  Verify that all added products are listed.
  4.  Verify that the quantity for each product is displayed correctly.
  5.  Verify that the total price is calculated correctly based on the products and quantities.

### 3. Updating Quantities in the Cart

- **Objective:** Verify that product quantities can be updated in the cart.
- **Steps:**
  1.  Add several products to the cart.
  2.  Navigate to the “Cart” page.
  3.  Change the quantity of one or more products using the input fields.
  4.  Verify that the displayed quantity is updated accordingly.
  5.  Verify that the total price is recalculated correctly.

### 4. Removing Products from the Cart

- **Objective:** Verify that products can be removed from the cart.
- **Steps:**
  1.  Add several products to the cart.
  2.  Navigate to the “Cart” page.
  3.  Click the “Remove” button for one or more products.
  4.  Verify that the product is removed from the cart.
  5.  Verify that the total price is recalculated correctly.

### 5. Proceeding to Checkout

- **Objective:** Verify that the checkout process can be initiated from the cart.
- **Steps:**
  1.  Add several products to the cart.
  2.  Navigate to the “Cart” page.
  3.  Click the “Proceed to Checkout” link.
  4.  Verify that you are navigated to the “Checkout” page.

### 6. Completing Checkout

- **Objective:** Verify that the checkout process completes successfully.
- **Steps:**
  1.  Add several products to the cart.
  2.  Navigate to the “Checkout” page (via the Cart).
  3.  Click the “Checkout” button.
  4.  Verify that a “Checkout completed!” alert appears.

### 7. Local Storage Persistence

- **Objective:** Verify that cart data is persisted in local storage.
- **Steps:**
  1.  Add products to the cart.
  2.  Close and reopen the browser (or the browser tab).
  3.  Navigate to the “Cart” page.
  4.  Verify that the products previously added to the cart are still present.

### 8. Empty Cart

- **Objective:** Verify Empty Cart
- **Steps:**
  1. Open the Application
  2. Click on cart
  3. Verify that cart shows ‘Your cart is empty’ if there is no item

### 9. Additional

- **Objective:** Suggest Possible UI flaws and ways to improve app

## Known Issues

- None at this time.

## Reporting Bugs

Please report any bugs or issues found during testing by creating a new issue in the project’s issue tracker. Be sure to include detailed steps to reproduce the bug, the expected behavior, and the actual behavior.
