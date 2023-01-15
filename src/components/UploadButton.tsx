import { Button, TextField } from '@mui/material'
import React from 'react'
import fetch from 'node-fetch'
import { SHOCKSTACK_API } from '../constants';

const UploadButton = () => {
  
  return (
    <>
    <Button variant='contained' href='/upload' sx={{
        marginTop: 3
    }}>
      Upload
    </Button>
  </>

  )
}

export default UploadButton