import { Box, Container, Grid } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useGetCollectionTokens } from "hooks"
import { useRouter } from "next/router"
import { Landing, CollectionToken } from "components/collection"
import React from "react"
import { LoadingPage, Meta } from "components/common"

const Collection: NextPage = () => {

  const router = useRouter()
  const { collection } = router.query
  const { data: tokens, isLoading } = useGetCollectionTokens(typeof collection === "string" ? collection : "")

  console.log(tokens);

  if (isLoading) return <LoadingPage />
  return (
    <Box>
      <Meta
        title={`${tokens?.[0].collection.name} | LooksRare`}
        description="LooksRare is a next generation NFT market. Buy NFTs, sell NFTs… or just HODL: Collectors, traders, and creators alike earn passive income! 👀💎"
        url={`collection/${tokens?.[0].collection.address}`}
        name={tokens?.[0].collection.name}
        collection={tokens?.[0].collection.name}
      />
      <Landing />
      <Container maxW="1440px" mt="2rem">
        <Grid templateColumns="repeat(auto-fit, minmax(180px, 1fr))" gap="1rem">
          {tokens?.map((token) => {
            return (
              <CollectionToken
                key={token.tokenId}
                image={token.image.src}
                address={token.collection.address}
                tokenId={token.tokenId}
                name={token.name}
                price={token.ask?.price}
                offer={token.bids?.[0]?.price}
              />
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default Collection