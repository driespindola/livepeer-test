import { Player } from '@livepeer/react'
import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const EditContent = () => {
    const [ id, setId ] = useState('')
    const [ data, setData ] = useState<any>([])

    const renderEditedVideo = () => {
        const headers = {
            'Accept':'application/json',
            'x-api-key':'yqDVoeDXc16rG78b47AeS7dHyzyb9Wko1cAVQgP8'
          };
          
          fetch(`https://api.shotstack.io/edit/stage/render/${id}`,
          {
            method: 'GET',
          
            headers: headers
          })
          .then(function(res) {
              return res.json();
          }).then(function(body) {
              setData(body?.response);
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
            <TextField onChange={(e) => setId(e.target.value)} />
            <Button variant='contained' onClick={renderEditedVideo}>Search</Button>
            <>
                {data?.url && (
                    <>
                        <Player src={data?.url} />
                    </>
                )}
            </>
        </Box>
    )
}

export default EditContent