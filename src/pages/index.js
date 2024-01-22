import { graphql } from "gatsby"
import React from "react"

import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  NavLink,
  Styled,
  Text,
} from "theme-ui"
import { Offer } from "../components/offer"
import SEO from "../components/seo"
import { StyledBackgroundSection } from "../components/styledBackgroundSection"

function FsTobBar(props) {
  return (
    <Flex
      sx={{
        paddingLeft: ["5%", "10%", "15%"],
        paddingRight: ["5%", "10%", "15%"],
        alignItems: "center",
        py: "0.5em",
        top: 0,
        width: `100%`,
        background: `black`,
        position: `sticky`,
        zIndex: `100000`,
        boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
      }}
      as="nav"
    >
      {props.children}
    </Flex>
  )
}

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
            textShadow: "2px 2px 10px black",
            lineHeight: 1,
            fontSize: ["6", "7", "8"],
            textAlign: "center",
          }}
        >
          FotoSmil Trondheim Photobooth
        </Text>
        <Text
          as={"h2"}
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
          Perfekt for å skape morsomme minner fra alle typer arrangementer: firmafest, bryllup, barnefest, studentarrangement, julebord, konferanse, konfirmasjon, bursdag, jubileum, sommerfest, konsert eller messe!
        </Text>
      </Box>
    </StyledBackgroundSection>
  )
}

function FsSmile() {
  return (
    <Box
      sx={{
        marginTop: ["2em", "3em"],
        marginBottom: ["2em", "3em"],
      }}
    >
      <Text
        as={"p"}
        sx={{
          textAlign: "center",
          fontSize: ["3", "4"],
        }}
      >
        Målet vårt er å bidra til et hav av smil og skape god stemning overalt!
      </Text>
      <Heading
        sx={{
          marginTop: "0.5em",
          fontSize: ["5", "6"],
          textAlign: "center",
        }}
      >
        🥳 🍻 🎉 📸 🍾 🥂 🥳
      </Heading>
    </Box>
  )
}

function FsInsta() {
  return (
    <Box
      sx={{
        marginTop: ["4em", "6em"],
      }}
    >
      <Text
        as={"h3"}
        sx={{
          fontSize: ["4", "5"],
          textAlign: "center",
        }}
      >
        Vi er på Instagram!
      </Text>
      <Flex
        sx={{
          alignItems: "center",
          marginTop: ["2em"],
        }}
      >
        <Grid
          gap={[0, 4, 4, 4]}
          columns={[1, 2, 2, 2]}
          sx={{
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <iframe
            width="320"
            height="460"
            src="https://www.instagram.com/p/CIp6kV6JNzq/embed"
            frameBorder="0"
          />
          <iframe
            width="320"
            height="460"
            src="https://www.instagram.com/p/BuEWMHjhUZv/embed"
            frameBorder="0"
          />
        </Grid>
      </Flex>
    </Box>
  )
}

function FsContact() {
  return (
    <Box
      anchor="contact"
      sx={{
        marginTop: ["4em", "8em"],
        marginLeft: ["5%", "10%", "15%"],
        marginRight: ["5%", "10%", "15%"],
      }}
      id="contact"
      as="form"
      method="post"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Text
        as={"h1"}
        sx={{
          fontSize: ["4", "5"],
          textAlign: "center",
        }}
      >
        Lurer du på noe?
      </Text>
      <Text
        as={"div"}
        sx={{
          fontSize: ["3"],
          textAlign: "center",
          marginTop: "8px",
        }}
      >
        Skriv oss en melding!
      </Text>
      <Box sx={{ width: ["90%", "75%", "50%"], mx: "auto" }} mt={3}>
        <Input placeholder="Name" name="name" mb={3} />
        <Input placeholder="Email" type="email" name="password" mb={3} />
      </Box>
      <Button
        type="submit"
        sx={{ mx: "auto", display: "block", backgroundColor: "purple" }}
      >
        Send
      </Button>

      <Text
        as={"div"}
        sx={{
          fontSize: ["3"],
          textAlign: "center",
          marginTop: "2em",
        }}
      >
        eller bruk
      </Text>
      <Styled.a
        style={{
          textAlign: "center",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "1em",
        }}
        href="mailto:fotosmil.trondheim@gmail.com?subject=Info about Photo Booth"
      >
        fotosmil.trondheim@gmail.com
      </Styled.a>
      <Styled.a
        style={{
          textAlign: "center",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "1em",
        }}
        href="tel:+47 92125656"
      >
        +47 92125656
      </Styled.a>
    </Box>
  )
}

function FsLogos(props) {
  return (
    <Container
      sx={{
        marginTop: ["4em", "8em"],
      }}
    >
      <Text
        as={"h3"}
        sx={{
          fontSize: ["4", "5"],
          textAlign: "center",
        }}
      >
        Kundene våre
      </Text>
      <Grid
        gap="3em"
        columns={[5]}
        sx={{
          alignItems: "center",
          alignContent: "center",
          background: "white",
          marginTop: ["2em"],
          paddingX: ["1em", "4em", "8em"],
          paddingY: ["2em", "4em"],
        }}
      >
        {props.logos.nodes.map((logo, i) => (
          <GatsbyImage
            key={i}
            imgStyle={{
              objectFit: "contain",
            }}
            image={logo.childImageSharp.gatsbyImageData}
            alt=""
          />
        ))}
      </Grid>
    </Container>
  )
}

function FsFooter() {
  return (
    <Box
      sx={{
        marginTop: ["4em", "8em"],
        marginBottom: "1em",
      }}
    >
      <Container>
        <Text
          as={"div"}
          sx={{
            marginTop: "1em",
            fontSize: ["3"],
            textAlign: "center",
          }}
        >
          Made with ♥ in Trondheim by{" "}
          <Styled.a href="https://kodesmil.com">Kodesmil</Styled.a>
        </Text>
      </Container>
    </Box>
  )
}

function FsPricing() {
  return (
    <Box
      id="pricing"
      anchor="pricing"
      sx={{
        mx: "auto",
        paddingTop: ["4em", "8em"],
        width: ["80%", "60%", "60%", "37%"],
      }}
    >
      <Text
        as={"h3"}
        sx={{
          fontSize: ["4", "5"],
          textAlign: "center",
        }}
      >
        Pris? La oss holde det enkelt!
      </Text>
      <Text
        as={"h2"}
        sx={{
          fontSize: ["3", "4"],
          textAlign: "center",
        }}
      >
        Vi har laveste fastprisen...
      </Text>
      <div>
        <Text
          as={"div"}
          sx={{
            fontSize: ["3"],
            marginTop: "1em",
            textAlign: "center",
          }}
        >
          kr. 4730,- for de første to timene og kr. 1770,- per extra time.
        </Text>
        <Text
          as={"div"}
          sx={{
            fontSize: ["2"],
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          For eksempel 3 timer er kr. 6500,- og 4 timer er kr. 8270,-
        </Text>
      </div>
    </Box>
  )
}

function FsPictures(props) {
  return (
    <Grid
      gap="0"
      columns={[2, 3, 3, 6]}
      sx={{
        background: "white",
        boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
      }}
    >
      {props.pictures.nodes.map((picture, i) => (
        <GatsbyImage
          key={i}
          imgStyle={{
            objectFit: "cover",
          }}
          image={picture.childImageSharp.gatsbyImageData}
          alt=""
        />
      ))}
    </Grid>
  )
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <div>
      <SEO title={siteTitle} />
      <FsTobBar>
        <StaticImage width={72} src="./logo.png" alt="Fotosmil Trondheim" />
        <NavLink
          sx={{
            color: "white",
            marginLeft: ["1em", "2em", "3em"],
          }}
          href="#offer"
        >
          Tilbud
        </NavLink>
        <NavLink
          sx={{
            color: "white",
            marginLeft: ["1em", "2em", "3em"],
          }}
          href="#pricing"
        >
          Pris
        </NavLink>
        <NavLink
          sx={{
            color: "white",
            marginLeft: ["1em", "2em", "3em"],
          }}
          href="#contact"
        >
          Kontakt
        </NavLink>
      </FsTobBar>
      <FsHeader background={data.background} />
      <FsSmile />
      <FsPictures pictures={data.joana} />
      <Offer features={data.site.siteMetadata.features} />
      <FsPricing />
      <FsContact />
      <FsInsta />
      <FsLogos logos={data.logos} />
      <FsFooter />
      <FsPictures pictures={data.pictures} />
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
            height: 200
          )
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
