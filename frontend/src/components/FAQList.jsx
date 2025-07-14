import React from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How to Subscribe to an IPO?",
    answer: [
      "Step 1: Login to your respective service provider.",
      "Step 2: Click on the IPO button.",
      "Step 3: Select the IPO you want to bid and enter the relevant details.",
      "Step 4: Your subscription will be completed once you make the payment or give permission.",
    ],
  },
  {
    question: "Should I buy an IPO first day?",
    answer:
      "Buying an IPO on the first day depends on your risk appetite. Often IPOs are volatile; do research on company fundamentals first.",
  },
  {
    question: "How do you know if an IPO is good?",
    answer:
      "Look at company financials, business model, promoter background, and market demand. Also check the grey market premium (GMP).",
  },
  {
    question: "What is issue size?",
    answer:
      "Issue size refers to the total value of shares offered in an IPO. It is calculated by multiplying the number of shares with the issue price.",
  },
  {
    question: "How many shares in a lot?",
    answer:
      "A lot is the minimum number of shares you must apply for in an IPO. It varies by company and is defined in the IPO prospectus.",
  },
  {
    question: "How is the lot size calculated?",
    answer:
      "Lot size is set by the issuer and SEBI, based on price band and desired retail investment value (usually around ₹15,000–₹20,000).",
  },
  {
    question: "Who decides the IPO price band?",
    answer:
      "The company and its book running lead managers (BRLMs) decide the price band based on valuation and market feedback.",
  },
  {
    question: "What is IPO GMP?",
    answer:
      "GMP (Grey Market Premium) is the premium amount at which an IPO share is trading in the unofficial grey market before listing.",
  },
  {
    question: "How many lots should I apply for IPO?",
    answer:
      "Retail investors can apply for a minimum of 1 lot and up to 14 lots (or ₹2 lakh total investment). Allocation depends on demand and lottery.",
  },
];

const FAQList = () => {
  return (
    <div className="px-4 py-6 sm:px-8 md:px-12 lg:px-24 bg-gray-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h1 className="text-xl sm:text-2xl font-bold mb-2">Frequently Asked Questions?</h1>
      <span className="block mb-6 text-xs sm:text-base">
            Find answers to common questions that come in your mind related to IPO.
        </span>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;         