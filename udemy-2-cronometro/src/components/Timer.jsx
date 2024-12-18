import { useState, useEffect } from 'react';
import TimerDisplay from './TimerDisplay';
import TimerControl from './TimerControl';
import LapList from './LapList';
import './Timer.css';

const Timer = () => {

    const [milliSeconds, setMilliSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [laps, setLaps] = useState([]);

    const formatTime = () => {
      const minutes = ("0" + Math.floor(milliSeconds / 60000) % 60).slice(-2);
      const seconds = ("0" + Math.floor(milliSeconds / 1000) % 60).slice(-2);
      const centiseconds = ("0" + Math.floor(milliSeconds / 10) % 60).slice(-2);

      return `${minutes}:${seconds}:${centiseconds}`
     }

     const startTimer = (interval) => {
        return setInterval(() => {
          setMilliSeconds((prevMilliSeconds) => prevMilliSeconds + 10)
        }, 10)
     };

     const stopTimer = (interval) => {
      clearInterval(interval);
      return interval
     }

     const resetTimer = () => {
      setMilliSeconds(0);
      setTimerOn(false);
      setLaps([]);
     }

     const addlap = () => {
      setLaps([...laps, formatTime()]);
     }

     useEffect(() => {
      let interval = null;

      if(timerOn) {
        interval = startTimer(interval);
      }else {
        interval = stopTimer(interval);
      }
    
      return () => stopTimer(interval);
    }, [timerOn])

    
  return (
    <div className='timer-container'>
        <TimerDisplay time={formatTime()}/>
        <TimerControl 
          timerOn={timerOn}
          onStart={() => setTimerOn(true)}
          onStop={() => setTimerOn(false)}
          onReset={resetTimer}
          onLap={addlap}
          />
        <LapList laps={laps}/>
    </div>
  )
}

export default Timer
