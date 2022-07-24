import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react"
import { useContext } from "react"
import Blockies from "react-blockies"
import { convertWeiToEther, getAddressShortcut } from "utils"
import { EthLogo } from "assets/logos"
import { MdVerified } from "react-icons/md"
import { TbMessageDots } from "react-icons/tb"
import { WalletProviderContext, WalletProviderInterface } from 'setup/WalletProvider'

interface Props {
  collection: string
  verified: boolean
  floor: string
  name: string
  description: string
  owner: string | null
  ownerAddress: string
  ownerImage?: string
  contract: string
}

const Details = ({
  collection,
  verified,
  floor,
  name,
  description,
  owner,
  ownerAddress,
  ownerImage,
  contract,
}: Props) => {

  const { walletAddress } = useContext(WalletProviderContext) as WalletProviderInterface

  const walletIsOwner = walletAddress?.toLowerCase() === ownerAddress?.toLowerCase()

  return (
    <Flex direction="column" width="100%">
      <Flex fontSize="var(--lr-font-size-14)" align="center" fontWeight="600">

        <Flex justify="space-between" w="100%">
          <Link href={`/collection/${contract}`}>
            {collection}
            {verified && (
              <Icon
                as={MdVerified}
                color="var(--lr-color-accent-blue)"
                ml="0.25rem"
              />
            )}
          </Link>
          {walletIsOwner && <Text className="green-text-animation">You own this item</Text>}
        </Flex>

      </Flex>
      <Flex
        fontSize="var(--lr-font-size-12)"
        display="flex"
        align="center"
        color="var(--lr-font-color-100)"
      >
        <Text>Floor</Text>
        <Text ml="0.25rem">
          <EthLogo width="16px" heigth="16px" />
        </Text>
        <Text>{convertWeiToEther(floor)}</Text>
      </Flex>

      <Box mb="1rem"></Box>

      <Text fontSize="var(--lr-font-size-40)" fontWeight="bold">
        {name}
      </Text>

      <Box mb="1rem"></Box>

      <Box fontSize="var(--lr-font-size-14)" fontWeight="bold" display="flex">
        <Text color="var(--lr-font-color-100)">{description}</Text>
      </Box>
      <Box mb="1rem"></Box>

      <Flex h="50px" align="center" mb="1rem">

        {ownerImage ? (
          <img src={ownerImage} alt="" />
        ) : (
          <Blockies seed={ownerAddress} className="border-circle" />
        )}

        <Flex direction="column" ml="0.5rem" mr="0.5rem" lineHeight="1.3">
          <Text
            fontSize="var(--lr-font-size-12)"
            color="var(--lr-font-color-100)"
          >
            Owner
          </Text>
          <Text
            fontSize="var(--lr-font-size-14)"
            color="var(--lr-color-accent-green)"
            fontWeight="bold"
          >
            {
              walletIsOwner ? "You" : (owner ? owner : getAddressShortcut(ownerAddress))
            }
          </Text>
        </Flex>
        {!walletIsOwner &&
          <Flex
            w="32px"
            h="32px"
            border="1px solid var(--lr-color-accent-100)"
            borderRadius="0.25rem"
            align="center"
            justify="center"
            transition="all 0.25s ease"
            _hover={{
              bg: "var(--lr-color-accent-100)"
            }}
          >
            <Link
              isExternal
              href={`https://chat.blockscan.com/index?a=${ownerAddress}`}
              textDecoration="unset"
            >
              <Icon
                as={TbMessageDots}
                color="var(--lr-font-color-100)"
                fontSize={"1.2rem"}
                mt="0.3rem"
              />
            </Link>
          </Flex>
        }
      </Flex>
    </Flex>
  )
}

export default Details