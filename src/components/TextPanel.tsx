import { MenuItem, TextField } from "@mui/material";
import React, { Dispatch, FC } from "react";

interface Props {
    setTitle: Dispatch<string>,
    setStyle: Dispatch<string>
}

const TextPanel: FC<Props> = ({ setTitle, setStyle }) => {
    const styles = [
        {
            value: 'minimal',
            label: 'Minimal'
        },
        {
            value: 'blockbuster',
            label: 'Blockbuster'
        },
        {
            value: 'vogue',
            label: 'Vougue'
        },
        {
            value: 'sketchy',
            label: 'Sketchy'
        },
        {
            value: 'skinny',
            label: 'Skinny'
        },
        {
            value: 'chunk',
            label: 'Chunk'
        },
        {
            value: 'chunkLight',
            label: 'Chunk Light'
        },
        {
            value: 'marker',
            label: 'Marker'
        },
        {
            value: 'future',
            label: 'Future'
        },
        {
            value: 'subtitle',
            label: 'Subtitle'
        }
    ] 

    return(
        <div>
            <TextField
                sx={{
                    marginRight: 3,
                    width: '250px'
                    }}
                helperText='Insert Title'
                onChange={(e) => setTitle(e.target.value)} 
            />
            <TextField
                select
                label="Select"
                helperText="Please select your title's style"
                onChange={(e) => setStyle(e.target.value)}
            >
                {styles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}

export default TextPanel