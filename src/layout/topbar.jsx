import React from 'react';
import {Link} from "react-router-dom";

const Topbar = () => {

    return (
        <header className="bg-[#ddaa00] px-6 py-2 border-b border-neutral-400/20 shadow">
            <div className="container mx-auto flex justify-between gap-2 items-center">
                <Link to={`/`}>
                    <img src="/logo-white.svg" className="w-[150px]" />
                </Link>
                <Link to={`/cart`} className="font-semibold text-lg">
                    My Cart
                </Link>
            </div>
        </header>
    )

};

export default Topbar;