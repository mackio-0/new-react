import React from "react";

const ProductListRowEmpty = () => {
  return (
    <tr className="odd:bg-white odd:dark:bg-stone-900 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700 hidden last:table-row">
      <td
        colSpan={5}
        className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white col text-center"
      >
        There is no product.
      </td>
    </tr>
  );
};

export default ProductListRowEmpty;
