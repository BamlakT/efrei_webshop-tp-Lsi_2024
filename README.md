# Webshop
![Recording 2024-06-03 at 22 44 54](https://github.com/BamlakT/efrei_webshop-tp-Lsi_2024/assets/97687694/3b7743a7-cd99-4ece-92c8-7e0d22606854)

## Description

This repository contains the source code for a web shop application built with Vue.js for the frontend and Node.js with Express for the backend. The application allows users to browse products, add items to a shopping cart, and manage the cart by adding or removing items. The cart functionality is backed by MongoDB to persist cart data.

## Features

- **Product Listing**: Browse a list of available products with their details.
- **Add to Cart**: Add products to the shopping cart.
- **Manage Cart**: Increment or decrement product quantities in the cart or remove items entirely.
- **Persistent Cart**: Cart data is stored in MongoDB to maintain state across sessions.
- **Responsive Design**: Optimized for various screen sizes using BootstrapVue.

## Technologies Used

- **Frontend**: Vue.js, BootstrapVue
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **REST API**: For cart and product management

## Project Setup

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd webshop
   ```

2. Install dependencies for both frontend and backend:
   ```sh
   cd server
   npm install
   cd ../
   npm install
   ```

### Compiles and Hot-reloads for Development

```sh
npm run serve
```

### Compiles and Minifies for Production

```sh
npm run build
```

### Lints and Fixes Files

```sh
npm run lint
```

### Start the Backend Server

```sh
cd server
node server.js
```

### Customize Configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Getting Started

1. Start the backend server:
   ```sh
   cd server
   node server.js
   ```

2. Start the frontend development server:
   ```sh
   cd ../
   npm run serve
   ```

3. Open the application in your browser at \`http://localhost:8082\`.

## Folder Structure

- **server**: Contains the backend code (Node.js, Express)
  - **models**: Mongoose models for MongoDB
  - **routes**: API routes for products and cart
  - `server.js`: Entry point for the backend server
- **src**: Contains the frontend code (Vue.js)
  - **components**: Vue components for the application
  - `App.vue`: Main application component
  - `main.js`: Entry point for the frontend application
  - `manager.js`: Manages the product stock and cart functionalities


