"use client";
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, ArrowRight, Star, Zap, DollarSign } from 'lucide-react';

export default function TopAssetsSection() {
    const [selectedAsset, setSelectedAsset] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const assets = [
        {
            id: 1,
            name: "Bitcoin",
            symbol: "BTC",
            icon: "₿",
            price: "$45,230.00",
            change: "+5.2%",
            changeValue: "+$2,234",
            isPositive: true,
            volume: "$2.5B",
            marketCap: "$890B",
            rating: 4.8,
            risk: "Medium",
            description: "The world's first and largest cryptocurrency by market cap"
        },
        {
            id: 2,
            name: "Ethereum",
            symbol: "ETH",
            icon: "Ξ",
            price: "$3,120.00",
            change: "+3.8%",
            changeValue: "+$115",
            isPositive: true,
            volume: "$1.8B",
            marketCap: "$375B",
            rating: 4.9,
            risk: "Medium",
            description: "Leading smart contract platform powering DeFi and NFTs"
        },
        {
            id: 3,
            name: "Cardano",
            symbol: "ADA",
            icon: "₳",
            price: "$0.45",
            change: "-2.1%",
            changeValue: "-$0.01",
            isPositive: false,
            volume: "$450M",
            marketCap: "$15.2B",
            rating: 4.3,
            risk: "High",
            description: "Proof-of-stake blockchain platform focused on sustainability"
        },
        {
            id: 4,
            name: "Solana",
            symbol: "SOL",
            icon: "◎",
            price: "$98.50",
            change: "+7.3%",
            changeValue: "+$6.7",
            isPositive: true,
            volume: "$890M",
            marketCap: "$42.1B",
            rating: 4.5,
            risk: "High",
            description: "High-performance blockchain supporting fast transactions"
        },
        {
            id: 5,
            name: "Polkadot",
            symbol: "DOT",
            icon: "●",
            price: "$6.80",
            change: "+4.1%",
            changeValue: "+$0.27",
            isPositive: true,
            volume: "$320M",
            marketCap: "$8.5B",
            rating: 4.2,
            risk: "High",
            description: "Multi-chain protocol enabling blockchain interoperability"
        },
        {
            id: 6,
            name: "Chainlink",
            symbol: "LINK",
            icon: "⬟",
            price: "$14.25",
            change: "+1.9%",
            changeValue: "+$0.27",
            isPositive: true,
            volume: "$510M",
            marketCap: "$7.6B",
            rating: 4.4,
            risk: "Medium",
            description: "Decentralized oracle network connecting blockchains to real-world data"
        }
    ];


    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setSelectedAsset((prev) => (prev + 1) % assets.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    

    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-500/20 mb-6">
                        <TrendingUp className="h-4 w-4 text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-medium">Top Performing Assets</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Invest in Tomorrow's
                        <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent"> Winners</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Our AI analyzes thousands of digital assets to identify the most promising investment opportunities
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Asset List */}
                    <div className="lg:col-span-2 space-y-4">
                        {assets.map((asset, index) => (
                            <div
                                key={asset.id}
                                className={`bg-black/40 backdrop-blur-xl rounded-xl p-6 border transition-all duration-500 cursor-pointer transform ${selectedAsset === index
                                        ? isVisible
                                            ? 'border-emerald-500/50 bg-emerald-500/10 scale-100 opacity-100'
                                            : 'opacity-0 scale-95'
                                        : 'border-emerald-500/20 hover:border-emerald-500/30 opacity-60'
                                    }`}
                                onClick={() => setSelectedAsset(index)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-full size-12 p-3 text-black font-bold text-3xl flex justify-center items-center">
                                            {asset.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg">{asset.name}</h3>
                                            <p className="text-gray-400">{asset.symbol}</p>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <div className="text-white font-bold text-xl">{asset.price}</div>
                                        <div className={`flex items-center space-x-1 ${asset.isPositive ? 'text-emerald-400' : 'text-red-400'
                                            }`}>
                                            {asset.isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                                            <span className="font-medium">{asset.change}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-4 bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-emerald-400 to-green-500 h-2 rounded-full transition-all duration-1000"
                                        style={{ width: `${(asset.rating / 5) * 100}%` }}
                                    ></div>
                                </div>

                                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-400">Volume</p>
                                        <p className="text-white font-medium">{asset.volume}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Market Cap</p>
                                        <p className="text-white font-medium">{asset.marketCap}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Risk Level</p>
                                        <p className={`font-medium ${asset.risk === 'Low' ? 'text-emerald-400' :
                                                asset.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                                            }`}>{asset.risk}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Asset Details */}
                    <div className="space-y-6">
                        {/* Featured Asset Card */}
                        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/20 sticky top-24">
                            <div className="text-center mb-6">
                                <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-full size-14 p-4 flex justify-center items-center text-black font-bold text-3xl mx-auto mb-4">
                                    {assets[selectedAsset].icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{assets[selectedAsset].name}</h3>
                                <p className="text-gray-400 mb-4">{assets[selectedAsset].description}</p>

                                {/* Rating */}
                                <div className="flex justify-center items-center space-x-2 mb-6">
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < Math.floor(assets[selectedAsset].rating)
                                                        ? 'text-yellow-400 fill-current'
                                                        : 'text-gray-600'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-white font-medium">{assets[selectedAsset].rating}</span>
                                </div>
                            </div>

                            {/* Price Info */}
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Current Price</span>
                                    <span className="text-white font-bold text-xl">{assets[selectedAsset].price}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">24h Change</span>
                                    <span className={`font-medium ${assets[selectedAsset].isPositive ? 'text-emerald-400' : 'text-red-400'
                                        }`}>
                                        {assets[selectedAsset].change} ({assets[selectedAsset].changeValue})
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-4 rounded-lg font-bold hover:from-emerald-500 hover:to-green-500 transition-all duration-200 shadow-lg shadow-emerald-500/25 flex items-center justify-center space-x-2">
                                    <DollarSign className="h-5 w-5" />
                                    <span>Invest Now</span>
                                </button>
                                <button className="w-full bg-black/40 backdrop-blur-sm text-white py-3 px-4 rounded-lg font-medium border border-emerald-500/20 hover:bg-emerald-500/10 transition-all duration-200 flex items-center justify-center space-x-2">
                                    <Zap className="h-5 w-5" />
                                    <span>Add to Watchlist</span>
                                </button>
                            </div>
                        </div>

                        {/* Market Summary */}
                        <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-emerald-500/20">
                            <h4 className="text-white font-semibold mb-4">Market Summary</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total Market Cap</span>
                                    <span className="text-emerald-400 font-medium">$1.2T</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">24h Volume</span>
                                    <span className="text-emerald-400 font-medium">$45.2B</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Market Sentiment</span>
                                    <span className="text-emerald-400 font-medium">Bullish</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                {/* <div className="text-center mt-16">
                    <button className="group bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-lg font-bold hover:from-emerald-500 hover:to-green-500 transition-all duration-200 shadow-lg shadow-emerald-500/25 flex items-center justify-center space-x-2 mx-auto">
                        <span>View All Assets</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div> */}
            </div>
        </section>
    )
}