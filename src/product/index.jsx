import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Helmet} from "@dr.pogodin/react-helmet";

const ProductPage = () => {

    const [product, setProduct] = useState(null);

    // getting id from router
    const { id } = useParams();

    const fetchProduct = () => {
        fetch(`https://sheetdb.io/api/v1/lznph4tf5x7x2/search?id=${id}`)
            .then(res => res.json())
        .then(data => setProduct(data[0]));
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    if(!product) {
        return (
            <div>loading</div>
        )
    }

    return (
        <div className="container mx-auto p-4 md:p-6">
            <Helmet>
                <title>{product.name} | Zelion Store</title>
            </Helmet>
            <h1 className="font-semibold text-2xl">{product.name}</h1>
        </div>
    )

};

export default ProductPage;