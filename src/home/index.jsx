import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard.jsx";

const HomePage = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch("https://sheetdb.io/api/v1/lznph4tf5x7x2")
            .then(response => response.json())
            .then((data) => setProducts(data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    console.log(products);

    return (
        <div className="container mx-auto p-4 md:p-6">
            <h1 className="font-semibold text-2xl p-2">
                Products
            </h1>
            <div className="flex flex-wrap mx-0">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="w-full md:w-1/3 lg:w-1/4 p-2"
                    >
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    )

};

export default HomePage;