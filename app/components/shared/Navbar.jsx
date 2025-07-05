"use client";
import React, { useState } from 'react';
import { TrendingUp, Menu, X, User, Bell } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 backdrop-blur-xl border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-full p-2 shadow-lg shadow-emerald-500/25">
              <TrendingUp className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Let's Grow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/leaderboard" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
              Leaderboard
            </Link>
            <Link href="/learn" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
              Learn
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10 relative">
              <Bell className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </button>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              href="/auth/register"
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:from-emerald-500 hover:to-green-500 transition-all duration-200 shadow-lg shadow-emerald-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 backdrop-blur-xl border-t border-emerald-500/20">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link href="/" className="block text-gray-300 hover:text-emerald-400 transition-colors font-medium py-2">
              Home
            </Link>
            <Link href="/portfolio" className="block text-gray-300 hover:text-emerald-400 transition-colors font-medium py-2">
              Portfolio
            </Link>
            <Link href="/leaderboard" className="block text-gray-300 hover:text-emerald-400 transition-colors font-medium py-2">
              Leaderboard
            </Link>
            <Link href="/learn" className="block text-gray-300 hover:text-emerald-400 transition-colors font-medium py-2">
              Learn
            </Link>
            <hr className="border-gray-700 my-4" />
            <div className="flex justify-between">
              <Link
                href="/auth/register"
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:from-emerald-500 hover:to-green-500 transition-all duration-200 shadow-lg shadow-emerald-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10"
              >
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}