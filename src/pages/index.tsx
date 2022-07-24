import { Container, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container maxW="1440px" h="calc(100vh - 80px)">
      <Flex justify="center" align="center" h="100%">
        <h1>LOOKSRARE INTERVIEW</h1>
      </Flex>
    </Container>
  )
}

export default Home
