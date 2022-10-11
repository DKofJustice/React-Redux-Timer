import { configureStore } from "@reduxjs/toolkit";
import timerReducer from './timerInputSlice';
import timerStartStop from './startStopTimer';

export default configureStore({
    reducer: {
        timerData: timerReducer,
        startStopTimer: timerStartStop,
    },
})