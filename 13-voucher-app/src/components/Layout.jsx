import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
