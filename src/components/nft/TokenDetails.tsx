import React from "react"
import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { LRAccordion } from "components/common"
import { BiInfoSquare } from "react-icons/bi"

interface Props {
  tokenId: string
  blockchain: string
  tokenStandard: string
  contract: string
  creatorRoyalty: string
}

interface LineFlexProps {
  children: React.ReactNode
  title: string
  mb?: string
}

const TokenDetails = ({ tokenId, blockchain, tokenStandard, contract, creatorRoyalty }: Props) => {
  return (
    <LRAccordion title="Token Details" open={false} icon={BiInfoSquare}>

      <LineFlex title="Token ID">
        <Text>{tokenId}</Text>
      </LineFlex>

      <LineFlex title="Blockchain">
        <Text>{blockchain}</Text>
      </LineFlex>

      <LineFlex title="Token Standard">
        <Text>{tokenStandard}</Text>
      </LineFlex>

      <Box borderBottom="1px solid var(--lr-color-accent-100)" mb="1rem" />

      <LineFlex title="Contract">
        <Text color="var(--lr-color-accent-green)">
          <Link
            href={`https://etherscan.io/address/${contract}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            0x...{contract?.slice(contract.length - 4, contract.length)}
          </Link>
        </Text>
      </LineFlex>

      <LineFlex title="Creator Royalties" mb="0">
        <Text>{(parseFloat(creatorRoyalty) / 100).toFixed(2)}%</Text>
      </LineFlex>

    </LRAccordion>
  )
}

const LineFlex = ({ children, title, mb = "1rem" }: LineFlexProps) => {
  return (
    <Flex justify={"space-between"} align="center" mb={mb}>
      <Text color="var(--lr-font-color-100)">{title}</Text>
      {children}
    </Flex>
  )
}

export default TokenDetails