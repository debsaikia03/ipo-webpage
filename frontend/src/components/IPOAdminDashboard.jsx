import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FaArrowUp } from "react-icons/fa";

const IPOAdminDashboard = () => {
  return (
    <div className="flex h-screen font-sans bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white  p-6 flex flex-col space-y-6" style={{ background: "#F1F2F7" }}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
            BF
          </div>
          <span className="font-semibold text-lg text-indigo-600">Bluestock Fintech</span>
        </div>

        <nav className="flex flex-col space-y-6 mt-6 text-gray-700 text-sm">
          <div className="text-gray-500 text-xs uppercase">MENU</div>
          <div className="hover:text-indigo-600 cursor-pointer">Dashboard</div>
          <div className="hover:text-indigo-600 cursor-pointer">Manage IPO</div>
          <div className="hover:text-indigo-600 cursor-pointer">IPO Subscription</div>
          <div className="hover:text-indigo-600 cursor-pointer">IPO Allotment</div>

          <div className="my-4"></div>

          <div className="text-gray-500 text-xs uppercase">OTHERS</div>
          <div className="hover:text-indigo-600 cursor-pointer">Settings</div>
          <div className="hover:text-indigo-600 cursor-pointer">API Manager</div>
          <div className="hover:text-indigo-600 cursor-pointer">Accounts</div>
          <div className="hover:text-indigo-600 cursor-pointer">Help</div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="w-full flex items-center justify-between bg-white px-6 py-3 border-b shadow-sm">
          {/* Search Bar */}
          <div className="flex items-center relative w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>

          {/* Right: Notification and Profile */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 text-white flex items-center justify-center font-medium">
                V
              </div>
              <span className="text-gray-700 font-medium">Hi, Vishal</span>
            </div>
            <button className="relative">
              <BellIcon className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-0 -right-[-1px] h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-6 grid grid-cols-3 gap-6">
          {/* IPO Dashboard */}
          <div className="col-span-1 space-y-4 pr-6">
            <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
            <p className="text-sm text-gray-500">IPO Dashboard India</p>
            <div className="flex items-center text-green-600 text-sm">
              <FaArrowUp className="mr-1" />
              20 IPO in Gain
            </div>

            <div className="flex space-x-4 mt-4">
              <div className="w-24 h-24 rounded-full border-4 border-purple-400 flex flex-col items-center justify-center text-purple-700">
                <div className="text-xl font-semibold">9</div>
                <div className="text-xs text-center">IPO in Loss</div>
              </div>
              <div className="w-24 h-24 rounded-full border-4 border-orange-400 flex flex-col items-center justify-center text-orange-600">
                <div className="text-xl font-semibold">30</div>
                <div className="text-xs text-center">Total IPO</div>
              </div>
              <div className="w-24 h-24 rounded-full border-4 border-cyan-400 flex flex-col items-center justify-center text-cyan-600">
                <div className="text-xl font-semibold">20</div>
                <div className="text-xs text-center">IPO in Gain</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 border-l border-gray-200 pl-6 pr-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h2>
            <p className="text-sm text-gray-500 mb-2">Adipiscing elit, sed do eiusmod tempor</p>
            <div className="space-y-4">
              {["NSE India", "BSE India", "SEBI", "Money Control"].map((link, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white">
                  <span>{link}</span>
                  <a href="#" className="text-indigo-500 text-sm hover:underline">Visit Now</a>
                </div>
              ))}
            </div>
          </div>

          {/* Main Board IPO */}
          <div className="col-span-1 border-l border-gray-200 pl-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Main Board IPO</h2>
                <p className="text-sm text-gray-500">From 01 Jan 2024</p>
              </div>
              <button className="text-sm text-indigo-600 border border-indigo-600 rounded px-3 py-1 hover:bg-indigo-50">
                View Report
              </button>
            </div>

            {/* Donut Chart (Dummy circle) */}
            <div className="w-40 h-40 relative mx-auto">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="#6366F1" strokeWidth="4" strokeDasharray="70,30" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-indigo-600 font-semibold">
                15
              </div>
            </div>

            <div className="flex justify-center gap-4 text-sm text-gray-600 mt-4">
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                <span>Upcoming</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span>New Listed</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-indigo-200 rounded-full"></span>
                <span>Ongoing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPOAdminDashboard;
