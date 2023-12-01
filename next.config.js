/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: false,
  images: {
    domains: ["logodownload.org", "source.unsplash.com", "res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
