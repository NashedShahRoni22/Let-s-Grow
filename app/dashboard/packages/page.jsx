"use client";

import React, { useState } from "react";
import { Gem, Bitcoin, Leaf, Tv, ShoppingCart, Cpu, MonitorSmartphone, ShieldCheck, Rocket, Server } from "lucide-react";

const products = [
  { id: 1, type: "crypto", name: "Bitcoin Investment", price: 10, icon: <Bitcoin className="text-yellow-400 w-6 h-6" />, listedAt: "2025-07-01", availableUntil: "2025-07-16" },
  { id: 2, type: "crypto", name: "Ethereum Mining", price: 20, icon: <Bitcoin className="text-blue-400 w-6 h-6" />, listedAt: "2025-07-01", availableUntil: "2025-07-16" },
  { id: 3, type: "electronics", name: "Smart Watch Investment", price: 15, icon: <Tv className="text-emerald-400 w-6 h-6" />, listedAt: "2025-07-02", availableUntil: "2025-07-17" },
  { id: 4, type: "farming", name: "Organic Farm Stock", price: 25, icon: <Leaf className="text-green-500 w-6 h-6" />, listedAt: "2025-07-03", availableUntil: "2025-07-18" },
  { id: 5, type: "asset", name: "Gold Bars", price: 50, icon: <Gem className="text-orange-400 w-6 h-6" />, listedAt: "2025-07-01", availableUntil: "2025-07-16" },
  { id: 6, type: "asset", name: "Diamond Stocks", price: 100, icon: <Gem className="text-purple-400 w-6 h-6" />, listedAt: "2025-07-02", availableUntil: "2025-07-17" },
  { id: 7, type: "electronics", name: "Gaming Monitor Investment", price: 30, icon: <MonitorSmartphone className="text-blue-300 w-6 h-6" />, listedAt: "2025-07-03", availableUntil: "2025-07-18" },
  { id: 8, type: "farming", name: "Hydroponic Kit Stock", price: 18, icon: <Leaf className="text-green-400 w-6 h-6" />, listedAt: "2025-07-01", availableUntil: "2025-07-16" },
  { id: 9, type: "crypto", name: "Litecoin Plan", price: 12, icon: <Bitcoin className="text-slate-400 w-6 h-6" />, listedAt: "2025-07-03", availableUntil: "2025-07-18" },
  { id: 10, type: "asset", name: "Silver Bonds", price: 40, icon: <Gem className="text-gray-300 w-6 h-6" />, listedAt: "2025-07-04", availableUntil: "2025-07-19" },
  { id: 11, type: "electronics", name: "Tablet Investment", price: 28, icon: <MonitorSmartphone className="text-violet-400 w-6 h-6" />, listedAt: "2025-07-04", availableUntil: "2025-07-19" },
  { id: 12, type: "farming", name: "Dairy Farm Share", price: 22, icon: <Leaf className="text-green-200 w-6 h-6" />, listedAt: "2025-07-05", availableUntil: "2025-07-20" },
  { id: 13, type: "asset", name: "Luxury Gem Investment", price: 70, icon: <Gem className="text-pink-400 w-6 h-6" />, listedAt: "2025-07-05", availableUntil: "2025-07-20" },
  { id: 14, type: "electronics", name: "Processor Stocks", price: 35, icon: <Cpu className="text-orange-300 w-6 h-6" />, listedAt: "2025-07-06", availableUntil: "2025-07-21" },
  { id: 15, type: "crypto", name: "BNB Plan", price: 14, icon: <Bitcoin className="text-yellow-300 w-6 h-6" />, listedAt: "2025-07-06", availableUntil: "2025-07-21" },
  { id: 16, type: "asset", name: "Palladium Vault", price: 90, icon: <Gem className="text-slate-200 w-6 h-6" />, listedAt: "2025-07-06", availableUntil: "2025-07-21" },
  { id: 17, type: "electronics", name: "Secure Storage Unit", price: 45, icon: <ShieldCheck className="text-emerald-400 w-6 h-6" />, listedAt: "2025-07-07", availableUntil: "2025-07-22" },
  { id: 18, type: "farming", name: "Greenhouse Unit", price: 38, icon: <Leaf className="text-green-600 w-6 h-6" />, listedAt: "2025-07-07", availableUntil: "2025-07-22" },
  { id: 19, type: "crypto", name: "Solana Stake", price: 16, icon: <Bitcoin className="text-teal-300 w-6 h-6" />, listedAt: "2025-07-07", availableUntil: "2025-07-22" },
  { id: 20, type: "electronics", name: "Cloud Server Plan", price: 60, icon: <Server className="text-indigo-400 w-6 h-6" />, listedAt: "2025-07-08", availableUntil: "2025-07-23" },
  { id: 21, type: "crypto", name: "XRP Growth Pack", price: 26, icon: <Bitcoin className="text-cyan-400 w-6 h-6" />, listedAt: "2025-07-08", availableUntil: "2025-07-23" },
];

const filters = ["all", "crypto", "electronics", "farming", "asset"];

export default function PackagePage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProducts = selectedFilter === "all"
    ? products
    : products.filter((product) => product.type === selectedFilter);

  return (
    <div className="py-10 animate-fadeInUp px-4 lg:px-8">
      <h1 className="text-3xl font-bold text-white mb-6">Investment Products</h1>

      <div className="flex gap-4 flex-wrap mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-full font-medium border transition-all duration-200 uppercase text-sm cursor-pointer
              ${selectedFilter === filter
                ? "bg-emerald-500 text-white border-emerald-500"
                : "bg-black/30 text-gray-300 border-emerald-500/20 hover:bg-emerald-500/10"}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-black/30 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-xl hover:shadow-lg hover:border-emerald-500 transition-all duration-200"
          >
            {/* Icon */}
            <div className="p-6 bg-emerald-500/10 rounded-full flex-shrink-0 w-fit ">
              {product.icon}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <h2 className="text-white font-semibold text-lg truncate">{product.name}</h2>
              <p className="text-sm text-gray-400 truncate">
                Listed: {product.listedAt} | Available Till: {product.availableUntil}
              </p>

              <div className="flex flex-wrap gap-2 mt-1">
                <span className="bg-emerald-600/70 text-white font-semibold px-3 py-1 rounded-full text-sm whitespace-nowrap">
                  Price: ${product.price}
                </span>
                <span className="bg-green-600/70 text-white font-semibold px-3 py-1 rounded-full text-sm whitespace-nowrap">
                  Return: ${Math.round(product.price * 1.5)} after 15 days
                </span>
              </div>
            </div>

            {/* Buy button */}
            <button className=" w-fit bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4 rounded-full hover:from-emerald-500 hover:to-green-500 cursor-pointer flex-shrink-0">
              <ShoppingCart className="w-5 h-5" />
            </button>
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