import { createSlice } from "@reduxjs/toolkit";

export const startStopTimer = createSlice({
    name: 'startStopTimer',
    initialState: {
        value: false,
    },
    reducers: {
        startTimer: (state) => {
            state.value = true
        },
        stopTimer: (state) => {
            state.value = false
        }
    }
});

export const {startTimer, stopTimer} = startStopTimer.actions;

export default startStopTimer.reducer;