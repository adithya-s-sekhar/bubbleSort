import { createSlice } from "@reduxjs/toolkit";

const numbersSlice = createSlice({
    name: 'numbers',
    initialState: {},
    reducers: {
        addNumbers(state,action) {
            state['array'] = action.payload;
        },
        sortNumbers(state) {
            bubbleSort(state.array);
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

export const { addNumbers, sortNumbers } = numbersSlice.actions;

export default numbersSlice.reducer;
