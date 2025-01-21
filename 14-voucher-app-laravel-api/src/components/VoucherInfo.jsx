import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "ldrs/tailspin";
import toast, { Toaster } from "react-hot-toast";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import { useNavigate } from "react-router-dom";

const VoucherInfo = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);

  const { records, resetRecords } = useRecordStore();

  function generateInvoiceNumber() {
    // Get the current date and time as a base for the invoice number
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Generate a random number for additional uniqueness
    const randomPart = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

    // Combine all parts into a single invoice number string
    const invoiceNumber = `INVN.${year}${month}${day}-${hours}${minutes}${seconds}-${randomPart}`;

    return invoiceNumber;
  }
  //   console.log(generateInvoiceNumber())

  const onSubmit = async (data) => {
    setIsSending(true);
    const total = records.reduce((pv, cv) => pv + cv.cost, 0);
    const tax = total * 0.1;
    const net_total = total + tax;
    // console.log({ ...data, records, total, tax, grandTotal  });
    const currentVoucher = { ...data, records, total, tax, net_total };

    const res = await fetch(`${import.meta.env.VITE_API_URL}/vouchers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(currentVoucher),
    });

    console.log(res)

    const dataJSON = await res.json(); // return the data that just added to the server
    console.log(dataJSON);
    if (res.status === 201) {
      setIsSending(false);
      reset();
      resetRecords();
      toast.success("Voucher created successfully", {
        duration: 1500,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      // console.log(data)
      if (data.redirect_to_voucher_details) {
        navigate(`/voucher/detail/${dataJSON.voucher?.id}`);
      }
    } else {
      toast.error(dataJSON.message);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-3">
        <SaleForm />
        <VoucherTable />
      </div>
      <div className="col-span-1 flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)} id="infoForm">
          <div className="grid grid-cols-1 gap-5 mb-10">
            <div className="col-span-1">
              <label
                htmlFor="voucher_id"
                className={`block mb-2 text-sm font-medium ${
                  errors.voucher_id ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Voucher Id
              </label>
              <input
                type="text"
                id="voucher_id"
                defaultValue={generateInvoiceNumber()}
                {...register("voucher_id", {
                  required: true,
                })}
                className={`bg-gray-50 border ${
                  errors.voucher_id
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.voucher_id?.type === "required" && (
                <p className=" text-sm text-red-500">Voucher Id is required</p>
              )}
            </div>
            <div className="col-span-1">
              <label
                htmlFor="customer_name"
                className={`block mb-2 text-sm font-medium ${
                  errors.customer_name ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Coustomer Name
              </label>
              <input
                type="text"
                id="customer_name"
                {...register("customer_name", {
                  required: true,
                })}
                className={`bg-gray-50 border ${
                  errors.customer_name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.customer_name?.type === "required" && (
                <p className=" text-sm text-red-500">
                  Customer Name is required
                </p>
              )}
            </div>
            <div className="col-span-1">
              <label
                htmlFor="customer_email"
                className={`block mb-2 text-sm font-medium ${
                  errors.customer_email ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Customer Email
              </label>
              <input
                type="email"
                id="customer_email"
                {...register("customer_email", {
                  required: true,
                })}
                className={`bg-gray-50 border ${
                  errors.customer_email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.customer_email?.type === "required" && (
                <p className=" text-sm text-red-500">Voucher Id is required</p>
              )}
            </div>
            <div className="col-span-1">
              <label
                htmlFor="sale_date"
                className={`block mb-2 text-sm font-medium ${
                  errors.sale_date ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Sale Date
              </label>
              <input
                type="date"
                id="sale_date"
                defaultValue={new Date().toISOString().slice(0, 10)}
                {...register("sale_date", {
                  required: true,
                })}
                className={`bg-gray-50 border ${
                  errors.sale_date
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.sale_date?.type === "required" && (
                <p className=" text-sm text-red-500">Sale Date is required</p>
              )}
            </div>
          </div>
        </form>
        <div className="flex flex-col justify-center items-end gap-5 mt-auto">
          <div className="flex items-center gap-2">
            <label
              htmlFor="redirect_to_voucher_details"
              className={` text-sm text-end font-medium dark:text-gray-300`}
            >
              Redirect to voucher details.
            </label>
            <input
              id="redirect_to_voucher_details"
              type="checkbox"
              form="infoForm"
              {...register("redirect_to_voucher_details")}
              defaultValue
              className={`w-4 h-4  bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
            />
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="verify_entry"
              className={` text-sm text-end font-medium ${
                errors.verify_entry ? "text-red-500" : "text-gray-900"
              } dark:text-gray-300`}
            >
              Make Sure all the informations are correct.
            </label>
            <input
              id="verify_entry"
              type="checkbox"
              form="infoForm"
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
          </div>
          <button
            type="submit"
            form="infoForm"
            className="text-white inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <span>Confirm Voucher</span>
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
      </div>
    </div>
  );
};

export default VoucherInfo;
