"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Home, Mail, Lock, Eye, EyeOff, ChevronRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(email, password);
      if (!error) {
        router.push('/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md relative z-10">
      {/* Logo & Header */}
      <div className="text-center mb-10">
        <div className="inline-flex w-20 h-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl items-center justify-center mb-6 shadow-2xl shadow-slate-900/30 border border-slate-700/20">
          <Home className="w-10 h-10 text-slate-50" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl font-light text-slate-900 mb-3 tracking-tight">
          Welcome Back
        </h1>
        <p className="text-slate-600 font-light text-lg">
          Sign in to your account
        </p>
      </div>

      {/* Login Card */}
      <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-slate-900/10 p-10 border border-white/60">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200/60 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/50 focus:border-slate-300 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Password Field */}
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
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

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded-md border-slate-300 text-slate-800 focus:ring-2 focus:ring-slate-300/50 focus:ring-offset-0 transition-all"
              />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                Remember me
              </span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white rounded-2xl font-medium text-base transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{loading ? 'Signing in...' : 'Sign In'}</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-8 text-center pt-6 border-t border-slate-200/60">
          <p className="text-sm text-slate-600">
            Don't have an account?{' '}
            <Link
              href="/register"
              className="text-slate-900 font-semibold hover:text-slate-700 transition-colors"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-center text-sm text-slate-500 mt-8 font-light">
        Secure access to your Algarve property portal
      </p>
    </div>
  );
}
