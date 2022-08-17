import React from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
      primary: {
        main: "#8689AC"
        /*main: "#283347"*/
      },
      secondary: {
        main: "#8689AC"
      },
      background: {
        default: '#2F3148'
        /*default: "#586c91"*/
      },
      text: {
        primary: '#EDE8DF',
        /*primary: "#f4f7fc"*/
      },
    },
  });

export const CustomTheme = (props) => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
            {props.children}
    </ThemeProvider>
  )
}