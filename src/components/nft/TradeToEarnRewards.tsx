import React, { useState } from "react"
import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { LooksrareDesign } from "assets/logos"
import { LRModal } from "components/common"

const ModalContent = () => {
  return (
    <Box>

      <Box bg="var(--lr-color-accent-green)" h="150px" w="calc(100% + 48px)" overflow="hidden" position="relative" ml="-1.5rem">
        <Box position="absolute" transform="tranlateY(-50%)" right="-250px" top="-325px">
          <LooksrareDesign width="800px" heigth="800px" />
        </Box>
      </Box>

      <Text fontWeight="bold" mb="1rem" mt="1rem">
        You earn rewards when you buy or sell any NFT on LooksRare!
      </Text>

      <Text mb="1rem" color="var(--lr-font-color-100)">
        Rewards are distributed once daily in LooksRare&lsquo;s native token, LOOKS.
      </Text>

      <Text color="var(--lr-color-accent-green)" mb="1rem" fontWeight="bold">
        <Link target="_blank" rel="noopener noreferrer" href="https://docs.looksrare.org/about/rewards/trading-rewards">Learn More</Link>
      </Text>

    </Box>
  )
}

const TradeToEarnRewards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Flex
      align="center"
      h="90px"
      border="1px solid var(--lr-color-accent-100)"
      mt="2rem"
      p="1rem"
      borderRadius="0.5rem"
      position="relative"
      overflow="hidden"
      onClick={() => {
        setIsModalOpen((prev) => !prev)
      }}
      cursor="pointer"
      _hover={{ bg: "var(--lr-color-accent-100)" }}
      transition="all 0.25s ease"
    >

      <LRModal isOpen={isModalOpen} setOpen={setIsModalOpen} title="Earning Trading Rewards">
        <ModalContent />
      </LRModal>

      <Box zIndex="1">
        <Text fontSize="var(--lr-font-size-14)" fontWeight="bold">
          Trade to Earn Rewards
        </Text>
        <Text fontSize="var(--lr-font-size-12)">
          You earn LOOKS with every NFT you trade on LooksRare. Click to learn
          more.
        </Text>
      </Box>

      <Box position="absolute" transform="tranlateY(-50%)" right="-96px" zIndex="0">
        <LooksrareDesign width="256px" heigth="256px" />
      </Box>

    </Flex>
  )
}


export default TradeToEarnRewards