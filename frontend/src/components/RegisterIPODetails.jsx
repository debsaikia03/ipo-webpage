import React from "react";

const RegisterIPODetails = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Upcomming IPO Information</h2>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded shadow">Register</button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded">Cancel</button>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-6">Manage your IPO Details</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Menu */}
        <div className="w-full lg:w-1/5 border-r">
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 bg-blue-100 text-blue-600 font-semibold rounded">IPO Information</button>
            <button className="w-full text-left px-3 py-2 text-gray-700">IPO Info</button>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-4/5">
          <h3 className="text-xl font-semibold mb-4">IPO Information</h3>

          <div className="mb-6">
            <label className="block font-medium mb-1">Company Logo</label>
            <div className="flex items-center gap-4">
              <img src="/nse-logo.png" alt="NSE Logo" className="w-16 h-16 rounded-full" />
              <div className="space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded">Upload Logo</button>
                <button className="px-3 py-1 border border-gray-400 text-sm rounded">Delete</button>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Company Name</label>
              <input type="text" placeholder="Vodafone Idea" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Price Band</label>
              <input type="text" placeholder="Not Issued" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Open</label>
              <input type="text" placeholder="Not Issued" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Close</label>
              <input type="text" placeholder="Not Issued" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Issue Size</label>
              <input type="text" placeholder="2300 Cr." className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Issue Type</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>Not Issued</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Listing Date</label>
              <input type="text" placeholder="Not Issued" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Status</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>Not Issued</option>
              </select>
            </div>
          </div>

          {/* New Listed IPO Details */}
          <h4 className="mt-8 mb-4 font-semibold">NEW LISTED IPO DETAILS (WHEN IPO GET LISTED)</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">IPO Price</label>
              <input type="text" placeholder="₹ 383" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Listing Price</label>
              <input type="text" placeholder="₹ 435" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Listing Gain</label>
              <input type="text" placeholder="13.58 %" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Listing Date</label>
              <input type="date" value="2024-05-30" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">CMP</label>
              <input type="text" placeholder="₹410" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Current Return</label>
              <input type="text" placeholder="7.05 %" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">RHP</label>
              <input type="text" placeholder="Enter RHP PDF Link" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">DRHP</label>
              <input type="text" placeholder="Enter DRHP PDF Link" className="w-full border px-3 py-2 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterIPODetails;
