import React, { useState } from "react";
import { BellIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaArrowUp } from "react-icons/fa";
import UpcomingIpoDashboard from "./UpcomingIPODashboard";


const IPOAdminDashboardContent = () => (
  <div className="p-6 flex flex-col lg:grid lg:grid-cols-3 gap-6">
    {/* Dashboard Section */}
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
      <p className="text-sm text-gray-500">IPO Dashboard India</p>
      <div className="flex items-center text-green-600 text-sm">
        <FaArrowUp className="mr-1" />
        20 IPO in Gain
      </div>
      <div className="flex space-x-4 mt-4">
        <StatCircle value="9" label="IPO in Loss" color="purple" />
        <StatCircle value="30" label="Total IPO" color="orange" />
        <StatCircle value="20" label="IPO in Gain" color="cyan" />
      </div>
    </div>

    {/* Quick Links Section */}
    <div className="border-t lg:border-t-0 lg:border-l border-gray-200 pl-0 lg:pl-6 pr-6 pt-6 lg:pt-0">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h2>
      <p className="text-sm text-gray-500 mb-2">Adipiscing elit, sed do eiusmod tempor</p>
      <div className="space-y-4">
        {["NSE India", "BSE India", "SEBI", "Money Control"].map((link, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-white shadow-sm rounded">
            <span>{link}</span>
            <a href="#" className="text-indigo-500 text-sm hover:underline">Visit Now</a>
          </div>
        ))}
      </div>
    </div>

    {/* Main Board IPO Section */}
    <div className="border-t lg:border-t-0 lg:border-l border-gray-200 pl-0 lg:pl-6 pt-6 lg:pt-0">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Main Board IPO</h2>
          <p className="text-sm text-gray-500">From 01 Jan 2024</p>
        </div>
        <button className="text-sm text-indigo-600 border border-indigo-600 rounded px-3 py-1 hover:bg-indigo-50">
          View Report
        </button>
      </div>
      <div className="w-32 h-32 md:w-40 md:h-40 relative mx-auto">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="16" fill="none" stroke="#E5E7EB" strokeWidth="4" />
          <circle cx="18" cy="18" r="16" fill="none" stroke="#6366F1" strokeWidth="4" strokeDasharray="70,30" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-indigo-600 font-semibold">15</div>
      </div>
      <div className="flex justify-center gap-4 text-sm text-gray-600 mt-4 flex-wrap">
        {["Upcoming", "New Listed", "Ongoing"].map((label, i) => (
          <div key={i} className="flex items-center space-x-1">
            <span className={`w-2 h-2 rounded-full ${["bg-indigo-400", "bg-indigo-600", "bg-indigo-200"][i]}`}></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StatCircle = ({ value, label, color }) => {
  const colorMap = {
    purple: "border-purple-400 text-purple-700",
    orange: "border-orange-400 text-orange-600",
    cyan: "border-cyan-400 text-cyan-600",
  };
  return (
    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-4 ${colorMap[color]} flex flex-col items-center justify-center text-xs`}>
      <div className="text-xl font-semibold">{value}</div>
      <div className="text-center">{label}</div>
    </div>
  );
};

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - mobile */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-lg text-indigo-600">Bluestock Fintech</span>
          <button onClick={() => setSidebarOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <SidebarMenu activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      {/* Sidebar - desktop */}
      <aside className="hidden lg:block w-64 bg-white p-6" style={{ background: "#F1F2F7" }}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
            BF
          </div>
          <span className="font-semibold text-lg text-indigo-600">Bluestock Fintech</span>
        </div>
        <SidebarMenu activeSection={activeSection} setActiveSection={setActiveSection} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Topbar */}
        <div className="w-full flex items-center justify-between bg-white px-4 py-3 border-b shadow-sm">
          <div className="flex items-center space-x-3 w-full lg:w-1/3">
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            </button>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 text-white flex items-center justify-center font-medium">
                V
              </div>
              <span className="text-gray-700 font-medium hidden sm:inline">Hi, Vishal</span>
            </div>
            <button className="relative">
              <BellIcon className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Content Switch */}
        <div className="overflow-auto flex-1 p-4">
          {activeSection === "dashboard" && <IPOAdminDashboardContent />}
          {activeSection === "manage-ipo" && <UpcomingIpoDashboard />}
        </div>
      </div>
    </div>
  );
};

const SidebarMenu = ({ activeSection, setActiveSection }) => (
  <nav className="flex flex-col space-y-6 mt-6 text-gray-700 text-sm">
    <div className="text-gray-500 text-xs uppercase">Menu</div>
    <button
      onClick={() => setActiveSection("dashboard")}
      className={`text-left hover:text-indigo-600 ${activeSection === "dashboard" ? "font-bold text-indigo-600" : ""}`}
    >
      Dashboard
    </button>
    <button
      onClick={() => setActiveSection("manage-ipo")}
      className={`text-left hover:text-indigo-600 ${activeSection === "manage-ipo" ? "font-bold text-indigo-600" : ""}`}
    >
      Manage IPO
    </button>
    <div className="hover:text-indigo-600 cursor-pointer">IPO Subscription</div>
    <div className="hover:text-indigo-600 cursor-pointer">IPO Allotment</div>
    <div className="my-4 border-t"></div>
    <div className="text-gray-500 text-xs uppercase">Others</div>
    <div className="hover:text-indigo-600 cursor-pointer">Settings</div>
    <div className="hover:text-indigo-600 cursor-pointer">API Manager</div>
    <div className="hover:text-indigo-600 cursor-pointer">Accounts</div>
    <div className="hover:text-indigo-600 cursor-pointer">Help</div>
  </nav>
);

export default AdminPanel;
