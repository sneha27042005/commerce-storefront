
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://sheetdb.io/api/v1/01hisgjwbg4xx");
      console.log("API Response:", response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Parsed Data:", data);
      setProducts(data);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products State:", products);

  return (
    <div className="min-h-screen bg-[#d1a8a1] text-gray-800 font-sans">
      <h1 className="font-bold text-2xl p-5">Products</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="flex flex-wrap mx-0">
          {Array.isArray(products) && products.map((product) => (
            <div key={product.id} className="w-full md:w-1/3 lg:w-1/4 p-2">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

