# Test Cases

## Product Catalog

#### TC001 - View Product List

**Precondition**

* User accesses the website.

**Steps**

1. Navigate to the Products page.

**Expected Result**

* Product list is displayed successfully.
* Product name, price, category, and brand are visible.

---

#### TC002 - View Product Details

**Steps**

1. Select a product.
2. Click the product card.

**Expected Result**

* Product detail page is displayed.
* Product information matches the selected product.

---

#### TC003 - Verify Product Information Accuracy

**Steps**

1. Open a product detail page.

**Expected Result**

* Product name is displayed correctly.
* Product price is displayed correctly.
* Product category is displayed correctly.
* Product brand is displayed correctly.

---

#### TC004 - Verify Product Category Display

**Steps**

1. Open the Products page.

**Expected Result**

* Each product displays the correct category.

---

#### TC005 - Verify Product Brand Display

**Steps**

1. Open the Products page.

**Expected Result**

* Each product displays the correct brand.

---

#### TC006 - Verify Empty Product List Handling

**Steps**

1. Simulate an empty product dataset.
2. Open the Products page.

**Expected Result**

* User-friendly message is displayed.
* No system error occurs.

---

## Search

#### TC007 - Search Existing Product

**Steps**

1. Enter "iPhone" in the search field.
2. Click Search.

**Expected Result**

* Matching products are displayed.

---

#### TC008 - Search Non-Existing Product

**Steps**

1. Enter "Nokia 999" in the search field.
2. Click Search.

**Expected Result**

* No results found message is displayed.

---

#### TC009 - Search With Empty Keyword

**Steps**

1. Leave the search field empty.
2. Click Search.

**Expected Result**

* Validation message appears or all products are displayed.

---

#### TC010 - Search Using Partial Keyword

**Steps**

1. Enter "Phone" in the search field.
2. Click Search.

**Expected Result**

* Products containing the keyword are displayed.

---

#### TC011 - Search Is Case-Insensitive

**Steps**

1. Search for "iphone".
2. Search for "IPHONE".

**Expected Result**

* Same results are returned.

---

#### TC012 - Search With Leading Spaces

**Steps**

1. Enter " iPhone".
2. Click Search.

**Expected Result**

* Search results are returned correctly.

---

#### TC013 - Search With Trailing Spaces

**Steps**

1. Enter "iPhone ".
2. Click Search.

**Expected Result**

* Search results are returned correctly.

---

#### TC014 - Search With Special Characters

**Steps**

1. Enter "@#$%^" in the search field.
2. Click Search.

**Expected Result**

* System handles input safely.
* No crash or unexpected behavior occurs.

---

#### TC015 - Search With Long Text

**Steps**

1. Enter a 500-character string.
2. Click Search.

**Expected Result**

* System handles input properly.
* No crash occurs.

---

## Filter

#### TC016 - Filter By Brand

**Steps**

1. Select brand "Apple".

**Expected Result**

* Only Apple products are displayed.

---

#### TC017 - Filter By Category

**Steps**

1. Select category "Laptop".

**Expected Result**

* Only products in the Laptop category are displayed.

---

#### TC018 - Apply Brand And Category Filter

**Steps**

1. Select brand "Apple".
2. Select category "Smartphone".

**Expected Result**

* Only matching products are displayed.

---

#### TC019 - Remove Applied Filter

**Steps**

1. Apply a filter.
2. Remove the filter.

**Expected Result**

* Full product list is displayed again.

---

#### TC020 - Filter Returns No Result

**Steps**

1. Select a filter combination with no matching products.

**Expected Result**

* No results found message is displayed.

---

#### TC021 - Verify Filter Persistence

**Steps**

1. Apply a filter.
2. Navigate to another page.
3. Return to the Products page.

**Expected Result**

* Filter behavior matches system design.

---

## Shopping Cart

#### TC022 - Add Product To Cart

**Steps**

1. Select a product.
2. Click Add To Cart.

**Expected Result**

* Product is added successfully.
* Cart count is updated.

---

#### TC023 - Add Same Product Multiple Times

**Steps**

1. Add a product to cart.
2. Add the same product again.

**Expected Result**

* Product quantity is updated correctly.

---

#### TC024 - Remove Product From Cart

**Steps**

1. Add a product to cart.
2. Open the cart.
3. Remove the product.

**Expected Result**

* Product is removed successfully.

---

#### TC025 - Increase Product Quantity

**Steps**

1. Add a product to cart.
2. Increase quantity from 1 to 2.

**Expected Result**

* Quantity is updated correctly.
* Cart total is recalculated.

---

#### TC026 - Decrease Product Quantity

**Steps**

1. Add a product to cart.
2. Set quantity to 2.
3. Decrease quantity to 1.

**Expected Result**

* Quantity is updated correctly.
* Cart total is recalculated.

---

#### TC027 - Quantity Equals Zero

**Steps**

1. Set product quantity to 0.

**Expected Result**

* Validation message is displayed.
* Invalid value is not accepted.

---

#### TC028 - Negative Quantity

**Steps**

1. Enter quantity = -1.

**Expected Result**

* Invalid value is rejected.

---

#### TC029 - Maximum Quantity Validation

**Steps**

1. Enter an extremely large quantity value.

**Expected Result**

* System validates and restricts invalid values.

---

#### TC030 - Verify Cart Total Calculation

**Steps**

1. Add Product A ($100).
2. Add Product B ($200).

**Expected Result**

* Cart total equals $300.

---

#### TC031 - Verify Total After Quantity Update

**Steps**

1. Add a product priced at $100.
2. Increase quantity from 1 to 3.

**Expected Result**

* Cart total equals $300.

---

#### TC032 - Verify Total After Product Removal

**Steps**

1. Add Product A ($100).
2. Add Product B ($200).
3. Remove Product A.

**Expected Result**

* Cart total equals $200.

---

#### TC033 - Empty Cart State

**Steps**

1. Remove all products from cart.

**Expected Result**

* Empty cart message is displayed.

---

#### TC034 - Out Of Stock Product During Checkout

**Steps**

1. Add a product to cart.
2. Product becomes unavailable.
3. Proceed to checkout.

**Expected Result**

* Appropriate notification is displayed.

---

#### TC035 - Cart Persistence After Refresh

**Steps**

1. Add products to cart.
2. Refresh the browser.

**Expected Result**

* Cart behavior matches system design.

---

## Authentication

#### TC036 - Login With Valid Credentials

**Steps**

1. Enter valid username and password.
2. Click Login.

**Expected Result**

* User logs in successfully.

---

#### TC037 - Login With Invalid Credentials

**Steps**

1. Enter invalid username and password.
2. Click Login.

**Expected Result**

* Error message is displayed.

---

#### TC038 - Login With Empty Username

**Steps**

1. Leave username blank.
2. Enter password.
3. Click Login.

**Expected Result**

* Validation message is displayed.

---

#### TC039 - Login With Empty Password

**Steps**

1. Enter username.
2. Leave password blank.
3. Click Login.

**Expected Result**

* Validation message is displayed.

---

#### TC040 - Logout Successfully

**Steps**

1. Login successfully.
2. Click Logout.

**Expected Result**

* Session is terminated.
* User is redirected according to system design.

# Checkout

### TC041 - Checkout With Valid Cart

**Precondition**

* User is logged in.
* Cart contains at least one product.

**Steps**

1. Open Cart.
2. Click Checkout.
3. Review Order Summary.
4. Click Place Order.

**Expected Result**

* Order is created successfully.
* Success message is displayed.

---

### TC042 - Checkout With Empty Cart

**Precondition**

* User is logged in.
* Cart is empty.

**Steps**

1. Navigate to Checkout page.

**Expected Result**

* Checkout is blocked.
* Appropriate validation message is displayed.

---

### TC043 - Checkout Without Login

**Precondition**

* User is not logged in.
* Cart contains products.

**Steps**

1. Click Checkout.

**Expected Result**

* User is redirected to Login page.
* Order cannot be placed.

---

### TC044 - Verify Order Summary Information

**Precondition**

* User is logged in.
* Cart contains products.

**Steps**

1. Open Checkout page.

**Expected Result**

* Product name is displayed correctly.
* Quantity is displayed correctly.
* Price is displayed correctly.
* Total amount is displayed correctly.

---

### TC045 - Verify Total Amount In Checkout

**Precondition**

* Cart contains multiple products.

**Steps**

1. Open Checkout page.
2. Compare Order Summary total with Cart total.

**Expected Result**

* Both totals match exactly.

---

### TC046 - Multiple Clicks On Place Order

**Precondition**

* User is logged in.
* Cart contains products.

**Steps**

1. Click Place Order repeatedly.

**Expected Result**

* Only one order is created.
* Duplicate orders are prevented.

---

### TC047 - Checkout After Product Removal

**Precondition**

* User is logged in.
* Cart contains multiple products.

**Steps**

1. Remove one product from Cart.
2. Proceed to Checkout.

**Expected Result**

* Removed product is not included in Order Summary.
* Total amount is recalculated correctly.

---

### TC048 - Checkout With Large Quantity

**Precondition**

* User is logged in.

**Steps**

1. Add product with maximum allowed quantity.
2. Proceed to Checkout.

**Expected Result**

* Order is processed correctly.
* Total amount is calculated correctly.

---

### TC049 - Refresh Checkout Page

**Precondition**

* User is logged in.
* Cart contains products.

**Steps**

1. Open Checkout page.
2. Refresh browser.

**Expected Result**

* Order information remains accurate.
* No data is lost.

---

### TC050 - Order Creation Clears Cart

**Precondition**

* User is logged in.
* Cart contains products.

**Steps**

1. Complete checkout successfully.
2. Return to Cart page.

**Expected Result**

* Cart is cleared after successful order creation.



