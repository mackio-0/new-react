import React, { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi2";
import { useSWRConfig } from "swr";
import "ldrs/bouncy";

const ProductListRow = ({
  product: { id, product_name, price, created_at },
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  // const hehe = useState("hehe")  
  // console.log(hehe)
  const createDate = new Date(created_at).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const createTime = new Date(created_at).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const { mutate } = useSWRConfig();
  const handleDeleteBtn = async () => {
    // console.log(id);
    setIsDeleting(true);

    await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
      method: "DELETE",
    });

    mutate(`${import.meta.env.VITE_API_URL}/products`);
    setIsDeleting(false);
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700">
      <td className="px-6 py-4">{id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end">
        <p className=" text-xs">{createDate}</p>
        <p className=" text-xs">{createTime}</p>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="size-10 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-s-lg hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlinePencil />
          </button>
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-stone-200 rounded-e-lg hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <l-bouncy size="15" speed="1.75" color="red"></l-bouncy>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductListRow;
