"use client";

// src/components/layout/Navbar.tsx
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { user, signOut } = useAuth();
    const [showUserMenu, setShowUserMenu] = useState(false);
    return (
        <header className="fixed md:sticky top-0 inset-x-0 z-50 w-full bg-white border-b shadow-sm">
            <nav className="container mx-auto flex items-center justify-between px-4 h-16">
                {/* Brand (left) */}
                <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                        RE
                    </span>
                    <span>Real Estate Algarve</span>
                </Link>

                {/* Links (center on desktop) */}
                <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
                    <Link href="/professionals" className="hover:text-black">Professionals</Link>
                    <Link href="/news" className="hover:text-black">News</Link>
                    <Link href="/blog" className="hover:text-black">Blog</Link>
                    <Link href="/areas" className="hover:text-black">Explore</Link>
                </div>

                {/* Mobile menu button */}
                <button aria-label="Toggle menu" className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setOpen(v => !v)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>

                {/* Auth (right) */}
                <div className="hidden md:flex items-center gap-3">
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center gap-2 text-sm hover:text-black"
                            >
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                                    {user.email?.charAt(0).toUpperCase()}
                                </span>
                                <span>{user.email}</span>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setShowUserMenu(false)}
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        href="/dashboard"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setShowUserMenu(false)}
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={async () => {
                                            await signOut();
                                            setShowUserMenu(false);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="text-sm hover:underline">Log In</Link>
                            <Link
                                href="/register"
                                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </nav>
            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden border-t bg-white">
                    <nav className="container mx-auto px-4 py-3 flex flex-col gap-3 text-gray-800 text-sm">
                        <Link onClick={() => setOpen(false)} href="/professionals" className="hover:text-black">Professionals</Link>
                        <Link onClick={() => setOpen(false)} href="/news" className="hover:text-black">News</Link>
                        <Link onClick={() => setOpen(false)} href="/blog" className="hover:text-black">Blog</Link>
                        <Link onClick={() => setOpen(false)} href="/areas" className="hover:text-black">Explore</Link>
                        <div className="pt-2 flex items-center gap-3">
                            {user ? (
                                <>
                                    <Link onClick={() => setOpen(false)} href="/profile" className="hover:underline">Profile</Link>
                                    <Link onClick={() => setOpen(false)} href="/dashboard" className="hover:underline">Dashboard</Link>
                                    <button
                                        onClick={async () => {
                                            await signOut();
                                            setOpen(false);
                                        }}
                                        className="text-left hover:underline text-gray-800"
                                    >
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link onClick={() => setOpen(false)} href="/login" className="hover:underline">Log In</Link>
                                    <Link onClick={() => setOpen(false)} href="/register" className="rounded-md bg-blue-600 px-3 py-2 text-white text-sm">Register</Link>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
