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
  Input,
} from "theme-ui"
import Img from "gatsby-image"
import Moments from "../../content/assets/svg/Moments.svg"
import Witch from "../../content/assets/svg/Witch.svg"
import WholeYear from "../../content/assets/svg/WholeYear.svg"
import Polaroid from "../../content/assets/svg/Polaroid.svg"
import OnTheWay from "../../content/assets/svg/OnTheWay.svg"

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
          position: `fixed`,
          background: `white`,
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
      <Box
        sx={{
          position: "relative",
          maxHeight: "800px",
          boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
        }}
        as="section"
      >
        <Img
          sx={{}}
          style={{
            minHeight: "500px",
          }}
          imgStyle={{
            minHeight: "500px",
            maxHeight: "800px",
            filter: "grayscale(25%)",
          }}
          fluid={this.props.background.childImageSharp.fluid}
          alt=""
        />
        <Box
          sx={{
            position: "absolute",
            marginLeft: ["5%", "10%", "15%"],
            marginRight: ["5%", "10%", "15%"],
            bottom: ["7%", "10%", "20%"],
          }}
        >
          <Styled.h1
            style={{
              color: "white",
              textShadow: " 2px 2px 10px black",
            }}
          >
            Proffessional Photo Booth
          </Styled.h1>
          <Styled.h3
            style={{
              color: "white",
              textShadow: " 2px 2px 10px black",
            }}
          >
            Fun booster and ice-breaker for events, parties, weddings
          </Styled.h3>
        </Box>
      </Box>
    )
  }
}
class FsOffer extends React.Component {
  render() {
    return (
      <Box
        sx={{
          marginTop: "4em",
          marginLeft: ["5%", "10%", "15%"],
          marginRight: ["5%", "10%", "15%"],
        }}
      >
        <Styled.h3
          style={{
            textAlign: "center",
          }}
        >
          What's in the offer?
        </Styled.h3>
        <Grid
          sx={{
            marginLeft: ["2%"],
            marginRight: ["2%"],
            marginTop: ["3em"],
          }}
          gap="3em"
          columns={[1, 1, 2, 3]}
        >
          {this.props.features.map(feature => (
            <Box
              sx={{
                padding: "1.5em",
                borderRadius: "1em",
                background: "white",
                boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
              }}
            >
              <Fade>
                <Flex
                  sx={{
                    marginBottom: "1em",
                    alignItems: "center",
                  }}
                >
                  {renderLogo(feature.logo)}
                  <Styled.h4>{feature.heading}</Styled.h4>
                </Flex>

                <Styled.p>{feature.description}</Styled.p>
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
      <Box sx={{ marginTop: "5em" }}>
        <Styled.h1 style={{ textAlign: "center" }}> 🥳</Styled.h1>
        <Styled.p style={{ marginTop: "8px", textAlign: "center" }}>
          We made <b>4000+</b> people smiling!
        </Styled.p>
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
          paddingTop: "5em",
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
        <Styled.h3 style={{ textAlign: "center" }}>
          Would you like to learn more?
        </Styled.h3>
        <Styled.p style={{ textAlign: "center", marginTop: "8px" }}>
          Leave us your contact
        </Styled.p>
        <Box sx={{ width: ["90%", "75%", "50%"], mx: "auto" }} mt={3}>
          <Input placeholder="Name" name="name" mb={3} />
          <Input placeholder="Email" type="email" name="password" mb={3} />
        </Box>
        <Button type="submit" sx={{ mx: "auto", display: "block" }}>
          Submit
        </Button>

        <Styled.p style={{ textAlign: "center", marginTop: "24px" }}>
          or use
        </Styled.p>
        <Styled.a
          style={{
            textAlign: "center",
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "16px",
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
            marginTop: "16px",
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
          marginTop: "5em",
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
          marginTop: "5em",
          marginBottom: "1em",
          marginLeft: ["5%", "10%", "15%"],
          marginRight: ["5%", "10%", "15%"],
        }}
      >
        <footer>
          <Styled.p style={{ marginTop: "8px", textAlign: "center" }}>
            Made with ♥ in Trondheim by{" "}
            <Styled.a href="https://kodesmil.com">KodeSmil</Styled.a>
          </Styled.p>
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
          marginTop: "5em",
          marginLeft: ["5%", "10%", "15%"],
          marginRight: ["5%", "10%", "15%"],
        }}
      >
        <Styled.h3
          style={{
            textAlign: "center",
          }}
        >
          How much does it cost?
        </Styled.h3>
        <Styled.p style={{ marginTop: "8px", textAlign: "center" }}>
          Only 3000 NOK/h for first 2 hours and 1000 NOK/h next ones
        </Styled.p>
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
class FsPosts extends React.Component {
  render() {
    return this.props.posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <Box
          sx={{
            marginLeft: ["5%", "10%", "15%"],
            marginRight: ["5%", "10%", "15%"],
          }}
        >
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        </Box>
      )
    })
  }
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <div>
      <SEO title={siteTitle} />
      <FsTobBar>
        <NavLink as="h1" href="#!">
          FotoSmil Trondheim
        </NavLink>
        <div style={{ flex: "auto" }}></div>
        <NavLink href="#contact" p={2}>
          Contact
        </NavLink>
        <NavLink href="#contact" p={2}>
          Blog
        </NavLink>
      </FsTobBar>
      <FsHeader background={data.background} />
      <Fade>
        <FsOffer features={data.site.siteMetadata.features} />
        <FsSmile />
        <FsPricing />
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
    background: file(relativePath: { eq: "feature.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
