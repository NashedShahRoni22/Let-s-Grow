'use client'
import {
  HandCoins,
  TrendingUp,
  ShieldCheck,
  PieChart,
  Banknote,
  HelpCircle,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Users,
  DollarSign,
  ChevronDown,
  Star,
  BarChart3,
  Lock,
  Clock,
  Trophy,
} from 'lucide-react'
import { useState } from 'react'

export default function LearnPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  const steps = [
    {
      icon: HandCoins,
      title: 'You Invest',
      desc: 'Choose a product package and invest the desired amount securely through our platform.',
      detail: 'Start with as little as $100 and watch your money work for you',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Banknote,
      title: 'We Deploy Capital',
      desc: 'We loan your funds to vetted entrepreneurs who buy, market, and sell actual products.',
      detail: 'Your investment fuels real businesses with proven track records',
      color: 'from-emerald-600 to-lime-500',
    },
    {
      icon: TrendingUp,
      title: 'You Earn Returns',
      desc: 'After the selling cycle, profits are shared back with you—transparently and on time.',
      detail: 'Enjoy consistent returns with full transparency on every transaction',
      color: 'from-green-500 to-emerald-400',
    },
  ]

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Bank-Level Security',
      desc: '256-bit encryption, multi-factor authentication, and regulatory compliance protect your investment.',
      stat: '99.9% Uptime',
      color: 'text-emerald-400',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      desc: 'Track every penny with live dashboards, detailed reports, and performance metrics.',
      stat: '24/7 Monitoring',
      color: 'text-green-400',
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      desc: "Join thousands of investors who've already earned consistent returns with our platform.",
      stat: '12.5% Avg ROI',
      color: 'text-blue-400',
    },
  ]

  const stats = [
    { icon: Users, label: 'Active Investors', value: '15,000+', color: 'text-green-400' },
    { icon: DollarSign, label: 'Capital Deployed', value: '$50M+', color: 'text-blue-400' },
    { icon: Target, label: 'Success Rate', value: '94%', color: 'text-pink-400' },
    { icon: Clock, label: 'Avg. Return Time', value: '15 Days', color: 'text-emerald-500' },
  ]

  const faqs = [
    {
      q: 'Is my investment really safe?',
      a: 'Absolutely. We use institutional-grade security, conduct thorough due diligence on all partners, and maintain comprehensive insurance coverage. Your funds are segregated and protected by multiple layers of security.',
    },
    {
      q: 'How quickly can I start earning?',
      a: "Most investors see their first returns within 30–60 days. Our streamlined process gets your money working immediately, and you'll receive detailed updates throughout the investment cycle.",
    },
    {
      q: 'What if I need my money back early?',
      a: 'We offer flexible withdrawal options. While investments perform best when held to maturity, we provide liquidity options and can facilitate early exits when needed.',
    },
    {
      q: 'How do you select business partners?',
      a: 'Our rigorous 47-point verification process includes financial audits, market validation, track record analysis, and ongoing performance monitoring. Only the top 3% of applicants are approved.',
    },
  ]

  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-20 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-slate-900 via-gray-900 to-emerald-950"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-500/10 rounded-full border border-emerald-500/30 mb-8 backdrop-blur-sm">
            <Zap className="h-5 w-5 text-emerald-400 mr-2" />
            <span className="text-emerald-300 font-medium">Smart Investment Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Turn Your Money Into a{' '}
            <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Profit Machine
            </span>
          </h1>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Join the revolution of smart investing. Fund real businesses, earn real returns,
            and watch your capital grow with complete transparency and security.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
              Start Investing Now
              <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 border-2 border-emerald-500/50 rounded-full font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Three simple steps to start earning consistent returns on your investment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeStep === idx ? 'scale-105' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveStep(idx)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-r ${step.color}`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{step.desc}</p>
                  <p className="text-emerald-400 font-medium text-sm">{step.detail}</p>

                  {activeStep === idx && (
                    <div className="mt-4 flex items-center text-emerald-400 font-medium">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Active Step
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose Let's Grow?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're not just another investment platform—we're your partner in building wealth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:scale-150"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <benefit.icon className={`h-12 w-12 ${benefit.color}`} />
                    <span className={`text-sm font-bold ${benefit.color} bg-black/30 px-3 py-1 rounded-full`}>
                      {benefit.stat}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Got Questions?
            </h2>
            <p className="text-gray-400 text-lg">We've got answers. Here's what investors ask us most.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-emerald-500/5 transition-all duration-300"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-lg text-emerald-300 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-emerald-400 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 transition-all duration-300 ease-out">
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Star className="h-12 w-12 text-emerald-400 mx-auto mb-4 animate-pulse" />
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Start Growing?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of smart investors who are already building wealth with Let's Grow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-12 py-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
              Start Investing Today
              <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-12 py-4 border-2 border-emerald-500/50 rounded-full font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300">
              Schedule a Call
            </button>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            No hidden fees • Start with just $100 • Withdraw anytime
          </p>
        </div>
      </section>
    </div>
  )
}
