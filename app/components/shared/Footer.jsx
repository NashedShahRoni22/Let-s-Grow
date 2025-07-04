"use client";
import React from 'react';
import { TrendingUp, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin, Shield, Award, Users } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-slate-900 border-t border-emerald-500/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-full p-2 shadow-lg shadow-emerald-500/25">
                <TrendingUp className="h-6 w-6 text-black" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                Let's Grow
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering investors with AI-driven insights and blockchain technology. Build your digital wealth with confidence and security.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-emerald-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/invest" className="text-gray-400 hover:text-emerald-400 transition-colors">Start Investing</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-emerald-400 transition-colors">View Portfolio</Link></li>
              <li><Link href="/leaderboard" className="text-gray-400 hover:text-emerald-400 transition-colors">Leaderboard</Link></li>
              <li><Link href="/learn" className="text-gray-400 hover:text-emerald-400 transition-colors">Learn & Earn</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-emerald-400 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-emerald-400 transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link href="/security" className="text-gray-400 hover:text-emerald-400 transition-colors">Security</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-500/10 rounded-full p-3">
                <Shield className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Bank-Level Security</h4>
                <p className="text-gray-400 text-sm">256-bit SSL encryption</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-500/10 rounded-full p-3">
                <Award className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Regulated Platform</h4>
                <p className="text-gray-400 text-sm">Licensed & Insured</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-500/10 rounded-full p-3">
                <Users className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold">1M+ Investors</h4>
                <p className="text-gray-400 text-sm">Trusted worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-emerald-400" />
              <span className="text-gray-400">support@letsgrow.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-emerald-400" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-emerald-400" />
              <span className="text-gray-400">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2025 Let's Grow. All rights reserved. | Powered by blockchain technology
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}