import { createSlice } from "@reduxjs/toolkit";

export const timerInputSlice = createSlice({
    name: 'timerInput',
    initialState: {
        value: {
            minutes: '',
            seconds: '',
        },
    },
    reducers: {
        setTimer: (state, action) => {
            state.value = action.payload
        },
        decrementSeconds: (state) => {
            state.value.seconds = state.value.seconds - 1;
            if (state.value.seconds <= 9 && state.value.seconds >= 0) {
                state.value.seconds = "0" + state.value.seconds;
            };
            if (state.value.seconds < 0) {
                state.value.seconds = state.value.seconds + 60;
            };
        },
        decrementMinutes: (state) => {
            if (state.value.seconds === 59) {
                state.value.minutes = state.value.minutes - 1;
                if (state.value.minutes <= 9 && state.value.minutes >= 0) {
                    state.value.minutes = "0" + state.value.minutes;
                };
            }
        }
    }
});

export const {setTimer, decrementSeconds, decrementMinutes} = timerInputSlice.actions;

export default timerInputSlice.reducer;