import { Player } from '@livepeer/react'
import { Box, Button, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { SHOCKSTACK_API } from '../constants'

interface Props {
    id: string
    edited: boolean
}

const EditContent: FC<Props> = ({ id, edited }) => {
    const [url, setUrl] = useState<any>()

    const upload = () => {
        const headers = {
            'Accept':'application/json',
            'x-api-key':`${SHOCKSTACK_API}`
          };
          
          fetch(`https://api.shotstack.io/edit/stage/render/${id}`,
          {
            method: 'GET',
          
            headers: headers
          })
          .then(function(res) {
              return res.json();
          }).then(function(body) {
              console.log(body?.response?.url);
              setUrl(body?.response?.url);
          });
    }

    return (
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',
            textAlign: 'center',
            padding: 3,
            width: '600px'
        }}
        >
            Upload Sucessfully! Click to preview your video!
            {url && (
                <>
                    <Player src={url} />
                </> 
            )}
            {!url ? (
                <Button variant='contained' onClick={upload}>Preview</Button>
            ) : (
                <Button variant='contained'>Upload</Button>
            )}
        </Box>
    )
}

export default EditContent