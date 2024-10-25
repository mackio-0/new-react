import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../data/useCartStore";
import toast from "react-hot-toast";
// import BreadCrumb from "../components/BreadCrumb";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const { products } = useProductStore();
  // console.log(useParams())

  const { carts } = useCartStore();
  // console.log(carts)
  const currentProduct = products.find((product) => product.slug == productSlug);

  const handleAddedBtn = () => {
    toast.success("Item already in the cart!")
  }

  //   console.log(currentProduct);
  //   console.log(productId);
  // console.log(useParams());
  return (
    <Container className={"px-5"}>
      <BreadCrumb currentPageTitle={"Product Details"} />
      <div className=" border border-black p-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className=" col-span-1">
            <img
              src={currentProduct.image}
              className="h-[200px] block md:w-3/4 md:h-auto mb-5 md:my-auto lg:my-0 mx-auto"
              alt=""
            />
          </div>
          <div className=" col-span-1 flex flex-col items-start gap-5">
            <h3 className=" text-3xl font-bold ">{currentProduct.title}</h3>
            <p className=" bg-gray-200 text-gray-700 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className=" flex justify-between w-full items-center">
              <p>Price : ({currentProduct.price}) </p>
              {carts.find((el) => el.productId == currentProduct.id) ? (
                <button onClick={handleAddedBtn} className=" text-sm border border-black bg-black text-white px-3 py-1">
                  Added
                </button>
              ) : (
                <button className=" text-sm border border-black px-3 py-1">
                  Add Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
