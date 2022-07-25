# NFT Viewer

## Getting Started

Install and run the server:

Run the server on **localhost:3000** to avoid getting blocked by CORS policy

```bash
npm install
npm run dev
```

## Features I added in the past days

1. Verified Collections ranking with pagination sorted by 24h volume

2. Collection page to display tokens with infinite scroll sorted by price low to high

3. NFT page to display nft details
    - Properties
    - Token details
    - Collection details
    - Name, floor, description, image
    - Owner
    - Indication wether the connected wallet owns the nft
    - Offers (no support for pagination because I did not understant how the cursor 
    works) 
    - Support for iframes, videos, and images

4. Wallet provider

## Stack used
> ### Next JS - Chakra UI - React Query - Graph QL - Ethers

