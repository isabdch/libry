/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["assets.vercel.com", "lh3.googleusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};
