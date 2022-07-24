import { Flex, Image, Link, Stack, StackDivider, Text } from "@chakra-ui/react"
import { LRAccordion } from "components/common"
import { MdVerified } from "react-icons/md"
import { Icon } from "@chakra-ui/react"
import { abbreviateNumber, convertWeiToEther } from "utils"
import React from "react"
import { EthLogo } from "assets/logos"
import { TbBoxMultiple } from "react-icons/tb"

interface Props {
  description: string | null
  verified: boolean
  name: string | null
  contract: string
  image: string | null
  volume: string | null
  floor: string | null
  totalSupply: string | null
  countOwners: string | null
}

const CollectionDetails = ({
  description,
  verified,
  name,
  contract,
  image,
  volume,
  floor,
  totalSupply,
  countOwners,
}: Props) => {
  return (
    <LRAccordion title="Collection Details" open={false} icon={TbBoxMultiple}>
      <Stack spacing="0">
        {image && <Image src={image} w="50px" h="50px" borderRadius="0.25rem" mb="1rem" />}

        <Flex align="center">
          {name}
          {verified && <Icon as={MdVerified} color="var(--lr-color-accent-blue)" ml="0.5rem" />}
        </Flex>

        <Link href={`https://etherscan.io/address/${contract}`} color="var(--lr-font-color-100)" pb="1rem" isExternal>
          {contract?.slice(0, 5)}...
          {contract?.slice(contract.length - 4, contract.length)}
        </Link>

        <Flex justify="flex-start">
          <Stack mr="2rem" spacing="0">
            <Text fontSize="var(--lr-font-size-20)">{abbreviateNumber(totalSupply)}</Text>
            <Text fontSize="var(--lr-font-size-12)" color="var(--lr-font-color-100)">Items</Text>
          </Stack>

          <Stack mr="2rem" spacing="0">
            <Text fontSize="var(--lr-font-size-20)">{abbreviateNumber(countOwners)}</Text>
            <Text fontSize="var(--lr-font-size-12)" color="var(--lr-font-color-100)">Owners</Text>
          </Stack>

          <Stack mr="2rem" spacing="0">
            <Flex align="center">
              <EthLogo width="20px" heigth="20px" />
              <Text fontSize="var(--lr-font-size-20)">{abbreviateNumber(convertWeiToEther(volume || "0"))}</Text>
            </Flex>
            <Text fontSize="var(--lr-font-size-12)" color="var(--lr-font-color-100)">Total Vol</Text>
          </Stack>

          <Stack spacing="0">
            <Flex align="center">
              <EthLogo width="20px" heigth="20px" />
              <Text fontSize="var(--lr-font-size-20)">{convertWeiToEther(floor || "0")}</Text>
            </Flex>
            <Text fontSize="var(--lr-font-size-12)" color="var(--lr-font-color-100)">Floor</Text>
          </Stack>
        </Flex>
      </Stack>

      {description && <StackDivider borderBottom="1px solid var(--lr-border-color-alpha-100)" mt="1rem" mb="1rem" />}
      <Text color="var(--lr-font-color-100)">{description}</Text>
      
    </LRAccordion>
  )
}

export default CollectionDetails