import { Player, useCreateStream } from '@livepeer/react'
import { Box, TextField, Button, Card } from '@mui/material'
import axios from 'axios'
import React, { useMemo, useState } from 'react'
import { API_KEY } from '../constants'

const StreamContent = () => {
  const [streamName, setStreamName] = useState<string>('')
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamName ? { name: streamName } : null)

  const isLoading = useMemo(() => status === 'loading', [status])

  console.log(stream)

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
      {stream?.playbackId && (
        <>
        <Card sx={{marginBottom: 5}}>
          For the stream to work please input the following keys in your OBS player:
          <ul>
            <li><b>RTMP Ingest Url:</b> {stream?.rtmpIngestUrl}</li>
            <li><b>Stream Key:</b> {stream?.streamKey}</li>
          </ul>
          Don't have OBS? <a href="https://obsproject.com/">Download here.</a>
        </Card>
        
        <Player
          title={stream?.name}
          playbackId={stream?.playbackId}
          autoPlay
          muted 
        />
        </>
      )}
      {!stream && (
        <>
          <TextField
            type="text"
            placeholder="Stream name"
            onChange={(e) => setStreamName(e.target.value)}
            sx={{
            marginBottom: 3
            }} 
          />
          <Button
            variant="contained"
            onClick={() => {
              createStream?.()
            } }
          >
            Create Stream
          </Button>
        </>
      )}
    </Box>
  )
}

export default StreamContent