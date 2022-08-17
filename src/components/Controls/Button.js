import React from 'react';
import {Button as MuiButton} from '@mui/material';

export const Button = (props) => {
  return (
    <MuiButton 
        variant="outlined" 
        disabled={props.disabled} 
        onClick={props.onClick}
        {...props}
    >
        {props.text}
    </MuiButton>
  )
}

export default Button;