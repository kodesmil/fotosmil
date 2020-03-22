import React, { Children } from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import {
  NavLink,
  Flex,
  Box,
  Heading,
  Container,
  Text,
  Grid,
  Styled,
} from "theme-ui"
import Img from "gatsby-image"
import Moments from "../../content/assets/svg/Moments.svg"
import Witch from "../../content/assets/svg/Witch.svg"
import WholeYear from "../../content/assets/svg/WholeYear.svg"
import Polaroid from "../../content/assets/svg/Polaroid.svg"
import OnTheWay from "../../content/assets/svg/OnTheWay.svg"

class HeaderSection extends React.Component {
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
          borderBottom: `2px orange solid`,
        }}
        as="nav"
      >
        {this.props.children}
      </Flex>
    )
  }
}
class BodySection extends React.Component {
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
          borderBottom: `2px orange solid`,
        }}
        as="nav"
      >
        {this.props.children}
      </Flex>
    )
  }
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const features = data.site.siteMetadata.features
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <HeaderSection>
        <NavLink as="h1" href="#!">
          FotoSmil Trondheim
        </NavLink>
        <div style={{ flex: "auto" }}></div>
        <NavLink href="#!" p={2}>
          Contact
        </NavLink>
        <NavLink href="#!" p={2}>
          Blog
        </NavLink>
      </HeaderSection>
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
          imgStyle={{
            maxHeight: "800px",
            filter: "grayscale(25%)",
          }}
          fluid={data.background.childImageSharp.fluid}
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
            marginLeft: ["2%", "5%"],
            marginRight: ["2%", "5%"],
            marginTop: ["3em"],
          }}
          gap="3em"
          columns={[1, 2, 2, 2, 3]}
        >
          {features.map(feature => (
            <Box
              sx={{
                padding: "1.5em",
                borderRadius: "1em",
                background: "white",
                boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
              }}
            >
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
            </Box>
          ))}
        </Grid>
      </Box>
      <Box sx={{ marginTop: "5em" }}>
        <Styled.h1 style={{ textAlign: "center" }}> 🥳</Styled.h1>
        <Styled.p style={{ marginTop: "8px", textAlign: "center" }}>
          We made <b>4000+</b> people smiling!
        </Styled.p>
      </Box>
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
      <SEO title="All posts" />
      <Grid
        gap="2em"
        columns={[2, 5]}
        sx={{
          marginTop: "5em",
          alignItems: "center",
          alignContent: "center",
          background: "white",
          padding: "2em",
          borderRadius: "1em",
          boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
          marginLeft: ["5%", "10%", "15%"],
          marginRight: ["5%", "10%", "15%"],
        }}
      >
        {data.logos.nodes.map(logo => (
          <Box>
            <Img
              imgStyle={{
                filter: "grayscale(25%)",
              }}
              fluid={logo.childImageSharp.fluid}
              alt=""
            />
          </Box>
        ))}
      </Grid>
      {/*       {posts.map(({ node }) => {
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
      })} */}
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
            FotoSmil Trondheim © {new Date().getFullYear()} Made with ♥ in Trondheim
          </Styled.p>
        </footer>
      </Box>
      <Grid
        gap="0"
        columns={[2, 3, 3,6]}
        sx={{
          background: "white",
        }}
      >
        {data.parties.nodes.map(logo => (
          <Img
            style={{
              height: "200px",
            }}
            imgStyle={{
              filter: "grayscale(25%)",
              objectFit: "cover",
              height: "200px",
            }}
            fluid={logo.childImageSharp.fluid}
            alt=""
          />
        ))}
      </Grid>
    </div>
  )
}

function renderLogo(logo) {
  const style = {
    height: "80px",
    width: "80px",
    minWidth: "80px",
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
    parties: allFile(filter: { relativePath: { regex: "/parties//" } }) {
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
