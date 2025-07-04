"use client";
import { TrendingUp, BarChart3, Activity } from "lucide-react";

export default function PerformanceHeroSection() {
  return (
    <section className="min-h-[80vh] bg-gradient-to-tl from-slate-900 via-gray-900 to-emerald-950 flex items-center overflow-hidden px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 py-24">
        {/* Left Content */}
        <div className="space-y-6 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-500/20">
            <BarChart3 className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Smart Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Real-Time Performance <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              You Can Trust
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-md leading-relaxed">
            Track how your investments are growing with live metrics and transparent results powered by AI and data analytics.
          </p>
          <div className="pt-4">
            <button className="bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 rounded-lg text-white font-bold hover:from-emerald-500 hover:to-green-500 transition-all duration-200 shadow-lg shadow-emerald-500/25">
              Explore Highlights
            </button>
          </div>
        </div>

        {/* Right Content: Animated Visuals */}
        <div className="relative w-full h-full">
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/20 text-center w-72 shadow-2xl animate-fadeInUp delay-300">
              <TrendingUp className="h-8 w-8 mx-auto text-emerald-400 mb-2" />
              <div className="text-2xl font-bold text-white">+8.6% ROI</div>
              <div className="text-gray-400 text-sm">Average monthly return</div>
            </div>
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/20 text-center w-72 shadow-2xl animate-fadeInUp delay-1000">
              <Activity className="h-8 w-8 mx-auto text-emerald-400 mb-2" />
              <div className="text-2xl font-bold text-white">$9.3M+</div>
              <div className="text-gray-400 text-sm">Withdrawals processed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
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
      `}</style>
    </section>
  );
}
