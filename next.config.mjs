/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = 'norah';

const basePath = isGithubActions ? `/${repo}` : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true, // Required for static export
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
