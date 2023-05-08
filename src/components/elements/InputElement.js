import React from 'react'
import Input from "@mui/joy/Input";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

function InputElement({input,handleChange,index=0}) {
    function handleInput(event) {
        const { name, value } = event.target;
        handleChange(name, value,index);
    }
    return (
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {  width: input.width+"ch" },
                }}>
            <TextField
                    {...input}
                    onChange={handleInput}
                    variany={input.variant}
            />
            {input?.instruction && <div id="emailHelp" className="form-text">{input.instruction}</div>
            }
            </Box>
    )
}

export default InputElement
