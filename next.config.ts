import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Ensure the correct workspace root is used when multiple lockfiles exist
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
