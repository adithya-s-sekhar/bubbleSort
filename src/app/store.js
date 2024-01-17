import { configureStore } from "@reduxjs/toolkit"
import numbersReducer from "../features/numbers/numbersSlice";
import chartReducer from "../features/chart/chartSlice";

export const store = configureStore({
    reducer: {
        numbers: numbersReducer,
        chart: chartReducer
    }
})
