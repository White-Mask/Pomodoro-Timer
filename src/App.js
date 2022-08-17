import { 
  useEffect, 
  useState 
} from 'react';

import { 
  Box, 
  Typography, 
  IconButton, 
  CircularProgress 
} from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';

import { Container } from '@mui/system';
import { CustomTheme } from './components/CustomTheme';
import { Header } from './components/Header';
import { Settings } from './components/Settings';
import { Controls } from './components/Controls/Controls';


export const App = () => {
  const [worktime, setWorktime] = useState(0); //Tiempo de trabajo.
  const [breaktime, setBreaktime] = useState(0); //Tiempo de descanso.
  const [mode, setMode] = useState("work") //Modo [work - break] indica el modo actual.
  const [isActive, setIsActive] = useState(false) //Indica si esta corriendo el tiempo.
  const [time, setTime] = useState(0); //Variable aux para descontar el tiempo [work - break].
  const [progress, setProgress] = useState(100); //Porcentaje de la barra.

  const [settings, setSettings] = useState(true);

  const start = () => {
    setIsActive(true)
  }

  const pause = () => {
    setIsActive(false)
  }

  const reset = () => {
    setWorktime(0)
    setBreaktime(0)
    setTime(0)
    setIsActive(false)
    setProgress(100)
    setTimeout(setSettings(true), 5000);
  }

  const selectState = () => {
    isActive === false ? start() : pause()
  }

  const changeMode = (mode, worktime, breaktime) => {
    const nextMode = mode === "work" ? "break" : "work"
    const nextTime = mode === "work" ? breaktime : worktime

    setMode(nextMode)
    setTime(nextTime)
  }

  useEffect(() => {
    setProgress((time * 100) / (mode === "work" ? worktime : breaktime ) )
    const interval = setInterval(() => {
      if (isActive === false) {
        return;
      }
      if (time === 0) {
        return changeMode(mode, worktime, breaktime)
      }
      setTime(time - 1)
    }, 1000)

    return () => clearInterval(interval);
  }, [mode, isActive, time, worktime, breaktime])

  const timerSeconds = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  const setconfigurations = (workTime, breakTime) => {
    setSettings(false)
    setWorktime(workTime * 60)
    setTime(workTime * 60)
    setBreaktime(breakTime * 60)
    setIsActive(false)
    setMode("work")
    setProgress(100)
  }

  const editTime = () => {
    setWorktime(0)
    setBreaktime(0)
    setTime(0)
    setIsActive(false)
    setMode("work")
    setProgress(100)
    setTimeout(setSettings(true), 5000);
  }

  return (
    <CustomTheme>
      <Header/>

      <Container sx={{ display: 'flex', justifyContent: "center", height: "100vh", alignItems: "center" }}>
        <Box className='timer' sx={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ position: "relative", textAlign: "center" }}>
            <Typography 
              variant="h1" 
              sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
              {timerSeconds(time)}
            </Typography>

            <CircularProgress 
              variant="determinate"
              size={400}
              value={100}
              sx={{ color: "#283347" }} 
            />
            <CircularProgress 
              variant="determinate" 
              size={400} 
              value={progress} 
              sx={{ position: "absolute", left: 0, color: mode === "work" ? "#f54768" : "#6bbd99" }} 
            />
          </Box>

          <Box alignItems="center" justifyContent="center" sx={{ padding: "1.25rem" }}>
              
              <Controls.Button 
                disabled={worktime === 0 || breaktime === 0} 
                onClick={() => { selectState() }}
                text={isActive === false ? "Start" : "Pause"}
                sx={{ fontWeight: "bold" ,color: "#fff",margin: "1rem" }}  
              />

              <Controls.Button 
                disabled={isActive === false} 
                onClick={() => { reset() }}
                text="Reset"
                sx={{ fontWeight: "bold" ,color: "#fff", margin: "1rem" }}
              />

              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{margin: "0.5rem", color: isActive === false? "white" : "grey"}}
                onClick={ () => editTime()}
                disabled={isActive === true}
              >
                <SettingsIcon sx={{fontSize:"2rem"}}/>
              </IconButton>
          </Box>
        </Box>

        <Settings
          setOpen={setSettings}
          open={settings}
          setconfigurations={setconfigurations}
        />

      </Container>
    </CustomTheme>
  );
}