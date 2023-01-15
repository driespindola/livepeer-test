import { polygon, polygonMumbai } from 'wagmi/chains';
import getEnvConfig from "./utils/getEnvConfig";

export const IPFS_GATEWAY = "https://lens.infura-ipfs.io/ipfs/";
export const API_KEY = process.env.NEXT_PUBLIC_STUDIO_API_KEY

export const LENS_NETWORK = process.env.NEXT_PUBLIC_LENS_NETWORK ?? 'mainnet';
export const MAINNET_API_URL = 'https://api.lens.dev';
export const TESTNET_API_URL = 'https://api-mumbai.lens.dev';
export const SANDBOX_API_URL = 'https://api-sandbox-mumbai.lens.dev';
export const STAGING_API_URL = 'https://staging-api-social-mumbai.lens.crtlkey.com';
export const STAGING_SANDBOX_API_URL = 'https://staging-api-social-mumbai.sandbox.crtlkey.com';


export const API_URL = getEnvConfig().apiEndpoint;
export const IS_MAINNET = API_URL === MAINNET_API_URL;

export const ALCHEMY_KEY = 'TDoKtCS15Ew1YMfdEDZUVK6l6fpQbuXM'

export const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;
export const INFURA_RPC = IS_MAINNET
  ? `https://polygon-mainnet.infura.io/v3/${INFURA_ID}`
  : `https://polygon-mumbai.infura.io/v3/${INFURA_ID}`;



export const LS_KEYS = {
    LENSTER_STORE: 'lenster.store',
    TRANSACTION_STORE: 'transaction.store',
    TIMELINE_STORE: 'timeline.store',
    MESSAGE_STORE: 'message.store',
    SELECTED_LOCALE: 'selected.locale'
  };

export const ERROR_MESSAGE = 'Oops, something went wrong'

export const POLYGON_MAINNET = {
  ...polygon,
  name: 'Polygon Mainnet',
  rpcUrls: { default: 'https://polygon-rpc.com' }
};
export const POLYGON_MUMBAI = {
  ...polygonMumbai,
  name: 'Polygon Mumbai',
  rpcUrls: { default: 'https://rpc-mumbai.maticvigil.com' }
};

export const CHAIN_ID = IS_MAINNET ? POLYGON_MAINNET.id : POLYGON_MUMBAI.id;

export const LENSPROTOCOL_HANDLE = 'lensprotocol';
export const HANDLE_SUFFIX = IS_MAINNET ? '.lens' : '.test';

export const SHOCKSTACK_API = process.env.NEXT_PUBLIC_STUDIO_SHOTSTACK_API_KEY