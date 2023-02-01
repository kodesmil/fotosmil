module.exports = {
  siteMetadata: {
    title: `Leie, Utleie | FotoSmil Trondheim | Photo Booth | Fotoboks`,
    name: `Fotoboks`,
    author: {
      name: `FotoSmil Trondheim`,
      summary: `Leie en photobooth fra FotoSmil Trondheim - skaff deg en profesjonell fotoboks på festen! Perfekt til firmafest, bryllup, barnefest, studentarrangement, julebord, konfirmasjon, bursdag, konsert eller messe!`,
    },
    description: `Leie en photobooth fra FotoSmil Trondheim - skaff deg en profesjonell fotoboks på festen! Perfekt til firmafest, bryllup, barnefest, studentarrangement, julebord, konfirmasjon, bursdag, konsert eller messe!`,
    siteUrl: `https://www.fotosmil.no/`,
    features: [
      {
        heading: "Teknisk Support",
        logo: "whole-year",
        description:
          "Levering innen Trondheimsregionen, oppsett og en person som blir til stede som teknisk support under hele eventen.",
      },
      {
        heading: "Personalisert ustkrifter",
        logo: "moments",
        description:
          "Ubegrenset med printouts som inneholder din logo, pynt og/eller tekst. Vi hjelper deg med å designe!",
      },
      {
        heading: "Live view, QR-kode og epost deling",
        logo: "polaroid",
        description:
          "Fotoboksen har skjerm med live view hvor man kan også laste ned egne bilder via en QR-kode eller sende på epost i løpet av festen, rett etter hver 3-shot session.",
      },
      {
        heading: "Underholdende props og pynt",
        logo: "witch",
        description:
          "Vi har masse props og backdrop som du kan bruke for å gjøre bildene morsomme! Vil du ha en tilpasset/tema backdrop eller props, vil vi bestille denne før fra en ekstern leverandør (ekstra kostnader).",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {},
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
        trackingCode: "26908322",
        respectDNT: true,
        productionOnly: false,
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
}
