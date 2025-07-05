'use client'
import { useState, useEffect } from 'react'
import { Mail, ShieldCheck, Lock, Clock, RefreshCw } from 'lucide-react'

export default function ForgetPasswordPage() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [timer, setTimer] = useState(180) // 3 minutes

  const handleNext = () => {
    if (step === 1) {
      // TODO: Add API check for email
      setStep(2)
      setTimer(180) // Start timer again
    } else if (step === 2) {
      // TODO: Add OTP verification logic
      setStep(3)
    } else if (step === 3) {
      if (password === confirmPassword) {
        // TODO: Add password reset API
        alert('Password successfully reset!')
      } else {
        alert('Passwords do not match.')
      }
    }
  }

  useEffect(() => {
    if (step === 2 && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [step, timer])

  const formatTimer = () => {
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-950 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-black/40 backdrop-blur-xl rounded-2xl border border-emerald-500/20 p-8 space-y-6 shadow-2xl">
        <div className="text-center mb-4">
          <div className="mb-4">
            {step === 1 && <Mail className="h-10 w-10 text-emerald-400 mx-auto" />}
            {step === 2 && <ShieldCheck className="h-10 w-10 text-green-400 mx-auto" />}
            {step === 3 && <Lock className="h-10 w-10 text-blue-400 mx-auto" />}
          </div>
          <h2 className="text-2xl font-bold text-white">
            {step === 1 && 'Find Your Account'}
            {step === 2 && 'Enter OTP'}
            {step === 3 && 'Reset Password'}
          </h2>
          <p className="text-gray-400 mt-1">
            {step === 1 && 'Enter your registered email to reset your password.'}
            {step === 2 && 'We’ve sent a code to your email. Enter it below.'}
            {step === 3 && 'Set a new secure password for your account.'}
          </p>
        </div>

        {/* Step 1: Email Input */}
        {step === 1 && (
          <div>
            <label className="block text-sm font-medium text-emerald-300 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-white placeholder-gray-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}

        {/* Step 2: OTP Input */}
        {step === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-green-300 mb-2">OTP Code</label>
              <input
                type="text"
                maxLength={6}
                className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-white placeholder-gray-500"
                placeholder="Enter 6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="text-sm text-gray-400 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-green-400" />
                <span>Resend in: {formatTimer()}</span>
              </div>
              <button
                disabled={timer > 0}
                className={`flex items-center gap-1 ${
                  timer > 0 ? 'text-gray-600' : 'text-emerald-400 hover:text-emerald-300'
                } font-medium transition-colors`}
              >
                <RefreshCw className="h-4 w-4" />
                Resend
              </button>
            </div>
          </>
        )}

        {/* Step 3: Password Reset */}
        {step === 3 && (
          <>
            <div>
              <label className="block text-sm font-medium text-emerald-300 mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-white placeholder-gray-500"
                placeholder="New secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-300 mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-white placeholder-gray-500"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </>
        )}

        {/* Next / Submit Button */}
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-500 hover:to-green-500 transition-all duration-300"
        >
          {step === 1 && 'Search Account'}
          {step === 2 && 'Verify OTP'}
          {step === 3 && 'Reset Password'}
        </button>

        {/* Step Indicators */}
        <div className="flex justify-center gap-2 pt-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 w-6 rounded-full transition-all ${
                step >= s ? 'bg-emerald-400' : 'bg-gray-700'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
