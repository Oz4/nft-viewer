import { Box, Grid } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useGetCollectionTokens } from "hooks"
import { useRouter } from "next/router"
import { Landing, CollectionToken } from "components/collection"
import React from "react"

const Collection: NextPage = () => {

  const router = useRouter()
  const { collection } = router.query
  const { data: tokens } = useGetCollectionTokens(typeof collection === "string" ? collection : "")

  return (
    <Box>
      <Landing />
      <Grid templateColumns="repeat(7, 1fr)" gap="1rem">
        {tokens?.map((token) => {
          return (
            <CollectionToken image={token.image.src} address={token.collection.address} tokenId={token.tokenId} name={token.name} />
          )
        })}
      </Grid>
    </Box>
  )
}

export default Collection