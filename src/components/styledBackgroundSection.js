import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
    query {
        background: file(relativePath: { eq: "feature1.jpg" }) {
            childImageSharp {
                fluid(quality: 25, maxWidth: 1920, duotone: {
                  highlight: "#f00e2e",
                  shadow: "#192550"
                }) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.background.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          style={{
            filter: "grayscale(25%)",
          }}
          backgroundColor={`black`}
        >
        {children}
        </BackgroundImage>
      )
    }}
  />
)

export const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`