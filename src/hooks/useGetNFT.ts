import { useQuery } from "@tanstack/react-query"
import { sendGraphRequest } from "utils"
import { gql } from "graphql-request"

interface NFTInterface {
  tokenId: string
  name: string
  description: string
  image: {
    src: string
  }
  attributes: [{
    traitType: string
    value: string
    count: string
    floorOrder: {
      price: string
    }
  }]
  owners: [{
    owner: {
      address: string
      name: string | null
    }
  }]
  collection: {
    name: string
    isVerified: boolean
    description: string
    logo: {
      src: string
    }
    countOwners: string
    totalSupply: string
    volume: {
      volumeAll: string
    }
    floor: {
      floorPrice: string
    }
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
  }]
  orders: [{
    hash: string
    startTime: string
    endTime: string
    strategy: string
    signer: string
    price: string
  }]
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