/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreDevErrors: true,
    },
    eslint:{
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
