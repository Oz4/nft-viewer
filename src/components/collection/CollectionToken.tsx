import React from "react"
import { Flex, GridItem, Image, Stack, StackDivider, Text } from "@chakra-ui/react"
import Link from "next/link"
import { convertWeiToEther } from "utils"
import { EthLogo, WETHLogo } from "assets/logos"

interface Props {
  image: string
  address: string
  tokenId: string
  name: string
  price: string | undefined
  offer: string | undefined
  onClick: any
}

const CollectionToken = ({
  image,
  address,
  tokenId,
  name,
  price,
  offer,
  ...props
}: Props) => {

  return (
    <GridItem
      cursor="pointer"
      _hover={{
        bg: "var(--lr-color-accent-100)",
      }}
      transition="all 0.25s ease"
      minH="280px"
      {...props}
    >
      <Link href={`/nft/${address}/${tokenId}`}>
        <Stack
          border="1px solid var(--lr-border-color-alpha-100)"
          borderRadius="0.5rem"
          padding="1rem"
          h="100%"
        >
          
          <Image src={
            image.replace("https://static.looksnice.org/", "https://looksrare.mo.cloudinary.net/") + "?resource_type=image&f=auto&c=limit&w=280&q=auto:best"
          } alt={name || ""} minH="148px" minW="148px" objectFit="contain" />

          <Text fontSize="var(--lr-font-size-12)" color="var(--lr-font-color-200)">{name}</Text>

          <Flex fontSize="var(--lr-font-size-14)" align="center">{price ?
            <Flex align="center">
              <EthLogo width="18px" heigth="18px" />
              {convertWeiToEther(price)}
            </Flex>
            :
            "Unlisted"}
          </Flex>

          <StackDivider borderBottom="1px solid var(--lr-border-color-alpha-100)" />

          <Flex align="center" color="var(--lr-font-color-100)" fontSize="var(--lr-font-size-12)">
            Offer
            {
              offer ?
                <Flex align="center">
                  <WETHLogo width="16px" heigth="16px" />
                  {convertWeiToEther(offer)}
                </Flex>
                :
                "Not found"
            }
          </Flex>

        </Stack>
      </Link>
    </GridItem>
  )
}

export default CollectionToken