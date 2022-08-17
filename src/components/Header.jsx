import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar>
        <Toolbar sx={{displey: "flex", justifyContent: "space-between", width:"75rem", margin: "0 auto"}}>
            <Typography variant="h5" sx={{ padding: "1rem" }}>🍅 Pomodoro</Typography>
        </Toolbar>
    </AppBar>
  )
}