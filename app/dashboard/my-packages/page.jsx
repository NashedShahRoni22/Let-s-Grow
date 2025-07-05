"use client";

import React, { useState } from "react";
import { products } from "./products";

const tabs = ["all", "active", "passed"];

export default function MyPackages() {
    const [selectedTab, setSelectedTab] = useState("all");

    const now = new Date();

    const filteredPackages = products.filter((product) => {
        const expiredDate = new Date(product.expiredDate);

        if (selectedTab === "active") {
            return expiredDate >= now;
        }

        if (selectedTab === "passed") {
            return expiredDate < now;
        }

        return true;
    });


    return (
        <div className="py-10 px-4 lg:px-8 animate-fadeInUp">
            <h1 className="text-3xl font-bold text-white mb-6">My Investment Packages</h1>

            {/* Tabs */}
            <div className="flex gap-4 flex-wrap mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-4 py-2 rounded-full font-medium border transition-all duration-200 uppercase text-sm cursor-pointer
              ${selectedTab === tab
                                ? "bg-emerald-500 text-white border-emerald-500"
                                : "bg-black/30 text-gray-300 border-emerald-500/20 hover:bg-emerald-500/10"}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPackages.map((product) => (
                    <div
                        key={product.id}
                        className="bg-black/30 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-xl hover:shadow-lg hover:border-emerald-500 transition-all duration-200"
                    >
                        {/* Icon */}
                        <div className="p-6 bg-emerald-500/10 rounded-full flex-shrink-0 w-fit">
                            {product.icon}
                        </div>

                        {/* Info */}
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <h2 className="text-white font-semibold text-lg truncate">{product.name}</h2>
                            <p className="text-sm text-gray-400 truncate">
                                Bought: {product.buyDate} | Expires: {product.expiredDate}
                            </p>

                            {/* Capsule data */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-blue-600/70 text-white font-semibold px-3 py-1 rounded-full text-sm whitespace-nowrap">
                                    Invested: ${product.invest}
                                </span>
                                <span className="bg-green-600/70 text-white font-semibold px-3 py-1 rounded-full text-sm whitespace-nowrap">
                                    Return: ${product.return}
                                </span>
                                <span className="bg-yellow-500 text-black font-semibold px-3 py-1 rounded-full text-sm whitespace-nowrap">
                                    Stocks: {product.stocks}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
}
