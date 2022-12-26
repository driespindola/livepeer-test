import React, { FC, useEffect, useState } from 'react'
import { Publication } from '../types/lens'
import { Player } from '@livepeer/react';
import axios from 'axios';

interface Props {
  publication: Publication
}

const Video: FC<Props> = ({ publication }) => {
  const API_TOKEN = process.env.NEXT_PUBLIC_STUDIO_API_KEY
  const ASSET_ID = '8de14fac-dbf4-4dd6-bb5b-fc2d618c2766'
  const [id, setId] = useState("")

  useEffect(() => {
    const response = {
      method: "get",
      url: `https://livepeer.studio/api/asset/${ASSET_ID}`,
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    axios(response)
      .then((result) => {
        setId(result?.data?.playbackId);
        console.log(id)
      })
      .catch((error) => {
        error = new Error();
      })
    }, [])
  

  return (
    <div>
      <Player playbackId={id} />
    </div>
  )
}

export default Video