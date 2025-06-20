import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext.jsx";

// ✅ Helper to make product names into IDs like "mrf-bat"
const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

const ProductCard = ({ id, name, price, imageURL, description, rating = 4.5 }) => {
  const { addItemToCart } = useContext(CartContext);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const triggerPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const addToCart = () => {
    addItemToCart({ id, name, price, imageURL });
    triggerPopup(`${name} added to cart!`);
  };

  const openDetailsModal = () => {
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-500">★</span>
        ))}
        {halfStar && <span className="text-yellow-500">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
      </>
    );
  };

  return (
    <div
      id={slugify(name)}  // ✅ This enables scroll-to by ID
      className="relative bg-white rounded-2xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition min-h-[450px]"
    >
      <img 
        src={imageURL} 
        alt={name} 
        className="w-full h-48 object-cover cursor-pointer"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex items-center text-sm mt-1">
          {renderStars(rating)}
          <span className="ml-2 text-gray-500">({rating.toFixed(1)})</span>
        </div>
        <p className="text-teal font-bold mt-1">₹{price}</p>
        {description && (
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        )}

        <div className="flex gap-2 mt-4">
          <button
            onClick={addToCart}
            className="bg-[#556b5a] text-gray-200 rounded px-3 py-2 hover:opacity-90 transition"
          >
            Add to cart
          </button>
          <button
            onClick={openDetailsModal}
            className="bg-[#1e4a4f] text-white rounded px-3 py-2 hover:opacity-90 transition"
          >
            More Details
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in-out flex items-center space-x-2 border border-gray-200">
          <svg 
            className="w-5 h-5 text-green-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
          <span className="font-medium">{popupMessage}</span>
        </div>
      )}

      {/* Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeDetailsModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
              >
                <svg 
                  className="w-6 h-6 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
              <img
                src={imageURL}
                alt={name}
                className="w-full h-48 object-contain"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                  <div className="flex items-center mt-1">
                    {renderStars(rating)}
                    <span className="ml-2 text-gray-500">({rating.toFixed(1)})</span>
                  </div>
                </div>
                <p className="text-xl font-bold text-pink-600">₹{price}</p>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
                <p className="text-gray-600">
                  {description || "No description available for this product."}
                </p>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <h3 className="text-md font-semibold text-gray-700">Material</h3>
                  <p className="text-gray-600">Premium Cotton Blend</p>
                </div>
                <div>
                  <h3 className="text-md font-semibold text-gray-700">Care Instructions</h3>
                  <p className="text-gray-600">Machine Wash Cold</p>
                </div>
                <div>
                  <h3 className="text-md font-semibold text-gray-700">Availability</h3>
                  <p className="text-green-600 font-medium">In Stock</p>
                </div>
                <div>
                  <h3 className="text-md font-semibold text-gray-700">SKU</h3>
                  <p className="text-gray-600">PROD-{id.toString().padStart(4, '0')}</p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => {
                    addToCart();
                    closeDetailsModal();
                  }}
                  className="flex-1 bg-[#1e4a4f] text-white rounded-lg py-3 font-medium hover:bg-[#1e4a4f] transition"
                >
                  Add to Cart
                </button>
                <button className="flex-1 bg-pink-500 text-white rounded-lg py-3 font-medium hover:bg-pink-600 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    
      {/* existing JSX for the card … */}

      {/* ─── Styles ─── */}
      <style >{`
        /* ✅ existing popup fade animation */
        @keyframes fade-in-out {
          0%   { opacity: 0; transform: translate(-50%, -20px); }
          10%  { opacity: 1; transform: translate(-50%, 0); }
          90%  { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, -20px); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 2s ease forwards;
        }

        /* ✅ NEW: product‑card highlight when searched */
        .highlight {
          animation: flash-border 1.5s ease-out;
        }
        @keyframes flash-border {
          0%   { box-shadow: 0 0 0px 0   rgba(255, 204, 0, 0.9); }
          50%  { box-shadow: 0 0 15px 6px rgba(255, 204, 0, 0.8); }
          100% { box-shadow: 0 0 0px 0   rgba(255, 204, 0, 0); }
        }
      `}</style>
    </div>
  );
};




export default ProductCard;
