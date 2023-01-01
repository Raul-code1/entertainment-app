import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import { getDetailsContentPageThunk } from './detailsThunk';



const initialState={
    isLoading: false,
    movieOrTv:{},
    path:localStorage.getItem('path') || '',
    cast:[],
}


export const getDetailsContentPage=createAsyncThunk('details/getDetailsContentPage',getDetailsContentPageThunk)


export const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        gettingPath: (state,{payload} ) => {
            state.path = payload;
            localStorage.setItem('path',state.path)
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getDetailsContentPage.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getDetailsContentPage.fulfilled,(state,{payload})=>{
            const {data,castData}=payload;
            state.isLoading = false;
            state.movieOrTv=data;
            state.cast=castData;
            
        })
    }
});



export const { gettingPath } = detailsSlice.actions;