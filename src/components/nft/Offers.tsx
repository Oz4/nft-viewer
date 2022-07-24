import { LRAccordion, LRTimeAgo } from "components/common"
import React from "react"
import { OfferInterface } from "hooks/useGetNFTBids"
import { Box, Flex, Text } from "@chakra-ui/react"
import { WETHLogo } from "assets/logos"
import { convertWeiToEther, getAddressShortcut } from "utils"
import { FaRegHandPaper } from "react-icons/fa"

interface Props {
  offers: OfferInterface[] | undefined
  floor: string
}

const Offer = ({ offer, floor }: { offer: OfferInterface, floor: string }) => {

  const floorDifferencePercentage = (parseFloat(convertWeiToEther(offer.price)) / parseFloat(convertWeiToEther(floor))) * 100 - 100

  return (
    <Flex
      borderBottom="1px solid var(--lr-border-color-alpha-100)"
      h="100px"
      direction="column"
      justify="center"
      fontSize="var(--lr-font-size-14)"
      color="var(--lr-font-color-100)"
    >
      <Flex align="center" mb="0.5rem">
        <WETHLogo width="20px" heigth="20px" />

        <Text fontSize="var(--lr-font-size-16)" color="var(--lr-font-color-main)" fontWeight="bold">
          {convertWeiToEther(offer.price)}
        </Text>

        <Text ml="0.5rem">
          {Math.abs(floorDifferencePercentage).toFixed(0)}%{" "}
          {floorDifferencePercentage < 0 ? "below" : "above"} floor
        </Text>
      </Flex>

      <Flex>
        <Text mr="0.4rem">By</Text>

        <Text color="var(--lr-font-color-200)" fontWeight="bold" mr="0.4rem">
          {getAddressShortcut(offer.signer)}
        </Text>

        <Flex>
          Expiry:
          <Box ml="0.4rem">
            <LRTimeAgo timestamp={parseInt(offer.endTime)} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

const Offers = ({ offers, floor }: Props) => {
  return (
    <LRAccordion
      title="Offers"
      open={false}
      maxW="420px"
      icon={FaRegHandPaper}
      rightTitle={
        offers?.[0]?.price && (
          <Flex justify="flex-end" align="center">
            <Text
              color="var(--lr-font-color-100)"
              fontSize="var(--lr-font-size-12)"
              mr="0.2rem"
            >
              Top Offer
            </Text>
            <WETHLogo width="16px" heigth="16px" />
            <Text color="var(--lr-font-color-main)" fontWeight="bold" mb="0.1rem">
              {convertWeiToEther(offers?.[0]?.price)}
            </Text>
          </Flex>
        )
      }
    >
      {
        offers?.length ?
          offers?.map((offer, index) => {
            return <Offer offer={offer} key={index} floor={floor} />
          })
          : "No offers found"

      }
    </LRAccordion>
  )
}

export default Offers