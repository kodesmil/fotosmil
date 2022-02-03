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
  Text,
} from "theme-ui"
import Img from "gatsby-image"
import Moments from "../../content/assets/svg/Moments.svg"
import Witch from "../../content/assets/svg/Witch.svg"
import WholeYear from "../../content/assets/svg/WholeYear.svg"
import Polaroid from "../../content/assets/svg/Polaroid.svg"
import OnTheWay from "../../content/assets/svg/OnTheWay.svg"
import { StyledBackgroundSection } from "../components/styledBackgroundSection"

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
            Professional Photo Booth
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

class FsOffer extends React.Component {
  render() {
    return (
      <Box
        sx={{
          marginTop: ["4em", "8em"],
          marginLeft: ["5%", "10%", "15%"],
          marginRight: ["5%", "10%", "15%"],
        }}
      >
        <Heading
          sx={{
            textAlign: "center",
            fontSize: ["5", "6"],
          }}
        >
          What's in the offer?
        </Heading>
        <Grid
          sx={{
            marginLeft: ["2%"],
            marginRight: ["2%"],
            marginTop: ["3em", "4em"],
          }}
          gap="3em"
          columns={[1, 1, 2, 3]}
        >
          {this.props.features.map(feature => (
            <Box
              sx={{
                padding: "2em",
                borderRadius: "1em",
                background: "white",
                boxShadow: "0px 0.5px 50px rgba(0,0,0,0.1)",
              }}
            >
              <Fade>
                <Flex
                  sx={{
                    marginBottom: "1em",
                    alignItems: "center",
                  }}
                >
                  <Heading
                    sx={{
                      fontSize: ["4"],
                      paddingRight: "0.5em",
                    }}>{feature.heading}</Heading>
                  {renderLogo(feature.logo)}
                </Flex>

                <Text
                  sx={{
                    fontSize: ["3"],
                  }}
                >{feature.description}</Text>
              </Fade>
            </Box>
          ))}
        </Grid>
      </Box>
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
          textAlign: "center",
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

class FsInsta extends React.Component {
  render() {
    return (
      <Box sx={{
        marginTop: ["4em", "8em"],
      }}>
        <Heading sx={{
          fontSize: ["4", "5"],
          textAlign: "center",
        }}>Meet us on Instagram!</Heading>
        <Flex
          sx={{
            alignItems: "center",
            marginTop: ["1em"],
          }}
        >
          <Grid
            gap={[0, 4, 4, 4]}
            columns={[1, 2, 2, 2]}
            sx={{
              marginRight: "auto", marginLeft: "auto",
            }}
          >
            <iframe width="320" height="460" src="https://www.instagram.com/p/CIp6kV6JNzq/embed"
                    frameBorder="0" />
            <iframe width="320" height="460" src="https://www.instagram.com/p/BuEWMHjhUZv/embed"
                    frameBorder="0" />
          </Grid>
        </Flex>
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
          textAlign: "center",
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
          textAlign: "center", marginTop: "2em",
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
          marginTop: ["4em", "8em"],
          marginLeft: ["5%", "10%", "15%"],
          marginRight: ["5%", "10%", "15%"],
        }}
      >
        <Heading
          sx={{
            fontSize: ["4", "5"],
            textAlign: "center",
          }}
        >
          Let's keep it simple – one fixed price.
        </Heading>
        <div>
          <Text sx={{
            fontSize: ["3"],
            marginTop: "1em",
            textAlign: "center",
          }}>
            kr 3770,- for the first 2 hours and then kr 730,-/h for the next ones
          </Text>
          <Text sx={{
            fontSize: ["2"],
            textAlign: "center",
            fontStyle: "italic",
          }}>
            for example 3 hours of photo shoot is kr 3770 + kr 730 = kr 4500,-
          </Text>
        </div>
        <Heading
          sx={{
            marginTop: ["1.5em", "3em"],
            fontSize: ["4", "5"],
            textAlign: "center",
          }}
        >
          Why are we cheaper than our competition?
        </Heading>

        <Text sx={{
          fontSize: ["3"],
          marginTop: "1em",
          textAlign: "center",
        }}>
          <b>Because</b> spreading smiles and good atmosphere is our mission :D
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
        <div style={{ flex: "auto" }} />
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
        <FsOffer features={data.site.siteMetadata.features} />
        <FsSmile />
        <FsPricing />
        <FsInsta />
        <FsLogos logos={data.logos} />
        <FsContact />
        <FsFooter />
        <FsPictures pictures={data.pictures} />
      </Fade>
    </div>
  )
}

function renderLogo(logo) {
  const style = {
    height: "100px",
    width: "100px",
    minWidth: "100px",
    marginRight: "1.5em",
  }
  switch (logo) {
    case "moments":
      return <Moments style={style} />
    case "on-the-way":
      return <OnTheWay style={style} />
    case "polaroid":
      return <Polaroid style={style} />
    case "whole-year":
      return <WholeYear style={style} />
    case "witch":
      return <Witch style={style} />
  }
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
    }
`
