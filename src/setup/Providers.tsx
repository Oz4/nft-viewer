import React, { useRef } from "react"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query" // react-query is deprecated after v4 and migrated to @tanstack/react-query
import { theme } from "style/globalStyle"
import { Layout, WalletProvider } from "setup"

interface Props {
  children?: React.ReactNode
  pageProps: AppProps["pageProps"]
}

const Providers = ({ children, pageProps }: Props) => {
  
  const reactQueryClient = useRef(new QueryClient())

  return (
    <WalletProvider>
      <QueryClientProvider client={reactQueryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider theme={theme}>
            <Layout>

              {children}

            </Layout>
          </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
    </WalletProvider>
  )
}

export default Providers