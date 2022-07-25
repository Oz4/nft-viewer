import React, { useContext, useEffect, useState } from "react"
import { Box, Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react"
import { ConnectWallet, DisconnectWallet, LRDrawer } from "components/common"
import { LRLogo } from "assets/logos"
import { WalletProviderContext, WalletProviderInterface } from "setup/WalletProvider"
import { getAddressShortcut } from "utils"
import Link from "next/link"
import { useWindowSize } from "hooks"

const NormalNavbar = ({
  walletAddress
}: {
  walletAddress: string | undefined
}) => {

  return (
    <Flex align="center">
      <Link href="/collections">
        <Text
          mr="2rem"
          cursor="pointer"
          fontSize={[
            "var(--lr-font-size-10)",
            "var(--lr-font-size-12)",
            "var(--lr-font-size-14)",
            "var(--lr-font-size-16)",
          ]}
        >
          Collections
        </Text>
      </Link>
      {walletAddress ?
        <Flex align="center">
          <Text
            mr="1rem"
            color="var(--lr-color-accent-green)"
            fontSize={[
              "var(--lr-font-size-10)",
              "var(--lr-font-size-12)",
              "var(--lr-font-size-14)",
              "var(--lr-font-size-16)",
            ]}
          >
            {getAddressShortcut(walletAddress)}
          </Text>
          <DisconnectWallet />
        </Flex>
        :
        <ConnectWallet />}
    </Flex>
  )
}

const BurgerNavbar = ({
  walletAddress
}: {
  walletAddress: string | undefined
}) => {

  return (
    <LRDrawer
      drawerTitle={
        <LRLogo heigth="15px" />
      }
    >

      <Stack>

        <Flex h="60px" borderBottom="1px solid var(--lr-border-color-alpha-100)" align="center">
          <Link href="/collections">
            <Text
              mr="2rem"
              cursor="pointer"
              fontSize="var(--lr-font-size-16)"
            >
              Collections
            </Text>
          </Link>
        </Flex>

        {walletAddress &&
          <Flex h="60px" borderBottom="1px solid var(--lr-border-color-alpha-100)" align="center">
            <Text mr="1rem" color="var(--lr-color-accent-green)" fontSize="var(--lr-font-size-16)">
              {getAddressShortcut(walletAddress)}
            </Text>
          </Flex>
        }

        <Flex h="60px" align="center">
          {walletAddress ? <DisconnectWallet /> : <ConnectWallet />}
        </Flex>


      </Stack>

    </LRDrawer>
  )
}

export default function Navbar() {

  const { walletAddress } = useContext(WalletProviderContext) as WalletProviderInterface

  const windowSize = useWindowSize()

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

      <LRLogo />

      {
        windowSize.width && windowSize.width < 500 ?

          <BurgerNavbar walletAddress={walletAddress} />
          :
          <NormalNavbar walletAddress={walletAddress} />
      }

    </Flex>
  )
}
