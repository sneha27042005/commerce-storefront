import React, {useContext} from "react";
import {CartContext} from "../CartContext.jsx";

const MyCart = () => {

    const { items } = useContext(CartContext);

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
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

};

export default MyCart;