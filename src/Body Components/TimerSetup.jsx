import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimer } from './../Redux Store/timerInputSlice';
import { startTimer } from './../Redux Store/startStopTimer';

export default function TimerSetup() {

  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const [error, setError] = useState('');

  const dispatch = useDispatch();
  let isTimerStarted = useSelector(state => state.startStopTimer.value);

  const timerStart = () => {

    if (!minutes && !seconds) { 
      setError('Please enter both the minutes and the seconds');
    } else if (minutes.length !== 2 && seconds.length !== 2) {
      setError('Please enter the time in the format 00, or 01 etc..');
    } else if (seconds > 59) {
      setError('Please enter seconds less then 59');
    } else if (minutes.length === 2 && seconds.length === 2){
      setError('');
      dispatch(setTimer({minutes: minutes, seconds: seconds}));
      dispatch(startTimer());
    }

  };

  return (
    <div className={`timer-setup-box ${isTimerStarted === true ? 'hide-timer-setup' : ''}`}>
        <h1>Hello,</h1>

        <h2>Please enter:</h2>

        <div className='time-inputs-box'>
            <input type="text" placeholder='00' className='minutes-input' 
            pattern='[0-9]+' min={0} max={99} maxLength={2} value={minutes} 
            onChange={e => setMinutes(e.target.value)} onFocus={e => e.target.focus({preventScroll: true})}/>

            <p className='time-colons'>:</p>

            <input type="text" placeholder='00' className='seconds-input' 
            pattern='[0-9]+' min={1} max={99} maxLength={2} value={seconds} 
            onChange={e => setSeconds(e.target.value)} onFocus={e => e.target.focus({preventScroll: true})}/>

            <p className='timer-minutes'>MINUTES</p>
            <p className='timer-seconds'>SECONDS</p>
        </div>

        <div className='error-message'>{error}</div>

        <button className={`start-button ${isTimerStarted && 'disable-button'}`} onClick={() => timerStart()}>
          START
        </button>
    </div>
  )
}
