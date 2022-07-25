import Head from 'next/head'
import React from 'react'

interface Props {
    title: string
    description?: string
    image?: string
    name?: string
    collection?: string
    url?: string
}
const MetaTags = ({
    title,
    description,
    image,
    name,
    collection,
    url
}: Props) => {
    return (
        <Head>
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta name="twitter:site" content="https://twitter.com/looksrare"></meta>
            <meta name="twitter:creator" content="@looksrare"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image:height" content="675"></meta>
            <meta property="og:site_name" content="LooksRare"></meta>
            <meta name="robots" content="index,follow"></meta>
            <meta name="googlebot" content="index,follow"></meta>
            <meta property="og:image:width" content="1200"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>{title}</title>
            <meta name="description" content={description || ""}></meta>
            <meta property="og:description" content={description || ""}></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:url" content={url || ""}></meta>
            <meta property="og:image" content={image || ""}></meta>
            <meta property="og:image:alt" content={name || ""}></meta>
        </Head>
    )
}

export default MetaTags