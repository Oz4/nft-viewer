import React from "react"
import { GridItem, Image, Stack, StackDivider, Text } from "@chakra-ui/react"
import Link from "next/link"

interface Props {
  image: string
  address: string
  tokenId: string
  name: string
}

const CollectionToken = ({
  image,
  address,
  tokenId,
  name,
}: Props) => {
  return (
    <GridItem
      cursor="pointer"
      _hover={{
        bg: "var(--lr-color-accent-100)",
      }}
      transition="all 0.25s ease"
    >
      <Link href={`/nft/${address}/${tokenId}`}>
        <Stack
          border="1px solid var(--lr-border-color-alpha-100)"
          borderRadius="0.5rem"
          padding="1rem"
        >
          <Image src={image} alt={name || ""}/>
          <Text>{name}</Text>
          <Text>Price</Text>
          <StackDivider borderBottom="1px solid var(--lr-border-color-alpha-100)" />
          <Text>Price</Text>
        </Stack>
      </Link>
    </GridItem>
  )
}

export default CollectionToken