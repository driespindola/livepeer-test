import { LivepeerConfig, createReactClient, studioProvider } from '@livepeer/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, polygonMumbai } from 'wagmi/chains';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { ALCHEMY_KEY, API_KEY, IS_MAINNET } from '../constants';
import { ReactNode } from 'react';



const client = createReactClient({
  provider: studioProvider({ apiKey: `${API_KEY}` }),
});

const APIURL = 'https://api-mumbai.lens.dev/';

export const apolloClient= new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

const { chains, provider } = configureChains(
  [IS_MAINNET ? polygon : polygonMumbai, mainnet],
  [alchemyProvider({ apiKey: ALCHEMY_KEY })]
);

const connectors = () => {
  return [
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new WalletConnectConnector({ chains, options: {} })
  ];
};

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <ApolloProvider client={apolloClient}>
        <LivepeerConfig client={client}>
            {children}
        </LivepeerConfig>
      </ApolloProvider>
    </WagmiConfig>
  )
}

export default Providers