import React from "react";
import useRecordStore from "../stores/useRecordStore";
import VoucherTableRow from "./VoucherTableRow";
import ProductCreateCard from "./ProductCreateCard";

const VoucherTable = () => {
  const { records } = useRecordStore();
  // console.log(records)

  // const currentRecordState = useRecordStore.getState();
  // const totalCost = currentRecordState.records.reduce(
  //   (total, record) => total + record.quantity * record.product.price,
  //   0
  // );
  // console.log(currentRecordState.records)
  // console.log(totalCost)

  const total = records.reduce((pv, cv) => pv + cv.cost, 0);
  const tax = total * 0.1;
  const grandTotal = total + tax;

  return (
    <div className="relative shadow-md sm:rounded-lg overflow-hidden">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr className=" ">
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              Product name
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              Price
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              Quantity
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              Cost
            </th>
            <th scope="col" className="px-6 py-4 text-end">
              {" "}
            </th>
          </tr>
        </thead>
        <tbody id="recordGroup">
          {records.length === 0 && (
            <tr className="hidden last:table-row border-b">
              <td colSpan={6} className="px-6 py-4 text-center">
                There is no record. Buy Something
              </td>
            </tr>
          )}

          {records.map((record, index) => (
            <VoucherTableRow key={record.id} record={record} index={index} />
          ))}
        </tbody>
        <tfoot>
          <tr className="border-b">
            <td className="px-6 py-4 text-end" colSpan={4}>
              Total
            </td>
            <td className="px-6 py-4 text-end">
              {total.toFixed(2)}
            </td>
            <td className="px-6 py-4 text-end"> </td>
          </tr>
          <tr className="border-b">
            <td className="px-6 py-4 text-end" colSpan={4}>
              Tax (VAT 10%)
            </td>
            <td className="px-6 py-4 text-end">
              {tax.toFixed(2)}
            </td>
            <td className="px-6 py-4 text-end"> </td>
          </tr>
          <tr className="border-b">
            <td className="px-6 py-4 text-end" colSpan={4}>
              Grand Total
            </td>
            <td className="px-6 py-4 text-end">
              {grandTotal.toFixed(2)}
            </td>
            <td className="px-6 py-4 text-end"> </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default VoucherTable;
