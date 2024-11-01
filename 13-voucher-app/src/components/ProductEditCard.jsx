import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import "ldrs/tailspin";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";
import ProductEditFormSkeletonLoader from "./ProductEditFormSkeletonLoader";

const ProductEditCard = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  //   console.log(useParams())
  const { id } = useParams();
  //   console.log(id)

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products/" + id,
    fetcher
  );
  //   console.log(data)

  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const handleProductForm = async (data) => {
    setIsSending(true);
    // console.log(data);
    await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
    });

    setIsSending(false);
    reset();
    if (data.bact_to_product_list) {
      navigate("/product");
    }
    toast.success("Product created successfully!");
  };

  return (
    <div className=" w-1/2">
      <h1 className=" text-3xl font-bold">Edit the Product</h1>
      <p className=" text-slate-500 mb-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      {isLoading ? (
        <ProductEditFormSkeletonLoader />
      ) : (
        <form onSubmit={handleSubmit(handleProductForm)}>
          <div className="mb-5">
            <label
              htmlFor="product_name"
              className={`block mb-2 text-sm font-medium ${
                errors.product_name ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Product Name
            </label>
            <input
              type="text"
              id="product_name"
              {...register("product_name", {
                required: true,
                minLength: 3,
                maxLength: 100,
              })}
              className={`bg-gray-50 border ${
                errors.product_name
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="e.g. Apple" defaultValue={data.product_name}
            />
            {errors.product_name?.type === "required" && (
              <p className=" text-sm text-red-500">Product name is required</p>
            )}
            {errors.product_name?.type === "minLength" && (
              <p className=" text-sm text-red-500">
                Product name length must be longer than 3 characters
              </p>
            )}
            {errors.product_name?.type === "maxLength" && (
              <p className=" text-sm text-red-500">
                Product name length must be shorter than 100 characters
              </p>
            )}
          </div>
          <div className=" mb-8">
            <label
              htmlFor="price"
              className={`block mb-2 text-sm font-medium ${
                errors.price ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Product Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", {
                required: true,
                min: 100,
                max: 10000,
              })}
              className={`bg-gray-50 border ${
                errors.price
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="e.g. 100" defaultValue={data.price}
            />
            {errors.price?.type === "required" && (
              <p className="text-sm text-red-500">Price is required</p>
            )}
            {errors.price?.type === "min" && (
              <p className="text-sm text-red-500">
                Price must be more than 100
              </p>
            )}
            {errors.price?.type === "max" && (
              <p className="text-sm text-red-500">
                Price must be less than 10000
              </p>
            )}
          </div>
          <div className=" mb-3">
            <input
              id="verify_entry"
              type="checkbox"
              {...register("verify_entry", {
                required: true,
              })}
              defaultValue
              className={`w-4 h-4 ${
                errors.verify_entry
                  ? "border-red-500 focus:ring-red-500 dark:focus:ring-red-600"
                  : "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
              } bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
            />
            <label
              htmlFor="verify_entry"
              className={`ms-2 text-sm font-medium ${
                errors.verify_entry ? "text-red-500" : "text-gray-900"
              } dark:text-gray-300`}
            >
              Make Sure all the informations are correct
            </label>
          </div>
          <div className=" mb-3">
            <input
              id="bact_to_product_list"
              type="checkbox"
              {...register("bact_to_product_list")}
              defaultChecked
              className={`w-4 h-4 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
            />
            <label
              htmlFor="bact_to_product_list"
              className="ms-2 text-sm font-medium dark:text-gray-300"
            >
              Back to product list after saving
            </label>
          </div>
          <div>
            <Link
              to={"/product"}
              className="text-white bg-slate-500 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-200 dark:hover:bg-slate-400 focus:outline-none dark:focus:ring-slate-800"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="text-white inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <span>Create</span>
              {isSending && (
                <l-tailspin
                  size="20"
                  stroke="5"
                  speed="0.9"
                  color="white"
                ></l-tailspin>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProductEditCard;
