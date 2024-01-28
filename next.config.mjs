/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photo.teamrabbil.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "library.ceu.edu",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
