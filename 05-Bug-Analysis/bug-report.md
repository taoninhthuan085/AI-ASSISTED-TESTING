# Bug Reports

## BUG-001 - Search Accepts Special Characters

### Related Test Case

TC014 - Search With Special Characters

### Severity

Medium

### Priority

Medium

### Module

Search

### Description

The search field accepts special characters and processes the request without validation.

### Preconditions

User is on the Product Listing page.

### Steps To Reproduce

1. Enter "@#$%^&*" into the search field.
2. Click Search.

### Actual Result

The system processes the input without validation.

### Expected Result

The system should validate invalid characters or display an appropriate message.

### Status

Open

---

## BUG-002 - Cart Allows Quantity Equal To Zero

### Related Test Case

TC027 - Quantity Equals Zero

### Severity

High

### Priority

High

### Module

Shopping Cart

### Description

Users can update product quantity to 0.

### Preconditions

Product exists in cart.

### Steps To Reproduce

1. Add a product to cart.
2. Set quantity to 0.

### Actual Result

Cart accepts quantity value of 0.

### Expected Result

Quantity must be greater than 0.

### Status

Open

---

## BUG-003 - Checkout Allows Out-Of-Stock Products

### Related Test Case

TC034 - Out Of Stock Product During Checkout

### Severity

Critical

### Priority

High

### Module

Checkout

### Description

Users can place orders for products that are no longer available.

### Preconditions

Product exists in cart.

### Steps To Reproduce

1. Add product to cart.
2. Mark product as Out Of Stock.
3. Proceed to checkout.
4. Place order.

### Actual Result

Order is created successfully.

### Expected Result

Checkout should be blocked and an inventory warning displayed.

### Status

Open

---

## BUG-004 - Duplicate Orders Created

### Related Test Case

TC046 - Multiple Clicks On Place Order

### Severity

Critical

### Priority

Critical

### Module

Checkout

### Description

Multiple orders are created when users repeatedly click the Place Order button.

### Preconditions

User is on Checkout page.

### Steps To Reproduce

1. Add products to cart.
2. Proceed to checkout.
3. Click Place Order multiple times.

### Actual Result

Multiple orders are generated.

### Expected Result

Only one order should be created.

### Status

Open

---

## BUG-005 - Cart Not Cleared After Successful Checkout

### Related Test Case

TC050 - Order Creation Clears Cart

### Severity

Medium

### Priority

Medium

### Module

Shopping Cart

### Description

Products remain in the cart after successful order creation.

### Preconditions

Order has been placed successfully.

### Steps To Reproduce

1. Add products to cart.
2. Complete checkout.
3. Return to cart page.

### Actual Result

Products are still displayed in cart.

### Expected Result

Cart should be empty after successful order creation.

### Status

Open
