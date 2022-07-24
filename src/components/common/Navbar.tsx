import React, { useContext } from "react"
import { Box, Flex, Text } from "@chakra-ui/react"
import { ConnectWallet, DisconnectWallet } from "components/common"
import { LRLogo } from "assets/logos"
import { WalletProviderContext, WalletProviderInterface } from "setup/WalletProvider"
import { getAddressShortcut } from "utils"
import Link from "next/link"

export default function Navbar() {

  const { walletAddress } = useContext(WalletProviderContext) as WalletProviderInterface

  return (
    <Flex
      h="5rem"
      direction={"row"}
      borderBottom={"1px solid #272d31"}
      pl="2rem"
      pr="2rem"
      align="center"
      justify="space-between"
    >

      <Box>
        <LRLogo width="130px" heigth="5rem" />
      </Box>

      <Flex align="center">
        <Link href="/collections">
          <Text mr="2rem" cursor="pointer">
            Collections
          </Text>
        </Link>
        {walletAddress ?
          <Flex align="center">
            <Text mr="1rem" color="var(--lr-color-accent-green)">{getAddressShortcut(walletAddress)}</Text>
            <DisconnectWallet />
          </Flex>
          :
          <ConnectWallet />}
      </Flex>

    </Flex>
  )
}
