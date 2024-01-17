import { createSlice } from "@reduxjs/toolkit";

const numbersSlice = createSlice({
    name: 'numbers',
    initialState: {},
    reducers: {
        addNumbers(state,action) {
            state['list'] = action.payload.split(',').map(i => parseInt(i));
        },
        sortNumbers(state) {
            bubbleSort(state.list);
        },
        createChart(state, action){
            state['heights'] = calculateHeights(action.payload).map(i => i);
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
                [array[i], array[i+1]] = [array[i+1], array[i]];
                sorted = false;
            }
        }
    }
    while (!sorted);
}

const calculateHeights = (arrayOfNumbers) => {
    let length = arrayOfNumbers.length;
    let maxHeight = 400;
    let barBaseHeight = maxHeight/length;
    return arrayOfNumbers.map((number, index) => (index+1)*barBaseHeight);
}

export const { addNumbers, sortNumbers, createChart } = numbersSlice.actions;

export default numbersSlice.reducer;
