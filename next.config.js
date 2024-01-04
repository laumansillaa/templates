/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "res.cloudinary.com",
    }],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
