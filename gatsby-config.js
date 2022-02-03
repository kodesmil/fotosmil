module.exports = {
  siteMetadata: {
    title: `FotoSmil Trondheim | Photo Booth`,
    name: `Fotoboks`,
    author: {
      name: `FotoSmil Trondheim`,
      summary: `Photo booth - fun booster and ice-breaker for events, parties, weddings`,
    },
    description: `Fun booster and ice-breaker for events, parties, weddings`,
    siteUrl: `https://www.fotosmil.no/`,
    features: [
      {
        heading: "Technical support",
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
        heading: "Top-quality service",
        logo: "polaroid",
        description:
          "Delivering best quality service is our goal. Our photos are taken with a professional SLR camera to ensure best service for you.",
      },
      {
        heading: "Vast choice of props",
        logo: "witch",
        description:
          "Our clients can use a full palette of hundreds of our props and choose from our backdrops (we send patterns on request). What's more, clients can order props or a backdrop dedicated for a special theme party, although this service is extra paid.",
      },
      {
        heading: "Delivery within Stor Trondheim",
        logo: "on-the-way",
        description:
          "Orkanger, Stjørdal and Melhus are still free. For longer distances - send us request.",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-theme-ui`,
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
    `gatsby-plugin-typescript`,
    //{
     // resolve: `gatsby-plugin-google-analytics`,
     // options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
     // },
   //},
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
