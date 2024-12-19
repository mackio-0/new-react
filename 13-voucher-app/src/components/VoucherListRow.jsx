import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import ShowTime from "./ShowTime";
import { useSWRConfig } from "swr";
import "ldrs/bouncy";
import toast from "react-hot-toast";

const VoucherListRow = ({
  voucher: { id, voucher_id, customer_name, customer_email, sale_date },
}) => {
  // console.log(id);

  const [isDeleting, setIsDeleting] = useState(false);

  const { mutate } = useSWRConfig();
  const handleDeleteBtn = async () => {
    // console.log(id);
    setIsDeleting(true);

    await fetch(`${import.meta.env.VITE_API_URL}/vouchers/${id}`, {
      method: "DELETE",
    });

    mutate(`${import.meta.env.VITE_API_URL}/vouchers`);
    toast.success("Voucher deleted successfully!");
    setIsDeleting(false);
  };
  return (
    <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700">
      <td className="px-6 py-4">{voucher_id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
      >
        {customer_name}
      </th>
      <td className="px-6 py-4">{customer_email}</td>
      <td className="px-6 py-4 text-end">
        <ShowTime timestamp={sale_date} />
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white"
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

export default VoucherListRow;
