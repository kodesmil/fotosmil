import React from "react"
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import SEO from "../components/seo"
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
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { StyledBackgroundSection } from "../components/styledBackgroundSection"
import { Offer } from "../components/offer"

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
          paddingTop: ["12em", "22em"],
          paddingBottom: ["12em", "22em"],
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
          Professional Photo Booth
        </Text>
        <Text
          as={"h3"}
          sx={{
            color: "white",
            marginTop: "1em",
            textShadow: "2px 2px 10px black",
            fontSize: ["4", "5"],
            textAlign: "center",
          }}
        >
          The best fun booster and ice-breaker for events, parties and weddings
        </Text>
      </Box>
    </StyledBackgroundSection>
  )
}

function FsSmile() {
  return (
    <Box
      sx={{
        marginTop: ["2em", "4em"],
      }}
    >
      <Heading
        sx={{
          fontSize: ["5", "6"],
          textAlign: "center",
        }}
      >
        {" "}
        🥳
      </Heading>
      <Text
        as={"div"}
        sx={{
          marginTop: "1em",
          textAlign: "center",
          fontSize: ["4"],
        }}
      >
        We made <b>4000+</b> people smiling!
      </Text>
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
        Meet us on Instagram!
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
        Would you like to learn more?
      </Text>
      <Text
        as={"div"}
        sx={{
          fontSize: ["3"],
          textAlign: "center",
          marginTop: "8px",
        }}
      >
        Leave us your contact
      </Text>
      <Box sx={{ width: ["90%", "75%", "50%"], mx: "auto" }} mt={3}>
        <Input placeholder="Name" name="name" mb={3} />
        <Input placeholder="Email" type="email" name="password" mb={3} />
      </Box>
      <Button
        type="submit"
        sx={{ mx: "auto", display: "block", backgroundColor: "purple" }}
      >
        Submit
      </Button>

      <Text
        as={"div"}
        sx={{
          fontSize: ["3"],
          textAlign: "center",
          marginTop: "2em",
        }}
      >
        or use
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
        Our Clients
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
          boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
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
        Let's keep it simple – one fixed price.
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
          kr 4230,- (eks. MVA) for the first 2 hours and then kr 1770,- (eks.
          MVA) per hour for the next ones
        </Text>
        <Text
          as={"div"}
          sx={{
            fontSize: ["2"],
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          for example 3 hours of photo shoot is kr 4230 + kr 1770 = kr 6000,-
          (eks. MVA)
        </Text>
        <Text
          as={"div"}
          sx={{
            fontSize: ["2"],
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          For events or concerts, we also offer pay per session model (kr 110
          per session)
        </Text>
      </div>
      <Text
        as={"h3"}
        sx={{
          fontSize: ["4", "5"],
          marginTop: ["1.5em", "3em"],
          textAlign: "center",
        }}
      >
        Why are we cheaper than our competition?
      </Text>

      <Text
        as={"div"}
        sx={{
          fontSize: ["3"],
          marginTop: "1em",
          textAlign: "center",
        }}
      >
        <b>Because</b> spreading smiles and good atmosphere is our mission :D
      </Text>
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
          Offer
        </NavLink>
        <NavLink
          sx={{
            color: "white",
            marginLeft: ["1em", "2em", "3em"],
          }}
          href="#pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          sx={{
            color: "white",
            marginLeft: ["1em", "2em", "3em"],
          }}
          href="#contact"
        >
          Contact
        </NavLink>
      </FsTobBar>
      <FsHeader background={data.background} />
      <Fade delay={0}>
        <FsPictures pictures={data.joana} />
      </Fade>
      <Fade delay={0}>
        <Offer features={data.site.siteMetadata.features} />
        <FsPricing />
        <FsSmile />
        <FsContact />
        <FsLogos logos={data.logos} />
        <FsInsta />
        <FsFooter />
        <FsPictures pictures={data.pictures} />
      </Fade>
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
