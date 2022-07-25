import { BigNumber, ethers } from "ethers"
import { ETH_RPC_ENDPOINT, ROYALTY_FEE_MANAGER_CONTRACT } from "data/constants"
import RoyaltyFeeManagerABI from "data/RoyaltyFeeManagerABI.json"
import { useEffect, useState } from "react"

interface RoyaltInterface {
    receipt: string,
    fee: BigNumber
}

export const requestNFTRoyalty = async (collection: string, tokenId: string): Promise<RoyaltInterface> => {

    const provider = new ethers.providers.JsonRpcProvider(ETH_RPC_ENDPOINT)
    const contract = new ethers.Contract(ROYALTY_FEE_MANAGER_CONTRACT, RoyaltyFeeManagerABI, provider)
    const result = await contract.calculateRoyaltyFeeAndGetRecipient(collection, tokenId, 10000)
    return { receipt: result[0], fee: result[1] }

}

export const useGetNFTRoyalty = (collection: any, tokenId: any) => {

    const [royalty, setRoyalty] = useState<RoyaltInterface>()

    useEffect(() => {
        requestNFTRoyalty(collection, tokenId).then(result => setRoyalty(result))
    }, [])

    return royalty

}
