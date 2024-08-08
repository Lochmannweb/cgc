/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aws-0-us-west-1.pooler.supabase.com',
                port: '6543',
                pathname: 'postgres'
            }
        ]
    },
    assetPrefix: './',
    trailingSlash: true,
};

export default nextConfig;
