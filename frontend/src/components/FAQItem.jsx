import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-md shadow-sm p-6  mb-4 min-h-[80px] sm:min-h-[100px] flex flex-col">
      <div
        className="flex justify-between items-start cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-lg">{question}</h3>
        <span className="text-blue-500 mt-1">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </div>
      {isOpen && (
        <div className="mt-3 text-sm text-gray-800">
          {Array.isArray(answer) ? (
            <ul className="list-disc pl-5 space-y-1">
              {answer.map((line, idx) => (
                <li key={idx} className="font-medium">{line}</li>
              ))}
            </ul>
          ) : (
            <p>{answer}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQItem;