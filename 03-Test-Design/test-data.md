# Test Data

## Product Catalog

| Data ID | Test Data             | Description           |
| ------- | --------------------- | --------------------- |
| PD001   | iPhone 16 Pro         | Existing product      |
| PD002   | Samsung Galaxy S25    | Existing product      |
| PD003   | Dell XPS 15           | Existing product      |
| PD004   | Logitech MX Master 3S | Existing accessory    |
| PD005   | Empty Product List    | No products available |

---

## Search

### Valid Search Keywords

| Data ID | Input  |
| ------- | ------ |
| SR001   | iPhone |
| SR002   | Dell   |
| SR003   | Galaxy |
| SR004   | Laptop |

### Partial Keywords

| Data ID | Input |
| ------- | ----- |
| SR005   | Phone |
| SR006   | Pro   |
| SR007   | XPS   |

### Invalid Keywords

| Data ID | Input     |
| ------- | --------- |
| SR008   | Nokia999  |
| SR009   | ABCXYZ123 |

### Boundary & Negative Inputs

| Data ID | Input                     |
| ------- | ------------------------- |
| SR010   | (empty)                   |
| SR011   | 500-character text        |
| SR012   | @#$%^&*                   |
| SR013   | ' OR 1=1 --               |
| SR014   | <script>alert(1)</script> |

---

## Filter

### Brand

| Data ID | Input    |
| ------- | -------- |
| FL001   | Apple    |
| FL002   | Samsung  |
| FL003   | Dell     |
| FL004   | Logitech |

### Category

| Data ID | Input      |
| ------- | ---------- |
| FL005   | Smartphone |
| FL006   | Laptop     |
| FL007   | Tablet     |
| FL008   | Accessory  |

### Invalid Filter Combination

| Data ID | Input                       |
| ------- | --------------------------- |
| FL009   | Apple + Accessory (No Data) |

---

## Shopping Cart

### Quantity Values

| Data ID | Input |
| ------- | ----- |
| CT001   | 1     |
| CT002   | 2     |
| CT003   | 10    |
| CT004   | 99    |

### Boundary Values

| Data ID | Input  |
| ------- | ------ |
| CT005   | 0      |
| CT006   | -1     |
| CT007   | 999999 |

### Cart Scenarios

| Data ID | Description            |
| ------- | ---------------------- |
| CT008   | Empty Cart             |
| CT009   | Single Product Cart    |
| CT010   | Multiple Products Cart |
| CT011   | Duplicate Product Cart |

---

## Authentication

### Valid Credentials

| Data ID | Username | Password    |
| ------- | -------- | ----------- |
| AU001   | testuser | Password123 |

### Invalid Credentials

| Data ID | Username    | Password      |
| ------- | ----------- | ------------- |
| AU002   | invaliduser | Password123   |
| AU003   | testuser    | WrongPassword |
| AU004   | invaliduser | WrongPassword |

### Boundary Inputs

| Data ID | Username | Password    |
| ------- | -------- | ----------- |
| AU005   | (empty)  | Password123 |
| AU006   | testuser | (empty)     |
| AU007   | (empty)  | (empty)     |

---

## Checkout

### Valid Orders

| Data ID | Scenario               |
| ------- | ---------------------- |
| CO001   | Single Product Order   |
| CO002   | Multiple Product Order |
| CO003   | Maximum Quantity Order |

### Invalid Orders

| Data ID | Scenario                 |
| ------- | ------------------------ |
| CO004   | Checkout Without Login   |
| CO005   | Checkout With Empty Cart |
| CO006   | Product Out Of Stock     |

### Security & Validation

| Data ID | Scenario                        |
| ------- | ------------------------------- |
| CO007   | Multiple Click Place Order      |
| CO008   | Refresh During Checkout         |
| CO009   | Session Expired During Checkout |

---

## Special Test Data

### Long Text Input

| Data ID | Description     |
| ------- | --------------- |
| SP001   | 255 characters  |
| SP002   | 500 characters  |
| SP003   | 1000 characters |

### Special Characters

| Data ID | Input                     |
| ------- | ------------------------- |
| SP004   | @#$%^&*                   |
| SP005   | <script>alert(1)</script> |
| SP006   | ' OR 1=1 --               |

### Unicode Characters

| Data ID | Input             |
| ------- | ----------------- |
| SP007   | Điện thoại        |
| SP008   | Máy tính xách tay |
| SP009   | 日本語商品             |

```
```
