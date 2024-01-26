/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  cacheMaxMemorySize: 0,
};

export default nextConfig;
