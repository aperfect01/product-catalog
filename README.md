# Product Catalog App

This is a simple product catalog web application built using **Angular** and **Ionic Framework**. It allows users to:

- Browse a list of products
- Search by product name
- View product details
- Sort products by price
- View discount if available

The app uses a mock API (static JSON) and follows Angular best practices, including standalone components, API services, and error handling.

---

## Features

- Product list view with search and sorting
- Product details page
- Custom reusable product card component
- Error and loading states
- Standalone component support (Angular 17+)
- Unit-tested API service

---

## Project Structure

```

src/
├── app/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page views (Home, Product Details)
│ ├── services/ # API integration
│ ├── models/ # TypeScript interfaces
│ └── app-routing.module.ts
├── assets/
│ └── mock-products.json # Mock API data

```

---

## Requirements

- Node.js v18+
- Angular CLI v17+
- Ionic CLI v7+

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/aperfect01/product-catalog.git
cd product-catalog-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
ionic serve
```

This will open the app in your default browser (usually `http://localhost:8100`).

---

## Running Unit Tests

```bash
ng test
```

Runs unit tests using **Karma + Jasmine**.

---

## Notes

The product data is served from a static JSON file:

```
src/assets/mock-products.json
```

To simulate an API delay, a 1.5-second delay is added using RxJS in `product.service.ts`.
