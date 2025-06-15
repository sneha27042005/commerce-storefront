import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {CartContext} from "../CartContext.jsx";

const Topbar = () => {

    const { items } = useContext(CartContext);

    return (
        <header className="bg-[#ddaa00] px-6 py-2 border-b border-neutral-400/20 shadow">
            <div className="container mx-auto">
                <Link to={`/`}>
                    <img src="/logo-white.svg" className="w-[150px]" />
                </Link>
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
        </header>
    )

};

export default Topbar;