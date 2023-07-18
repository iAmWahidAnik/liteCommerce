/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'www.happythemes.com',
            },
            {
                protocol: 'https',
                hostname: 'images.squarespace-cdn.com',
            },
            {
                protocol: 'https',
                hostname: 'ca-times.brightspotcdn.com',
            },
            {
                protocol: 'https',
                hostname: 'media.remodelista.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.britannica.com',
            },
        ],
    },
}

module.exports = nextConfig
