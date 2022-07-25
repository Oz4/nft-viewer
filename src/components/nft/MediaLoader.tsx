import { Image } from '@chakra-ui/react'
import React from 'react'

interface Props {
    src: string
    contentType: string
    original?: string | null
}

const MediaLoader = ({
    src,
    contentType,
    original
}: Props) => {


    if (contentType.includes("video"))
        return <video
            src={src}
            style={{
                width: "500px",
                height: "500px",
                borderRadius: "0.5rem",
                objectFit: "contain"
            }}
            controls
        />

    else if (contentType.includes("html"))
        return <iframe
            src={original || src}
            style={{
                width: "500px",
                height: "500px",
                borderRadius: "0.5rem",
                objectFit: "contain"
            }} />

    else
        return <Image
            src={src.replace("https://static.looksnice.org/", "https://looksrare.mo.cloudinary.net/")
                + "?resource_type=image&f=auto&c=limit&w=480&q=auto:best"}
            alt={""}
            w="500px"
            h="500px"
            borderRadius="0.5rem"
            objectFit="contain"
            margin="0 auto"
        />


}

export default MediaLoader