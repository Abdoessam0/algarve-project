// src/components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm font-light text-slate-600 text-center md:text-left">
                        © {new Date().getFullYear()} Real Estate Algarve. All rights reserved.
                    </p>
                    <nav className="flex items-center gap-6">
                        <Link
                            href="/privacy-policy"
                            className="text-sm font-light text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            Privacy
                        </Link>
                        <span className="text-slate-300">•</span>
                        <Link
                            href="/terms-of-service"
                            className="text-sm font-light text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            Terms
                        </Link>
                        <span className="text-slate-300">•</span>
                        <Link
                            href="/cookie-policy"
                            className="text-sm font-light text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            Cookies
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}