import { Button, Container, Flex, Heading, Link, Text } from "@chakra-ui/react"
import React from "react"

export default function NotFoundPage() {
  return (
    <Container maxW="1440px" h="calc(100vh - 80px)">
      <Flex
        direction="column"
        align="flex-start"
        justify="center"
        height="100%"
        backgroundImage="https://looksrare.org/images/biglooks-dark.svg"
        backgroundRepeat="no-repeat"
        backgroundPosition="right"
        backgroundSize="700px"
      >

        <Heading as="h1" color="var(--lr-font-color-100)" fontSize="var(--lr-font-size-40)" mb="2.5rem">
          Error 404 - Not Found
        </Heading>

        <Heading as="h1" color="white" fontSize="var(--lr-font-size-48)" mb="2.5rem" maxW="520px">
          Sorry... Can’t Find That Page :(
        </Heading>

        <Text mb="2.5rem" color="var(--lr-font-color-100)" maxW="520px">
          Double-check the URL for errors, try another search, look down the
          back of the couch, or try again later.
        </Text>

        <Button variant="lr-green" borderRadius="0.25rem" fontWeight="600">
          <Link href="/collections">Take Me Home</Link>
        </Button>

      </Flex>
    </Container>
  )
}
