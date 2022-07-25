import React from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { requestNFT } from "hooks/useGetNFT"
import { Container, Flex } from "@chakra-ui/react"
import { dehydrate, QueryClient } from "@tanstack/react-query"
import { LoadingPage, NotFoundPage, MetaTags } from "components/common"
import { useGetNFT, useGetNFTBids, useGetNFTRoyalty } from "hooks"
import { Properties, TokenDetails, CollectionDetails, Offers, Activity, TradeToEarnRewards, Details, MediaLoader } from "components/nft"

const NFT: NextPage = () => {

  const router = useRouter()
  const { collection, tokenId } = router.query
  const { data: nft, isLoading } = useGetNFT(collection, tokenId)
  const { data: nftBids } = useGetNFTBids(collection, tokenId)
  const royatly = useGetNFTRoyalty(collection, tokenId)

  if (!isLoading && !nft) return <NotFoundPage></NotFoundPage>

  if (isLoading) return <LoadingPage />

  const LeftBlock = () => (

    <Flex direction={"column"} w={["100%", "100%", "45%"]}>

      <MediaLoader
        src={nft.animation?.src || nft.image?.src}
        contentType={nft.animation?.contentType || nft.image?.contentType}
        original={nft.animation?.original}
      />

      {nft.attributes && nft.attributes.length > 0 &&
        <Properties
          nftAttributes={nft.attributes}
          totalSupply={nft.collection.totalSupply}
        />}

      <TokenDetails
        tokenId={nft.tokenId}
        blockchain="Ethereum"
        tokenStandard="ERC721"
        contract={typeof collection === "string" ? collection : ""}
        creatorRoyalty={royatly?.fee.toString()}
      />

      <CollectionDetails
        contract={typeof collection === "string" ? collection : ""}
        description={nft.collection.description}
        verified={nft.collection.isVerified}
        name={nft.collection.name}
        image={nft.collection.logo?.src}
        volume={nft.collection?.volume?.volumeAll}
        floor={nft.collection?.floor?.floorPrice}
        totalSupply={nft.collection.totalSupply}
        countOwners={nft.collection.countOwners}
      />

    </Flex>

  )

  const RightBlock = () => (

    <Flex w={["100%", "100%", "55%"]} direction="column" pl={["0rem", "0rem", "2rem"]} pr={["0rem", "0rem", "2rem"]} pt={["2rem", "2rem", "0rem"]}>

      <Details
        collection={nft.collection.name}
        verified={nft.collection.isVerified}
        floor={nft.collection?.floor?.floorPrice}
        name={nft.name}
        description={nft.description}
        owner={nft.owners?.[0]?.owner?.name}
        ownerAddress={nft.owners?.[0]?.owner?.address}
        contract={typeof collection === "string" ? collection : ""}
      />

      <Offers
        offers={nftBids}
        floor={nft.collection.floor?.floorPrice}
      />

      <Activity />

      <TradeToEarnRewards />

    </Flex>

  )

  return (

    <Container maxW="1200px" p="2rem">

      <MetaTags
        title={`${nft.name ? nft.name : ""}${nft.collection.name ? (nft.name ? " - " : "") + nft.collection.name + " | " : ""} LooksRare`}
        description={nft.description || ""}
        image={nft.image?.src || ""}
        name={nft.name || ""}
        collection={nft.collection?.name || ""}
        url={`${collection}/${tokenId}`}
      />

      <Flex direction={["column", "column", "row"]} justify="space-between">
        <LeftBlock />
        <RightBlock />
      </Flex>

    </Container>

  )

}

export default NFT

export const getStaticPaths = async () => {

  return {
    paths: [],
    fallback: true,
  }

}

export const getStaticProps = async ({ params }: { params: { collection: string, tokenId: string } }) => {

  const { collection, tokenId } = params
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["get-nft", `${collection}/${tokenId}`], async () => await requestNFT(collection, tokenId))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }

}
