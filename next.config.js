/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: { root: __dirname },
    async redirects() {
        return [
            {
                source: "/cv",
                destination: "/professionals",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
