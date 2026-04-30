import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // generates a static /out folder
  trailingSlash: true,   // creates /safari/index.html instead of /safari.html — better for shared hosting
  images: {
    unoptimized: true,   // static export can't use Next.js image optimization server
  },
};

export default nextConfig;
