import React, {useState} from 'react'

import { 
    Dialog, 
    DialogActions, 
    DialogContent, 
    Divider, 
    Typography 
} from '@mui/material';

import {Controls} from './Controls/Controls';

export const Settings = (props) => {
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);

    const handleSubmit = (e) => {
        console.log(workTime+"  "+breakTime)
        props.setconfigurations(workTime, breakTime)
    }

    const handleSetWorkTime = (event, newValue) => {
        setWorkTime(newValue)
    }

    const handleSetBreakTime = (event, newValue) => {
        setBreakTime(newValue)
    }

    return (
        <Dialog open={props.open}>
            <DialogContent sx={{padding: "2rem"}}>
                <Typography 
                    variant="h5" 
                    sx={{
                        fontSize: "24px",
                        color: "black",
                        fontWeight: "bold"
                    }}
                >
                    Configuración
                </Typography>

                <Typography 
                    variant="subtitle2"
                    sx={{
                        fontSize: "16px",
                        color: "black",
                    }}
                >
                    Define el tiempo de trabajo y descanso
                </Typography>
                    
                <Divider sx={{marginBottom: "2rem"}}/>                  

                <Typography color="black" gutterBottom>Tiempo de trabajo</Typography>
                <Controls.Slicer
                    value={workTime}
                    min={5}
                    max={60}
                    onChange={handleSetWorkTime}
                    sx={{color: "red"}}
                />

                <Typography color="black" gutterBottom>Tiempo de descanso</Typography>
                <Controls.Slicer 
                    value={breakTime}
                    min={5}
                    max={60}
                    onChange={handleSetBreakTime}
                    sx={{color: "green"}}
                />
            </DialogContent>

            <DialogActions sx={{padding: " 0 1rem 1rem 0"}}>
                <Controls.Button
                    onClick={(e) => handleSubmit(e)}
                    text="Aceptar"
                    sx={{
                        color: "#000"
                    }}
                />
            </DialogActions>
        </Dialog>
    )
}