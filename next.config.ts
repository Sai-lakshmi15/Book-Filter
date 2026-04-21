import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "covers.openlibrary.org",
      "images.unsplash.com",
      "books.google.com",
    ],
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
