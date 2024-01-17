import { configureStore } from "@reduxjs/toolkit"
import numbersReducer from "../features/numbers/numbersSlice";

export const store = configureStore({
    reducer: {
        numbers: numbersReducer
    }
})