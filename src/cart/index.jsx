import React, { useContext } from "react";
import { CartContext } from "../CartContext.jsx";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { items, addItemToCart, removeItemFromCart, removeAllOfItem } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-[#e9dbc0] text-gray-800 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-emerald-800">🛒 My Cart</h1>
          <Link
            to="/"
            className="text-black hover:underline text-sm font-bold"
          >
             Back to Home
          </Link>
        </div>

        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="font-semibold text-emerald-700 w-40 truncate">
                  {product.name}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => removeItemFromCart(product.id)}
                    className="w-8 h-8 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold"
                  >
                    -
                  </button>

                  <span className="text-gray-700 font-medium">
                    QTY {product.quantity}
                  </span>

                  <button
                    onClick={() => addItemToCart(product)}
                    className="w-8 h-8 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
  onClick={() => removeAllOfItem(product.id)}
  className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md transition"
>
  Remove All
</button>


                
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">Your cart is empty 🛍️</p>
        )}
      </div>
    </div>
  );
};

export default MyCart;
