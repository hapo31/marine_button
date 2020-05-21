/* eslint-disable */

module.exports = {
  pathPrefix: "/marine_button",
  siteMetadata: {
    title: `宝鐘マリンボタン🏴☠`,
    description: `Ahoy!ホロライブ3期生、宝鐘海賊団船長の、宝鐘マリンのボタンですぅ～`,
    author: `@happou31`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `voices`,
        path: `${__dirname}/static/audio/`,
        ignore: [`*.wav`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `marine_button`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/image/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
