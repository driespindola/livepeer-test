import { Button, TextField } from '@mui/material'
import React from 'react'
import { toast } from 'react-hot-toast';
import { useSwitchNetwork } from 'wagmi';
import { CHAIN_ID } from '../constants';

const SwitchNetwork = () => {
    const { switchNetwork } = useSwitchNetwork();
    
  return (
    <>
    <Button
        onClick={() => {
            if (switchNetwork) {
                switchNetwork(CHAIN_ID)
            } else {
                toast.error("Please change your network wallet!")
            }
        }}   
        variant='contained' sx={{
        marginTop: 3
    }}>
      Switch Network
    </Button>
  </>

  )
}

export default SwitchNetwork