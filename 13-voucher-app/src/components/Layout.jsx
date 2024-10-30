import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import ContainerComponent from "./ContainerComponent.jsx";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col p-5">
      <ContainerComponent>
        <Header />
        <Outlet />
        <Toaster position="top-right"/>
      </ContainerComponent>
    </div>
  );
};

export default Layout;
