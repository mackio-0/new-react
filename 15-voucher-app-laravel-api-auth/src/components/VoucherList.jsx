import React, { useRef, useState } from "react";
import { HiDesktopComputer, HiSearch, HiX } from "react-icons/hi";
import { HiComputerDesktop } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useSWR from "swr";
import VoucherListRow from "./VoucherListRow";
import { debounce, throttle } from "lodash";
import "ldrs/bouncy";
import Pagination from "./Pagination";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const VoucherList = () => {
  const searchRef = useRef("");
  const [search, setSearch] = useState("");
  // console.log(search);
  const [fetchUrl, setFetchUrl] = useState(
    `${import.meta.env.VITE_API_URL}/vouchers`
  );

  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
  // if (isLoading) return <p>Loading.....</p>;
  // console.log(data);

  // It will cause a api fetch on every word user type, cause strain on server and bottleneck the network
  // const handleSearch = (e) => {
  //   // console.log(e.target.value)
  //   setSearch(e.target.value);
  // }

  const handleSearch = debounce((e) => {
    // console.log(e.target.value);
    // console.log(searchRef)
    setSearch(e.target.value);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`);
  }, 500);

  const handleClearSearch = () => {
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers`);
    setSearch("");
    searchRef.current.value = "";
  };

  const updateFetchUrl = "";

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
              ref={searchRef}
              onChange={handleSearch}
              id="input-group-1"
              // value={search}
              className="bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Voucher"
            />
            {search && (
              <button
                onClick={handleClearSearch}
                className="absolute right-0 top-0 bottom-0 my-auto px-3"
              >
                <HiX
                  fill="red"
                  className="scale-100 active:scale-75 duration-100"
                />
              </button>
            )}
          </div>
        </div>
        <div>
          <Link
            to={"/sale"}
            className="text-white flex gap-3 justify-between items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Sale
            <HiComputerDesktop />
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
          <thead className="text-xs text-stone-700 uppercase bg-stone-50 dark:bg-stone-700 dark:text-stone-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Voucher ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
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
                {isLoading ? (
                  <>
                    Loading{" "}
                    <l-bouncy size="20" speed="1.75" color="black"></l-bouncy>
                  </>
                ) : (
                  "There is no voucher."
                )}
              </td>
            </tr>
            {!isLoading &&
              data?.data?.map((voucher) => (
                <VoucherListRow key={voucher.id} voucher={voucher} />
              ))}
          </tbody>
        </table>
      </div>
      {!isLoading && (
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}
    </div>
  );
};

export default VoucherList;
