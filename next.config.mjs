/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  reactStrictMode: false,
  // Ensure the private results workbook is shipped with the server bundle
  // so the result-check API can read it on production hosts.
  outputFileTracingIncludes: {
    "/api/result-check": ["./secure-data/results.ods"],
  },
};

export default nextConfig;
