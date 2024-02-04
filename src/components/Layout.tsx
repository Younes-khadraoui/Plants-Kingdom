import React from "react";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
