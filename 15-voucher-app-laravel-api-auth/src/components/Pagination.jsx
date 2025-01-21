import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const Pagination = ({
  links: { prev, next },
  meta: { total, to, from },
  updateFetchUrl,
}) => {
  // console.log(meta)

  const handlePrevBtn = () => {
    updateFetchUrl(prev);
  };

  const handleNextBtn = () => {
    updateFetchUrl(next);
  };
  return (
    <div className="flex justify-between items-center px-6">
      {/* Help text */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <b>{from}</b> to <b>{to}</b> of <b>{total}</b> Entries
      </span>
      {/* Buttons */}
      <div className="inline-flex">
        <button
          disabled={!prev}
          onClick={handlePrevBtn}
          className="size-10 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-s-lg hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          <HiArrowLeft />
        </button>
        <button
          disabled={!next}
          onClick={handleNextBtn}
          className="size-10 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-e-lg hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
