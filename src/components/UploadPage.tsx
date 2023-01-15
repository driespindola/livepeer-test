import React, { useEffect, useState } from 'react'
import { SHOCKSTACK_API } from '../constants';
import { Button } from '@mui/material';
import { Player } from '@livepeer/react';

const UploadPage = () => {
    const [ data, setData ] = useState<any>([])
    const createAsset = () => {
        const headers = {
            'Accept':'application/json',
            'x-api-key': `${SHOCKSTACK_API}`
          };
          
          fetch('https://api.shotstack.io/edit/stage/render/ceed214e-07af-4cdb-ac92-fce3873af6bb',
          {
            method: 'GET',
          
            headers: headers
          })
          .then(function(res) {
              return res.json();
          }).then(function(body) {
              setData(body?.response)
              console.log(body?.response);
          });
    }
    return (
        <>
            <Button onClick={createAsset}>UploadPage</Button>
            {data?.url && (
                <div>
                    <Player src={data?.url} />
                </div>
            )}
        </>
    )
}

export default UploadPage