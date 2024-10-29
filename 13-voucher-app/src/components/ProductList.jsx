import React from "react";
import { HiSearch } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi2";

const ProductList = () => {
  return (
    <div>
      <div className=" flex justify-between">
        <div>
          <div className="relative mb-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Product"
            />
          </div>
        </div>
        <div>
          <button className="text-white flex gap-3 justify-between items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add new product
            <HiPlus />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
          <thead className="text-xs text-stone-700 uppercase bg-stone-50 dark:bg-stone-700 dark:text-stone-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700 hidden last:table-row">
              <td
                colSpan={5}
                className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white col text-center"
              >
                There is no product.
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700">
              <td className="px-6 py-4">1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 text-end">$2999</td>
              <td className="px-6 py-4 text-end">
                <p className=" text-xs">29 Sep 24</p>
                <p className=" text-xs">12:00 AM</p>
              </td>
              <td className="px-6 py-4 text-end">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-s-lg hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    <HiOutlinePencil/>
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-red-600 bg-white border border-stone-200 rounded-e-lg hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    <HiOutlineTrash/>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
