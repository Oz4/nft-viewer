/**
 * @jest-environment jsdom
 */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { MediaLoader, Properties, TokenDetails, CollectionDetails, Offers, Activity, TradeToEarnRewards, Details } from "components/nft"
import { WalletProvider } from "setup";

window.scrollTo = jest.fn();
afterAll(() => { jest.clearAllMocks(); });
afterEach(() => { jest.resetAllMocks(); });

const renderWithProviderContext = (ui: any) => {
    return render(
        <WalletProvider>{ui}</WalletProvider>
    )
}

it("renders NFT Image component - video", () => {

    render(
        <MediaLoader
            src="https://looksrare.mo.cloudinary.net/0x11450058d796B02EB53e65374be59cFf65d3FE7f/3253?resource_type=image&f=auto&c=limit&w=480&q=auto:best"
            contentType="video"
        />
    )
    const role = screen.getByRole("video")
    expect(role).toBeInTheDocument()

})


it("renders NFT Image component - iframe", () => {

    render(
        <MediaLoader
            src="https://looksrare.mo.cloudinary.net/0x11450058d796B02EB53e65374be59cFf65d3FE7f/3253?resource_type=image&f=auto&c=limit&w=480&q=auto:best"
            contentType="html"
            original="https://looksrare.mo.cloudinary.net/0x11450058d796B02EB53e65374be59cFf65d3FE7f/3253?resource_type=image&f=auto&c=limit&w=480&q=auto:best"
        />
    )
    const role = screen.getByRole("iframe")
    expect(role).toBeInTheDocument()

})


it("renders NFT Image component - image", () => {

    render(
        <MediaLoader
            src="https://looksrare.mo.cloudinary.net/0x11450058d796B02EB53e65374be59cFf65d3FE7f/3253?resource_type=image&f=auto&c=limit&w=480&q=auto:best"
            contentType="image"
        />
    )
    const role = screen.getByRole("image")
    expect(role).toBeInTheDocument()
})


it("renders NFT Image component - undefined", () => {

    render(
        <MediaLoader //@ts-ignore
            src={undefined}
            contentType={undefined}
        />
    )
    const role = screen.getByRole("image")
    expect(role).toBeInTheDocument()

})


it("renders NFT Properties component - undefined", () => {

    render(<Properties nftAttributes={undefined} totalSupply={null} />)

})


it("renders NFT TokenDetails component - undefined", () => {

    render(
        <TokenDetails
            tokenId={"123"}
            blockchain="Ethereum"
            tokenStandard="ERC721"
            contract={"0x11450058d796B02EB53e65374be59cFf65d3FE7f"}
            creatorRoyalty={undefined}
        />
    )

})


it("renders NFT CollectionDetails component - undefined", () => {

    render(
        <CollectionDetails
            contract={"0x11450058d796B02EB53e65374be59cFf65d3FE7f"}
            description={""}
            verified={false}
            name={null}
            image={null}
            volume={null}
            floor={null}
            totalSupply={null}
            countOwners={null}
        />
    )

})


it("renders NFT Offers component - undefined", () => {

    render(<Offers offers={undefined} floor={null} />)

})


it("renders NFT Activity component - undefined", () => {

    render(<Activity />)

})