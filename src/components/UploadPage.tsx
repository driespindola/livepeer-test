import React, { useCallback, useEffect, useState } from 'react'
import { SHOCKSTACK_API } from '../constants';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { Player } from '@livepeer/react';
import EditContent from './EditContent';
import { Clip, InputBody } from '../types/shotstack';
import { ExpandMore } from '@mui/icons-material'
import BackgroundPanel from './BackgroundPanel';
import TextPanel from './TextPanel';
import VideoPanel from './VideoPanel';

const UploadPage = () => {
    const [ id, setId ] = useState<any>([])
    const [ background, setBackground ] = useState<string>('')
    const [ title, setTitle ] = useState<string>('')
    const [ src, setSrc ] = useState<string>('')
    const [ effect, setEffect ] = useState<string>('')
    const [ style, setStyle ] = useState<string>('')
    const [ transitionIn, setTransitionIn ] = useState<string>('')
    const [ transitionOut, setTransitionOut ] = useState<string>('')
    const [ edited, setEdited ] = useState<boolean>(false)
    const [ expanded, setExpanded ] = useState<string | false>('panel1');

    const handleChange = useCallback((panel: string, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }, [])

    const inputBody: InputBody = {
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
                           "style":`${style}`
                        },
                        "start":0,
                        "length":5,
                        "transition":{
                           "in":`${transitionIn}`,
                           "out":`${transitionOut}`
                        }
                     }
                  ]
               }
            ]
         },
         "output":{"format":"mp4", "resolution":"sd"
         }
    };

    const menuItems = [
        { 
            id: 'panel1', 
            text: 'Background',
            component: <BackgroundPanel setBackground={setBackground} /> 
        },
        { 
            id: 'panel2', 
            text: 'Text',
            component: <TextPanel setTitle={setTitle} setStyle={setStyle} /> 
        },
        { 
            id: 'panel3', 
            text: 'Videos',
            component: <VideoPanel inputBody={inputBody as InputBody} />
        }
    ]

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

    const transitions = [
        {
            value: 'fade',
            label: 'Fade'
        },
        {
            value: 'reveal',
            label: 'Reveal'
        },
        {
            value: 'wipeLeft',
            label: 'Wipe Left'
        },
        {
            value: 'wipeRight',
            label: 'Wipe Right'
        },
        {
            value: 'slideLeft',
            label: 'Slide Left'
        },
        {
            value: 'slideRight',
            label: 'Slide Right'
        },
        {
            value: 'slideUp',
            label: 'Slide Up'
        },
        {
            value: 'slideDown',
            label: 'Slide Down'
        },
        {
            value: 'carouselLeft',
            label: 'Carousel Left'
        },
        {
            value: 'carouselRight',
            label: 'Carousel Right'
        },
        {
            value: 'carouselUp',
            label: 'Carousel Up'
        },
        {
            value: 'carouselDown',
            label: 'Carousel Down'
        },
        {
            value: 'shuffleTopRight',
            label: 'Shuffle Top Right'
        },
        {
            value: 'shuffleRightTop',
            label: 'Shuffle Right Top'
        },
        {
            value: 'shuffleRightBottom',
            label: 'Shuffle Right Bottom'
        },
        {
            value: 'shuffleBottomRight',
            label: 'Shuffle Bottom Right'
        },
        {
            value: 'shuffleBottomLeft',
            label: 'Shuffle Bottom Left'
        },
        {
            value: 'shuffleLeftBottom',
            label: 'Shuffle Left Bottom'
        },
        {
            value: 'shuffleLeftTop',
            label: 'Shuffle Left Top'
        },
        {
            value: 'shuffleTopLeft',
            label: 'Shuffle Top Left'
        },
        {
            value: 'zoom',
            label: 'Zoom'
        }
    ] 

    const createAsset = () => {
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
            setId(body?.response?.id);
            console.log(body?.response)
        });
        setEdited(true)
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
            <div>
                {menuItems.map(item => (
                    <Accordion expanded={expanded === item.id} onChange={() => handleChange(item.id, !expanded)} key={item.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls={`${item.id}-content`}
                            id={`${item.id}-header`}
                        >
                            <Typography>
                                {item.text}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.component}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>

            {!edited ? (
                <>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        margin: 3
                    }}>
                        <TextField
                            sx={{
                                marginRight: 3,
                                width: '250px'
                            }}
                            helperText='Insert Src Url for the Soundtrack'
                            onChange={(e) => setSrc(e.target.value)} 
                        />
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
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        margin: 3,
                    }}>
                    </Box>
                            <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            margin: 3
                            }}>
                        <TextField
                            sx={{
                                width: '200px',
                                marginRight: 3
                            }}
                            select
                            label="Select"
                            helperText="In"
                            onChange={(e) => setTransitionIn(e.target.value)}
                        >
                            {transitions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            sx={{
                                width: '200px'
                            }}
                            select
                            label="Select"
                            helperText="Out"
                            onChange={(e) => setTransitionOut(e.target.value)}
                        >
                            {transitions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                        <Button
                            sx={{
                                width: '200px',
                                margin: 'auto'
                            }}
                            variant='contained'
                            onClick={createAsset}
                        >
                            Create your Video
                        </Button>
                </>
            ) : (
                <div>
                        <Box
                            sx={{
                                marginTop: 5
                            }}
                        >
                            <EditContent id={id} edited={edited} />
                        </Box>
                </div>
            )}
        </Box>
    )
}

export default UploadPage