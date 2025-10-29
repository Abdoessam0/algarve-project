/** @type {import('next').NextConfig} */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
let SUPABASE_HOST = undefined;
try {
    if (SUPABASE_URL) SUPABASE_HOST = new URL(SUPABASE_URL).host;
} catch {
    // leave undefined if URL is malformed
}

const nextConfig = {
    turbopack: { root: __dirname },
    images: {
        minimumCacheTTL: 2678400,
        formats: ["image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96],
        remotePatterns: [
            { protocol: "https", hostname: "www.realestate-lisbon.com" },
            { protocol: "https", hostname: "realestate-lisbon.com" },
            ...(SUPABASE_HOST ? [{ protocol: "https", hostname: SUPABASE_HOST }] : []),
            { protocol: "https", hostname: "**" },
            { protocol: "http", hostname: "**" },
        ],
        unoptimized: false,
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async redirects() {
        return [
            {
                source: "/areas",
                destination: "/algarve-real-estate-areas",
                permanent: true,
            },
            {
                source: "/cv",
                destination: "/professionals",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
