import React, { FC, useEffect, useMemo, useState } from 'react'
import { Publication } from '../types/lens'
import { Player } from '@livepeer/react';
import axios from 'axios';
import { sanitizeIpfsUrl } from '../utils/sanitizeIpfsUrl';
import { parseArweaveTxId, parseCid } from 'livepeer/media';
import { Box, Card } from '@mui/material';

interface Props {
  publication: Publication
}

const Video: FC<Props> = ({ publication }) => {
  const API_TOKEN = process.env.NEXT_PUBLIC_STUDIO_API_KEY
  const [id, setId] = useState("")
  const url = publication?.metadata?.media[0]?.original?.url

  const idParsed = useMemo(() => parseCid(url) ?? parseArweaveTxId(url), [url]);

  console.log(idParsed)

  // useEffect(() => {
  //  const response = {
  //    method: "get",
  //    url: "https://livepeer.studio/api/asset",
  //    headers: {
  //      Authorization: `Bearer ${API_TOKEN}`,
  //    },
  //  };

  //  axios(response)
  //    .then((result) => {
  //      setId(result?.data);
  //      console.log(id)
  //    })
  //    .catch((error) => {
  //      error = new Error();
  //    })
  //  }, [])
  

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'colunm',
      justifyContent: 'center',
      margin: 'auto',
      width: '300px'
    }}>
     Video 
    </Box>
  )
}

export default Video