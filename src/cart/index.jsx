import React, {useContext} from "react";
import {CartContext} from "../CartContext.jsx";

const MyCart = () => {

    const { items, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div>
            <h1 className="text-3xl font-semibold">My Cart</h1>
            {items.length > 0 && (
                <div>
                    {items.map((product) => (
                        <div key={product.id}>
                            <div>
                                {product.name}
                            </div>
                            <div>
                                QTY {product.quantity}
                            </div>
                            <button
                                onClick={() => addItemToCart(product)}
                                className="bg-blue-500 p-2 text-lg"
                            >
                                +1
                            </button>
                            <button
                                onClick={() => removeItemFromCart(product.id)}
                                className="bg-blue-500 p-2 text-lg"
                            >
                                -1
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

};

export default MyCart;