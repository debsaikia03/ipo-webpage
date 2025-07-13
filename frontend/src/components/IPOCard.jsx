import React from "react";
import IPOButton from "./IPOButton";

const IPOCard = ({ company }) => {
  const {
    logo,
    name,
    priceBand,
    open,
    close,
    issueSize,
    issueType,
    listingDate,
    rhpLink,
    drhpLink,
  } = company;

  return (
    <div
      className="bg-white shadow-md rounded-lg p-8 flex flex-col justify-between"
      style={{ width: 542, height: 450 }}
    >
      {/* Header: Logo + Name */}
      <div className="flex items-center gap-5 mb-8">
        <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        <h2 className="text-2xl font-bold text-blue-700">{name}</h2>
      </div>

      {/* IPO Info - 1st row */}
      <div className="grid grid-cols-3 gap-x-8 text-base text-gray-700 mb-6">
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-1">PRICE BAND</span>
          <span className="text-lg">{priceBand}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-1">OPEN</span>
          <span className="text-lg">{open}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-1">CLOSE</span>
          <span className="text-lg">{close}</span>
        </div>
      </div>

      {/* IPO Info - 2nd row */}
      <div className="grid grid-cols-3 gap-x-8 text-base text-gray-700 mb-8">
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-1">ISSUE SIZE</span>
          <span className="text-lg">{issueSize}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-1">ISSUE TYPE</span>
          <span className="text-lg">{issueType}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-1">LISTING DATE</span>
          <span className="text-lg">{listingDate}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center ">
        <IPOButton label="RHP" link={rhpLink} />
        <IPOButton label="DRHP" link={drhpLink} />
      </div>
    </div>
  );
};

export default IPOCard;