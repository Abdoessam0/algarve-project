/** @type {import("tailwindcss").Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // New luxury color palette
                ink: {
                    900: '#0B1320', // Primary text
                },
                slate: {
                    600: '#6B7280', // Secondary text
                },
                sand: {
                    50: '#F7F7F5', // Page background
                },
                stone: {
                    200: '#E5E7EB', // Borders/dividers
                },
                gold: {
                    500: '#C7A76C', // CTA accents, small lines, icons
                },
                emerald: {
                    500: '#10B981', // Success badges only
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
            letterSpacing: {
                'tighter-headline': '-0.02em', // -2% for large headlines
                'tight-headline': '-0.01em',   // -1% for headlines
            },
            lineHeight: {
                'body': '1.5',
                'heading': '1.2',
            },
            boxShadow: {
                'soft': '0 2px 12px rgba(0,0,0,0.06)',
                'soft-lg': '0 4px 16px rgba(0,0,0,0.08)',
                'glass': '0 2px 8px rgba(0,0,0,0.04)',
            },
            borderRadius: {
                'card': '14px',  // 14px for cards
                'button': '12px', // 12px for buttons
            },
            transitionDuration: {
                'micro': '200ms',  // Micro-interactions
                'reveal': '350ms', // Hero/section reveals
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
            },
        },
    },
    plugins: [],
};
