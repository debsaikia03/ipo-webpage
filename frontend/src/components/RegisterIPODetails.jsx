import React, { useState } from "react";
import { Button, Input, Select } from "@/components/ui";
import { UploadIcon, TrashIcon } from "lucide-react";

const ipoStatuses = ["Not Issued", "Issued", "Listed"];
const issueTypes = ["Book Built", "Fixed Price", "Offer for Sale"];

export default function RegisterIPODetails() {
  const [form, setForm] = useState({
    companyName: "Vodafone Idea",
    priceBand: "Not Issued",
    openDate: "Not Issued",
    closeDate: "Not Issued",
    issueSize: "2300 Cr.",
    issueType: "",
    listingDate: "Not Issued",
    status: "",
    ipoPrice: "₹ 383",
    listingPrice: "₹ 435",
    listingGain: "13.58 %",
    listedDate: "2024-05-30",
    cmp: "₹410",
    currentReturn: "7.05 %",
    rhpLink: "",
    drhpLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Upcomming IPO Information</h1>
      <p className="mb-6 text-gray-600">Manage your IPO Details</p>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2 items-center">
          <img
            src="/nse-logo.png"
            alt="NSE Logo"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="font-semibold">NSE India</p>
            <p className="text-xs text-gray-500">Tech Lead, Pune</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="default">Register</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Input
          label="Company Name"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
        />
        <Input
          label="Price Band"
          name="priceBand"
          value={form.priceBand}
          onChange={handleChange}
        />

        <Input
          label="Open"
          name="openDate"
          value={form.openDate}
          onChange={handleChange}
        />
        <Input
          label="Close"
          name="closeDate"
          value={form.closeDate}
          onChange={handleChange}
        />

        <Input
          label="Issue Size"
          name="issueSize"
          value={form.issueSize}
          onChange={handleChange}
        />
        <Select
          label="Issue Type"
          name="issueType"
          options={issueTypes}
          value={form.issueType}
          onChange={(value) =>
            setForm({ ...form, issueType: value })
          }
        />

        <Input
          label="Listing Date"
          name="listingDate"
          value={form.listingDate}
          onChange={handleChange}
        />
        <Select
          label="Status"
          name="status"
          options={ipoStatuses}
          value={form.status}
          onChange={(value) =>
            setForm({ ...form, status: value })
          }
        />
      </div>

      <h2 className="mt-10 mb-4 text-lg font-semibold">
        New Listed IPO Details (When IPO Gets Listed)
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <Input
          label="IPO Price"
          name="ipoPrice"
          value={form.ipoPrice}
          onChange={handleChange}
        />
        <Input
          label="Listing Price"
          name="listingPrice"
          value={form.listingPrice}
          onChange={handleChange}
        />

        <Input
          label="Listing Gain"
          name="listingGain"
          value={form.listingGain}
          onChange={handleChange}
        />
        <Input
          label="Listing Date"
          name="listedDate"
          value={form.listedDate}
          onChange={handleChange}
        />

        <Input
          label="CMP"
          name="cmp"
          value={form.cmp}
          onChange={handleChange}
        />
        <Input
          label="Current Return"
          name="currentReturn"
          value={form.currentReturn}
          onChange={handleChange}
        />

        <Input
          label="RHP"
          name="rhpLink"
          placeholder="Enter RHP PDF Link"
          value={form.rhpLink}
          onChange={handleChange}
        />
        <Input
          label="DRHP"
          name="drhpLink"
          placeholder="Enter DRHP PDF Link"
          value={form.drhpLink}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
