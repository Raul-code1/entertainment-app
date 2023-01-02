import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import { getAllGenresThunk, getGenreOrSearchDataThunk } from './genresAndSearchThunk';



const initialState={
    isLoading: false,
    movieGenres: [],
    tvGenres: [],
    isSearchInput:localStorage.getItem('isSearchInput') ,
    genreOrSearchInputData:{},
    page:1,
    totalPages:0,
    errorMessage:null,
    maxPages:500
};


export const getAllGenres=createAsyncThunk('genresAndSearch/getAllGenres',getAllGenresThunk)
export const getGenreOrSearchData=createAsyncThunk('genresAndSearch/getGenreOrSearchData',getGenreOrSearchDataThunk)

export const genresAndSearchSlice = createSlice({
    name: 'genresAndSearch',
    initialState,
    reducers: {
        isInputFilterTrue: (state ) => {
            state.isSearchInput = 'true';
            localStorage.setItem('isSearchInput', state.isSearchInput);
        },
        isInputFilterFalse: (state ) => {
            state.isSearchInput = 'false';
            localStorage.setItem('isSearchInput', state.isSearchInput);
        },
        handlePage:(state,{payload})=>{
            state.page=payload
        }
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



export const { isInputFilterTrue,isInputFilterFalse,handlePage } = genresAndSearchSlice.actions;