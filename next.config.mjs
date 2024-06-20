/** @type {import('next').NextConfig} */
import { createProxyMiddleware } from 'http-proxy-middleware';

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://yuanjin.tech:5005/api/:path*',
            }
        ]
    }
};

export default nextConfig;
