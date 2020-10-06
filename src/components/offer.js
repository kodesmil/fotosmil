import React from "react"
import Fade from "react-reveal/Fade"
import { Box, Heading, Grid, Text } from "theme-ui"
import { Svg } from "./svg"

export class Offer extends React.Component {
  render() {
    return (
      <Box sx={{
      }}>
        <Text sx={{
          mx: "auto",
          marginTop: ["2em", "4em"],
          width: ["80%", "60%", "60%", "35%"],
          fontSize: ["4"],
        }}>
          Our mission is to deliver as many smiles as possible and provide good atmoshpere.
        </Text>
        <Grid sx={{
          marginTop: ["2em", "4em"],
        }} gap="6em" columns={[1]}>
          {this.props.features.map(feature => (
            <Fade>
              <Box
                sx={{
                  mx: "auto",
                  marginTop: ["2em", "3em"],
                  width: ["80%", "60%", "60%", "35%"],
                }}
              >
                <Heading
                  sx={{
                    fontSize: ["4", "5"],
                  }}
                >
                  {feature.heading}
                </Heading>
                <Grid
                  gap="3em"
                  columns={[1, 2]}
                >
                  <Text sx={{
                    fontSize: ["2", "3"],
                    marginTop: ["1em", "1em"],
                  }}>
                    {feature.description}
                  </Text>
                  <Box
                    sx={{
                      marginTop: ["0", "10em"],
                      width: ["12em", "12em", "14em", "14em"],
                      minWidth: ["12em", "12em", "14em", "14em"],
                      marginLeft: "auto",
                    }}
                  >
                    <Svg logo={feature.logo}></Svg>
                  </Box>
                </Grid>
                
              </Box>
            </Fade>
          ))}
        </Grid>
      </Box>
    )
  }
}
