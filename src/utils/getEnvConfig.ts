import { LENS_NETWORK, MAINNET_API_URL, SANDBOX_API_URL, STAGING_API_URL, STAGING_SANDBOX_API_URL, TESTNET_API_URL } from "../constants";

const getEnvConfig = (): {
    apiEndpoint: string;
  } => {
    switch (LENS_NETWORK) {
      case 'mainnet':
        return {
          apiEndpoint: MAINNET_API_URL,
        };
      case 'testnet':
        return {
          apiEndpoint: TESTNET_API_URL,
        };
      case 'staging':
        return {
          apiEndpoint: STAGING_API_URL,
        };
      case 'sandbox':
        return {
          apiEndpoint: SANDBOX_API_URL,
        };
      case 'staging-sandbox':
        return {
          apiEndpoint: STAGING_SANDBOX_API_URL,
        };
      default:
        return {
          apiEndpoint: MAINNET_API_URL,
        };
    }
  };
  
  export default getEnvConfig;
