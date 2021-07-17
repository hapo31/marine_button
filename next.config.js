/* eslint-disable no-undef */
const env = process.env["NODE_ENV"];
module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    assetPrefix: env === "production" ? "/marine_button" : "",
  };
  return nextConfig;
};
/* eslint-enable */
