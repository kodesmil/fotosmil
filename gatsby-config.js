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
          "Levering innen Trondheimsregionen, rigging av utstyr og en person som blir til stede som teknisk support under hele eventen.",
      },
      {
        heading: "Personalisert ustkrifter",
        logo: "moments",
        description:
          "Ubegrenset antall utskrifter som inneholder din logo, pynt eller tekst. Vi hjelper deg med å designe!",
      },
      {
        heading: "Live view, QR-kode og bilde deling",
        logo: "polaroid",
        description:
          "Fotoboksen har en skjerm med live view. I tillegg kan man laste ned egne bilder via en QR-kode eller sende dem på e-post i løpet av festen, rett etter hver 3-shot sesjon. Det er enkelt å dele bildene på sosiale medier!",
      },
      {
        heading: "Underholdende props og pynt",
        logo: "witch",
        description:
          "Vi har mange props og fotovegger som du kan bruke for å tilpasse tema til ditt event! Mot en ekstra kostnad kan vi bestille opp den bildeveggen du ønsker.",
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
        trackingCode: "144253224",
        respectDNT: true,
        productionOnly: false,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
