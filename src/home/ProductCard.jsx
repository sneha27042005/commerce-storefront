import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { CartContext } from "../CartContext.jsx";

const ProductCard = ({ id, name, price, imageURL }) => {

    const { items, setItems } = useContext(CartContext);

    const addToCart = () => {
        setItems([
            ...items,
            {
                id,
                name,
                price,
                imageURL,
            }
        ]);
    }

    return (
        <div>
            <div className="p-2 border shadow">
                <img src={imageURL} alt={name} className="w-full" />
                {name}
                <div>
                    Rs. {price}
                </div>
                <div className="flex gap-2">
                    <button onClick={addToCart} className="bg-blue-500 px-2 py-2">
                        Add to cart
                    </button>
                    <Link to={`/product/${id}`} className="bg-pink-500 px-2 py-2">
                        More Details
                    </Link>
                </div>
            </div>

        </div>
    );

};

export default ProductCard;