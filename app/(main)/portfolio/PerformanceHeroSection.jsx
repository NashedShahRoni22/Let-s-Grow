'use client';

import {
  TrendingUp,
  BarChart3,
  Activity,
  ShieldCheck,
  HandCoins,
  DollarSign,
} from 'lucide-react';

export default function PerformanceHeroSection() {
  return (
    <section className="bg-gradient-to-tl from-slate-900 via-gray-900 to-emerald-950 overflow-hidden">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-36  mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-md rounded-full px-4 py-2 border border-emerald-500/20 w-max">
            <BarChart3 className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Live Growth Insights</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Performance Backed by <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Real Business Results
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            At Let's Grow, your investment isn't locked — it's working in the real market. Watch ROI build over time,
            powered by data, smart lending, and successful product resale cycles.
          </p>

          <div className="pt-4">
            <button className="bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 rounded-lg text-white font-bold hover:from-emerald-500 hover:to-green-500 transition-all duration-200 shadow-lg shadow-emerald-500/25">
              See Investment Stats
            </button>
          </div>
        </div>

        {/* Right Stats Cards */}
        <div className="relative w-full grid sm:grid-cols-2 gap-8 animate-fadeInUp delay-300">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/20 text-center shadow-xl">
            <TrendingUp className="h-8 w-8 mx-auto text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white">+8.6% ROI</div>
            <p className="text-gray-400 text-sm mt-1">Average Monthly Return</p>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/20 text-center shadow-xl animate-fadeInUp delay-1000">
            <Activity className="h-8 w-8 mx-auto text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white">$9.3M+</div>
            <p className="text-gray-400 text-sm mt-1">Withdrawals Processed</p>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/20 text-center shadow-xl animate-fadeInUp delay-2000">
            <ShieldCheck className="h-8 w-8 mx-auto text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white">Secure Returns</div>
            <p className="text-gray-400 text-sm mt-1">Your capital is protected</p>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/20 text-center shadow-xl animate-fadeInUp delay-3000">
            <HandCoins className="h-8 w-8 mx-auto text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white">$12M+</div>
            <p className="text-gray-400 text-sm mt-1">Funded to Business</p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        .delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}
