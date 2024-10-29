import React from "react";
import ContainerComponent from "../components/ContainerComponent";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <div>
      <ContainerComponent>
        <Breadcrumb currentPageName={"Product Module"} />
        <ProductList/>
      </ContainerComponent>
    </div>
  );
};

export default ProductPage;
