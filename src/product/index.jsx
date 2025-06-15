import React from 'react';
import {useParams} from "react-router-dom";
import {Helmet} from "@dr.pogodin/react-helmet";

const ProductPage = () => {

    // getting id from router
    const { id } = useParams();

    return (
        <div className="container mx-auto p-4 md:p-6">
            <Helmet>
                <title>Product {id} | Zelion Store</title>
            </Helmet>
            <h1 className="font-semibold text-2xl">Product {id} Page</h1>
        </div>
    )

};

export default ProductPage;