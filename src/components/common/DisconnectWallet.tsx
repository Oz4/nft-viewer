import { Button } from "@chakra-ui/react"
import { useLocalStorage } from "hooks"
import { useContext } from "react"
import { WalletProviderContext } from "setup/WalletProvider"

const DisconnectWallet = () => {

    const context = useContext(WalletProviderContext)
    const [_, setIsForcedToDisconnect] = useLocalStorage("forceDisconnect", false)

    const disconnectWallet = () => {

        context?.setProvider(undefined)
        context?.setSigner(undefined)
        context?.setWalletAddress(undefined)
        setIsForcedToDisconnect(true) // block connection on refresh

    }

    return (
        <Button variant="lr-green-outline" borderRadius="4rem" h="3rem" minW="90px" onClick={disconnectWallet}>
            Disconnect
        </Button>
    )
}

export default DisconnectWallet