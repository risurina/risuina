const path = require('path');

module.exports = {
  siteMetadata: {
    title: "My portfolio",
    siteUrl: "https://risurina.github.io"
  },
  pathPrefix: "",
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-69009729-2",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "assets": path.resolve(__dirname, 'src/assets'),
          "components": path.resolve(__dirname, 'src/components'),
          "pages": path.resolve(__dirname, 'src/pages'),
          "styles": path.resolve(__dirname, 'src/styles')
        },
        extensions: [
          "js",
          "tsx",
        ],
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `tsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
