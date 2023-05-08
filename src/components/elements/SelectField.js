import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export default function SelectTextFields({input,handleSelectChange}) {
    const handleSelect = event => {
        console.log(event.target.value);
        handleSelectChange(event.target.value);
    };
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {  width: input.width+"ch" },
            }}
            noValidate
            autoComplete="off"
        >
                <TextField
                    select
                    {...input}
                    value={input?.value}
                    onChange={handleSelect}
                >
                    {input.options && input.options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
        </Box>
    );
}