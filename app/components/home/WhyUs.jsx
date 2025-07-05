import React from 'react'
import { Trophy, Crown, Medal, TrendingUp, Users, Star, ArrowUp, Zap, Target } from 'lucide-react';

export default function WhyUs() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-950 via-slate-900 to-emerald-900 relative overflow-hidden">
            {/* Background blur circles */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-500/20 mb-6">
                        <Target className="h-4 w-4 text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-medium">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        Built for Consistent, Data-Driven Growth
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Investing shouldn’t be a gamble. We help you grow wealth with intelligent, transparent strategies backed by real data — not hype.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16 text-white">
                    <div className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-emerald-500/20">
                        <div className="flex items-center space-x-3 mb-4">
                            <TrendingUp className="h-6 w-6 text-emerald-400" />
                            <h4 className="text-lg font-semibold">Compounding Returns</h4>
                        </div>
                        <p className="text-gray-300">
                            Our investors see up to <span className="text-emerald-300 font-semibold">+98% monthly ROI</span> — thanks to data-backed decisions and precision execution.
                        </p>
                    </div>

                    <div className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-emerald-500/20">
                        <div className="flex items-center space-x-3 mb-4">
                            <Star className="h-6 w-6 text-emerald-400" />
                            <h4 className="text-lg font-semibold">AI-Powered Insights</h4>
                        </div>
                        <p className="text-gray-300">
                            Our proprietary AI identifies trends before they break out — giving you an edge in every trade.
                        </p>
                    </div>

                    <div className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-emerald-500/20">
                        <div className="flex items-center space-x-3 mb-4">
                            <Users className="h-6 w-6 text-emerald-400" />
                            <h4 className="text-lg font-semibold">Elite Trading Community</h4>
                        </div>
                        <p className="text-gray-300">
                            You’ll trade alongside the top <span className="text-emerald-300 font-semibold">1%</span> of global investors — visible on our real-time leaderboard.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-emerald-500/25 hover:from-emerald-500 hover:to-green-500 transition-all duration-200">
                        Join the Growth Revolution
                    </button>
                </div>
            </div>
        </section>

    )
}
