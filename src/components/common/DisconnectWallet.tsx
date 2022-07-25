import React from "react"
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
        <Button
            variant="lr-green-outline"
            borderRadius="4rem"
            h={["2rem","3rem"]}
            minW="90px"
            fontSize={[
                "var(--lr-font-size-10)",
                "var(--lr-font-size-12)",
                "var(--lr-font-size-14)",
                "var(--lr-font-size-16)",
            ]}
            onClick={disconnectWallet}
        >
            Disconnect
        </Button>
    )
}

export default DisconnectWallet