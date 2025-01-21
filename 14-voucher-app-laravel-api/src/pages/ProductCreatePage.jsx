import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductCreateCard from "../components/ProductCreateCard";

const ProductCreatePage = () => {
  return (
    <section>
      <Breadcrumb
        currentPageName={"Create Product"}
        links={[{ title: "Product Module", path: "/product" }]}
      />
      <ProductCreateCard/>
    </section>
  );
};

export default ProductCreatePage;
