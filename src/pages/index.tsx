import React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import { MetaTags } from 'components/common'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container maxW="1440px" h="calc(100vh - 80px)">

      <MetaTags
        title={`LooksRare`}
        description="LooksRare is a next generation NFT market. Buy NFTs, sell NFTs… or just HODL: Collectors, traders, and creators alike earn passive income! 👀💎"
        url={`/`}
      />

      <Flex justify="center" align="center" h="100%">
        <h1>LOOKSRARE INTERVIEW</h1>
      </Flex>
      
    </Container>
  )
}

export default Home
