import React, { useState } from "react";
import { HiSearch, HiX } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi2";
import useSWR from "swr";
import ProductListRowSkeletonLoader from "./ProductListRowSkeletonLoader";
import ProductListRow from "./ProductListRow";
import ProductListRowEmpty from "./ProductListRowEmpty";
import { Link } from "react-router-dom";
import { throttle } from "lodash";

const ProductList = () => {
  // console.log(import.meta.env.VITE_API_URL)
  const [search, setSearch] = useState("");

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    search
      ? `${import.meta.env.VITE_API_URL}/products?product_name_like=${search}`
      : `${import.meta.env.VITE_API_URL}/products`,
    fetcher
  );
  // if(isLoading) return <p>Loading...</p>
  // console.log(data)

  const handleSearch = throttle((e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
  }, 500);

  const handleClearSearch = () => {
    setSearch("")
  }

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
              onChange={handleSearch}
              value={search}
              className="bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Product"
            />
            {
              search && <button onClick={handleClearSearch} className="absolute right-0 top-0 bottom-0 px-3">
                <HiX fill="red" className=" scale-100 active:scale-75 duration-100"/>
              </button>
            }
          </div>
        </div>
        <div>
          <Link
            to="/product/create"
            className="text-white flex gap-3 justify-between items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add new product
            <HiPlus />
          </Link>
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
            {isLoading ? (
              <ProductListRowSkeletonLoader />
            ) : data.length === 0 ? (
              <ProductListRowEmpty />
            ) : (
              data.map((product) => (
                <ProductListRow key={product.id} product={product} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
