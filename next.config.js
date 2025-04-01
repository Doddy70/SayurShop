/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "sayurshop.id",
      "back.sayurshop.id",
      "46.202.138.149",
      "back.sayurshop.id",
    ], // Add the domain here
  },
};

module.exports = nextConfig;
