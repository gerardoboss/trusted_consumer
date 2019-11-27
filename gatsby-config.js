module.exports = {
  siteMetadata: {
    title: `Trusted Consumer`,
    description: `. Trusted Consumer works with businesses who have a passion to protect and uphold consumer privacy. Individuals and businesses can easily interact creating a bridge for consumers to research and manage levels of contact with businesses.`,
    author: `Gerardo Jaramillo`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["300", "400", "500", "700"],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-modal-routing`,
    {
      resolve: `gatsby-source-wordpress`, options: {
        baseUrl: `http://trusted-consumer-backend.azurewebsites.net/`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
  ],
}
