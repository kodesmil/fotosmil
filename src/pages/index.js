import {graphql} from "gatsby"
import React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Box, Flex, IconButton, Text,} from "theme-ui"
import InstagramIcon from "../components/instagram"
import {Offer} from "../components/offer"
import SEO from "../components/seo"
import {StyledBackgroundSection} from "../components/styledBackgroundSection"
import {FsTobBar} from "../components/fsTobBar";
import {FsInsta} from "../components/fsInsta";
import {FsContact} from "../components/fsContact";
import {FsLogos} from "../components/fsLogos";
import {FsFooter} from "../components/fsFooter";
import {MyDropdown} from "../components/myDropdown";
import {FsPictures} from "../components/fsPictures";
import {FsStripes} from "../components/fsStripes";
import {FsFooterPictures} from "../components/fsFooterPictures";
import {FsPricing} from "../components/fsPricing";
import {FsFotograf} from "../components/fsFotograf";
import {FsSmile} from "../components/fsSmile";

function FsHeader() {
  return (
    <StyledBackgroundSection
      sx={{
        paddingTop: ["1em", "4em"],
        boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
      }}
    >
      <Box
        sx={{
          width: ["90%", "80%", "70%"],
          paddingTop: ["8em", "10em"],
          paddingBottom: ["8em", "10em"],
          mx: "auto",
        }}
      >
        <Text
          as={"h1"}
          sx={{
            color: "white",
            marginTop: "1em",
            textShadow: "2px 2px 10px black",
            lineHeight: "1",
            fontSize: ["5", "6"],
            textAlign: "center",
          }}
        >
          Din beste fotoboks-opplevelse fra A til Å
        </Text>
        <Text
          as={"p"}
          sx={{
            color: "white",
            marginTop: "1em",
            textShadow: "2px 2px 10px black",
            fontSize: ["4", "5"],
            textAlign: "center",
          }}
        >
          Perfekt for å skape morsomme minner fra alle typer arrangementer:
          firmafest, bryllup, barnefest, studentarrangement, julebord,
          konferanse, konfirmasjon, bursdag, jubileum, sommerfest, konsert eller
          messe!
        </Text>
      </Box>
    </StyledBackgroundSection>
  )
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <div>
      <SEO title={siteTitle} />
      <FsTobBar>
        <StaticImage width={48} src="./logo.png" alt="Fotosmil Trondheim" />
        <Flex sx={{ flexDirection: ["column", "row"] }}>
          <Text
            as={"h4"}
            sx={{
              marginLeft: ["1em"],
              fontWeight: [600, 600],
              fontSize: [1, 2],
            }}
          >
            FotoSmil Trondheim
          </Text>
          <Text
            as={"h4"}
            sx={{
                marginLeft: ["1em"],
              fontWeight: [500, 500],
              fontSize: [1, 2],
            }}
          >
              Fotograferingstjenester
          </Text>
        </Flex>
        <Box sx={{ flex: "1 1 auto" }} />
        <IconButton
          sx={{
            width: "40px",
            height: "40px",
          }}
          onClick={() => {
            window.open("https://www.instagram.com/fotosmil.trondheim")
          }}
        >
          <InstagramIcon />
        </IconButton>
        <MyDropdown />
      </FsTobBar>
      <FsHeader background={data.background} />
      <FsSmile />
      <FsPictures pictures={data.joana} />
      <Offer features={data.site.siteMetadata.features} />
      <FsPricing />
      <FsStripes pictures={data.stripes} columns={[4]} />
      <FsFotograf />
      <FsContact />
      <FsInsta />
      <FsLogos logos={data.logos} />
      <FsFooterPictures pictures={data.pictures} />
      <FsFooter />
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        features {
          logo
          heading
          description
        }
      }
    }
    logos: allFile(
      sort: { fields: [relativePath] }
      filter: { relativePath: { regex: "/partners/" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            quality: 50
            height: 100
            transformOptions: { grayscale: false }
          )
        }
      }
    }
    pictures: allFile(
      sort: { fields: [relativePath] }
      filter: { relativePath: { regex: "/parties//" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            quality: 25
          )
        }
      }
    }
    stripes: allFile(
      sort: { fields: [relativePath] }
      filter: { relativePath: { regex: "/stripes//" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
    joana: allFile(
      sort: { fields: [relativePath] }
      filter: { relativePath: { regex: "/joana//" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            quality: 25
            height: 200
          )
        }
      }
    }
  }
`
