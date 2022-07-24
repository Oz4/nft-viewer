import { Button, Text } from "@chakra-ui/react"
import { useLocalStorage } from "hooks"
import { ethers } from "ethers"
import { useContext } from "react"
import { WalletProviderContext } from "setup/WalletProvider"

//? In production I would use web3-react
//? that can handle multiple providers
//? and has powerfull hooks but since its for demonstration
//? Im using ethers to connect to metamask

const ConnectWallet = () => {

    const context = useContext(WalletProviderContext)

    const [_, setIsForcedToDisconnect] = useLocalStorage("forceDisconnect")


    const connectWallet = async () => {

        if (context?.isEthereumInjected) {

            const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
            await provider.send("eth_requestAccounts", [])
            const signer = provider.getSigner()
            const walletAddress = await signer.getAddress()

            context.setProvider(provider)
            context.setSigner(signer)
            context.setWalletAddress(walletAddress)
            setIsForcedToDisconnect(false) // allow connection on refresh

        }
    }



    return (
        <Button
            variant="lr-green"
            borderRadius="4rem"
            h={["2rem", "3rem"]}
            minW="90px"
            onClick={connectWallet}
            fontSize={[
                "var(--lr-font-size-10)",
                "var(--lr-font-size-12)",
                "var(--lr-font-size-14)",
                "var(--lr-font-size-16)",
            ]}
        >
            Connect
        </Button>
    )
}

export default ConnectWallet