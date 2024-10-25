import React from "react";
import Cart from "./Cart";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../data/useCartStore";
import useProductStore from "../store/useProductStore";
import emptyCartImg from "../assets/empty-cart.svg";

const CartSection = () => {
  const { products } = useProductStore();
  const { carts } = useCartStore();

  const total = carts.reduce((pv, cv) => {
    const price = products.find(({ id }) => id == cv.productId).price;
    // console.log(price)
    const cost = price * cv.quantity;
    return pv + cost;
  }, 0);

  const tax = total * 0.1;
  const netTotal = total + tax;

  return (
    <>
      <div className=" flex flex-col gap-5 h-full">

        {carts.length === 0 ? (
          <img src={emptyCartImg} alt="" className=" w-[300px] mx-auto mt-10" />
        ) : (
          carts.map((cart) => <Cart key={cart.id} cart={cart} />)
        )}

        <div className=" absolute bottom-10 left-0 w-full bg-white">
          <Container>
            <div className=" border-t border-black flex justify-end gap-10 py-3">
              <div className=" text-right">
                <p className=" text-gray-500">Total</p>
                <p className=" font-bold">{total.toFixed(2)}</p>
              </div>
              <div className=" text-right">
                <p className=" text-gray-500">Tax(10%)</p>
                <p className=" font-bold">{tax.toFixed(2)}</p>
              </div>
              <div className=" text-right">
                <p className=" text-gray-500">Net Total</p>
                <p className=" text-2xl font-bold">{netTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className=" text-end mb-3">
              <Link className=" border border-black px-4 py-2 ">Order Now</Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CartSection;
