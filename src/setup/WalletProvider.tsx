import React, { createContext, useState, useEffect } from "react"
import { ethers } from "ethers"
import { useLocalStorage } from "hooks"

export interface WalletProviderInterface {
  walletAddress: string | undefined
  setWalletAddress: React.Dispatch<React.SetStateAction<string | undefined>>
  signer: ethers.providers.JsonRpcSigner | undefined
  setSigner: React.Dispatch<React.SetStateAction<ethers.providers.JsonRpcSigner | undefined>>
  provider: ethers.providers.JsonRpcProvider | undefined
  setProvider: React.Dispatch<React.SetStateAction<ethers.providers.JsonRpcProvider | undefined>>
  isEthereumInjected: boolean
}

export const WalletProviderContext = createContext<WalletProviderInterface | null>(null)

const WalletProvider = ({ children, }: { children: React.ReactNode }) => {

  const [walletAddress, setWalletAddress] = useState<WalletProviderInterface["walletAddress"]>(undefined)
  const [signer, setSigner] = useState<WalletProviderInterface["signer"]>(undefined)
  const [provider, setProvider] = useState<WalletProviderInterface["provider"]>(undefined)
  const [isEthereumInjected, setIsEthereumInjected] = useState<boolean>(false)
  const [isForcedToDisconnect, _] = useLocalStorage("forceDisconnect")


  // try connecting on page refresh if user did not disconnect from client

  const tryConnecting = async () => {

    if (isForcedToDisconnect) return

    try {

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const walletAddress = await signer.getAddress()

      setProvider(provider)
      setSigner(signer)
      setWalletAddress(walletAddress)

    } catch (error) { }

  }


  useEffect(() => {
    if (!window.ethereum) return

    setIsEthereumInjected(Boolean(window.ethereum))

    tryConnecting()

    window.ethereum.on('accountsChanged', tryConnecting)

    return () => {

      window.ethereum.removeListener('accountsChanged', tryConnecting)

    }

  }, [])

  return (
    <WalletProviderContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        signer,
        setSigner,
        provider,
        setProvider,
        isEthereumInjected
      }}
    >
      {children}
    </WalletProviderContext.Provider>
  )
}

export default WalletProvider