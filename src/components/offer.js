import React from "react"
import { Box, Grid, NavLink, Text } from "theme-ui"
import { Svg } from "./svg"

export function Offer(props) {
  return (
    <Box id={"offer"} anchor="offer">
      <Text
        as={"div"}
        sx={{
          mx: "auto",
          paddingTop: ["2em", "3em"],
          textAlign: "center",
          width: ["80%", "60%", "60%", "35%"],
          fontSize: ["4"],
        }}
      >
        Begynn med å booke her
      </Text>
      <Text
        as={"div"}
        sx={{
          mx: "auto",
          paddingTop: ["0.5em"],
          textAlign: "center",
          width: ["80%", "60%", "60%", "35%"],
          fontSize: ["4"],
        }}
      >
        <NavLink
          sx={{
            textAlign: "center",
            color: "black",
          }}
          href="#contact"
        >
          send oss en melding!
        </NavLink>
      </Text>
      <Text
        as={"h2"}
        sx={{
          mx: "auto",
          marginTop: ["1em", "2em"],
          width: ["80%", "60%", "60%", "35%"],
          textAlign: "center",
          fontSize: ["4", "5"],
        }}
      >
        Du får i prisen
      </Text>
      <Grid
        sx={{
          marginTop: ["1em", "1em"],
        }}
        gap="3em"
        columns={[1]}
      >
        {props.features.map((feature, i) => (
          <Box
            key={i}
            sx={{
              mx: "auto",
              marginTop: ["1em", "2em"],
              textAlign: "center",
              width: ["80%", "60%", "60%", "30%"],
            }}
          >
            <Text
              as={"h3"}
              sx={{
                fontSize: ["3", "4"],
              }}
            >
              {feature.heading}
            </Text>
            <Text
              as={"div"}
              sx={{
                marginTop: ["0.5em", "0.5em"],
                marginBottom: ["1em", "1.5em"],
                fontSize: ["2", "3"],
              }}
            >
              {feature.description}
            </Text>
            <Svg logo={feature.logo} />
          </Box>
        ))}
      </Grid>
    </Box>
  )
}
