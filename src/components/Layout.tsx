import React from "react";
import Footer from "./Footer";
import Scroll from "./Scroll";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Scroll />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
