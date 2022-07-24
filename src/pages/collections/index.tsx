import type { NextPage } from "next"
import { Box, Button, Container, Flex } from "@chakra-ui/react"
import { useGetCollectionsRanking } from "hooks"
import React from "react"
import { CollectionsList, CollectionsListItem, Header } from "components/collections"
import { LoadingPage } from "components/common"

const Collections: NextPage = () => {

  const {
    data: collections,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetCollectionsRanking()

  if (isFetching && !isFetchingNextPage)
    return (
      <Box>

        <Container maxW="1440px" p="2rem">
          <Header />
        </Container>

        <Box borderBottom="1px solid var(--lr-border-color-alpha-100)" />

        <LoadingPage />

      </Box>
    )

  return (
    <Box>

      <Container maxW="1440px" p="2rem">
        <Header />
      </Container>

      <Box borderBottom="1px solid var(--lr-border-color-alpha-100)" />

      <Container maxW="1440px" p="2rem">
        <CollectionsList>
          {collections?.pages.flat().map((collection, index) => {
            return (
              <CollectionsListItem
                key={collection.address}
                address={collection.address}
                src={collection.logo.src}
                name={collection.name}
                verified={collection.isVerified}
                floor={collection.floor.floorPrice}
                dailyVol={collection.volume.volume24h}
                totalVol={collection.volume.volumeAll}
                owners={collection.countOwners}
                items={collection.totalSupply}
                floorChange={collection.floor.floorChange24h}
                dailyVolChange={collection.volume.change24h}
                index={index + 1}
              />
            )
          })}
        </CollectionsList>

        <Flex align="center" justify="center" m="2rem">
          <Button
            variant="lr-green"
            bg="var(--lr-color-accent-green)"
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage}
            disabled={!hasNextPage}
          >
            Load More
          </Button>
        </Flex>
      </Container>

    </Box>
  )
}

export default Collections