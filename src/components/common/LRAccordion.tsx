import React from "react"
import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface Props {
  children?: React.ReactNode
  title: string
  open: boolean
  maxH?: string
  icon?: IconType
  rightTitle?: React.ReactNode
}

export default function LRAccordion({ children, title, open, maxH = "100%", icon = undefined, rightTitle = undefined }: Props) {
  return (
    <Accordion defaultIndex={[open ? 0 : -1]} allowToggle maxW="100%" mt="0.75rem">
      <AccordionItem border="1px solid var(--lr-color-accent-100)" borderRadius="0.5rem">

        <AccordionButton
          aria-expanded="false"
          bg="var(--lr-color-accent-100)"
          borderRadius="0.4rem"
          _expanded={{ borderRadius: "0.4rem 0.4rem 0 0" }}
          _hover={{ backgroundColor: "var(--lr-color-accent-100)" }}
          h="60px"
        >
          {icon && <Icon as={icon} mr="0.5rem" color="var(--lr-font-color-100)" />}
          <Box flex="1" textAlign="left" color="var(--lr-font-color-200)">{title}</Box>
          {rightTitle && <Box flex="1" textAlign="right" color="var(--lr-font-color-200)" mr="1rem">{rightTitle}</Box>}
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={6} pt={6} bg="var(--lr-color-bg)" borderRadius="0.5rem" maxH={maxH} overflow={maxH === "100%" ? undefined : "auto"}>
          {children}
        </AccordionPanel>

      </AccordionItem>
    </Accordion>
  )
}
