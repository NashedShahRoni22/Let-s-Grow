"use client";
import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Portfolio Manager",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "Let's Grow transformed my investment approach completely. The AI insights are incredibly accurate, and I've seen consistent 15% monthly returns. The platform's security gives me peace of mind.",
      investment: "$250K",
      returns: "+47%",
      timeframe: "8 months"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "As someone in tech, I appreciate the sophisticated algorithms behind Let's Grow. The real-time analytics and automated trading features are game-changers. Best investment decision I've made.",
      investment: "$500K",
      returns: "+62%",
      timeframe: "1 year"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Financial Advisor",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "I recommend Let's Grow to all my clients. The platform's risk management is exceptional, and the educational resources helped me understand digital assets better. Truly professional service.",
      investment: "$180K",
      returns: "+38%",
      timeframe: "6 months"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "The customer support is outstanding! When I had questions about my portfolio, the team provided detailed explanations. The mobile app makes it easy to monitor investments on the go.",
      investment: "$120K",
      returns: "+41%",
      timeframe: "7 months"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Investment Banker",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      review: "Let's Grow offers institutional-level tools for individual investors. The diversification strategies and automated rebalancing have significantly improved my portfolio performance.",
      investment: "$350K",
      returns: "+55%",
      timeframe: "10 months"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Retired Engineer",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "At 65, I was hesitant about digital investments. Let's Grow made it simple and secure. The steady returns have enhanced my retirement fund beyond expectations. Highly recommended!",
      investment: "$75K",
      returns: "+29%",
      timeframe: "5 months"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextReview, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-500/20 mb-6">
            <Users className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Investors
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent"> Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied investors who've transformed their financial future with Let's Grow
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Review Card */}
            <div className="lg:col-span-2">
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/20 shadow-2xl">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                      {reviews[currentReview].name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < reviews[currentReview].rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-emerald-400 font-medium">
                        {reviews[currentReview].rating}.0
                      </span>
                    </div>
                    <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                      <Quote className="h-8 w-8 text-emerald-400 opacity-50 float-left mr-2 -mt-2" />
                      {reviews[currentReview].review}
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold text-lg">
                          {reviews[currentReview].name}
                        </div>
                        <div className="text-gray-400">
                          {reviews[currentReview].role}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-400 font-bold text-lg">
                          {reviews[currentReview].returns}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {reviews[currentReview].timeframe}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentReview
                          ? 'bg-emerald-400 w-8'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={prevReview}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    className="bg-black/40 backdrop-blur-sm text-white p-3 rounded-lg border border-emerald-500/20 hover:bg-emerald-500/10 transition-all duration-200"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextReview}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    className="bg-black/40 backdrop-blur-sm text-white p-3 rounded-lg border border-emerald-500/20 hover:bg-emerald-500/10 transition-all duration-200"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Panel */}
            <div className="space-y-6">
              {/* Performance Stats */}
              <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-emerald-500/20">
                <h3 className="text-white font-semibold mb-4">Investment Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Invested</span>
                    <span className="text-emerald-400 font-bold">
                      {reviews[currentReview].investment}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Returns</span>
                    <span className="text-emerald-400 font-bold">
                      {reviews[currentReview].returns}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-medium">
                      {reviews[currentReview].timeframe}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-emerald-500/20">
                <h3 className="text-white font-semibold mb-4">Why Investors Trust Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-500/10 rounded-full p-2">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">89% Success Rate</div>
                      <div className="text-gray-400 text-sm">Average ROI</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-500/10 rounded-full p-2">
                      <Shield className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Bank-Level Security</div>
                      <div className="text-gray-400 text-sm">256-bit encryption</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-500/10 rounded-full p-2">
                      <Users className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">24/7 Support</div>
                      <div className="text-gray-400 text-sm">Expert assistance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overall Rating */}
              <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-emerald-500/20 text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">4.8</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-gray-400">Based on 2,847 reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}