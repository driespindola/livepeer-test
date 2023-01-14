import { Box } from '@mui/material'
import React from 'react'
import { useAppStore } from '../store/app';
import LoginButton from './LoginButton';

const LoginContent = () => {
    const currentProfile = useAppStore((state) => state.currentProfile);

    console.log(currentProfile)

  return (
    <>
    {currentProfile ? (
        <>
            {currentProfile?.handle}
        </>
    ) : (
        <LoginButton />
    )}
    </>
  )
}

export default LoginContent