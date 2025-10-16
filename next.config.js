/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: { root: __dirname },
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
