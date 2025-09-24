// src/components/layout/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed md:sticky top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b">
            <nav className="container mx-auto flex items-center justify-between px-4 h-14">
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

                {/* Auth (right) */}
                <div className="flex items-center gap-3">
                    <Link href="/login" className="text-sm hover:underline">Log In</Link>
                    <Link
                        href="/partners/apply"
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                        Register
                    </Link>
                </div>
            </nav>
        </header>
    );
}
