"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setLoading(true);
        try {
            // Mock server action
            await new Promise((r) => setTimeout(r, 800));
            console.log("Reset email sent to:", email);
            setSuccess(true);
        } catch {
            setError("Failed to send reset email. Try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl2 shadow-soft p-6">
                {!success ? (
                    <form onSubmit={handleSubmit} aria-label="Forgot password form" className="space-y-6">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Forgot Password</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">Enter your email and we will send you a reset link.</p>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="block w-full rounded-xl2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                aria-invalid={!!error}
                                aria-describedby={error ? "email-error" : undefined}
                            />
                            {error && <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">{error}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full min-h-[44px] px-4 py-2 rounded-xl2 bg-indigo-600 text-white font-semibold shadow-soft focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-60"
                            aria-busy={loading}
                        >
                            {loading ? "Sending..." : "Send reset link"}
                        </button>
                        <div className="mt-4 text-center">
                            <Link href="/auth/login" className="text-indigo-600 hover:underline focus-visible:ring-2 focus-visible:ring-indigo-500">Back to sign in</Link>
                        </div>
                    </form>
                ) : (
                    <div className="text-center space-y-6">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Check your inbox</h1>
                        <p className="text-gray-700 dark:text-gray-300">If an account exists for {email}, you will receive a password reset link.</p>
                        <Link href="/auth/login" className="inline-block min-h-[44px] px-4 py-2 rounded-xl2 bg-indigo-600 text-white font-semibold shadow-soft focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">Back to sign in</Link>
                    </div>
                )}
            </div>
        </main>
    );
}
