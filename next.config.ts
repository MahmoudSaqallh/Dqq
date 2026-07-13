import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dqq.ai",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;