const isGithubPages = process.env.GITHUB_PAGES === 'true';
const isStaticExport =
  process.env.STATIC_EXPORT === 'true' ||
  process.env.npm_lifecycle_event === 'build:export' ||
  isGithubPages;
const repoName = 'smart-glssess';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isStaticExport ? 'export' : undefined,
  trailingSlash: isStaticExport,
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;