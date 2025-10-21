"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Home, Mail, Lock, Eye, EyeOff, User, Phone, ChevronRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { signUp } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { user, error } = await signUp(formData.email, formData.password, {
        name: formData.name,
        phone: formData.phone
      });

      if (!error && user) {
        setSuccess(true);
        setTimeout(() => {
          router.push('/login?message=Registration successful. Please check your email to verify your account.');
        }, 2000);
      }
    } catch (err) {
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-slate-900/10 p-10 border border-white/60 text-center">
          <div className="inline-flex w-20 h-20 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl items-center justify-center mb-6 shadow-lg shadow-emerald-900/10">
            <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">
            Registration Successful!
          </h2>
          <p className="text-slate-600 font-light mb-2 text-lg leading-relaxed">
            Please check your email to verify your account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md relative z-10">
      {/* Logo & Header */}
      <div className="text-center mb-10">
        <div className="inline-flex w-20 h-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl items-center justify-center mb-6 shadow-2xl shadow-slate-900/30 border border-slate-700/20">
          <Home className="w-10 h-10 text-slate-50" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl font-light text-slate-900 mb-3 tracking-tight">
          Create Account
        </h1>
        <p className="text-slate-600 font-light text-lg">
          Begin your Algarve journey
        </p>
      </div>

      {/* Register Card */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-slate-900/10 p-10 border border-white/60">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 ml-1">
              Full Name
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors">
                <User className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/50 focus:border-slate-300 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/50 focus:border-slate-300 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 ml-1">
              Phone Number <span className="text-slate-400 font-normal text-xs">(Optional)</span>
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors">
                <Phone className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+351 000 000 000"
                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/50 focus:border-slate-300 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 ml-1">
              Password
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors">
                <Lock className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="w-full pl-12 pr-12 py-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/50 focus:border-slate-300 focus:bg-white transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <Eye className="w-5 h-5" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 ml-1">
              Confirm Password
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors">
                <Lock className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full pl-12 pr-12 py-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/50 focus:border-slate-300 focus:bg-white transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <Eye className="w-5 h-5" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="pt-2">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="w-4 h-4 mt-1 rounded-md border-slate-300 text-slate-800 focus:ring-2 focus:ring-slate-300/50 focus:ring-offset-0 transition-all"
              />
              <span className="text-sm text-slate-600 leading-relaxed">
                I agree to the{' '}
                <Link href="/terms-of-service" className="text-slate-900 font-semibold hover:text-slate-700 transition-colors">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link href="/privacy-policy" className="text-slate-900 font-semibold hover:text-slate-700 transition-colors">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white rounded-2xl font-medium text-base transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{loading ? 'Creating account...' : 'Create Account'}</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-8 text-center pt-6 border-t border-slate-200/60">
          <p className="text-sm text-slate-600">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-slate-900 font-semibold hover:text-slate-700 transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-center text-sm text-slate-500 mt-8 font-light">
        Join exclusive access to premium Algarve properties
      </p>
    </div>
  );
}
