import React, { useState } from "react"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { convertWeiToEther, getNumberWithThreeDigitsComma } from "utils"
import { MdVerified } from "react-icons/md"
import { Icon } from "@chakra-ui/react"
import { EthLogo } from "assets/logos"
import { useRouter } from 'next/router'


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

const CollectionListItemPhone = ({
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

    const router = useRouter()

    const [expandDetails, setExpandDetails] = useState(false)

    return (

        <Flex
            direction="column"
            borderBottom="1px solid var(--lr-border-color-alpha-100)"
            p="1rem 2rem 1rem 1rem"
            fontSize="var(--lr-font-size-14)"
            fontWeight="600"
            color="var(--lr-font-color-main)"
            transition="all 0.25s ease"
            cursor="pointer"
            _hover={{
                bg: "var(--lr-color-accent-100)",
            }}
            onClick={() => router.push(`/collection/${address}`)}
        >

            <Flex justify="space-between" align="center">

                <Flex align="center" w="100%" minW="200px">
                    <Text minW="30px" maxW="12%" fontSize="var(--lr-font-size-16)">{index}</Text>
                    <Image src={src || ""} alt="" w="40px" h="40px" borderRadius="0.25rem" mr="0.5rem" />
                    <Text maxW="65%" className="elipsis">{name}</Text>
                    {verified && <Icon as={MdVerified} color="var(--lr-color-accent-blue)" ml="0.5rem" />}
                </Flex>

                <Flex>
                    <Accordion allowToggle >
                        <AccordionItem
                            w="40px"
                            h="40px"
                            border="none"
                            borderRadius="0.25rem"
                            transition="all 0.25s ease"
                            _hover={{ bg: "var(--lr-color-accent-200)" }}
                            display="grid"
                            placeItems="center"
                        >
                            <AccordionButton p="0" w="40px" h="40px" onClick={(e) => { e.stopPropagation(); setExpandDetails(prev => !prev) }} border="none" display="block">
                                <AccordionIcon border="none" w="25px" h="25px" />
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                </Flex>

            </Flex>

            <Stack color="var(--lr-font-color-100)" fontWeight="300" ml="2rem" mt="1rem">
                <Flex align="center">
                    <Text minW="80px">Floor</Text>
                    <Flex align="center" minW="100px">
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

                <Flex align="center">
                    <Text minW="80px">24h Vol</Text>
                    <Flex align="center" minW="100px">
                        {dailyVol && <EthLogo width="1rem" heigth="1rem" />}
                        {dailyVol ? getNumberWithThreeDigitsComma(convertWeiToEther(dailyVol)) : "-"}
                    </Flex>
                    {dailyVolChange !== null && dailyVolChange !== 0 && (
                        <Text color={dailyVolChange > 0 ? "var(--lr-color-accent-green)" : "red.400"} fontSize="var(--lr-font-size-12)">
                            {dailyVolChange > 0 ? "+" : ""}
                            {dailyVolChange.toFixed(2)}%
                        </Text>
                    )}
                </Flex>

                {expandDetails && <Flex align="center">
                    <Text minW="80px">Total Vol</Text>
                    <Flex h="100%" align="center" minW="100px">
                        {totalVol && <EthLogo width="1rem" heigth="1rem" />}
                        {totalVol ? getNumberWithThreeDigitsComma(convertWeiToEther(totalVol)) : "-"}
                    </Flex>
                    <Flex></Flex>
                </Flex>}

                {expandDetails && <Flex align="center">
                    <Text minW="80px">Owners</Text>
                    <Flex h="100%" align="center" minW="100px">
                        {owners ? getNumberWithThreeDigitsComma(owners) : "-"}
                    </Flex>
                    <Flex></Flex>
                </Flex>}

                {expandDetails && <Flex align="center">
                    <Text minW="80px">Items</Text>
                    <Flex h="100%" align="center" minW="100px">
                        {items ? getNumberWithThreeDigitsComma(items) : "-"}
                    </Flex>
                    <Flex></Flex>
                </Flex>}

            </Stack>
        </Flex>
    )
}

export default CollectionListItemPhone