import { useQuery } from "@tanstack/react-query"
import { sendGraphRequest } from "utils"
import { gql } from "graphql-request"

export interface OfferInterface {
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
  params: string
  signature: string
  token: {
    tokenId: string
  }
  hash: string

}

export const requestBids = async (collection: string, tokenId: string) => {

  const query = gql`
    
    query TokenBids(
        $collection: Address!
        $tokenId: String!
        $pagination: PaginationInput
        $filter: OrderFilterInput
        $sort: OrderSortInput
      ) {
        token(collection: $collection, tokenId: $tokenId) {
          bids(pagination: $pagination, filter: $filter, sort: $sort) {
            ...OrderFragment
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
    "collection": collection,
    "tokenId": tokenId,
    "pagination": {
      "first": 10,
    },
    "sort": "PRICE_DESC"
  }

  return (await sendGraphRequest(query, variables))

}

export const useGetNFTBids = (collection: any, tokenId: any) => {

  const fetch = async (): Promise<OfferInterface[]> => (await requestBids(collection, tokenId)).token.bids

  return useQuery(["get-nft-bids", `${collection}/${tokenId}`], fetch)

}

