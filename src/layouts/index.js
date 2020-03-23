import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

const Layout = ({ location, children }) => {
  return <div location={location}>{children}</div>
}

export default Layout
