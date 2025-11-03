import type { NextConfig } from "next";
import config from "./src/config/config.json";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: config.site.base_path !== "/" ? config.site.base_path : "",
  trailingSlash: config.site.trailing_slash,
  output: "standalone",
};

export default nextConfig;
