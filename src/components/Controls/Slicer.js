import React from 'react'
import Slider from '@mui/material/Slider';

/*
const marks = [
    {
      value: 5,
      label: '5 Minutes',
    },
    {
      value: 20,
      label: '20 Minutes',
    },
    {
      value: 40,
      label: '40 Minutes',
    },
    {
      value: 60,
      label: '60 Minutes',
    },
];
*/
  
const valuetext = (value) => {
  return `${value} Minutes`;
}

const Slicer = (props) => {
  return (
    <Slider
        aria-label="Always visible"
        getAriaValueText={valuetext}
        step={5}
        valueLabelDisplay="auto"
        //marks={marks}
        
        {...props}
    />
  )
}

export default Slicer