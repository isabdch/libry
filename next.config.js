/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      "assets.vercel.com",
      "lh3.googleusercontent.com",
      "books.google.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};
