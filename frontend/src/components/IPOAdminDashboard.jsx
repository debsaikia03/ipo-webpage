import React from 'react';

const IPOAdminDashboard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Donut Chart */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-40 h-40">
            <div
              className="w-40 h-40 rounded-full"
              style={{
                background:
                  'conic-gradient(#a5b4fc 0% 36%, #4f46e5 36% 96%, #e0e7ff 96% 100%)',
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-700">
              <div className="text-lg font-bold">Total</div>
              <div className="text-2xl font-extrabold">42</div>
            </div>
          </div>

          {/* Legend in horizontal line */}
          <div className="mt-4 flex space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-indigo-300 mr-2"></span>
              Upcoming 15
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-indigo-600 mr-2"></span>
              New Listed 25
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-indigo-100 mr-2"></span>
              Ongoing 2
            </div>
          </div>
        </div>

        {/* Side Card */}
        <div className="flex items-center justify-center">
          <div className="bg-[#37376b] text-white text-xs p-2 rounded shadow-lg ml-auto">
            <div className="font-semibold">Afternoon</div>
            IPO NSE & BSE
            <div className="font-bold">15</div>
          </div>
        </div>

        {/* Bubble Stats */}
        <div className="relative w-44 h-40">
          {/* Right - Total IPO */}
          <div className="absolute top-0 left-[110%] transform -translate-x-1/2 w-44 h-44 bg-orange-400 rounded-full flex flex-col items-center justify-center text-white opacity-90">
            <div className="text-3xl font-bold">30</div>
            <div className="text-sm mt-1">Total IPO</div>
          </div>

          {/* Bottom Left - IPO in Gain */}
          <div className="absolute bottom-[-20px] left-0 w-24 h-24 bg-cyan-400 rounded-full flex items-center justify-center text-white text-sm text-center p-2">
            20 IPO in Gain
          </div>

          {/* Top Left - IPO in Loss */}
          <div className="absolute top-1 left-8 w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center text-white text-sm text-center p-2">
            9 IPO in Loss
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPOAdminDashboard;
