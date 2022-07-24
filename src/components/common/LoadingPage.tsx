import { Container, Flex, Spinner } from "@chakra-ui/react"
import React from "react"

const LoadingPage = () => {
  return (
    <Container maxW="1200px" h="100vh">
      <Flex w="100%" h="100%" justify="center" align="center">
        <Spinner
          color="var(--lr-color-accent-green)"
          w="100px"
          h="100px"
          speed="0.8s"
        />
      </Flex>
    </Container>
  )
}

export default LoadingPage