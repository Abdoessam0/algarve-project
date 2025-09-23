// src/components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="container mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-center md:text-left">
                    © {new Date().getFullYear()} Real Estate Algarve. All rights reserved.
                </p>
                <nav className="flex items-center gap-4">
                    <Link href="/legal/privacy" className="hover:underline">Privacy</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/legal/terms" className="hover:underline">Terms</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/legal/cookies" className="hover:underline">Cookies</Link>
                </nav>
            </div>
        </footer>
    );
}


