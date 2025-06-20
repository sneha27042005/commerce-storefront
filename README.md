# Ecommerce Storefront Boilerplate

Boilerplate code for a storefront built with React and Vite.

## 🚀 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/) - Latest version with modern features
- **Build Tool**: [Vite 6](https://vitejs.dev/) - Fast build tool and dev server
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Routing**: [React Router DOM 7](https://reactrouter.com/) - Client-side routing

## 📁 Project Structure

```
src/
├── App.jsx              # Main application component with routing
├── main.jsx            # Application entry point
├── style.css           # Global styles
├── layout/
│   ├── index.jsx       # Layout wrapper component
│   ├── topbar.jsx      # Navigation header
│   └── footer.jsx      # Site footer
├── home/
│   ├── index.jsx       # Homepage component
│   └── ProductCard.jsx # Product card component
└── product/
    └── index.jsx       # Individual product page
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/practizo-app/commerce-storefront.git
   cd commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to 'http://cerulean-cannoli-fe35ef.netlify.app'

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## 📚 Learning Resources

### Official Documentation
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Tutorial](https://reactrouter.com/start/tutorial)

### Helpful Tutorials
- [React Hooks Guide](https://react.dev/reference/react)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/utility-first)
- [Modern JavaScript Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🎯 TODO: Features to Implement

### 🛒 Core Ecommerce Features

- [ ] **Product Management**
  - [ ] Product catalog with real data
  - [ ] Product search
  - [ ] Product images and gallery

- [ ] **Shopping Cart**
  - [ ] Add to cart functionality
  - [ ] Cart page with item management
  - [ ] Quantity updates
  - [ ] Remove items from cart
  - [ ] Cart persistence (localStorage)

- [ ] **Checkout Process**
  - [ ] Checkout form
  - [ ] Shipping address management
  - [ ] Order creation

- [ ] **Product Display**
  - [ ] Product image zoom
  - [ ] Product variants
  - [ ] Related products
  - [ ] Recently viewed products

---

**Happy Coding! 🚀**
