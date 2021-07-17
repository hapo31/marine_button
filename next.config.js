/* eslint-disable no-undef */
module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    assetPrefix: process.env.GH_PAGES ? "/marine_button" : "",
  };
  return nextConfig;
};
/* eslint-enable */
