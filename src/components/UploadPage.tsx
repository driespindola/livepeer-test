import React, { useEffect, useState } from 'react'
import { SHOCKSTACK_API } from '../constants';
import { Box, Button, MenuItem, TextField } from '@mui/material';
import { Player } from '@livepeer/react';
import EditContent from './EditContent';

const UploadPage = () => {
    const [ data, setData ] = useState<any>([])
    const [ background, setBackground ] = useState<string>('')
    const [ title, setTitle ] = useState<string>('')
    const [ src, setSrc ] = useState<string>('')
    const [ effect, setEffect ] = useState<string>('')


    const effects = [
        {
            value: 'fadeIn',
            label: 'Fade In'
        },
        {
            value: 'fadeOut',
            label: 'Fade Out'
        },
        {
            value: 'fadeInFadeOut',
            label: 'Fade In Fade Out'
        }
    ]

    const createAsset = () => {
       const inputBody = {
        "timeline":{
            "soundtrack":{
               "src":`${src}`,
               "effect":`${effect}`
            },
            "background":`#${background}`,
            "tracks":[
               {
                  "clips":[
                     {
                        "asset": {
                           "type":"title",
                           "text":`${title}`,
                           "style":"minimal"
                        },
                        "start":0,
                        "length":5,
                        "transition":{
                           "in":"fade",
                           "out":"fade"
                        }
                     }
                  ]
               }
            ]
         },
         "output":{"format":"mp4", "resolution":"sd"
         }
        };
        const headers = {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'x-api-key':`${SHOCKSTACK_API}`
        };

        fetch('https://api.shotstack.io/edit/stage/render',
        {
        method: 'POST',
        body: JSON.stringify(inputBody),
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
            <TextField placeholder='Insert Src Url for the Soundtrack' onChange={(e) => setSrc(e.target.value)}/>
            <TextField
                select
                label="Select"
                helperText="Please select your effect"
                onChange={(e) => setEffect(e.target.value)}
            >
                {effects.map((option) => (
                
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField placeholder='Insert Title' onChange={(e) => setTitle(e.target.value)}/>
            <TextField placeholder='Insert Background Color' onChange={(e) => setBackground(e.target.value)}/>
            <Button
                sx={{
                    width: '200px',
                    margin: 'auto'
                }}
                variant='contained' 
                onClick={createAsset}
            >
                UploadPage
            </Button>
            <div>
                {data?.id && (
                    <Box
                        sx={{
                            marginTop: 5
                        }}
                    >Upload Sucessfully! Id: {data?.id}</Box>
                )}
            </div>
            <EditContent />
        </Box>
    )
}

export default UploadPage