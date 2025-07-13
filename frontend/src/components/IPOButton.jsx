import React from "react";

const IPOButton = ({ label, link }) => {
  return (
    <a
      href={link}
      className={`px-3 py-1 rounded-lg border ${
        label === "RHP"
          ? "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
          : "bg-[#F05537] text-white border-[#F05537] hover:bg-[#d94428]"
      } text-sm`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

export default IPOButton;
