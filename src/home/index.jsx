import React from 'react';
import {Link} from "react-router-dom";
import ProductPage from "./ProductCard.jsx";

const HomePage = () => {

    const productsList = [
        {
            id: 1,
            name: 'Product 1',
        },
        {
            id: 2,
            name: 'Product 2',
        }
    ]

    return (
        <div className="container mx-auto p-4 md:p-6">
            <h1 className="font-semibold text-2xl p-2">
                Products
            </h1>
            <div className="flex flex-wrap mx-0">
                {productsList.map((product) => (
                    <div
                        key={product.id}
                        className="w-full md:w-1/3 lg:w-1/4 p-2"
                    >
                        <ProductPage {...product} />
                    </div>
                ))}
            </div>
        </div>
    )

};

export default HomePage;