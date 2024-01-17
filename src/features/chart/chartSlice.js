import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
    name: 'chart',
    initialState: {},
    reducers: {
        createChart(state, action){
            state['heights'] = calculateHeights(action.payload).map(i => i);
        }
    }
})

const calculateHeights = (arrayOfNumbers) => {
    let length = arrayOfNumbers.length;
    let maxHeight = 400;
    let barBaseHeight = maxHeight/length;
    return arrayOfNumbers.map((number, index) => (index+1)*barBaseHeight);
}

export const { createChart } = chartSlice.actions;

export default chartSlice.reducer;
