'use client';
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion, AnimatePresence, type Variants } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MapPin, Phone, Mail, Clock, Shield, Award, Users, Globe, Facebook, Twitter, Instagram, Linkedin, CheckCircle, Cookie, Settings, X, BarChart3 } from "lucide-react";
import { useState, useCallback, useEffect, type ReactNode } from "react";
import Button from "@/components/ui/Button";

const footerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.1
        }
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
        scale: 1.02,
        y: -1,
        transition: { duration: 0.2 }
    },
};

const socialVariants: Variants = {
    hover: {
        scale: 1.1,
        y: -2,
        transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: { duration: 0.2 }
    }
};

const cookieCategories = [
    {
        id: 'essential',
        title: 'Essential Cookies',
        icon: Shield,
        required: true,
        enabled: true,
        description: 'Critical for website operation and cannot be disabled',
        examples: [
            'Authentication and session management',
            'Security and fraud prevention',
            'Load balancing and performance',
            'Basic website functionality'
        ]
    },
    {
        id: 'performance',
        title: 'Performance Cookies',
        icon: BarChart3,
        required: false,
        enabled: true,
        description: 'Help us analyze site performance and user behavior',
        examples: [
            'Google Analytics for usage insights',
            'Performance monitoring and optimization',
            'Error tracking and debugging',
            'Feature usage analytics'
        ]
    },
    {
        id: 'functionality',
        title: 'Functionality Cookies',
        icon: Settings,
        required: false,
        enabled: true,
        description: 'Enhance your browsing experience with personalized features',
        examples: [
            'Language preferences and localization',
            'Saved search preferences',
            'Favorite properties and listings',
            'User interface customizations'
        ]
    },
    {
        id: 'targeting',
        title: 'Targeting Cookies',
        icon: Users,
        required: false,
        enabled: false,
        description: 'Personalize ads based on your interests and behavior',
        examples: [
            'Targeted real estate advertisements',
            'Social media integration cookies',
            'Cross-site behavioral tracking',
            'Marketing campaign optimization'
        ]
    }
];

const footerSections = {
    professionals: {
        title: "Find Professionals",
        icon: Users,
        links: [
            { href: "/professionals", label: "All Professionals", description: "Browse all verified experts" },
            { href: "/professionals#specializations", label: "Real Estate Agents", description: "Licensed property agents" },
            { href: "/professionals#specializations", label: "Property Lawyers", description: "Legal experts and advisors" },
            { href: "/professionals#specializations", label: "Architects", description: "Renovation and design professionals" },
        ]

    },
    locations: {
        title: "Popular Areas",
        icon: MapPin,
        links: [
            { href: "/algarve-real-estate-areas", label: "All Areas", description: "Explore all areas and districts" },
            { href: "/algarve-real-estate-areas", label: "Albufeira", description: "Vibrant coastal town" },
            { href: "/algarve-real-estate-areas", label: "Lagos", description: "Historic waterfront city" },
            { href: "/algarve-real-estate-areas", label: "Vilamoura", description: "Luxury resort area" },
        ]
    },
    resources: {
        title: "Resources & Guides",
        icon: Globe,
        links: [
            { href: "/about", label: "About us", description: "Learn about our Algarve team" },
            { href: "/roadmap", label: "5-step roadmap", description: "5-step roadmap" },
            { href: "/news", label: "Real Estate News", description: "Industry updates and insights" },
            { href: "/blog", label: "Blog", description: "Stories and tips" },
        ]
    },
    legal: {
        title: "Legal & Privacy",
        icon: Shield,
        links: [
            { href: "/terms-of-service", label: "Terms of Service", description: "Platform usage terms" },
            { href: "/privacy-policy", label: "Privacy Policy", description: "Data protection policy" },
            { href: "/cookie-policy", label: "Cookie Policy", description: "Cookie usage information" },
        ]
    }
};

const socialPlatforms = [
    {
        name: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/5stepsrealestate",
        color: "hover:text-blue-500",
        description: "Follow us on Facebook"
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/5stepsrealestate",
        color: "hover:text-pink-500",
        description: "Beautiful property photos on Instagram"
    },
    {
        name: "X",
        icon: Twitter,
        href: "https://x.com/5stepsRE",
        color: "hover:text-gray-700",
        description: "Get real-time market insights on X"
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/company/5-steps-real-estate/",
        color: "hover:text-blue-600",
        description: "Professional network on LinkedIn"
    },
];

const contactInfo = {
    phone: "+351 912 154 527",
    email: "support@5stepsrealestate.com",
    address: "Algarve, Portugal",
    hours: "Mon-Fri: 09:00-18:00"
};

type BadgeVariant = "default" | "secondary";

interface BadgeProps {
    variant?: BadgeVariant;
    className?: string;
    children: ReactNode;
}

const badgeVariants: Record<BadgeVariant, string> = {
    default: "bg-gray-100 text-gray-800",
    secondary: "bg-blue-100 text-blue-800",
};

const Badge = ({ children, variant = "default", className = "" }: BadgeProps) => (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${badgeVariants[variant]} ${className}`}>
        {children}
    </span>
);

export default function Footer() {
    const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
    const [showCookieSettings, setShowCookieSettings] = useState(false);
    const [cookiePreferences, setCookiePreferences] = useState<Record<string, boolean>>(() => {
        const defaultPrefs: Record<string, boolean> = {};
        cookieCategories.forEach(category => {
            defaultPrefs[category.id] = category.enabled;
        });
        return defaultPrefs;
    });

    useEffect(() => {
        try {
            const savedPreferences = localStorage.getItem('cookiePreferences');
            if (savedPreferences) {
                const parsed = JSON.parse(savedPreferences);
                setCookiePreferences(prev => ({ ...prev, ...parsed }));
            }
        } catch (error) {
            console.error('Error loading cookie preferences:', error);
        }
    }, []);

    const handleNewsletterSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setIsNewsletterSubmitted(true);
        setTimeout(() => setIsNewsletterSubmitted(false), 3000);
    }, []);

    const handleCookieToggle = useCallback((categoryId: string) => {
        if (categoryId === 'essential') return;
        setCookiePreferences(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    }, []);

    const handleSaveCookiePreferences = useCallback(() => {
        try {
            localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
            setShowCookieSettings(false);
        } catch (error) {
            console.error('Error saving cookie preferences:', error);
        }
    }, [cookiePreferences]);

    const handleAcceptAllCookies = useCallback(() => {
        const acceptAll: Record<string, boolean> = {};
        cookieCategories.forEach(category => {
            acceptAll[category.id] = true;
        });
        setCookiePreferences(acceptAll);
        try {
            localStorage.setItem('cookiePreferences', JSON.stringify(acceptAll));
            setShowCookieSettings(false);
        } catch (error) {
            console.error('Error saving cookie preferences:', error);
        }
    }, []);

    const handleRejectOptionalCookies = useCallback(() => {
        const rejectOptional: Record<string, boolean> = {};
        cookieCategories.forEach(category => {
            rejectOptional[category.id] = category.required;
        });
        setCookiePreferences(rejectOptional);
        try {
            localStorage.setItem('cookiePreferences', JSON.stringify(rejectOptional));
            setShowCookieSettings(false);
        } catch (error) {
            console.error('Error saving cookie preferences:', error);
        }
    }, []);

    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-8">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

                        {/* Brand Section */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-1 -m-1"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="flex-shrink-0"
                                >
                                    <img src="/logo/favicon.ico" alt="Real Estate Algarve logo" className="h-6 w-6" />
                                </motion.div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">
                                        Real Estate Algarve
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        Premium Property Professionals
                                    </span>
                                </div>
                            </a>

                            <p className="text-xs text-gray-300 leading-relaxed">
                                Connecting international buyers with Algarve's finest properties through verified professionals.
                            </p>

                            {/* Contact */}
                            <div className="space-y-1 text-xs">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                    <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                                        {contactInfo.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                    <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                                        {contactInfo.email}
                                    </a>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300 leading-relaxed">{contactInfo.address}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                    <span className="text-gray-300">{contactInfo.hours}</span>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="flex gap-2">
                                {socialPlatforms.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        variants={socialVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        className={`flex items-center justify-center w-8 h-8 bg-gray-800/50 rounded-lg border border-gray-700/50 text-gray-400 ${social.color} transition-all duration-300 hover:border-current hover:bg-gray-700/50`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.description}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Navigation Sections */}
                        {Object.entries(footerSections).map(([key, section]) => (
                            <motion.div key={key} variants={itemVariants} className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <section.icon className="w-4 h-4 text-blue-400" />
                                    <h3 className="text-sm font-semibold text-blue-400 tracking-wide">
                                        {section.title}
                                    </h3>
                                </div>
                                <nav className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <motion.div key={`${key}-${link.href}-${linkIndex}`} whileHover="hover" variants={itemVariants}>
                                            <a
                                                href={link.href}
                                                className="group block focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1 -m-1"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex-1 min-w-0">
                                                        <span className="text-xs font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                                                            {link.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </motion.div>
                                    ))}
                                </nav>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Section */}
                <motion.div variants={itemVariants} className="border-t border-gray-800 py-4">
                    <div className="max-w-md mx-auto text-center space-y-3">
                        <h3 className="text-sm font-semibold text-white">Stay Updated</h3>
                        <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                required
                                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm"
                            />
                            <Button
                                type="submit"
                                disabled={isNewsletterSubmitted}
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4"
                            >
                                {isNewsletterSubmitted ? "✓" : "Subscribe"}
                            </Button>
                        </form>
                    </div>
                </motion.div>

                {/* Copyright and Legal */}
                <motion.div variants={itemVariants} className="border-t border-gray-800 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-3">
                            <p>© {new Date().getFullYear()} Real Estate Algarve. All rights reserved.</p>
                            <div className="flex items-center gap-1">
                                <Shield className="w-3 h-3" />
                                <span>SSL & GDPR</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy</a>
                            <a href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms</a>
                            <button
                                onClick={() => setShowCookieSettings(true)}
                                className="hover:text-blue-400 transition-colors flex items-center gap-1"
                            >
                                <Cookie className="w-3 h-3" />
                                Cookies
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Cookie Settings Modal */}
            {showCookieSettings && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setShowCookieSettings(false);
                    }}
                >
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full max-w-2xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-amber-50">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg">
                                    <Cookie className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Cookie Settings</h2>
                                    <p className="text-sm text-gray-600">Manage your cookie preferences</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowCookieSettings(false)}
                                className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="overflow-y-auto max-h-[60vh] p-6 space-y-6">
                            <p className="text-sm text-gray-700">
                                We use cookies to enhance your experience on Real Estate Algarve. You can choose which types of cookies to allow.
                            </p>

                            {/* Cookie Categories */}
                            <div className="space-y-4">
                                {cookieCategories.map((category) => {
                                    const IconComponent = category.icon;
                                    const isEnabled = cookiePreferences[category.id];

                                    return (
                                        <div key={category.id} className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-3 flex-1">
                                                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${category.required ? 'bg-red-50' : isEnabled ? 'bg-green-50' : 'bg-gray-50'
                                                        }`}>
                                                        <IconComponent className={`w-4 h-4 ${category.required ? 'text-red-600' : isEnabled ? 'text-green-600' : 'text-gray-400'
                                                            }`} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2">
                                                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                                                            <Badge variant={category.required ? "default" : "secondary"} className="text-xs">
                                                                {category.required ? "Required" : "Optional"}
                                                            </Badge>
                                                        </div>
                                                        <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => handleCookieToggle(category.id)}
                                                    disabled={category.required}
                                                    className={`flex items-center p-1 rounded-full transition-colors ${category.required ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                                        } ${isEnabled ? 'bg-green-600' : 'bg-gray-300'}`}
                                                >
                                                    <div className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform ${isEnabled ? 'translate-x-6' : 'translate-x-0'
                                                        }`} />
                                                </button>
                                            </div>

                                            <div className="ml-11 space-y-1">
                                                <p className="text-xs font-medium text-gray-500 uppercase">Examples:</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                                    {category.examples.map((example, index) => (
                                                        <div key={index} className="flex items-center gap-2">
                                                            <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                                                            <span className="text-xs text-gray-600">{example}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 bg-gray-50">
                            <div className="flex flex-col sm:flex-row gap-3 flex-1">
                                <Button
                                    onClick={handleRejectOptionalCookies}
                                    variant="outline"
                                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100"
                                >
                                    Reject Optional
                                </Button>
                                <Button
                                    onClick={handleAcceptAllCookies}
                                    variant="outline"
                                    className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                                >
                                    Accept All
                                </Button>
                            </div>
                            <Button
                                onClick={handleSaveCookiePreferences}
                                className="bg-orange-600 hover:bg-orange-700 text-white px-8"
                            >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Save Preferences
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </motion.footer>
    );
}
