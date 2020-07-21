import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Box, Heading } from "@chakra-ui/core"

export default () => {
  const { allWpUser: users } = useStaticQuery(graphql`
    query Users {
      allWpUser {
        nodes {
          name
          email
        }
      }
    }
  `)

  return (
    <Layout>
      <Box>
        <Heading as="h1" size="xl">
          WordPress Users
        </Heading>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </Box>
    </Layout>
  )
}
