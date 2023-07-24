import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import classes from './MyButton.module.css'

export default function MyButton({children, ...props}) {

    useEffect(() => { }, [])

    return (
        <Button variant="contained" {...props} className={classes.myBtn}>
            {children}
        </Button>
    )
}
