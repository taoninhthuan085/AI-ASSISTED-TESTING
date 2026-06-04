# Test Scenarios

## SC001 - Successful Purchase Flow

**Objective**

Verify that a user can successfully purchase a product from product search to order completion.

**Flow**

Search Product
→ View Product Details
→ Add To Cart
→ Login
→ Checkout
→ Place Order

**Expected Result**

* User completes the purchase successfully.
* Order confirmation is displayed.
* Order information is recorded correctly.

---

## SC002 - Purchase Multiple Products

**Objective**

Verify that a user can purchase multiple products in a single order.

**Flow**

Browse Products
→ Add Multiple Products To Cart
→ Update Quantities
→ Verify Cart Total
→ Checkout
→ Place Order

**Expected Result**

* All selected products are included in the order.
* Total amount is calculated correctly.

---

## SC003 - Search And Filter Products

**Objective**

Verify that users can find products using search and filter functions.

**Flow**

Search Product
→ Apply Brand Filter
→ Apply Category Filter
→ View Filtered Results

**Expected Result**

* Only matching products are displayed.
* Search and filter results are accurate.

---

## SC004 - Empty Search Result

**Objective**

Verify system behavior when no products match the search criteria.

**Flow**

Enter Invalid Keyword
→ Search Product

**Expected Result**

* No Results Found message is displayed.
* System remains stable.

---

## SC005 - Product Discovery Journey

**Objective**

Verify that users can browse products and access product details.

**Flow**

Open Product Listing
→ Browse Products
→ Select Product
→ View Product Details

**Expected Result**

* Product details are displayed correctly.

---

## SC006 - Cart Management Flow

**Objective**

Verify shopping cart functionality.

**Flow**

Add Product To Cart
→ Increase Quantity
→ Decrease Quantity
→ Remove Product

**Expected Result**

* Cart updates correctly after each action.
* Total amount is recalculated correctly.

---

## SC007 - Invalid Quantity Validation

**Objective**

Verify quantity validation rules in the shopping cart.

**Flow**

Add Product To Cart
→ Enter Quantity = 0

OR

Add Product To Cart
→ Enter Negative Quantity

**Expected Result**

* Invalid quantity is rejected.
* Validation message is displayed.

---

## SC008 - Checkout Without Login

**Objective**

Verify that unauthenticated users cannot place orders.

**Flow**

Add Product To Cart
→ Proceed To Checkout

**Expected Result**

* User is redirected to Login page.
* Checkout is blocked.

---

## SC009 - Checkout With Empty Cart

**Objective**

Verify that users cannot checkout with an empty cart.

**Flow**

Open Checkout Page

**Expected Result**

* Order creation is prevented.
* Appropriate validation message is displayed.

---

## SC010 - Invalid Login Attempt

**Objective**

Verify login validation for invalid credentials.

**Flow**

Enter Invalid Username Or Password
→ Click Login

**Expected Result**

* Login fails.
* Error message is displayed.

---

## SC011 - Successful Login And Purchase

**Objective**

Verify successful login followed by a successful purchase.

**Flow**

Login
→ Browse Products
→ Add Product To Cart
→ Checkout
→ Place Order

**Expected Result**

* User can complete the order successfully.

---

## SC012 - Duplicate Order Prevention

**Objective**

Verify that duplicate orders are not created.

**Flow**

Checkout
→ Click Place Order Multiple Times

**Expected Result**

* Only one order is created.
* Duplicate submissions are prevented.

---

## SC013 - Out Of Stock During Checkout

**Objective**

Verify inventory validation during checkout.

**Flow**

Add Product To Cart
→ Product Becomes Out Of Stock
→ Proceed To Checkout

**Expected Result**

* User receives an inventory warning.
* Order cannot be completed for unavailable products.

---

## SC014 - Cart Persistence After Refresh

**Objective**

Verify cart behavior after page refresh.

**Flow**

Add Products To Cart
→ Refresh Browser

**Expected Result**

* Cart contents remain consistent according to system design.

---

## SC015 - Order Completion And Cart Cleanup

**Objective**

Verify post-order behavior.

**Flow**

Add Product To Cart
→ Checkout
→ Place Order Successfully
→ Return To Cart

**Expected Result**

* Cart is cleared after successful order creation.
* Order confirmation is available.

---

## SC016 - Session Expiration During Checkout

**Objective**

Verify behavior when user session expires during checkout.

**Flow**

Login
→ Add Product To Cart
→ Open Checkout
→ Session Expires
→ Click Place Order

**Expected Result**

* User is prompted to log in again.
* Order is not created.

---

## SC017 - Verify Order Summary Accuracy

**Objective**

Verify order summary information before placing an order.

**Flow**

Add Multiple Products To Cart
→ Proceed To Checkout

**Expected Result**

* Product names are correct.
* Quantities are correct.
* Prices are correct.
* Total amount is correct.

---

## SC018 - Large Quantity Purchase

**Objective**

Verify checkout behavior with large order quantities.

**Flow**

Add Product To Cart
→ Set Maximum Allowed Quantity
→ Checkout

**Expected Result**

* Order is processed correctly.
* Total amount is calculated correctly.

---

## SC019 - Search Using Special Characters

**Objective**

Verify search input validation.

**Flow**

Enter Special Characters
→ Search Product

**Expected Result**

* System handles input safely.
* No unexpected errors occur.

---

## SC020 - End-to-End Customer Journey

**Objective**

Verify the complete customer purchase journey.

**Flow**

Browse Products
→ Search Product
→ View Product Details
→ Add To Cart
→ Login
→ Update Quantity
→ Verify Cart Total
→ Checkout
→ Place Order

**Expected Result**

* Entire workflow functions correctly from start to finish.
* Order is created successfully.
