"use client";
import React, { useState, useEffect } from 'react';
import { Trophy, Crown, Medal, TrendingUp, Users, Star, ArrowUp, Zap, Target } from 'lucide-react';

export default function LeaderboardSection() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const periods = [
    { id: 'weekly', label: 'Weekly', active: false },
    { id: 'monthly', label: 'Monthly', active: true },
    { id: 'yearly', label: 'Yearly', active: false }
  ];

  const leaderboardData = {
    weekly: [
      {
        rank: 1,
        name: "Sarah Kim",
        avatar: "SK",
        returns: "+34.2%",
        profit: "$342,000",
        streak: 7,
        badge: "Diamond",
        country: "🇰🇷",
        trades: 156,
        accuracy: 96.8
      },
      {
        rank: 2,
        name: "Alex Chen",
        avatar: "AC",
        returns: "+31.8%",
        profit: "$318,000",
        streak: 6,
        badge: "Platinum",
        country: "🇺🇸",
        trades: 142,
        accuracy: 94.7
      },
      {
        rank: 3,
        name: "David Zhang",
        avatar: "DZ",
        returns: "+28.5%",
        profit: "$285,000",
        streak: 5,
        badge: "Gold",
        country: "🇨🇳",
        trades: 134,
        accuracy: 92.3
      },
      {
        rank: 4,
        name: "Emma Johnson",
        avatar: "EJ",
        returns: "+25.7%",
        profit: "$257,000",
        streak: 4,
        badge: "Gold",
        country: "🇬🇧",
        trades: 89,
        accuracy: 91.2
      },
      {
        rank: 5,
        name: "Michael Rodriguez",
        avatar: "MR",
        returns: "+22.9%",
        profit: "$229,000",
        streak: 4,
        badge: "Silver",
        country: "🇪🇸",
        trades: 98,
        accuracy: 89.8
      },
      {
        rank: 6,
        name: "Lisa Thompson",
        avatar: "LT",
        returns: "+19.6%",
        profit: "$196,000",
        streak: 3,
        badge: "Silver",
        country: "🇨🇦",
        trades: 76,
        accuracy: 88.4
      },
      {
        rank: 7,
        name: "James Wilson",
        avatar: "JW",
        returns: "+17.3%",
        profit: "$173,000",
        streak: 3,
        badge: "Bronze",
        country: "🇦🇺",
        trades: 67,
        accuracy: 86.7
      },
      {
        rank: 8,
        name: "Maria Garcia",
        avatar: "MG",
        returns: "+15.1%",
        profit: "$151,000",
        streak: 2,
        badge: "Bronze",
        country: "🇲🇽",
        trades: 54,
        accuracy: 85.3
      }
    ],
    monthly: [
      {
        rank: 1,
        name: "Alex Chen",
        avatar: "AC",
        returns: "+127.5%",
        profit: "$1,275,000",
        streak: 23,
        badge: "Diamond",
        country: "🇺🇸",
        trades: 1247,
        accuracy: 94.2
      },
      {
        rank: 2,
        name: "Sarah Kim",
        avatar: "SK",
        returns: "+98.3%",
        profit: "$983,000",
        streak: 18,
        badge: "Platinum",
        country: "🇰🇷",
        trades: 892,
        accuracy: 91.8
      },
      {
        rank: 3,
        name: "Michael Rodriguez",
        avatar: "MR",
        returns: "+85.7%",
        profit: "$857,000",
        streak: 15,
        badge: "Gold",
        country: "🇪🇸",
        trades: 1034,
        accuracy: 88.9
      },
      {
        rank: 4,
        name: "Emma Johnson",
        avatar: "EJ",
        returns: "+74.2%",
        profit: "$742,000",
        streak: 12,
        badge: "Gold",
        country: "🇬🇧",
        trades: 756,
        accuracy: 87.3
      },
      {
        rank: 5,
        name: "David Zhang",
        avatar: "DZ",
        returns: "+69.8%",
        profit: "$698,000",
        streak: 10,
        badge: "Silver",
        country: "🇨🇳",
        trades: 923,
        accuracy: 85.7
      },
      {
        rank: 6,
        name: "Lisa Thompson",
        avatar: "LT",
        returns: "+63.4%",
        profit: "$634,000",
        streak: 8,
        badge: "Silver",
        country: "🇨🇦",
        trades: 612,
        accuracy: 84.1
      },
      {
        rank: 7,
        name: "James Wilson",
        avatar: "JW",
        returns: "+58.9%",
        profit: "$589,000",
        streak: 7,
        badge: "Bronze",
        country: "🇦🇺",
        trades: 847,
        accuracy: 82.5
      },
      {
        rank: 8,
        name: "Maria Garcia",
        avatar: "MG",
        returns: "+54.3%",
        profit: "$543,000",
        streak: 6,
        badge: "Bronze",
        country: "🇲🇽",
        trades: 398,
        accuracy: 81.2
      }
    ],
    yearly: [
      {
        rank: 1,
        name: "Alex Chen",
        avatar: "AC",
        returns: "+1,847.3%",
        profit: "$18,473,000",
        streak: 156,
        badge: "Diamond",
        country: "🇺🇸",
        trades: 8947,
        accuracy: 96.8
      },
      {
        rank: 2,
        name: "Michael Rodriguez",
        avatar: "MR",
        returns: "+1,634.7%",
        profit: "$16,347,000",
        streak: 134,
        badge: "Diamond",
        country: "🇪🇸",
        trades: 7832,
        accuracy: 95.4
      },
      {
        rank: 3,
        name: "Sarah Kim",
        avatar: "SK",
        returns: "+1,489.2%",
        profit: "$14,892,000",
        streak: 121,
        badge: "Diamond",
        country: "🇰🇷",
        trades: 6754,
        accuracy: 94.7
      },
      {
        rank: 4,
        name: "David Zhang",
        avatar: "DZ",
        returns: "+1,276.8%",
        profit: "$12,768,000",
        streak: 98,
        badge: "Platinum",
        country: "🇨🇳",
        trades: 5923,
        accuracy: 93.2
      },
      {
        rank: 5,
        name: "Emma Johnson",
        avatar: "EJ",
        returns: "+1,156.4%",
        profit: "$11,564,000",
        streak: 87,
        badge: "Platinum",
        country: "🇬🇧",
        trades: 4876,
        accuracy: 92.1
      },
      {
        rank: 6,
        name: "Lisa Thompson",
        avatar: "LT",
        returns: "+987.3%",
        profit: "$9,873,000",
        streak: 76,
        badge: "Gold",
        country: "🇨🇦",
        trades: 4234,
        accuracy: 90.8
      },
      {
        rank: 7,
        name: "James Wilson",
        avatar: "JW",
        returns: "+834.6%",
        profit: "$8,346,000",
        streak: 65,
        badge: "Gold",
        country: "🇦🇺",
        trades: 3987,
        accuracy: 89.4
      },
      {
        rank: 8,
        name: "Maria Garcia",
        avatar: "MG",
        returns: "+712.9%",
        profit: "$7,129,000",
        streak: 54,
        badge: "Silver",
        country: "🇲🇽",
        trades: 3456,
        accuracy: 88.2
      }
    ]
  };

  useEffect(() => {
    setIsVisible(true);
    // Animate values on mount
    const timer = setTimeout(() => {
      const animated = {};
      leaderboardData[selectedPeriod].forEach((trader, index) => {
        animated[index] = {
          returns: parseFloat(trader.returns.replace('+', '').replace('%', '')),
          profit: parseFloat(trader.profit.replace('$', '').replace(',', '')),
          accuracy: trader.accuracy
        };
      });
      setAnimatedValues(animated);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [selectedPeriod]);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Trophy className="h-6 w-6 text-yellow-600" />;
      default:
        return <span className="text-gray-400 font-bold">#{rank}</span>;
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Diamond':
        return 'from-cyan-400 to-blue-500';
      case 'Platinum':
        return 'from-gray-300 to-gray-500';
      case 'Gold':
        return 'from-yellow-400 to-yellow-600';
      case 'Silver':
        return 'from-gray-400 to-gray-600';
      case 'Bronze':
        return 'from-orange-400 to-orange-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getStreakColor = (streak) => {
    if (streak >= 20) return 'text-red-400';
    if (streak >= 15) return 'text-orange-400';
    if (streak >= 10) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-500/20 mb-6">
            <Trophy className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Top Performers</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Investment</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how our top investors are performing and get inspired by their success stories
          </p>
        </div>

        {/* Period Selector */}
        <div className={`flex justify-center mb-12 ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-emerald-500/20">
            <div className="flex space-x-2">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    selectedPeriod === period.id
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
            <div className="flex items-center space-x-4">
              <div className="bg-emerald-500/10 rounded-full p-3">
                <Users className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">1,247</div>
                <div className="text-gray-400">Active Traders</div>
              </div>
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
            <div className="flex items-center space-x-4">
              <div className="bg-emerald-500/10 rounded-full p-3">
                <TrendingUp className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">+89.2%</div>
                <div className="text-gray-400">Avg Returns</div>
              </div>
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
            <div className="flex items-center space-x-4">
              <div className="bg-emerald-500/10 rounded-full p-3">
                <Target className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">92.4%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className={`bg-black/40 backdrop-blur-xl rounded-2xl border border-emerald-500/20 overflow-hidden ${isVisible ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 p-6 border-b border-emerald-500/20">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-300">
              <div className="col-span-1">Rank</div>
              <div className="col-span-3">Trader</div>
              <div className="col-span-2">Returns</div>
              <div className="col-span-2">Profit</div>
              <div className="col-span-2">Accuracy</div>
              <div className="col-span-1">Streak</div>
              <div className="col-span-1">Badge</div>
            </div>
          </div>

          {/* Leaderboard Items */}
          <div className="divide-y divide-gray-800">
            {leaderboardData[selectedPeriod].map((trader, index) => (
              <div
                key={trader.rank}
                className={`p-6 hover:bg-emerald-500/5 transition-all duration-200 ${
                  trader.rank <= 3 ? 'bg-gradient-to-r from-emerald-500/5 to-green-500/5' : ''
                }`}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1 flex items-center justify-center">
                    {getRankIcon(trader.rank)}
                  </div>

                  {/* Trader Info */}
                  <div className="col-span-3 flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        {trader.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 text-lg text-white">{trader.country}</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{trader.name}</div>
                      <div className="text-gray-400 text-sm">{trader.trades} trades</div>
                    </div>
                  </div>

                  {/* Returns */}
                  <div className="col-span-2">
                    <div className="flex items-center space-x-2">
                      <ArrowUp className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 font-bold text-lg">{trader.returns}</span>
                    </div>
                  </div>

                  {/* Profit */}
                  <div className="col-span-2">
                    <div className="text-white font-semibold text-lg">{trader.profit}</div>
                  </div>

                  {/* Accuracy */}
                  <div className="col-span-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${trader.accuracy}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-medium">{trader.accuracy}%</span>
                    </div>
                  </div>

                  {/* Streak */}
                  <div className="col-span-1">
                    <div className="flex items-center space-x-1">
                      <Zap className={`h-4 w-4 ${getStreakColor(trader.streak)}`} />
                      <span className={`font-bold ${getStreakColor(trader.streak)}`}>
                        {trader.streak}
                      </span>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="col-span-1">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getBadgeColor(trader.badge)}`}>
                      {trader.badge}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join the Elite?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your investment journey today and compete with the best traders in the world. 
              Our AI-powered platform gives you the tools to succeed.
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-lg font-bold hover:from-emerald-500 hover:to-green-500 transition-all duration-200 shadow-lg shadow-emerald-500/25">
              Start Trading Now
            </button>
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}