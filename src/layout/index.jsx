import React from "react";
import { Helmet } from '@dr.pogodin/react-helmet';

import Topbar from "./topbar";
import Footer from "./footer";

const Layout = ({ children }) => {

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                <Helmet>
                    <title>Zelion Store</title>
                </Helmet>
                <Topbar />
                {children}
            </div>
            <Footer />
        </div>
    )

};

export default Layout;