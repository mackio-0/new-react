import React from "react";
import ContainerComponent from "../components/ContainerComponent";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/ProductList";

const ProductPage = () => {

  return (
    <div>
        <Breadcrumb currentPageName={"Product Module"} />
        <ProductList />
    </div>
  );
};

export default ProductPage;
