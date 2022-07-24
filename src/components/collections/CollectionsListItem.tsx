import React from "react"
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { convertWeiToEther, getNumberWithThreeDigitsComma } from "utils"
import { MdVerified } from "react-icons/md"
import { Icon } from "@chakra-ui/react"
import { EthLogo } from "assets/logos"
import Link from "next/link"

interface Props {
  address: string | null
  src: string | null
  name: string | null
  verified: boolean | null
  floor: string | null
  dailyVol: string | null
  totalVol: string | null
  owners: string | null
  items: string | null
  floorChange: number | null
  dailyVolChange: number | null
  index: number | null
}

const CollectionsListItem = ({
  address,
  src,
  name,
  verified,
  floor,
  dailyVol,
  totalVol,
  owners,
  items,
  floorChange,
  dailyVolChange,
  index,
}: Props) => {
  return (
    <Link href={`/collection/${address}`}>
      <Flex
        justify="space-between"
        borderBottom="1px solid var(--lr-border-color-alpha-100)"
        p="1rem 2rem 1rem 0rem"
        fontSize="var(--lr-font-size-14)"
        fontWeight="600"
        color="var(--lr-font-color-main)"
        transition="all 0.25s ease"
        cursor="pointer"
        _hover={{
          bg: "var(--lr-color-accent-100)",
        }}
      >
        <Flex align="center" w="35%">
          <Text minW="7%" maxW="12%" fontSize="var(--lr-font-size-16)">{index}</Text>
          <Image src={src || ""} alt={name || ""} w="40px" h="40px" borderRadius="0.25rem" mr="0.5rem" />
          <Text maxW="65%" className="elipsis">{name}</Text>
          {verified && <Icon as={MdVerified} color="var(--lr-color-accent-blue)" ml="0.5rem" />}
        </Flex>

        <Box w="15%">
          <Flex direction="column" align="flex-start" justify="center" h="100%">
            <Flex align="center">
              {floor && <EthLogo width="1rem" heigth="1rem" />}
              {floor ? convertWeiToEther(floor) : "-"}
            </Flex>
            {floorChange !== null && floorChange !== 0 && (
              <Text color={floorChange > 0 ? "var(--lr-color-accent-green)" : "red.400"} fontSize="var(--lr-font-size-12)">
                {floorChange > 0 ? "+" : ""}
                {floorChange.toFixed(2)}%
              </Text>
            )}
          </Flex>
        </Box>

        <Box w="15%">
          <Flex direction="column" align="flex-start" justify="center" h="100%">
            <Flex align="center">
              {dailyVol && <EthLogo width="1rem" heigth="1rem" />}
              {dailyVol ? convertWeiToEther(dailyVol) : "-"}
            </Flex>
            {dailyVolChange !== null && dailyVolChange !== 0 && (
              <Text color={dailyVolChange > 0 ? "var(--lr-color-accent-green)" : "red.400"} fontSize="var(--lr-font-size-12)">
                {dailyVolChange > 0 ? "+" : ""}
                {dailyVolChange.toFixed(2)}%
              </Text>
            )}
          </Flex>
        </Box>

        <Text w="15%">
          <Flex h="100%" align="center">
            {totalVol && <EthLogo width="1rem" heigth="1rem" />}
            {totalVol ? convertWeiToEther(totalVol) : "-"}
          </Flex>
        </Text>

        <Text w="15%">
          <Flex h="100%" align="center">
            {owners ? getNumberWithThreeDigitsComma(owners) : "-"}
          </Flex>
        </Text>

        <Text w="5%">
          <Flex h="100%" align="center">
            {items ? getNumberWithThreeDigitsComma(items) : "-"}
          </Flex>
        </Text>
        
      </Flex>
    </Link>
  )
}

export default CollectionsListItem