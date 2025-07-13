import React from "react";
import IPOCard from "./IPOCard";

const companies = [
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415049/nova_bncd8i.png",
        name: "Nova Agritech Ltd.",
        priceBand: "Rs 39 – 41",
        open: "2024-01-22",
        close: "2024-01-24",
        issueSize: "143.81 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-30",
        rhpLink: "#",
        drhpLink: "#",
    },
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415061/epack_z0qy6x.jpg",
        name: "EPACK Durable Ltd.",
        priceBand: "Rs 218 – 230",
        open: "2024-01-19",
        close: "2024-01-23",
        issueSize: "640.05 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-29",
        rhpLink: "#",
        drhpLink: "#",
    },
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415061/rk_ukzdny.jpg",
        name: "RK Swamy Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "Not Issued",
        issueType: "Book Built",
        listingDate: "Not Issued",
        rhpLink: "#",
        drhpLink: "#",
    },
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415062/oyo_eq3kg4.png",
        name: "Oravel Stays Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "8430 Cr.",
        issueType: "Book Built",
        listingDate: "Not Issued",
        rhpLink: "#",
        drhpLink: "#",
    },
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415062/boat_tccskq.png",
        name: "Imagine Marketing Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "2000 Cr.",
        issueType: "Book Built",
        listingDate: "Not Issued",
        rhpLink: "#",
        drhpLink: "#",
    },
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415064/kids_tq3lys.jpg",
        name: "Kids Clinic India Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "Not Issued",
        issueType: "Book Built",
        listingDate: "Not Issued",
        rhpLink: "#",
        drhpLink: "#",
    },
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415065/ola_kicidp.png",
        name: "OLA Electric Mobility Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "Not Issued",
        issueType: "Book Built",
        listingDate: "Not Issued",
        rhpLink: "#",
        drhpLink: "#",
    },
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415066/mobi_wisiin.png",
        name: "One Mobikwik Systems Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "1900 Cr.",
        issueType: "Book Built",
        listingDate: "Not Issued",
        rhpLink: "#",
        drhpLink: "#",
    }, {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415067/ixi_ry2hfl.png",
        name: "Le Traveneus Technology",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "1600 Cr.",
        issueType: "Book Built",
        listingDate: "Not Issued",
        rhpLink: "#",
        drhpLink: "#",
    },
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415067/cmr_a4nzrt.jpg",
        name: "CMR Green Technologies",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "Not Issued",
        issueType: "Book Built",
        listingDate: "Not Issued",
        rhpLink: "#",
        drhpLink: "#",
    },
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415068/well_p09xbf.png",
        name: "Wellness Forever",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "Not Issued",
        issueType: "Book Built",
        listingDate: "Not Issued",
        rhpLink: "#",
        drhpLink: "#",
    },
    {
        logo: "https://res.cloudinary.com/ds77uascw/image/upload/v1752415070/pkh_qofuhr.jpg",
        name: "PKH Ventures Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "Not Issued",
        issueType: "Book Built",
        listingDate: "Not Issued",
        rhpLink: "#",
        drhpLink: "#",
    },
];

const IPOList = () => {
    return (
        <div className="px-4 py-6 sm:px-8 md:px-12 lg:px-24 bg-gray-100">
            <span className="block mb-4 text-sm sm:text-base md:text-lg cursor-pointer">
                <span className="text-blue-600 font-semibold">Blustock</span>
                <span> &gt; </span>
                <span className="text-blue-600 font-semibold">IPO</span>
                <span> &gt; UPCOMING IPO</span>
            </span>
            <h1 className="text-xl sm:text-2xl font-bold mb-2">Upcoming IPO</h1>
            <span className="block mb-6 text-xs sm:text-base">
                Companies that have filled for an IPO with SEBI. Few details might be disclosed by the companies later.
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {companies.map((company, index) => (
                    <div key={index} className="flex justify-center">
                        <IPOCard company={company} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IPOList;