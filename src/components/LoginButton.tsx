import { useLazyQuery, useMutation } from '@apollo/client';
import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNetwork, useConnect, useDisconnect, useAccount, useSignMessage, Connector, useSwitchNetwork } from 'wagmi';
import { CHAIN_ID, ERROR_MESSAGE } from '../constants';
import onError from '../lib/onError';
import { useAppStore, useAppPersistStore } from '../store/app';
import { useChallengeLazyQuery, useAuthenticateMutation, useUserProfilesLazyQuery } from '../types/graph';
import { AuthenticateDocument, ChallengeDocument, UserProfilesDocument } from '../types/lens';
import useIsMounted from '../utils/hooks/useIsMounted';
import SwitchNetwork from './SwtichNetwork';


const LoginButton = () => {
  const setProfiles = useAppStore((state) => state.setProfiles);
  const setCurrentProfile = useAppStore((state) => state.setCurrentProfile);
  const setProfileId = useAppPersistStore((state) => state.setProfileId);

  const [loading, setLoading] = useState(false);
  const [hasConnected, setHasConnected] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);


  const { mounted } = useIsMounted();
  const { chain } = useNetwork();
  const { connectors, error, connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, connector: activeConnector } = useAccount();
  const { signMessageAsync } = useSignMessage({ onError });
  
  const [loadChallenge, { error: errorChallenge, loading: challengeLoading }] =
  useLazyQuery(ChallengeDocument, {
    fetchPolicy: "no-cache",
  });
  const [authenticate, { error: errorAuthenticate, loading: authLoading }] =
  useMutation(AuthenticateDocument);
  const [getUserProfiles, { error: errorProfiles, loading: profilesLoading }] =
  useLazyQuery(UserProfilesDocument);

  const onConnect = async (connector: Connector) => {
    try {
      const account = await connectAsync({ connector });
      if (account) {
        setHasConnected(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSign = async () => {
    let keepModal = false;
    try {
      setLoading(true);
      // Get challenge
      const challenge = await loadChallenge({
        variables: { request: { address } }
      });

      if (!challenge?.data?.challenge?.text) {
        return toast.error(ERROR_MESSAGE);
      }

      // Get signature
      const signature = await signMessageAsync({
        message: challenge?.data?.challenge?.text
      });

      // Auth user and set cookies
      const auth = await authenticate({
        variables: { request: { address, signature } }
      });
      localStorage.setItem('accessToken', auth.data?.authenticate.accessToken);
      localStorage.setItem('refreshToken', auth.data?.authenticate.refreshToken);

      // Get authed profiles
      const { data: profilesData } = await getUserProfiles({
        variables: { request: { ownedBy: [address] } },
      });

      if (profilesData?.profiles?.items?.length === 0) {
        setHasProfile(false);
        keepModal = true;
      } else {
        const profiles: any = profilesData?.profiles?.items
          ?.slice()
          ?.sort((a, b) => Number(a.id) - Number(b.id))
          ?.sort((a, b) => (a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1));
        const currentProfile = profiles[0];
        setProfiles(profiles);
        setCurrentProfile(currentProfile);
        setProfileId(currentProfile.id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return activeConnector?.id ? (
    <>
      {chain?.id === CHAIN_ID ? (
        <>
        <Button 
          onClick={handleSign}
          variant='contained' sx={{
          marginTop: 3,
          marginLeft: 3
        }}>
          Login with Lens
        </Button>
        {(errorChallenge || errorAuthenticate || errorProfiles) && (
          <div>{ERROR_MESSAGE}</div>
        )}
        </>
      ) : (
        <SwitchNetwork />
      )}
    </>
  ) : (
    <Button 
      onClick={() => onConnect(connectors[0])}
      variant='contained' sx={{
      marginTop: 3,
      marginLeft: 3
    }}>
      Login
    </Button>
  )
}

export default LoginButton