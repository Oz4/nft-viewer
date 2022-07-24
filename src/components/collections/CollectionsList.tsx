import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"

interface Props {
  children: React.ReactNode
}
const CollectionsList = ({ children }: Props) => {
  return (
    <Box w="100%">
      <Flex
        justify="space-between"
        borderBottom="1px solid var(--lr-border-color-alpha-100)"
        color="var(--lr-font-color-100)"
        fontWeight="400"
        pb="0.5rem"
        pr="2rem"
      >
        <Text w="35%">Collections</Text>
        <Text w="15%">Floor</Text>
        <Text w="15%">24h Vol</Text>
        <Text w="15%">Total Vol</Text>
        <Text w="15%">Owners</Text>
        <Text w="5%">Items</Text>
      </Flex>
      {children}
    </Box>
  )
}

export default CollectionsList