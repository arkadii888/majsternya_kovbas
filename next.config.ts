import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
      unoptimized: true,
    },
  //basePath: '/majsternya_kovbas'
};

export default nextConfig;
