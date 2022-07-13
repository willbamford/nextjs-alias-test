// const withTM = require("next-transpile-modules")([
//   "@nextjs-alias-test-lib/testpkg-internal",
// ]);

const target = process.env.TARGET;
console.log(`Running with target: ${target}`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  target,
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, context) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        // alias: {
        //   ...config.resolve.alias,
        //   "@nextjs-alias-test-lib/testpkg": "@nextjs-alias-test-lib/testpkg-2",
        // },
      },
    };
  },
};

// this works
// module.exports = withTM(nextConfig);

module.exports = nextConfig;
