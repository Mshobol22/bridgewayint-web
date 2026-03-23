import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // Explicit Turbopack config (dev) - fixes multi-lockfile root inference
  turbopack: {
    root: __dirname,
  },
  // Fix build root inference when multiple lockfiles exist (e.g. parent dir)
  outputFileTracingRoot: __dirname,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  webpack: (config) => {
    config.infrastructureLogging = { level: "error" };
    return config;
  },
};

export default nextConfig;
