import React, { useState } from "react";

const PaymentForm = () => {
  const [fileSelected, setFileSelected] = useState(null);
  const tableData = [
    {
      no: 1,
      fullName: "JAYVION SIMON",
      travelDoc: "CCCO2251",
      nationality: "Myanmar",
      visaType: "Tourist Visa(TR)",
      fee: "200.00",
    },
    {
      no: 2,
      fullName: "MIN THU",
      travelDoc: "CCC123456",
      nationality: "Myanmar",
      visaType: "Tourist Visa(TR)",
      fee: "200.00",
    },
  ];

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileSelected(file);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl flex overflow-hidden">
        {/* Left Section */}
        <div className="w-1/3 bg-gray-300 p-8 flex flex-col items-center justify-center">
          <div className="mb-6">
            <img src="./src/assets/logo.png" style={{width: "120px"}} alt="Logo" className="rounded-full shadow-md"/>
          </div>
          <h2 className="text-lg font-normal mb-2">Merchant name</h2>
          <p className="text-gray-600 text-sm font-light text-center leading-5">
            93, New Eskaton, Dhaka <br />
            Support Contact Number <br />
            <span className="font-light">Support Email ID : Support@gmail.com</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-8 flex flex-col justify-center">
          <h3 className="text-lg font-normal mb-6 text-gray-800 text-center justify-start">
            Payment Form
          </h3>
          {/*<form>*/}

            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-xs text-gray-700 font-medium mb-2"
              >
                Select Document <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  id="file"
                  className="w-full text-xs p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  className="bg-blue-600  text-sm text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                >
                  Upload
                </button>
              </div>
            </div>

            {/* Table Section */}
            {fileSelected && (
              <div className="mt-6">
                <h3 className="text-xs font-semibold mb-4">Application(s) List</h3>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="border text-xs p-2">No.</th>
                    <th className="border text-xs p-2">Full name</th>
                    <th className="border text-xs p-2">Travel doc No.</th>
                    <th className="border text-xs p-2">Nationality</th>
                    <th className="border text-xs p-2">Visa Type</th>
                    <th className="border text-xs p-2">Fee</th>
                  </tr>
                  </thead>
                  <tbody>
                  {tableData.map((row) => (
                    <tr key={row.no} className="text-center">
                      <td className="border text-xs p-2">{row.no}</td>
                      <td className="border text-xs p-2">{row.fullName}</td>
                      <td className="border text-xs p-2">{row.travelDoc}</td>
                      <td className="border text-xs p-2">{row.nationality}</td>
                      <td className="border text-xs p-2">{row.visaType}</td>
                      <td className="border text-xs p-2 font-semibold">{row.fee}</td>
                    </tr>
                  ))}
                  {/* Total Fee Row */}
                  <tr className="font-semibold">
                    <td colSpan="5" className="border p-2 text-xs text-right">
                      Total Fee
                    </td>
                    <td className="border p-2 text-xs text-center">400.00</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            )}


            {/* Button */}
            {fileSelected && (
              <div className="flex justify-center">
                <button type="submit" className="w-full text-sm bg-blue-600 text-white p-3 mt-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 flex justify-center items-center">
                  Proceed to Pay
                  <span className="ml-2">➡</span>
                </button>
              </div>
            )}
          {/*</form>*/}

          {/* Footer */}
          {fileSelected && (
            <div className="mt-6 text-center text-gray-500 text-sm">
              Powered by{' '}
              <span className="text-blue-600 font-semibold">SSLCommerz</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
