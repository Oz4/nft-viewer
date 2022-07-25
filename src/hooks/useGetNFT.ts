import { useQuery } from "@tanstack/react-query"
import { sendGraphRequest } from "utils"
import { gql } from "graphql-request"

interface NFTInterface {
  tokenId: string
  name: string | null
  description: string | null
  image: {
    src: string | null
    contentType: string | null
  } | null
  animation: {
    src: string | null
    contentType: string | null
    original: string | null
  } | null
  attributes: [{
    traitType: string | null
    value: string | null
    count: string | null
    floorOrder: {
      price: string | null
    }| null
  }] | null
  owners: [{
    owner: {
      address: string | null
      name: string | null
    } | null
  }] | null
  collection: {
    name: string | null
    isVerified: boolean 
    description: string | null
    logo: {
      src: string | null
    } | null
    countOwners: string | null
    totalSupply: string | null
    volume: {
      volumeAll: string | null
    } | null
    floor: {
      floorPrice: string | null
    } | null
  }
  events: [{
    hash: string
    id: string
    type: string
    from: {
      address: string
    }
    to: {
      address: string
    }
  }] | null
  orders: [{
    hash: string
    startTime: string
    endTime: string
    strategy: string
    signer: string
    price: string
  }] | null
}

export const requestNFT = async (collection: string, tokenId: string) => {

  const query = gql`
    query($collection: Address!, $tokenId: String!) {
        token(
          collection: $collection,
          tokenId: $tokenId
        ) {
          tokenId
          name
          description
          image {
            src
            contentType
          }
          animation {
            src
            contentType
            original
          }
          owners{
            owner{
              address
              name
            }
          }
          attributes {
            traitType
            value
            count
            floorOrder {
              price
            }
          }
          collection {
            name
            isVerified
            description
            logo {
              src
            }
            countOwners
            totalSupply
            volume {
              volumeAll
            }
            floor {
              floorPrice
            }
          }
          events {
            hash
            id
            type
            from {
              address
            }
            to {
              address
            }
          }
          orders {
            hash
            startTime
            endTime
            strategy
            signer
            price
          }
        }
      }
  `

  const variables = {
    "collection": collection,
    "tokenId": tokenId
  }

  return (await sendGraphRequest(query, variables))

}

export const useGetNFT = (collection: any, tokenId: any) => {

  const fetch = async (): Promise<NFTInterface> => (await requestNFT(collection, tokenId)).token

  return useQuery(["get-nft", `${collection}/${tokenId}`], fetch)

}