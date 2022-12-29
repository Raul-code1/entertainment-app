import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import { getAllCategoriesMoviesThunk, getAllCategoriesTvThunk, getTrendingThunk } from './moviesAndTvThunks';

const initialState = {
    isLoading: false,
    trendingMovies:[],
    trendingTv:[],
    popularMovies:[],
    upcomingMovies:[],
    topRatedMovies:[],
    popularTv:[],
    topRatedTv:[],
}


export const getTrending=createAsyncThunk('moviesAndTv/getTrending',getTrendingThunk);
export const getAllCategoriesMovies=createAsyncThunk('moviesAndTv/getAllCategoriesMovies',getAllCategoriesMoviesThunk)
export const getAllCategoriesTv=createAsyncThunk('moviesAndTv/getAllCategoriesTV',getAllCategoriesTvThunk)

export const moviesAndTvSlice = createSlice({
    name: 'moviesAndTv',
    initialState,
    reducers: {
        isLoadingChange: (state ) => {
            state.isLoading = false;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getTrending.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getTrending.fulfilled,(state,{payload})=>{
            const  {dataMovies,dataTv} =payload;
            state.trendingMovies=dataMovies;
            state.trendingTv=dataTv;
            state.isLoading=false
        })
        .addCase(getTrending.rejected,(state)=>{
            state.isLoading=false
        })
        .addCase(getAllCategoriesMovies.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getAllCategoriesMovies.fulfilled,(state,{payload})=>{
            const { popularData, upcomingData, topRatedData }=payload;
            state.popularMovies=popularData;
            state.upcomingMovies=upcomingData;
            state.topRatedMovies=topRatedData;
            state.isLoading = false;
        })
        .addCase(getAllCategoriesMovies.rejected,(state)=>{
            state.isLoading=false
        })
        .addCase(getAllCategoriesTv.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getAllCategoriesTv.fulfilled,(state,{payload})=>{
            const { popularData, topRatedData }=payload;
            state.popularTv=popularData;
            state.topRatedTv=topRatedData;
            state.isLoading = false;
        })
        .addCase(getAllCategoriesTv.rejected,(state)=>{
            state.isLoading=false
        })
    }
});



export const { isLoadingChange } = moviesAndTvSlice.actions;