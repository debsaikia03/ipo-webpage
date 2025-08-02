// UpcomingIpoDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";


const ipoData = [
  {
    company: "Adani Power",
    priceBand: "₹ 329 - 136",
    open: "2023-06-03",
    close: "2024-06-05",
    issueSize: "45530.15 Cr.",
    issueType: "Book Built",
    listingDate: "2023-06-10",
    status: "Ongoing",
  },
  {
    company: "VBL LTD",
    priceBand: "₹ 229 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "1330.15 Cr.",
    issueType: "Book Built",
    listingDate: "2018-06-10",
    status: "Comming",
  },
  {
    company: "Tata Motors",
    priceBand: "₹ 12549 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "1340.15 Cr.",
    issueType: "Book Built",
    listingDate: "2016-06-10",
    status: "New Listed",
  },

];

const statusColor = {
  Ongoing: "bg-green-100 text-green-600 border-green-500",
  Comming: "bg-yellow-100 text-yellow-600 border-yellow-500",
  "New Listed": "bg-red-100 text-red-600 border-red-500",
};

export default function UpcomingIpoDashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Upcomming IPO | Dashboard</h2>
        <Link to="/register-ipo">
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow cursor-pointer">
            Register IPO
          </button>
        </Link>

      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="p-3">Company</th>
              <th className="p-3">Price Band</th>
              <th className="p-3">Open</th>
              <th className="p-3">Close</th>
              <th className="p-3">ISSUE SIZE</th>
              <th className="p-3">ISSUE Type</th>
              <th className="p-3">Listing Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
              <th className="p-3">Delete/View</th>
            </tr>
          </thead>
          <tbody>
            {ipoData.map((ipo, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{ipo.company}</td>
                <td className="p-3">{ipo.priceBand}</td>
                <td className="p-3">{ipo.open}</td>
                <td className="p-3">{ipo.close}</td>
                <td className="p-3">{ipo.issueSize}</td>
                <td className="p-3">{ipo.issueType}</td>
                <td className="p-3">{ipo.listingDate}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full border text-xs font-medium ${statusColor[ipo.status]}`}
                  >
                    {ipo.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm">
                    Update
                  </button>
                </td>
                <td className="p-3 flex gap-3">
                  <button className="text-red-600 hover:text-red-800">
                    🗑️
                  </button>
                  <button className="text-gray-600 hover:text-black">
                    👁️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button className="px-3 py-1 bg-gray-200 rounded">&lt;</button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
        <button className="px-3 py-1 bg-gray-200 rounded">2</button>
        <span className="px-3 py-1">...</span>
        <button className="px-3 py-1 bg-gray-200 rounded">9</button>
        <button className="px-3 py-1 bg-gray-200 rounded">10</button>
        <button className="px-3 py-1 bg-gray-200 rounded">&gt;</button>
      </div>
    </div>
  );
}
