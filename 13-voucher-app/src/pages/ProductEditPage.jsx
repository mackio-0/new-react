import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductEditCard from "../components/ProductEditCard";

const ProductEditPage = () => {
  return (
    <section>
      <Breadcrumb
        currentPageName={"Edit Product"}
        links={[{ title: "Product Module", path: "/product" }]}
      />
      <ProductEditCard/>
    </section>
  );
};

export default ProductEditPage;
