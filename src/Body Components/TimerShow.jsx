import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementSeconds, decrementMinutes } from './../Redux Store/timerInputSlice';
import { stopTimer } from '../Redux Store/startStopTimer';

export default function TimerShow() {

  let minutes = useSelector(state => state.timerData.value.minutes);
  let seconds = useSelector(state => state.timerData.value.seconds);

  const isTimerStart = useSelector(state => state.startStopTimer.value);

  const [isPaused, setIsPaused] = useState(false);
  const [pauseText, setPauseText] = useState('PAUSE');

  const dispatch = useDispatch();


  const pauseTimer = () => {
  
    if (isPaused === false) {
      setIsPaused(true);
      setPauseText('RESUME');
    } else {
      setIsPaused(false);
      setPauseText('PAUSE');
    }
  };




  const startTimer = () => {
    if (isPaused === false) {
      dispatch(decrementSeconds());
      dispatch(decrementMinutes());
    };
  };

  let timerInterval;

  if (isTimerStart === true) {
    timerInterval = setTimeout(startTimer, 1000);
  }

  if (minutes === '00' && seconds === "00") {
    clearTimeout(timerInterval);
    dispatch(stopTimer());
  }

  const resetTimer = () => {
    clearTimeout(timerInterval);
    dispatch(stopTimer());
    setIsPaused(false);
    setPauseText('PAUSE');
  };

  return (
    <div className={`timer-show-box ${isTimerStart === true ? 'display-timer-watch' : ''}`}>
      <div className='timer-watch'>
        <h1>{minutes}:{seconds}</h1>
      </div>

      <button className='start-pause-btn' onClick={() => pauseTimer()}>{pauseText}</button>
      <button className='reset-btn' onClick={() => resetTimer()}>RESET</button>
    </div>
  )
}
