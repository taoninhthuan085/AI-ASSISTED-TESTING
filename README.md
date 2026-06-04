# AI-Assisted Testing Portfolio

## 🚀 Overview
This repository serves as a practical demonstration of integrating **Generative AI across the Software Testing Lifecycle (STLC)**. 

Starting from a baseline business requirement, I utilized AI to generate a functional E-Commerce web application. I then applied **AI-assisted testing techniques** coupled with strict **human-in-the-loop QA oversight** to analyze requirements, architect test suites, generate robust data matrices, and perform advanced root-cause analysis on discovered defects.

> **Core Objective:** This project does not merely showcase basic AI prompting; it demonstrates how a seasoned QA Engineer can leverage AI to exponentially increase testing productivity and test coverage while maintaining ultimate ownership of software quality and risk mitigation.

---

## 🎯 Project Scope & Architecture
The target system is an AI-generated Technology E-Commerce Platform supporting the following core modules:
* **Product Catalog:** Dynamic listing, multi-attribute filtering (Brand/Category), and real-time partial/full keyword search.
* **Shopping Cart Engine:** Dynamic state updates, quantity management, and subtotal/total financial calculations.
* **Authentication & Session:** State-persisted user login/logout and session validation.
* **Checkout Gateway:** Order summary compilation, inventory validation, and transaction submission.

---

## 🔄 AI-Assisted QA Workflow

```text
Business Requirement 
        │
        ▼ (Targeted Prompt Engineering)
AI-Generated Application 
        │
        ▼ (Risk-Based Testing Analysis)
Requirement Analysis & Gap Identification 
        │
        ▼ (Combinatorial Matrix Generation)
Test Scenario & Case Architecture 
        │
        ▼ (Automated Constraint-Based Generation)
Test Data Matrix Generation 
        │
        ▼ (Manual Exploration & Session-Based Testing)
Test Execution & Defect Discovery 
        │
        ▼ (Log/Code Diagnostics via AI)
Root Cause Analysis (RCA) & Technical Reporting
```

---

## Repository Structure

```text
AI-ASSISTED-TESTING/
│
├── 01-Requirement-Analysis/
│   ├── Requirement.md          # Original raw business requirements
│   ├── Prompt.md               # Prompt engineering framework for analysis
│   └── AI-Analysis-Review.md   # Human-evaluated risk analysis & gaps
│
├── 02-Generated-App/
│   ├── index.html
│   ├── style.css
│   └── script.js               # AI-generated core application logic
│
├── 03-Test-Design/
│   ├── test-scenarios.md       # High-level end-to-end user journeys
│   ├── test-cases.md           # Formalized functional & negative test cases
│   └── test-data.md            # Boundary, security, and edge-case data sets
│
├── 04-Test-Execution/
│   ├── execution-summary.md    # Test cycle velocity and metrics
│   └── test-result-matrix.md   # Traceability matrix and pass/fail states
│
├── 05-Bug-Analysis/
│   ├── bug-report.md           # High-fidelity defect tickets
│   └── root-cause-analysis.md  # Deep-dive code fixes and architectural RCA
│
└── screenshots/                # Visual evidence of critical test executions
```

---

## How AI Was Used

### Requirement Analysis

AI was used to:

- Analyze business requirements
- Identify critical business flows
- Highlight risk areas
- Suggest additional test coverage

Example findings:

- Shopping Cart calculation risks
- Checkout validation risks
- Search and filtering edge cases

---

### Test Design

AI assisted in creating:

- End-to-End Test Scenarios
- Functional Test Cases
- Negative Test Cases
- Boundary Test Cases

Examples:

- Successful Purchase Flow
- Checkout Without Login
- Duplicate Order Prevention
- Out-Of-Stock Validation

---

### Test Data Generation

AI was used to generate:

- Positive test data
- Negative test data
- Boundary values
- Special character inputs
- Security-focused inputs

---

### Bug Analysis

AI assisted in:

- Defect investigation
- Root cause exploration
- Risk assessment
- Improvement recommendations

---

## Testing Coverage

### Product Catalog

- Product Listing
- Product Details
- Product Information Validation

### Search & Filter

- Keyword Search
- Partial Search
- Empty Search
- Special Character Validation
- Brand Filter
- Category Filter

### Shopping Cart

- Add Product
- Remove Product
- Quantity Update
- Cart Calculation
- Validation Rules

### Authentication

- Login
- Logout
- Credential Validation

### Checkout

- Order Creation
- Order Summary
- Inventory Validation
- Duplicate Submission Prevention

---

## Sample Defects Identified

### BUG-001

Search accepts special characters without validation.

### BUG-002

Shopping cart allows quantity value equal to zero.

### BUG-003

Checkout allows ordering out-of-stock products.

### BUG-004

Duplicate orders can be created by multiple submissions.

### BUG-005

Shopping cart is not cleared after successful checkout.

---

## Key Learnings

This project reinforced several important lessons:

- AI can significantly accelerate test design activities.
- AI helps generate ideas, but QA review remains essential.
- Business understanding is still required to validate AI outputs.
- AI is most effective when used as a QA assistant rather than a QA replacement.

---

## Skills Demonstrated

### QA Skills

- Requirement Analysis
- Test Scenario Design
- Test Case Design
- Test Data Preparation
- Functional Testing
- Boundary Value Analysis
- Negative Testing
- Defect Reporting
- Root Cause Analysis
- Risk-Based Testing

### AI Skills

- Prompt Engineering
- AI-Assisted Requirement Analysis
- AI-Assisted Test Design
- AI-Assisted Bug Investigation
- AI-Assisted QA Workflow

---

## Author

QA Engineer passionate about leveraging AI to improve software testing efficiency, coverage, and defect analysis.