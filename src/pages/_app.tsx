import type { AppProps } from "next/app"
import Providers from "setup/Providers"

const LooksRareExchange = ({ Component, pageProps }: AppProps) => {

  return (
    <Providers pageProps={pageProps}>
      <Component {...pageProps} />
    </Providers>
  )
}

export default LooksRareExchange
