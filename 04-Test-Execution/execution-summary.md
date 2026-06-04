# Test Execution Summary

## Test Cycle Information

| Item                | Value                                                   |
| ------------------- | ------------------------------------------------------- |
| Project             | AI-Generated E-Commerce Website                         |
| Test Type           | Functional Testing                                      |
| Test Scope          | Product Catalog, Search, Cart, Authentication, Checkout |
| Test Cases Executed | 50                                                      |
| Execution Date      | June 2026                                               |

---

## Execution Statistics

| Metric           | Count |
| ---------------- | ----- |
| Total Test Cases | 50    |
| Executed         | 50    |
| Passed           | 45    |
| Failed           | 5     |
| Blocked          | 0     |
| Not Executed     | 0     |

---

## Pass Rate

Pass Rate = 45 / 50 × 100

**90%**

---

## Failed Test Cases

| Test Case ID | Description                          | Related Bug |
| ------------ | ------------------------------------ | ----------- |
| TC014        | Search With Special Characters       | BUG-001     |
| TC027        | Quantity Equals Zero                 | BUG-002     |
| TC034        | Out Of Stock Product During Checkout | BUG-003     |
| TC046        | Multiple Clicks On Place Order       | BUG-004     |
| TC050        | Order Creation Clears Cart           | BUG-005     |

---

## Risk Assessment

### High Risk Areas

* Shopping Cart Validation
* Checkout Process
* Order Creation Logic

### Medium Risk Areas

* Search Input Validation
* Session Handling

### Low Risk Areas

* Product Catalog
* Product Browsing

---

## Conclusion

Most core business workflows passed successfully, including product browsing, searching, adding products to cart, user authentication, and basic checkout flows.

Several defects were identified in cart validation and checkout processing. These defects could impact user experience and order integrity and should be addressed before production release.
