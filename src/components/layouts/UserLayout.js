import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const UserLayout = ({ children, title }) => {
  return (
    <div className="custom-user-layout">
      <div className="bg-dark text-light d-none d-md-block">
        <Sidebar />
      </div>

      <div>
        {/* header */}
        <Header />

        {/* main area */}
        <main className="container-fluid custom-main">
          <h2>{title}</h2>
          <hr />

          {children}
        </main>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
