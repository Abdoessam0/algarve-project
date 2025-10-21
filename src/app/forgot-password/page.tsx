"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Home, Mail, ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Mock server action
            await new Promise((resolve) => setTimeout(resolve, 800));
            console.log('Reset email sent to:', email);
            setSuccess(true);
        } catch (err) {
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 flex items-center justify-center px-4 py-12">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl" />
                </div>

                <div className="w-full max-w-md relative z-10">
                    <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-slate-900/10 p-10 border border-white/60 text-center">
                        {/* Success Icon */}
                        <div className="inline-flex w-20 h-20 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl items-center justify-center mb-6 shadow-lg shadow-emerald-900/10">
                            <CheckCircle2 className="w-10 h-10 text-emerald-600" strokeWidth={1.5} />
                        </div>

                        <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">
                            Check Your Email
                        </h2>
                        <p className="text-slate-600 font-light mb-2 text-lg leading-relaxed">
                            Password reset instructions have been sent to
                        </p>
                        <p className="text-slate-900 font-semibold mb-8 text-lg">{email}</p>

                        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                            Please check your inbox and follow the link to reset your password. The link will expire in 24 hours.
                        </p>

                        <Link
                            href="/login"
                            className="inline-flex items-center justify-center space-x-2 w-full py-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white rounded-2xl font-medium text-base transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/30 hover:scale-[1.02] active:scale-[0.98] group"
                        >
                            <span>Return to Sign In</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                        </Link>

                        <p className="text-sm text-slate-500 mt-6">
                            Didn't receive the email?{' '}
                            <button
                                onClick={() => setSuccess(false)}
                                className="text-slate-900 font-semibold hover:text-slate-700 transition-colors"
                            >
                                Resend
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 flex items-center justify-center px-4 py-12">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo & Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex w-20 h-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl items-center justify-center mb-6 shadow-2xl shadow-slate-900/30 border border-slate-700/20">
                        <Home className="w-10 h-10 text-slate-50" strokeWidth={1.5} />
                    </div>
                    <h1 className="text-4xl font-light text-slate-900 mb-3 tracking-tight">
                        Reset Password
                    </h1>
                    <p className="text-slate-600 font-light text-lg">
                        We'll send you reset instructions
                    </p>
                </div>

                {/* Forgot Password Card */}
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

                        <p className="text-sm text-slate-600 leading-relaxed pt-2">
                            Enter the email address associated with your account and we'll send you a link to reset your password.
                        </p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-8 py-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white rounded-2xl font-medium text-base transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span>{loading ? 'Sending...' : 'Send Reset Link'}</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                        </button>
                    </form>

                    {/* Back to Login Link */}
                    <div className="mt-8 text-center pt-6 border-t border-slate-200/60">
                        <Link
                            href="/login"
                            className="inline-flex items-center space-x-2 text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
                            <span>Back to Sign In</span>
                        </Link>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="text-center text-sm text-slate-500 mt-8 font-light">
                    Secure password recovery for your account
                </p>
            </div>
        </div>
    );
}
