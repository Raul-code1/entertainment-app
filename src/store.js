import { configureStore } from "@reduxjs/toolkit";

import { moviesAndTvSlice } from "./features/moviesAndTv/moviesAndTvSlice";
import { detailsSlice } from "./features/details/detailsSlice";
import { genresAndSearchSlice } from "./features/genresAndSearch/genresAndSearchSlice";

export const store = configureStore({
    reducer:{
        moviesAndTv:moviesAndTvSlice.reducer,
        details:detailsSlice.reducer,
        genresAndSearch:genresAndSearchSlice.reducer,
    }
})