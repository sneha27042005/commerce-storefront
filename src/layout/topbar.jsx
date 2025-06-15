import React from 'react';
import {Link} from "react-router-dom";

const Topbar = () => {

    return (
        <header className="bg-neutral-100 p-2 border-b border-neutral-400/20 shadow">
            <div className="container mx-auto">
                <Link to={`/`}>
                    <img src="https://placehold.co/100x50.png" />
                </Link>
            </div>
        </header>
    )

};

export default Topbar;