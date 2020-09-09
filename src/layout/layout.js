import React from "react";
import NavBar from "../navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
