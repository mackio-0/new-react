import React from "react";

const ProductListRowSkeletonLoader = () => {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 w-4 bg-stone-200 dark:bg-stone-700 rounded"></div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 w-3/4 bg-stone-200 dark:bg-stone-700 rounded"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-1/3 inline-flex bg-stone-200 dark:bg-stone-700 rounded"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col space-y-1 items-end">
            <div className="h-3 w-1/2 bg-stone-200 dark:bg-stone-700 rounded"></div>
            <div className="h-3 w-1/3 bg-stone-200 dark:bg-stone-700 rounded"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="px-3 py-2 w-8 bg-stone-200 dark:bg-stone-700 rounded-s-lg"></div>
            <div className="px-3 py-2 w-8 bg-stone-200 dark:bg-stone-700 rounded-e-lg"></div>
          </div>
        </td>
      </tr>
      <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 w-4 bg-stone-200 dark:bg-stone-700 rounded"></div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 w-3/4 bg-stone-200 dark:bg-stone-700 rounded"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-1/3 inline-flex bg-stone-200 dark:bg-stone-700 rounded"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col space-y-1 items-end">
            <div className="h-3 w-1/2 bg-stone-200 dark:bg-stone-700 rounded"></div>
            <div className="h-3 w-1/3 bg-stone-200 dark:bg-stone-700 rounded"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="px-3 py-2 w-8 bg-stone-200 dark:bg-stone-700 rounded-s-lg"></div>
            <div className="px-3 py-2 w-8 bg-stone-200 dark:bg-stone-700 rounded-e-lg"></div>
          </div>
        </td>
      </tr>
      <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 w-4 bg-stone-200 dark:bg-stone-700 rounded"></div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 w-3/4 bg-stone-200 dark:bg-stone-700 rounded"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-1/3 inline-flex bg-stone-200 dark:bg-stone-700 rounded"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col space-y-1 items-end">
            <div className="h-3 w-1/2 bg-stone-200 dark:bg-stone-700 rounded"></div>
            <div className="h-3 w-1/3 bg-stone-200 dark:bg-stone-700 rounded"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <div className="px-3 py-2 w-8 bg-stone-200 dark:bg-stone-700 rounded-s-lg"></div>
            <div className="px-3 py-2 w-8 bg-stone-200 dark:bg-stone-700 rounded-e-lg"></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductListRowSkeletonLoader;
