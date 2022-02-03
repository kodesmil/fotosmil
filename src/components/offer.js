import React from "react"
import Fade from "react-reveal/Fade"
import { Box, Grid, Heading, Text } from "theme-ui"
import { Svg } from "./svg"

export function Offer(props) {
  return (
    <Box sx={{}}>
      <Text
        as={"div"}
        sx={{
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
        {props.features.map((feature, i) => (
          <Fade key={i}>
            <Box
              sx={{
                mx: "auto",
                marginTop: ["2em", "3em"],
                width: ["80%", "60%", "60%", "35%"],
              }}
            >
              <Text
                as={"h3"}
                sx={{
                  fontSize: ["4", "5"],
                }}
              >
                {feature.heading}
              </Text>
              <Grid
                gap="3em"
                columns={[1, 2]}
              >
                <Text
                  as={"div"}
                  sx={{
                    fontSize: ["2", "3"],
                    marginTop: ["0.5em"],
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
                  <Svg logo={feature.logo} />
                </Box>
              </Grid>
            </Box>
          </Fade>
        ))}
      </Grid>
    </Box>
  )
}
