import { configureStore } from "@reduxjs/toolkit";

import { moviesAndTvSlice } from "./features/moviesAndTv/moviesAndTvSlice";

export const store = configureStore({
    reducer:{
        moviesAndTv:moviesAndTvSlice.reducer,
    }
})