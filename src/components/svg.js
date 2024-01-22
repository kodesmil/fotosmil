import React from "react"
import {
  Box,
} from "theme-ui"

export class Svg extends React.Component {
  render() {
    return renderLogo(this.props.logo)
  }
}

function renderLogo(logo) {
  let style = { height: "inherit", width: "inherit" }
  switch (logo) {
    case "moments":
      return <Box sx={{ fontSize: "4rem"}}>🖼️</Box>
    case "on-the-way":
      return <Box sx={{ fontSize: "4rem"}}>📸</Box>
    case "polaroid":
      return <Box sx={{ fontSize: "4rem"}}>🌎</Box>
    case "whole-year":
      return <Box sx={{ fontSize: "4rem"}}>🦸‍♂️ 🫶 🦸‍♀️</Box>
    case "witch":
      return <Box sx={{ fontSize: "4rem"}}> 🧑‍🚀 🧌 🎅 🧙‍♂️ </Box>
  }
}
