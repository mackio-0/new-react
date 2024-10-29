import React from "react";
import ContainerComponent from "./ContainerComponent";

const Header = () => {
  return (
    <header className=" mb-5">
      <ContainerComponent>
        <h1 className="text-3xl font-bold">MMS Software</h1>
        <p className="text-stone-600">Voucher App</p>
      </ContainerComponent>
    </header>
  );
};

export default Header;
