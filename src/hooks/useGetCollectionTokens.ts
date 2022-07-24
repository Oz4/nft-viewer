import { useInfiniteQuery } from "@tanstack/react-query"
import { sendGraphRequest } from "utils"
import { gql } from "graphql-request"

interface NFTTokensInterface {

  id: string
  tokenId: string
  isRefreshed: false
  isHidden: boolean | null
  image: {
    src: string
    contentType: string
  }
  name: string
  lastOrder: {
    price: string
    currency: string
  }
  collection: {
    name: string
    address: string
    type: string
    isVerified: boolean
    isHidden: boolean | null
    points: any
    totalSupply: string
    volume: {
      volume24h: string
    }
    floor: {
      floorPriceOS: string
      floorPrice: string
      floorChange24h: number
      floorChange7d: number
      floorChange30d: number
    }
  }
  owners: []
  ask: {
    isOrderAsk: true
    signer: string
    collection: {
      address: string
    }
    price: string
    amount: string
    strategy: string
    currency: string
    nonce: string
    startTime: string
    endTime: string
    minPercentageToAsk: string
    params: string | null
    signature: string
    token: {
      tokenId: string
    }
    hash: string
  }
  bids: [
    {
      isOrderAsk: boolean
      signer: string
      collection: {
        address: string
      }
      price: string
      amount: string
      strategy: string
      currency: string
      nonce: string
      startTime: string
      endTime: string
      minPercentageToAsk: string
      params: string | null
      signature: string
      token: string | null
      hash: string
    }
  ]

}

export const requestCollectionTokens = async (cursor = { index: undefined }, collection = "") => {

  const query = gql`
        
    query GetTokens(
        $filter: TokenFilterInput
        $pagination: PaginationInput
        $sort: TokenSortInput
        $ownerFilter: TokenOwnerInput
        $bidsFilter: OrderFilterInput
        $search: SearchFilterInput
      ) {
        tokens(filter: $filter, pagination: $pagination, sort: $sort, search: $search) {
          ...TokensFragment
          owners(filter: $ownerFilter) {
            owner {
              ...BaseOwnerFragment
            }
            balance
          }
          ask {
            ...OrderFragment
          }
          bids(filter: $bidsFilter, sort: PRICE_DESC, pagination: { first: 1 }) {
            ...OrderFragment
          }
        }
      }
      
    fragment BaseOwnerFragment on User {
      address
      name
    }
  
      
    fragment TokensFragment on Token {
      id
      tokenId
      isRefreshed
      isHidden
      image {
        src
        contentType
      }
      name
      lastOrder {
        price
        currency
      }
      collection {
        name
        address
        type
        isVerified
        isHidden
        points
        totalSupply
        volume {
          volume24h
        }
        floor {
          floorPriceOS
          floorPrice
          floorChange24h
          floorChange7d
          floorChange30d
        }
      }
    }
  
      
    fragment OrderFragment on Order {
      isOrderAsk
      signer
      collection {
        address
      }
      price
      amount
      strategy
      currency
      nonce
      startTime
      endTime
      minPercentageToAsk
      params
      signature
      token {
        tokenId
      }
      hash
    }
  
    
  `

  const variables = {
    "filter": {
      "collection": collection
    },
    "pagination": {
      "first": 16,
      "cursor": cursor.index || ""
    },
    "sort": "PRICE_ASC",
    "bidsFilter": {
      "status": "VALID"
    }
  }

  return (await sendGraphRequest(query, variables)).tokens as NFTTokensInterface[]



}

export const useGetCollectionTokens = (collection: string) => {

  const fetch = ({ pageParam }: any) => requestCollectionTokens(pageParam, collection)

  return useInfiniteQuery(["get-nft", collection], fetch, {
    getNextPageParam: (lastPage) => {
      if(lastPage.length >= 16) return {
        index: lastPage[lastPage.length - 1].id
      }
    }
  })
}