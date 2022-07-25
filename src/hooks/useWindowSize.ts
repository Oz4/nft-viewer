import { useEffect, useState } from "react"

interface WindowStateInterface {
    width: number | undefined
    height: number | undefined
}

export const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState<WindowStateInterface>({
        width: undefined,
        height: undefined
    })

    const handleResize = () => {

        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })

    }

    useEffect(() => {

        if (!window) return

        window.addEventListener("resize", handleResize)

        return () => {

            window.removeEventListener("resize", handleResize)

        }

    }, [])

    return windowSize
}