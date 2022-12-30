import { Player, useCreateStream } from '@livepeer/react'
import { Box, TextField, Button } from '@mui/material'
import React, { useMemo, useState } from 'react'

const StreamContent = () => {
  const [streamName, setStreamName] = useState<string>('')
  const {
    mutate: createStream,
    data: stream,
    status
  } = useCreateStream(streamName ? { name: streamName } : null)

  const isLoading = useMemo(() => status === 'loading', [status])

  return (
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: 'auto',
          textAlign: 'center',
          padding: 3,
          width: '300px'
        }}
    >
        <TextField
          type="text"
          placeholder="Stream name"
          onChange={(e) => setStreamName(e.target.value)}
          sx={{
            marginBottom: 3
          }}
        />

        {stream?.playbackId && (
          <Player 
            title={stream?.name}
            playbackId={stream?.playbackId}
          />
        )}

        {!stream && (
          <Button
          variant="contained"
          onClick={() => {
            createStream?.()
          }}
          disabled={isLoading || !createStream}
          >
            Create Stream
          </Button>
        )}
    </Box>
  )
}

export default StreamContent