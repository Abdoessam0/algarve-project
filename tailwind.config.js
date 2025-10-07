/** @type {import('tailwindcss').Config} */
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
                journey: {
                    research: { from: '#4CC9F0', to: '#3A86FF' },
                    planning: { from: '#FF758F', to: '#FF4D6D' },
                    financing: { from: '#3DDAB4', to: '#19A27A' },
                    purchase: { from: '#A78BFA', to: '#7C3AED' },
                    ownership: { from: '#F6C453', to: '#F59E0B' },
                },
            },
            boxShadow: {
                soft: '0 10px 30px rgba(0,0,0,.10)',
                softLg: '0 18px 40px rgba(0,0,0,.18)',
                halo: '0 0 0 6px rgba(255,255,255,.25) inset',
            },
            borderRadius: {
                xl2: '1.25rem',
            },
        },
    },
    plugins: [],
};
