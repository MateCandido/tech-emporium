# Tech Emporium 🛒

A web application for an e-commerce storefront, built with a modern frontend stack. This project simulates an electronics store, allowing users to browse products, view detailed information, and manage a functional shopping cart.

The primary goal of this project was to practice API integration, global state management, and navigation in a Single Page Application (SPA).

## ✨ Key Features

* **Product Showcase:** Fetches and displays a list of products from the [Fake Store API](https://fakestoreapi.com/).
* **Detailed Product Pages:** Dynamic routing to a dedicated page for each product with complete information.
* **Functional Shopping Cart:** Add and remove items from the cart. The state is managed globally and persists across all pages.
* **Live Item Counter:** The header displays the total quantity of items in the cart in real-time.
* **Seamless Navigation:** Uses `react-router-dom` for a smooth SPA experience with no page reloads.

## 🚀 Tech Stack

This project was built using a modern set of tools for frontend development:

* **React:** A library for building user interfaces.
* **TypeScript:** Ensures type safety and code robustness.
* **Vite:** A blazing-fast build tool for the development environment.
* **Zustand:** A minimalist and powerful global state manager for the shopping cart.
* **React Router DOM:** For implementing routes and navigation.
* **Axios:** An HTTP client for making API requests.
* **CSS Modules:** For component-scoped and conflict-free styling.

## 🛠️ Getting Started

To run this project on your local machine, follow the steps below.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v16 or higher)
* [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MateCandido/tech-emporium.git](https://github.com/MateCandido/tech-emporium.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd tech-emporium
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal).

## 🔮 Future Steps (Roadmap)

- [ ] Adjust item quantity directly in the cart page.
- [ ] Create a simulated checkout page.
- [ ] Add product filtering by category on the Home page.
- [ ] Implement loading skeletons for a better user experience.

---

Made with ❤️ by **Mateus dos Santos Cândido**. Let's connect!

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mateus-cândido-b8b06a280)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MateCandido)