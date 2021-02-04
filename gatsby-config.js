module.exports = {
  siteMetadata: {
    title: "My portfolio",
  },
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
  ],
};
