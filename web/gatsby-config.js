module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "web",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "gj8ohnsz",
        dataset: "production",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`
  ],
};
