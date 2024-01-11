import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* main area */}
      <main className="container-fluid custom-main">{children}</main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
