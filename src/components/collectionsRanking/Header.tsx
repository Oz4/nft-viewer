import React from "react"
import { Box, Text, Heading } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box>
      <Heading as="h1" fontSize={["2.5rem", "3rem", "4rem"]} mb="2.5rem">Collections</Heading>
      <Text fontSize="var(--lr-font-size-16)">The top NFT collections on LoosRare, ranked by floor price, volume and other statistics.</Text>
    </Box>
  )
}
export default Header