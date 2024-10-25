import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import carts from "../data/carts";
import useCartStore from "../data/useCartStore";
import toast from "react-hot-toast";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug,
  },
}) => {
  const { carts, addCart } = useCartStore();
  const navigate = useNavigate();

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.success("Item already in the cart!");
  }
  const handleAddToCart = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };

    addCart(newCart);
  };

  const handleCardOpen = () => {
    navigate(`/product-detail/${slug}`);
  };

  return (
    <div
      onClick={handleCardOpen}
      className=" border border-black p-5 flex flex-col  items-start gap-5"
    >
      <img src={image} className=" h-40" alt="" />
      <p className=" font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className=" flex justify-between items-end w-full ">
        <p>{price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button onClick={handleAddedBtn} className=" text-sm border border-black bg-black text-white px-3 py-1">
            Added
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className=" text-sm border border-black px-3 py-1"
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
