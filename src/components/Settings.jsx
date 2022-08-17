import React, {useState} from 'react'

import { Dialog, DialogActions, DialogContent, Divider, Typography } from '@mui/material';

import Button from '@mui/material/Button';

import {Controls} from './Controls/Controls';


/*    
const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "25px",
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        margin: theme.spacing(2),
    },
    subtitle: {
        fontSize: "20px",
        textAlign: "center"
    },
    button: {
        color: 'white',
        margin: theme.spacing(2),
        backgroundColor: '#7408A7',
        '&:hover': {
            backgroundColor: '#5F169B ',
        },
    },
    loading: {
        margin: theme.spacing(2),
    },
    text: {
        textAlign: "center"
    },
}));

*/

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
        <Dialog open={props.open} aria-labelledby="form-dialog-title" >
            <DialogContent sx={{padding: "2rem"}}>
                <Typography variant="h5" component="div" color="black">Configuración</Typography>
                <Typography variant="subtitle2" component="div" color="black">Define el tiempo de trabajo y descanso</Typography>
                    
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
                <Button
                    variant="outlined"
                    onClick={(e) => handleSubmit(e)}
                >
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    )
}