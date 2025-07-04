"use client";

import { useEffect, useState } from "react";
import {
  PackageCheck,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  User,
  Clock,
  Calendar,
} from "lucide-react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function DashboardPage() {
  const [dateTime, setDateTime] = useState(new Date());
  // Register chart components
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  // Sample monthly data
  const monthlyInvestmentData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Monthly Investment ($)",
        data: [200, 400, 350, 500, 750, 680, 720, 600, 500, 650, 700, 800],
        backgroundColor: "rgba(16, 185, 129, 0.6)", // emerald-500
        borderRadius: 6,
      },
    ],
  };

  const monthlyInvestmentOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ccc",
        },
        grid: {
          color: "rgba(45, 212, 191, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "#ccc",
        },
        grid: {
          display: false,
        },
      },
    },
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: "Total Invested",
      value: "$2,350",
      icon: <ArrowUpRight className="text-green-400 w-5 h-5" />,
    },
    {
      label: "Withdrawn",
      value: "$1,470",
      icon: <ArrowDownRight className="text-red-400 w-5 h-5" />,
    },
    {
      label: "Current Balance",
      value: "$880",
      icon: <Wallet className="text-emerald-400 w-5 h-5" />,
    },
    {
      label: "Active Packages",
      value: "5",
      icon: <PackageCheck className="text-yellow-400 w-5 h-5" />,
    },
  ];

  return (
    <div className="space-y-10 animate-fadeInUp px-4 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Overview</h1>
        <div className="text-sm text-gray-300 flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-emerald-400" />
            {dateTime.toLocaleTimeString()}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-emerald-400" />
            {dateTime.toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-black/40 p-6 rounded-xl border border-emerald-500/20 shadow-md backdrop-blur-sm"
          >
            <div className="mb-3">{item.icon}</div>
            <div className="text-xl font-semibold text-white">{item.value}</div>
            <div className="text-sm text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Account Info + Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account Info */}
        <div className="bg-black/30 p-6 rounded-xl border border-emerald-500/20">
          <h2 className="text-xl font-bold text-white mb-4">Account Info</h2>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-emerald-400/20 flex items-center justify-center text-white text-xl font-bold border border-emerald-500/20">
              <User className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="space-y-1">
              <p className="text-white font-semibold text-lg">
                Rank: <span className="text-yellow-400">Elite</span>
              </p>
              <p className="text-sm text-gray-300">ID: #LGX-29013</p>
              <p className="text-sm text-gray-300">Joined: Jan 10, 2024</p>
              <p className="text-sm text-green-400">Status: Verified ✅</p>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-black/30 p-6 rounded-xl border border-emerald-500/20">
          <h2 className="text-xl font-bold text-white mb-4">Top Investors</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex justify-between items-center">
              <span className="text-white">#1 • LGX-0021</span>
              <span className="text-emerald-400 font-bold">$12,500</span>
            </li>
            <li className="flex justify-between items-center">
              <span>#2 • LGX-0345</span>
              <span className="text-emerald-400 font-semibold">$9,800</span>
            </li>
            <li className="flex justify-between items-center">
              <span>#3 • LGX-0769</span>
              <span className="text-emerald-400 font-semibold">$8,200</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Monthly Investment Chart */}
      <div className="bg-black/30 p-6 rounded-xl border border-emerald-500/20">
        <h2 className="text-xl font-bold text-white mb-4">Monthly Investment Overview</h2>
        <Bar data={monthlyInvestmentData} options={monthlyInvestmentOptions} />
      </div>

      {/* Recent Activities */}
      <div className="bg-black/30 p-6 rounded-xl border border-emerald-500/20">
        <h2 className="text-xl font-bold text-white mb-4">Recent Transactions</h2>
        <ul className="divide-y divide-emerald-500/10 text-sm text-gray-300">
          <li className="py-2 flex justify-between">
            <span>Invested in Package $200</span>
            <span className="text-emerald-400">+ $200</span>
          </li>
          <li className="py-2 flex justify-between">
            <span>Withdrawn from Wallet</span>
            <span className="text-red-400">- $150</span>
          </li>
          <li className="py-2 flex justify-between">
            <span>Bonus Interest Added</span>
            <span className="text-emerald-300">+ $30</span>
          </li>
        </ul>
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
    .animate-fadeInUp {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `}</style>
    </div>

  );
}
