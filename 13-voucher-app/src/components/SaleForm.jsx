import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useRecordStore from "../stores/useRecordStore";

const fetcher = (url) => fetch(url).then((res) => res.json());
const SaleForm = () => {
  const { data, isLoading, error } = useSWR(
    `${import.meta.env.VITE_API_URL}/products`,
    fetcher
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { addRecord, records, changeQuantity } = useRecordStore();

  const onSubmit = (formData) => {
    // console.log(formData)  // quantity is a string
    const currentProduct = JSON.parse(formData.product);
    const currentProductId = currentProduct.id;
    // console.log(currentProduct)
    // console.log({
    //   id: Date.now(),
    //   product: currentProduct,
    //   quantity: formData.quantity,
    //   cost: formData.quantity * currentProduct.price,
    //   created_at: new Date().toISOString(),
    // });

    const isExisted = records.find(
      ({ product: { id } }) => id === currentProductId
    ); // find will return the first matched record object, which we need because we want to update the quantity by id of that record
    // const isExisted = records.some(({ product: { id } }) => id === currentProductId);
    // const isExisted = records.includes(({product:{id}}) => id === currentProductId) // don't work cos includes can only work with simple arrays
    // const isExisted = records.product.id === currentProductId  // records is an array of record objects so product can't be accessd like that. need to iterate all of records
    // console.log(isExisted);

    if (isExisted) {
      changeQuantity(isExisted.id, formData.quantity);
      reset();
    } else {
      addRecord({
        id: Date.now(),
        product: currentProduct,
        quantity: parseInt(formData.quantity),
        cost: formData.quantity * currentProduct.price,
        created_at: new Date().toISOString(),
      });
    }
    // quantity from formData is a string

    reset();
  };

  return (
    <div className=" bg-white mb-5 p-5 border rounded-lg">
      <form action="#" id="productSaleForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2">
            <label
              htmlFor="productSelect"
              className={`block mb-2 text-sm font-medium ${
                errors.product ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Select Your Product
            </label>
            <select
              id="productSelect"
              {...register("product", {
                required: true,
              })}
              className={`bg-gray-50 border ${
                errors.product
                  ? "border-red-500 focus:ring-red-600 focus:border-red-600"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            >
              <option value="">Select a product.</option>
              {!isLoading &&
                data.map((product) => (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.product_name}
                  </option>
                ))}
            </select>
            {/* exception text */}
            {errors.product?.type === "required" && (
              <p className=" text-red-600 text-sm mt-2">
                Please select a product.
              </p>
            )}
          </div>

          <div className="col-span-2">
            <label
              htmlFor="quantityInput"
              className={`block mb-2 text-sm font-medium ${
                errors.sale_date ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantityInput"
              {...register("quantity", {
                required: true,
              })}
              className={`bg-gray-50 border ${
                errors.quantity
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {/* exception text */}
            {errors.quantity?.type === "required" && (
              <p className=" text-red-600 text-sm mt-2">
                Please add the quantity of product.
              </p>
            )}
          </div>

          <div className="col-span-1">
            <button
              type="submit"
              className="text-blue-700 w-full h-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
