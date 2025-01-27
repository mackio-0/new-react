import React, { useEffect } from "react";
import Header from "./Header.jsx";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import ContainerComponent from "./ContainerComponent.jsx";
import { Toaster } from "react-hot-toast";
import useCookie from "react-use-cookie";

const Layout = () => {
  const [token] = useCookie("my_token");
  // console.log(token) // empty if not logged in or deleted.
  // const navigate = useNavigate();
  if (!token) {
    return <Navigate to="/" />;
  }

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="w-full min-h-screen flex flex-col p-5">
      <Toaster position="top-right" />
      <ContainerComponent>
        <Header />
        <Outlet />
      </ContainerComponent>
    </div>
  );
};

export default Layout;
