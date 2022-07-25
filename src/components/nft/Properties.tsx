import React from "react"
import { LRAccordion } from "components/common"
import { Box, Flex, Text } from "@chakra-ui/react"
import { convertWeiToEther } from "utils"
import { EthLogo } from "assets/logos"
import { AiOutlineUnorderedList } from "react-icons/ai"

interface Props {
  nftAttributes: [
    {
      traitType: string | null
      value: string | null
      count: string | null
      floorOrder: {
        price: string | null
      } | null
    }
  ] | undefined
  totalSupply: string | null
}

const Property = ({
  traitType,
  value,
  count,
  floorPrice,
  totalSupply
}: {
  traitType: string
  value: string
  count: string
  floorPrice: string | null | undefined
  totalSupply: string
}) => {

  return (
    <Box
      padding={"0.5rem"}
      border="none"
      minH={20}
      w={142}
      p="0.5rem"
      bg="var(--lr-color-accent-100)"
      borderRadius="0.25rem"
    >
      <Flex direction="column" justify="space-between" h="100%">

        <Flex direction="column">
          <Text
            className="trait-type"
            color="var(--lr-color-accent-green)"
            fontSize="var(--lr-font-size-11)"
          >
            {traitType}
          </Text>
          <Text className="trait-value" fontSize="var(--lr-font-size-12)">
            {value}
          </Text>
        </Flex>

        <Flex justify="space-between">
          <Text
            fontSize="var(--lr-font-size-11)"
            color="var(--lr-font-color-100)"
          >
            {count} ({(parseFloat(count) / parseFloat(totalSupply) * 100).toFixed(2)}%)
          </Text>
          <Flex fontSize="var(--lr-font-size-11)" align="center">
            <EthLogo width="16px" heigth="16px" />
            {floorPrice ? convertWeiToEther(floorPrice) : "-"}
          </Flex>
        </Flex>

      </Flex>
    </Box>
  )
  
}

/**
 * @description displays properties in the NFT page
 */
const Properties = ({ nftAttributes, totalSupply }: Props) => {

  return (
    <LRAccordion title="Properties" open={true} icon={AiOutlineUnorderedList}>
      <Flex flexWrap="wrap" gap={6} rowGap={2} justify={"flex-start"}>
        {nftAttributes?.map((attribute, index) => {
          return (
            <Property
              key={index}
              traitType={attribute.traitType || ""}
              value={attribute.value || ""}
              count={attribute.count || "0"}
              floorPrice={attribute.floorOrder?.price}
              totalSupply={totalSupply || "0"}
            />
          )
        })}
      </Flex>
    </LRAccordion>
  )

}

export default Properties