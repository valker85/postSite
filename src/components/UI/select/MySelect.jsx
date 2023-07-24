import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function MySelect({options, defaultValue, value, onChange}) {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{defaultValue}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={defaultValue}
                value={value}
                onChange={e => onChange(e.target.value)}
            >
            {
                options.map((option)=>{
                    return <MenuItem key={option.value} value={option.value}>
                        {option.name}
                    </MenuItem>
                })
            }
            </Select>
        </FormControl>
    )
}
