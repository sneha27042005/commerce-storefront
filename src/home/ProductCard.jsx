import React from 'react';
import {Link} from "react-router-dom";

const ProductPage = ({ id, name }) => {

    return (
        <Link to={`/product/${id}`}>
            <div className="p-2 border shadow">
                {name}
            </div>
        </Link>
    );

};

export default ProductPage;