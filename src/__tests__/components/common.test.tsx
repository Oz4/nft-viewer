/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from '@testing-library/react'
import { Navbar, LRAccordion, LRModal, LoadingPage, NotFoundPage, LRTimeAgo, ConnectWallet, DisconnectWallet, MetaTags, LRInfiniteScroll, LRDrawer } from "components/common";
import { WalletProvider } from "setup";

//* test cases for undefined states only

const renderWithProviderContext = (ui: any) => {
    return render(
        <WalletProvider>{ui}</WalletProvider>
    )
}


test("displays navbar", () => {

    renderWithProviderContext(<Navbar />)

})


test("dispalys LRAccordion", () => {

    render(<LRAccordion title="test" open={false} />)
    render(<LRAccordion title="test" open={false} icon={undefined} />)
    render(<LRAccordion title="test" open={false} icon={undefined} maxH={undefined} />)
    render(<LRAccordion title="test" open={false} icon={undefined} maxH={undefined} rightTitle={undefined} />)
    render(<LRAccordion title="test" open={false} icon={undefined} maxH={undefined} rightTitle={undefined} />)
    render(<LRAccordion title="test" open={false} icon={undefined} maxH={undefined} rightTitle={undefined}>Test</LRAccordion>)

})


test("dispalys LRModal", () => {

    //@ts-ignore
    render(<LRModal isOpen={false} setOpen={undefined} title={undefined} />)
    render(<LRModal isOpen={false} setOpen={() => { }} title={""} />)

})


test("dispalys LoadingPage", () => {

    render(<LoadingPage />)

})


test("dispalys NotFoundPage", () => {

    render(<NotFoundPage />)

})


test("dispalys LRAccordion", () => {

    //@ts-ignore
    render(<LRTimeAgo timestamp={undefined} />)
    render(<LRTimeAgo timestamp={0} />)
    render(<LRTimeAgo timestamp={165548654} />)

})


test("dispalys ConnectWallet", () => {

    render(<ConnectWallet />)

})


test("dispalys DisconnectWallet", () => {

    render(<DisconnectWallet />)

})


test("dispalys MetaTags", () => {

    //@ts-ignore
    render(<MetaTags title={undefined} />)
    render(<MetaTags title="test" />)

})


test("dispalys LRInfiniteScroll", () => {

    //@ts-ignore
    render(<LRInfiniteScroll items={undefined} fetchNext={undefined} hasNextPage={undefined} />)
    render(<LRInfiniteScroll items={[]} fetchNext={() => { }} hasNextPage={true}>test</LRInfiniteScroll>)

})


test("dispalys LRDrawer", () => {

    //@ts-ignore
    render(<LRDrawer />)
    render(<LRDrawer>test</LRDrawer>)

})

