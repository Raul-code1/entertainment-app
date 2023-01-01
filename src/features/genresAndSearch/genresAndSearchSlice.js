import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import { getAllGenresThunk, getGenreOrSearchDataThunk } from './genresAndSearchThunk';

const initialState={
    isLoading: false,
    movieGenres: [],
    tvGenres: [],
    isSearchInput:false,
    genreOrSearchInputData:{},
    page:1,
    totalPages:1,
    errorMessage:null,
};


export const getAllGenres=createAsyncThunk('genresAndSearch/getAllGenres',getAllGenresThunk)
export const getGenreOrSearchData=createAsyncThunk('genresAndSearch/getGenreOrSearchData',getGenreOrSearchDataThunk)

export const genresAndSearchSlice = createSlice({
    name: 'genresAndSearch',
    initialState,
    reducers: {
        isInputFilterTrue: (state ) => {
            state.isSearchInput = true;
        },
        isInputFilterFalse: (state ) => {
            state.isSearchInput = false;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllGenres.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getAllGenres.fulfilled,(state,{payload})=>{
            const { dataMovie:{genres:movieGenresRes},dataTv:{genres:tvGenresRes} }=payload;
            state.isLoading=false;
            state.movieGenres=movieGenresRes
            state.tvGenres=tvGenresRes;
        })
        .addCase(getAllGenres.rejected,(state)=>{
            state.isLoading=false;
        })
        .addCase(getGenreOrSearchData.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getGenreOrSearchData.fulfilled,(state,{payload})=>{
            console.log(payload);
            const{total_pages}=payload;
            state.isLoading=false;
            state.genreOrSearchInputData=payload;
            state.totalPages=total_pages;

        })
        .addCase(getGenreOrSearchData.rejected,(state,{payload})=>{
            state.isLoading=false;
            state.errorMessage=payload;
        })
    }
});



export const { isInputFilterTrue,isInputFilterFalse } = genresAndSearchSlice.actions;