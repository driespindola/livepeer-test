import { TextField } from "@mui/material";
import React, { Dispatch, FC } from "react";

interface Props {
    setBackground: Dispatch<string>
}

const BackgroundPanel: FC<Props> = ({setBackground}) => {

    return(
        <div>
            <TextField
                sx={{
                    marginBottom: 3,
                    width: '250px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
                    helperText='Insert Background Color'
                    onChange={(e) => {setBackground(e.target.value)}} 
            />
        </div>
    )
}

export default BackgroundPanel