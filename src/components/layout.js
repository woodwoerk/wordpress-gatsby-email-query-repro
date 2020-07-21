import React from "react"
import { Box, Grid } from "@chakra-ui/core"
import Header from "./header"

import "../assets/style.css"

const Layout = ({ children }) => (
  <div>
    <Grid style={{ margin: `0 auto` }} maxW="90%" w={900} alignSelf="center">
      <Box mb={10} mt={20}>
        <Header />
      </Box>

      <Box mb={100}>{children}</Box>
    </Grid>
  </div>
)

export default Layout
