import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}

export default MyApp
