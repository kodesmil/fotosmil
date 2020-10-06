import React, { Children } from "react"
import { Link, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import SEO from "../components/seo"
import {
  NavLink,
  Flex,
  Box,
  Button,
  Grid,
  Styled,
  Label,
  Heading,
  Input,
  Text
} from "theme-ui"
import Img from "gatsby-image"
import { StyledBackgroundSection } from "../components/styledBackgroundSection"
import { Offer } from "../components/offer"

class FsTobBar extends React.Component {
  render() {
    return (
      <Flex
        sx={{
          paddingLeft: ["5%", "10%", "15%"],
          paddingRight: ["5%", "10%", "15%"],
          alignItems: "baseline",
          paddingTop: `1rem`,
          width: `100%`,
          paddingBottom: `0.5rem`,
          background: `black`,
          position: `fixed`,
          zIndex: `100000`,
          boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
        }}
        as="nav"
      >
        {this.props.children}
      </Flex>
    )
  }
}
class FsHeader extends React.Component {
  render() {
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
          <Heading
            sx={{
              color: "white",
              textShadow: " 2px 2px 10px black",
              fontSize: ["6", "7", "8"],
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            Proffessional Photo Booth
          </Heading>
          <Heading
            sx={{
              color: "white",
              marginTop: "1em",
              textShadow: " 2px 2px 10px black",
              fontSize: ["4", "5"],
              textAlign: "center",
            }}
          >
            The best fun booster and ice-breaker for events, parties and weddings
          </Heading>
        </Box>
      </StyledBackgroundSection>
    )
  }
}

class FsSmile extends React.Component {
  render() {
    return (
      <Box sx={{
        marginTop: ["4em", "8em"],
      }}>
        <Heading sx={{
          fontSize: ["5", "6"],
          textAlign: "center"
        }}> 🥳</Heading>
        <Text sx={{
          marginTop: "1em",
          textAlign: "center",
          fontSize: ["4"],
        }}>
          We made <b>4000+</b> people smiling!
        </Text>
      </Box>
    )
  }
}
class FsContact extends React.Component {
  render() {
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
        <Heading sx={{
          fontSize: ["4", "5"],
          textAlign: "center"
        }}>
          Would you like to learn more?
        </Heading>
        <Text sx={{
          fontSize: ["3"],
          textAlign: "center",
          marginTop: "8px",
        }}>
          Leave us your contact
        </Text>
        <Box sx={{ width: ["90%", "75%", "50%"], mx: "auto" }} mt={3}>
          <Input placeholder="Name" name="name" mb={3} />
          <Input placeholder="Email" type="email" name="password" mb={3} />
        </Box>
        <Button type="submit" sx={{ mx: "auto", display: "block" }}>
          Submit
        </Button>

        <Text sx={{
          fontSize: ["3"],
          textAlign: "center", marginTop: "2em"
        }}>
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
}
class FsLogos extends React.Component {
  render() {
    return (
      <Grid
        gap="2em"
        columns={[5]}
        sx={{
          marginTop: ["4em", "8em"],
          alignItems: "center",
          alignContent: "center",
          background: "white",
          padding: "1em",
          boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
        }}
      >
        {this.props.logos.nodes.map(logo => (
          <Box>
            <Img
              style={{ maxHeight: "100px" }}
              imgStyle={{
                filter: "grayscale(25%)",
                maxHeight: "100px",
                objectFit: "contain",
              }}
              fluid={logo.childImageSharp.fluid}
              alt=""
            />
          </Box>
        ))}
      </Grid>
    )
  }
}
class FsFooter extends React.Component {
  render() {
    return (
      <Box
        sx={{
          marginTop: ["4em", "8em"],
          marginBottom: "1em",
          marginLeft: ["5%", "10%", "15%"],
          marginRight: ["5%", "10%", "15%"],
        }}
      >
        <footer>
          <Text sx={{ marginTop: "1em", fontSize: ["3"], textAlign: "center" }}>
            Made with ♥ in Trondheim by{" "}
            <Styled.a href="https://kodesmil.com">KodeSmil</Styled.a>
          </Text>
        </footer>
      </Box>
    )
  }
}
class FsPricing extends React.Component {
  render() {
    return (
      <Box
        sx={{
          mx: "auto",
          marginTop: ["4em", "8em"],
          width: ["80%", "60%", "60%", "37%"],
        }}
      >
      <Heading
        sx={{
          fontSize: ["4", "5"],
        }}
      >
        Let's keep it simple – one fixed price. 
      </Heading>

      <Text sx={{
        fontSize: ["2", "3"],
        marginTop: "1em",
      }}>
        3999 NOK for the first 2 hours and then 999 NOK/h for the next ones
      </Text>
      </Box>
    )
  }
}

class FsPictures extends React.Component {
  render() {
    return (
      <Grid
        gap="0"
        columns={[2, 3, 3, 6]}
        sx={{
          background: "white",
          boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
        }}
      >
        {this.props.pictures.nodes.map(picture => (
          <Img
            style={{
              height: "200px",
            }}
            imgStyle={{
              filter: "grayscale(25%)",
              objectFit: "cover",
              height: "200px",
            }}
            fluid={picture.childImageSharp.fluid}
            alt=""
          />
        ))}
      </Grid>
    )
  }
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <div>
      <SEO title={siteTitle} />
      <FsTobBar>
        <NavLink
          style={{
            color: "white",
          }}
          as="h1" href="#!">
          FotoSmil Trondheim
        </NavLink>
        <div style={{ flex: "auto" }}></div>
        <NavLink
          style={{
            color: "white",
          }}
          href="#contact" p={2}>
          Contact
        </NavLink>
      </FsTobBar>
      <FsHeader background={data.background} />
      <Fade>
        <FsPictures pictures={data.joana} />
        <Offer features={data.site.siteMetadata.features}/>
        <FsPricing />
        <FsSmile />
        <FsLogos logos={data.logos} />
        <FsContact />
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
    logos: allFile(filter: { relativePath: { regex: "/partners/logo_/" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    pictures: allFile(filter: { relativePath: { regex: "/parties//" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    joana: allFile(filter: { relativePath: { regex: "/joana//" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
