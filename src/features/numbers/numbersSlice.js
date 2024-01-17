import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const numbersSlice = createSlice({
    name: 'numbers',
    initialState: {},
    reducers: {
        addNumbers(state,action) {
            state['list'] = action.payload.split(',').map(i => parseInt(i));
        },
        sortNumbers(state) {
            bubbleSort(state.list);
        }
    }
})

const bubbleSort = (array) => {
    let length = array.length;
    let sorted;
    do {
        sorted = true;
        for( let i = 0; i < length; i++){
            if(array[i] > array[i+1]) {
                console.log(`swapped ${array[i]} and ${array[i+1]}`);
                [array[i], array[i+1]] = [array[i+1], array[i]];
                sorted = false;
            }
        }
    }
    while (!sorted);
}

export const { addNumbers, sortNumbers, createChart } = numbersSlice.actions;

export default numbersSlice.reducer;
