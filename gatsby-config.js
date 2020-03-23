module.exports = {
  siteMetadata: {
    title: `FotoSmil Trondheim | Photo Booth`,
    name: `Fotoboks`,
    siteUrl: `https://fotosmil.no`,
    author: {
      name: `FotoSmil Trondheim`,
      summary: `Photo booth - fun booster and ice-breaker for events, parties, weddings`,
    },
    description: `Fun booster and ice-breaker for events, parties, weddings`,
    siteUrl: `https://www.fotosmil.no/`,
    features: [
      {
        heading: "Support & attendant",
        logo: "whole-year",
        description:
          "You won't need to worry about installation of the photo booth nor about any other technical issue. Let us do it for you.",
      },
      {
        heading: "Unlimited photo printouts",
        logo: "moments",
        description:
          "There are usually 3 or 4 photos on a single printout stripe. We will print as many as needed - with no extra cost! (during rental hours)",
      },
      {
        heading: "Top-quality camera",
        logo: "polaroid",
        description:
          "Photo booth services often use small, portable equipment with low-quality camera. Our photos are taken with a professional SLR camera to ensure the best quality for you.",
      },
      {
        heading: "Vast choice of props",
        logo: "witch",
        description:
          "You can use all of our hundreds of props and backgrounds. (we send patterns on request). What's more, client can order props dedicated for a special theme party, although this service is extra paid.",
      },
      {
        heading: "Delivery within Stor Trondheim",
        logo: "on-the-way",
        description:
          "Orkanger, Stjørdal and Melhus are still free. For further distances - send us request.",
      },
    ],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/content/assets/svg/`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FotoSmil Trondheim - Photo Booth`,
        short_name: `FotoSmil`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `purple`,
        display: `minimal-ui`,
        icon: `static/icons/favicon-96x96.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
          trackingCode: "7020884",
          respectDNT: true,
          productionOnly: false,
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
}
