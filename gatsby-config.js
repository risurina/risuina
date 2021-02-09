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
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "components": path.resolve(__dirname, 'src/components')
        },
        extensions: [
          "js",
          "tsx",
        ],
      }
    }

  ],
};
