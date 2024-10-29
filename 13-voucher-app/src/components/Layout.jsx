import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col p-5">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
