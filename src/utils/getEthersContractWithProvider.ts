import { ETH_RPC_ENDPOINT } from "data/constants"
import { ethers } from "ethers"
import ERC721ABI from 'data/ERC721ABI.json'

export const getEthersERC721ContractWithProvider = (collection: string): ethers.Contract => {
    
    const provider = new ethers.providers.JsonRpcProvider(ETH_RPC_ENDPOINT)
    const contract = new ethers.Contract(collection, ERC721ABI, provider)
    return contract

}