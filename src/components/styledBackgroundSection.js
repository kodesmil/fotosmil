import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
    query {
        background: file(relativePath: { eq: "feature1.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH,
                transformOptions: {
                  duotone: {
                    highlight: "#f00e2e",
                    shadow: "#192550"
                  }                
                }
              )
            }
        }
    }
    `}
    render={data => {
      // Set ImageData.
      const placeholderImage = data.background
      const image = getImage(placeholderImage)
      const bgImage = convertToBgImage(image)
      return (
        <BackgroundImage
          Tag="section"
          {...bgImage}
          preserveStackingContext
          alt={"Background"}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-size: auto;
  /* So we won't have the default "lightgray" background-color. */
  background-color: chartreuse;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: center 155%, center, center;
  color: aqua;
`
