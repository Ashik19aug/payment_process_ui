import React, {useState} from 'react';
import {DADA, INVOICE, SSL} from "../assets/index.jsx";

const PaymentSuccess = () => {
  const [filter, setFilter] = useState("");
  const initialData = [
    {
      id: "1",
      date: "20-12-2024 09:30",
      tr_no: "REC-62FCD0846024F-8546",
      ref_no: "YGN001240601-1-154021",
      amount: "$200",
      status: "Success",
    },
    {
      id: "1",
      date: "20-12-2024 09:30",
      tr_no: "REC-62FCD0846024F-8545",
      ref_no: "YGN001240601-1-154021",
      amount: "$200",
      status: "Success",
    },
  ];

  const [data, setData] = useState(initialData);

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                      type="button"
                      className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img src={SSL} className="h-8 me-3" alt="FlowBite Logo"/>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button type="button"
                          className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                          aria-expanded="false" data-dropdown-toggle="dropdown-user">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full"
                         src={DADA} alt="user photo"/>
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                         role="menuitem">Dashboard</a>
                    </li>
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                         role="menuitem">Settings</a>
                    </li>
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                         role="menuitem">Earnings</a>
                    </li>
                    <li>
                      <a href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                         role="menuitem">Sign out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar"
             className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
             aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#"
                 className="flex items-center p-2 text-black rounded-lg hover:bg-blue-800 hover:text-white group">
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path
                    d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path
                    d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#"
                 className="flex items-center p-2 text-white bg-blue-800 rounded-lg  hover:bg-blue-800 hover:text-white group">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4.9l-3.613 4.417a.5.5 0 01-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 01-.808-.588l4-5.5a.5.5 0 01.758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 01-.5-.5z"
                  />
                </svg>
                <span className="flex-1 ms-3  whitespace-nowrap">Transaction</span>
                </a>
            </li>

          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">

          <div className="p-6 bg-gray-100 min-h-screen w-full flex mt-10">
            <div className="w-full bg-white shadow-lg rounded-lg p-6">
              {/* Header Actions */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Transaction</h2>
              </div>

              {/* Search and Filter */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search by transaction ID"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full p-3 border font-light text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="absolute right-3 top-3.5 text-gray-500">
                  🔍
                </button>
              </div>

              {/* Table */}
              <table className="w-full table-auto border-collapse">
                <thead>
                <tr className="bg-gray-100 text-sm font-light text-gray-600">
                  <th className="border p-2 text-center">SL</th>
                  <th className="border p-2 text-center">Date</th>
                  <th className="border p-2 text-center">Transaction ID</th>
                  <th className="border p-2 text-center">Reference No</th>
                  <th className="border p-2 text-center">Amount</th>
                  <th className="border p-2 text-center">Status</th>
                  <th className="border p-2 text-center">Invoice</th>
                  <th className="border p-2 text-center">Download</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-2 text-center font-light text-xs">{item.id}</td>
                    <td className="border p-2 text-center font-light text-xs">{item.date}</td>
                    <td className="border p-2 text-center font-light text-xs">{item.tr_no}</td>
                    <td className="border p-2 text-center font-light text-xs">{item.ref_no}</td>
                    <td className="border p-2 text-center font-light text-xs">{item.amount}</td>
                    <td className="border p-2 text-center font-light text-xs">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full text-sm ${
                          item.status === "Success"
                            ? "bg-green-100 text-green-600"
                            : item.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    {/*invoice*/}
                    <td className="border p-2 text-center">
                      <a
                        href={INVOICE} // Path to your file in the public folder
                        download="Invoice.png" // File name on download
                        className="block"
                      >
                        <svg
                          data-name="Layer 1"
                          viewBox="0 0 24 24"
                          fill="#10b981"
                          className="h-6 w-6 mx-auto cursor-pointer hover:opacity-80"
                        >
                          <path d="M13 16H7a1 1 0 000 2h6a1 1 0 000-2zm-4-6h2a1 1 0 000-2H9a1 1 0 000 2zm12 2h-3V3a1 1 0 00-.5-.87 1 1 0 00-1 0l-3 1.72-3-1.72a1 1 0 00-1 0l-3 1.72-3-1.72a1 1 0 00-1 0A1 1 0 002 3v16a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zM5 20a1 1 0 01-1-1V4.73l2 1.14a1.08 1.08 0 001 0l3-1.72 3 1.72a1.08 1.08 0 001 0l2-1.14V19a3 3 0 00.18 1zm15-1a1 1 0 01-2 0v-5h2zm-7-7H7a1 1 0 000 2h6a1 1 0 000-2z" />
                        </svg>
                      </a>
                    </td>

                    {/* Download */}
                    <td className="border p-2 text-center">
                      <a
                        href={INVOICE} // Path to your file in the public folder
                        download="download_file.png" // File name on download
                        className="block"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          fill="#3b82f6"
                          className="h-6 w-6 mx-auto cursor-pointer hover:opacity-80"
                        >
                          <path d="M472.7 189.5c-15.76-10-36.21-16.79-58.59-19.54-6.65-39.1-24.22-72.52-51.27-97.26C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a149.7 149.7 0 00-45.29 60.42c-30.67 4.32-57 14.61-76.71 30C13.7 174.83 0 203.56 0 237.6 0 305 55.92 352 136 352h104V208h32v144h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9zM240 419.42L191.98 371l-22.61 23L256 480l86.63-86-22.61-23L272 419.42V352h-32v67.42z" />
                        </svg>
                      </a>
                    </td>


                  </tr>
                ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex justify-end mt-4 space-x-2">
                <button className="bg-white text-black text-xs mr-2">
                  Previous
                </button>
                <button className="bg-blue-500 text-white px-2 mr-2 rounded">1</button>
                <button className="bg-white text-black text-xs">
                  Next
                </button>
              </div>

            </div>
          </div>

      </div>
    </>
  )
    ;
};

export default PaymentSuccess;