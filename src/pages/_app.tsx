import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LivepeerConfig, createReactClient, studioProvider } from '@livepeer/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = createReactClient({
  provider: studioProvider({ apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY }),
});

const APIURL = 'https://api-mumbai.lens.dev/';

export const apolloClient= new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <LivepeerConfig client={client}>
        <Component {...pageProps} />
      </LivepeerConfig>
    </ApolloProvider>
  )
}
