import { TextField } from "@mui/material";
import React, { Dispatch, FC } from "react";

interface Props {
    setBackground: Dispatch<string>
}

const BackgroundPanel: FC<Props> = ({setBackground}) => {
    const handleChange = (e: any) => {
        if (e.target.value.lenght <= 6) {
            setBackground(e.target.value)
        }
    }

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
                    onChange={handleChange} 
            />
        </div>
    )
}

export default BackgroundPanel