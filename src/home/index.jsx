import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data once when the component mounts
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://sheetdb.io/api/v1/6eo2rgbmyumqc");
      const data = await response.json();
      setProducts(data);        // [{ id, name, image, price, ... }, ...]
    } catch (err) {
      console.error("Failed to load products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
        <div className="min-h-screen bg-[#d1a8a1] text-gray-800 font-sans">
      <h1 className="font-bold text-2xl p-5">Products</h1>

      <div className="flex flex-wrap mx-0">
        {products.map((product) => (
          <div key={product.id} className="w-full md:w-1/3 lg:w-1/4 p-2">
            {/* Spread all fields, so ProductCard gets name, price, image, etc. */}
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;