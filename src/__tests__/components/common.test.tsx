/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { Navbar, LRAccordion, LRModal, LoadingPage, NotFoundPage, LRTimeAgo, ConnectWallet, DisconnectWallet, MetaTags, LRInfiniteScroll, LRDrawer } from "components/common";
import { Providers } from "setup";
import { CollectionToken } from "components/collection";


const renderWithProviders = (ui: any) => {
    return render(
        <Providers pageProps>{ui}</Providers>
    )
}


test("loads and displays navbar", () => {

    render(<CollectionToken
        image={""}
        address={"1"}
        tokenId={"1"}
        name={""}
        price={""}
        offer={""}
        onClick={() => { }}
    />)

})
