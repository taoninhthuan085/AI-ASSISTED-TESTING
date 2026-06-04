# Test Result Matrix

## Product Catalog

| TC ID | Test Case                           | Result |
| ----- | ----------------------------------- | ------ |
| TC001 | View Product List                   | Pass   |
| TC002 | View Product Details                | Pass   |
| TC003 | Verify Product Information Accuracy | Pass   |
| TC004 | Verify Product Category Display     | Pass   |
| TC005 | Verify Product Brand Display        | Pass   |
| TC006 | Verify Empty Product List Handling  | Pass   |

---

## Search

| TC ID | Test Case                      | Result |
| ----- | ------------------------------ | ------ |
| TC007 | Search Existing Product        | Pass   |
| TC008 | Search Non-Existing Product    | Pass   |
| TC009 | Search With Empty Keyword      | Pass   |
| TC010 | Search Using Partial Keyword   | Pass   |
| TC011 | Search Is Case-Insensitive     | Pass   |
| TC012 | Search With Leading Spaces     | Pass   |
| TC013 | Search With Trailing Spaces    | Pass   |
| TC014 | Search With Special Characters | Fail   |
| TC015 | Search With Long Text          | Pass   |

---

## Filter

| TC ID | Test Case                       | Result |
| ----- | ------------------------------- | ------ |
| TC016 | Filter By Brand                 | Pass   |
| TC017 | Filter By Category              | Pass   |
| TC018 | Apply Brand And Category Filter | Pass   |
| TC019 | Remove Applied Filter           | Pass   |
| TC020 | Filter Returns No Result        | Pass   |
| TC021 | Verify Filter Persistence       | Pass   |

---

## Shopping Cart

| TC ID | Test Case                            | Result |
| ----- | ------------------------------------ | ------ |
| TC022 | Add Product To Cart                  | Pass   |
| TC023 | Add Same Product Multiple Times      | Pass   |
| TC024 | Remove Product From Cart             | Pass   |
| TC025 | Increase Product Quantity            | Pass   |
| TC026 | Decrease Product Quantity            | Pass   |
| TC027 | Quantity Equals Zero                 | Fail   |
| TC028 | Negative Quantity                    | Pass   |
| TC029 | Maximum Quantity Validation          | Pass   |
| TC030 | Verify Cart Total Calculation        | Pass   |
| TC031 | Verify Total After Quantity Update   | Pass   |
| TC032 | Verify Total After Product Removal   | Pass   |
| TC033 | Empty Cart State                     | Pass   |
| TC034 | Out Of Stock Product During Checkout | Fail   |
| TC035 | Cart Persistence After Refresh       | Pass   |

---

## Authentication

| TC ID | Test Case                      | Result |
| ----- | ------------------------------ | ------ |
| TC036 | Login With Valid Credentials   | Pass   |
| TC037 | Login With Invalid Credentials | Pass   |
| TC038 | Login With Empty Username      | Pass   |
| TC039 | Login With Empty Password      | Pass   |
| TC040 | Logout Successfully            | Pass   |

---

## Checkout

| TC ID | Test Case                        | Result |
| ----- | -------------------------------- | ------ |
| TC041 | Checkout With Valid Cart         | Pass   |
| TC042 | Checkout With Empty Cart         | Pass   |
| TC043 | Checkout Without Login           | Pass   |
| TC044 | Verify Order Summary Information | Pass   |
| TC045 | Verify Total Amount In Checkout  | Pass   |
| TC046 | Multiple Clicks On Place Order   | Fail   |
| TC047 | Checkout After Product Removal   | Pass   |
| TC048 | Checkout With Large Quantity     | Pass   |
| TC049 | Refresh Checkout Page            | Pass   |
| TC050 | Order Creation Clears Cart       | Fail   |

---

## Summary

| Result | Count |
| ------ | ----- |
| Pass   | 45    |
| Fail   | 5     |
| Total  | 50    |

---

## Bug Mapping

| Bug ID  | Related Test Case |
| ------- | ----------------- |
| BUG-001 | TC014             |
| BUG-002 | TC027             |
| BUG-003 | TC034             |
| BUG-004 | TC046             |
| BUG-005 | TC050             |
