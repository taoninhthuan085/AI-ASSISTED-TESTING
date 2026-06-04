# Root Cause Analysis

## BUG-001 - Search Accepts Special Characters

### Possible Root Cause

Input validation logic is missing in the search component.

### Impact

* Search module
* User experience
* Potential security concerns

### Recommendation

* Add input sanitization.
* Restrict unsupported characters.
* Validate search input before processing.

---

## BUG-002 - Cart Allows Quantity Equal To Zero

### Possible Root Cause

Quantity validation only checks numeric values and does not enforce a minimum quantity.

### Impact

* Shopping Cart
* Order calculation logic

### Recommendation

* Add minimum quantity validation.
* Prevent values less than 1.
* Display validation message.

---

## BUG-003 - Checkout Allows Out-Of-Stock Products

### Possible Root Cause

Inventory validation is not performed during checkout.

### Impact

* Checkout
* Inventory Management
* Order Processing

### Recommendation

* Re-validate inventory before order creation.
* Prevent checkout for unavailable products.
* Display stock warning message.

---

## BUG-004 - Duplicate Orders Created

### Possible Root Cause

Place Order button remains active after initial submission.

### Impact

* Checkout
* Order Management
* Customer Experience

### Recommendation

* Disable Place Order button after first click.
* Implement backend duplicate request protection.
* Add request idempotency handling.

---

## BUG-005 - Cart Not Cleared After Successful Checkout

### Possible Root Cause

Cart cleanup logic is not executed after successful order creation.

### Impact

* Shopping Cart
* Order Flow
* User Experience

### Recommendation

* Clear cart after successful checkout.
* Synchronize cart state with order creation result.

---

# Overall Findings

The majority of identified defects are concentrated in two business-critical modules:

1. Shopping Cart
2. Checkout

These modules directly impact purchasing flow and revenue generation and should be prioritized before production release.

### Recommended Priority Order

1. BUG-004 - Duplicate Orders Created
2. BUG-003 - Checkout Allows Out-Of-Stock Products
3. BUG-002 - Cart Allows Quantity Equal To Zero
4. BUG-005 - Cart Not Cleared After Successful Checkout
5. BUG-001 - Search Accepts Special Characters
