import React, { useState } from "react"
import { Box, Container,Progress } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useGetCollectionTokens } from "hooks"
import { useRouter } from "next/router"
import { Landing, CollectionToken } from "components/collection"
import { LoadingPage, MetaTags, LRInfiniteScroll } from "components/common"

const Collection: NextPage = () => {

  const router = useRouter()
  const { collection } = router.query
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetCollectionTokens(typeof collection === "string" ? collection : "")
  const [tokenClicked, setTokenClicked] = useState(false)
  const tokens = data?.pages.flat()

  if (isLoading) return <LoadingPage />

  return (
    <Box position="relative">

      <MetaTags
        title={`${tokens?.[0].collection.name} | LooksRare`}
        description="LooksRare is a next generation NFT market. Buy NFTs, sell NFTs… or just HODL: Collectors, traders, and creators alike earn passive income! 👀💎"
        url={`collection/${tokens?.[0].collection.address}`}
        name={tokens?.[0].collection.name}
        collection={tokens?.[0].collection.name}
      />

      {tokenClicked && <Progress size='xs' isIndeterminate colorScheme="green" position="fixed" top={0} left={0} h="3px" w="100%" />}

      <Landing />

      <Container maxW="1440px" mt="2rem">
        <LRInfiniteScroll
          items={tokens}
          fetchNext={fetchNextPage}
          hasNextPage={hasNextPage}
        >
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
                onClick={() => setTokenClicked(true)}
              />
            )
          })}
        </LRInfiniteScroll>
      </Container>
      
    </Box>
  )
}

export default Collection