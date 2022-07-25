import React from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { requestNFT } from "hooks/useGetNFT"
import { Container, Flex, Image } from "@chakra-ui/react"
import { LoadingPage, NotFoundPage, MetaTags } from "components/common"
import { dehydrate, QueryClient } from "@tanstack/react-query"
import { useGetNFT, useGetNFTBids, useGetNFTRoyalty } from "hooks"
import { Properties, TokenDetails, CollectionDetails, Offers, Activity, TradeToEarnRewards, Details } from "components/nft"

const NFT: NextPage = () => {

  const router = useRouter()
  const { collection, tokenId } = router.query
  const { data: nft, isLoading } = useGetNFT(collection, tokenId)
  const { data: nftBids } = useGetNFTBids(collection, tokenId)
  const { data: royatly } = useGetNFTRoyalty(collection, tokenId)

  if (!isLoading && !nft) return <NotFoundPage></NotFoundPage>

  if (isLoading) return <LoadingPage />

  return (
    <Container maxW="1200px" p="2rem">

      <MetaTags
        title={`${nft?.name ? nft?.name : ""}${nft.collection.name ? (nft?.name ? " - " : "") + nft.collection.name + " | " : ""} LooksRare`}
        description={nft.description}
        image={nft?.image.src}
        name={nft?.name}
        collection={nft.collection.name}
        url={`${collection}/${tokenId}`}
      />

      <Flex direction={["column", "column", "row"]} justify="space-between">

        <Flex direction={"column"} w={["100%", "100%", "45%"]}>

          <Image src={
            nft?.image.src?.replace("https://static.looksnice.org/", "https://looksrare.mo.cloudinary.net/") + "?resource_type=image&f=auto&c=limit&w=480&q=auto:best"
          } alt={nft?.name || ""} w="500px" h="500px" borderRadius="0.5rem" objectFit="contain" margin="0 auto" />

          {nft.attributes.length > 0 &&
            <Properties nftAttributes={nft.attributes} totalSupply={nft.collection.totalSupply} />}

          <TokenDetails
            tokenId={nft?.tokenId || ""}
            blockchain="Ethereum"
            tokenStandard="ERC721"
            contract={typeof collection === "string" ? collection : ""}
            creatorRoyalty={royatly?.fee.toString() || "0"}
          />

          <CollectionDetails
            contract={typeof collection === "string" ? collection : ""}
            description={nft.collection.description || ""}
            verified={nft.collection.isVerified || false}
            name={nft.collection.name || ""}
            image={nft.collection.logo?.src || ""}
            volume={nft.collection.volume.volumeAll}
            floor={nft.collection.floor.floorPrice}
            totalSupply={nft.collection.totalSupply}
            countOwners={nft.collection.countOwners}
          />

        </Flex>

        <Flex w={["100%", "100%", "55%"]} direction="column" pl={["0rem", "0rem", "2rem"]} pr={["0rem", "0rem", "2rem"]} pt={["2rem", "2rem", "0rem"]}>

          <Details
            collection={nft.collection.name || ""}
            verified={nft.collection.isVerified || false}
            floor={nft.collection.floor.floorPrice || "0"}
            name={nft?.name || ""}
            description={nft.description || ""}
            owner={nft.owners[0].owner.name}
            ownerAddress={nft.owners[0].owner.address}
            contract={typeof collection === "string" ? collection : ""}
          />

          <Offers offers={nftBids} floor={nft.collection.floor.floorPrice} />

          <Activity />

          <TradeToEarnRewards />

        </Flex>

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
