import printJS from "print-js";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import html2pdf from "html2pdf.js";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const VoucherCard = () => {
  const componentRef = useRef();

  const { id } = useParams();
  // console.log(id);

  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/vouchers/${id}`,
    fetcher
  );
  if (isLoading) return <p>Loading...</p>;
  console.log(data);

  const handlePrint = () => {
    printJS({
      printable: "printArea",
      type: "html",
      documentTitle: `Voucher ID-${data.voucher_id}`,
      css: [
        "https://cdn.tailwindcss.com",
        "/src/print.css",
        "/dist/output.css",
      ],
    });
  };

  const handlePDF = async () => {
    const element = componentRef.current;

    const options = {
      margin: 0,
      filename: `Invoice-${data.voucher_id}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a5", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="flex items-center gap-5">
      <div ref={componentRef} id="printArea" className="w-[14.8cm] p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-3">Invoice</h1>
            <h3 className="text-xl">{data.voucher_id}</h3>
          </div>
          <div className="text-right">
            <h3 className="text-xl font-bold">Bill to</h3>
            <p className="text-xl">{data.customer_name}</p>
            <p>Date: {data.sale_date}</p>
          </div>
        </div>
        <table className="w-full mb-8">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-2 text-sm">No.</th>
              <th className="text-left py-2 text-sm">Description</th>
              <th className="text-right py-2 text-sm">Qty</th>
              <th className="text-right py-2 text-sm">Price</th>
              <th className="text-right py-2 text-sm">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.records.map((record, index) => (
              <tr key={record.id} className="border-b border-gray-200">
                <td className="py-2 text-sm">{index + 1}</td>
                <td className="py-2 text-sm">{record.product.product_name}</td>
                <td className="text-right py-2 text-sm">{record.quantity}</td>
                <td className="text-right py-2 text-sm">
                  {record.product.price}
                </td>
                <td className="text-right py-2 text-sm">{record.cost}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className=" border-b border-gray-200">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Total
              </td>
              <td className="py-2 text-right text-sm">
                {data.total.toFixed(2)}
              </td>
            </tr>
            <tr className=" border-b border-gray-200">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Tax
              </td>
              <td className="py-2 text-right text-sm">{data.tax.toFixed(2)}</td>
            </tr>
            <tr className=" border-b-2 border-gray-200">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Grand Total
              </td>
              <td className="py-2 text-right text-sm">
                {data.grandTotal.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className=" flex justify-between items-center text-sm mb-8">
          <div className="text-nowrap w-1/2">
            <h2 className="font-bold mb-1">Payment Transfer to</h2>
            <p>Kpay,WavePay - 09-123123123</p>
            <p>KBZ Bank - 09-123123123</p>
            <p>AYA Bank - 09-123123123</p>
          </div>
          <div className="text-right text-nowrap w-1/2">
            <h2 className="font-bold text-xl mb-1">Mackio</h2>
            <p>Inlay, Thamine Collage St., Hlaing</p>
            <p>+959-769510003</p>
            <p>enquiry@mackio.com</p>
          </div>
        </div>
        <div className="border-t-2 border-gray-200">
          <p className="pt-2 text-center text-sm">Thanks to You</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={handlePrint}
          className="text-white flex gap-3 justify-between items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Print
        </button>
        <button
          onClick={handlePDF}
          className="text-white flex gap-3 justify-between items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default VoucherCard;

// <div className=" flex gap-5">
//   <div id="printArea" className="w-[14.8cm] bg-white ">
//     <div className="flex justify-between items-start mb-8">
//       <div>
//         <h1 className="text-4xl font-bold mb-2">INVOICE</h1>
//         <p className="text-xl">{data.voucher_id}</p>
//       </div>
//       <div className="text-right">
//         <p className="font-bold">Invoice to</p>
//         <p>{data.customer_name}</p>
//         <p>Date: {data.sale_date}</p>
//       </div>
//     </div>

//     <table className="w-full mb-8">
//       <thead>
//         <tr className="border-b-2 border-gray-300">
//           <th className="text-left py-2 text-sm">No</th>
//           <th className="text-left py-2 text-sm">Description</th>
//           <th className="text-right py-2 text-sm">Qty</th>
//           <th className="text-right py-2 text-sm">Price</th>
//           <th className="text-right py-2 text-sm">Total</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.records.map((record, index) => (
//           <tr key={record.id} className="border-b border-gray-200">
//             <td className="py-2 text-sm">{index + 1}</td>
//             <td className="py-2 text-sm">{record.product.product_name}</td>
//             <td className="text-right py-2 text-sm">{record.quantity}</td>
//             <td className="text-right py-2 text-sm">
//               {record.product.price}
//             </td>
//             <td className="text-right py-2 text-sm">{record.cost}</td>
//           </tr>
//         ))}
//       </tbody>
//       <tfoot>
//         <tr className="border-b border-gray-200">
//           <td className="py-2 text-right text-sm" colSpan={4}>
//             Total
//           </td>
//           <td className="py-2 text-right text-sm">
//             {data.total.toFixed(2)}
//           </td>
//         </tr>
//         <tr className="border-b border-gray-200">
//           <td className="py-2 text-right text-sm" colSpan={4}>
//             Tax
//           </td>
//           <td className="py-2 text-right text-sm">{data.tax.toFixed(2)}</td>
//         </tr>
//         <tr className="border-b border-gray-200">
//           <td className="py-2 text-right text-sm" colSpan={4}>
//             Net Total
//           </td>
//           <td className="py-2 text-right text-sm">
//             {data.grandTotal.toFixed(2)}
//           </td>
//         </tr>
//       </tfoot>
//     </table>

//     <div className=" text-xs mb-8">
//       <div className=" ">
//         <h2 className="font-bold mb-2">Payment Transfer to</h2>
//         <p>Kpay,Wave - 09250152018</p>
//         <p>KBZ Bank - 02730102705025601</p>
//         <p>AYA Bank - 20003674121</p>
//       </div>
//       <div className="  ">
//         <h2 className="font-bold text-xl">Mackio IT</h2>
//         <p>48, 1st Floor, Shan Kone St.</p>
//         <p>+959-250-152-018</p>
//         <p>enquiry@mackio.com</p>
//       </div>
//     </div>

//     <div className="border-t-2 border-gray-300 pt-4">
//       <p className="mt-4 text-center text-sm">Thanks to You</p>
//     </div>
//   </div>
// </div>
