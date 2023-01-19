import React, { FC, useState } from "react";
import { Clip, InputBody } from "../types/shotstack";
import { Button, Typography } from "@mui/material";

interface Props {
    inputBody: InputBody
}

const VideoPanel: FC<Props> = ({ inputBody }) => {
    const [ showVideo, setshowVideo ] = useState<boolean>(false)

    const addVideo = () => {
        const videoAsset: Clip = {
            "asset": {
                "type": "video",
                "src": "https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/earth.mp4",
                "trim": 5
            },
            "start": 0,
            "length": 15,
            "transition": {
                "in": "fade",
                "out": "fade"
            },
            "offset": {
                "x": 0,
                "y": 0
            },
            "position": "center",
            "fit": "crop",
            "scale": 1
        }

        inputBody.timeline.tracks[0].clips.push(videoAsset);

        setshowVideo(true)
    }

    return(
        <div>
            {!showVideo ? (
                <div>
                    <Button variant='contained' onClick={addVideo}>Want to add a video?</Button>
                </div>
            ) : (
                <Typography>Video added!</Typography>
            ) }
        </div>
    )
}

export default VideoPanel