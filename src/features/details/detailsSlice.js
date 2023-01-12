import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import { getDetailsContentPageThunk } from './detailsThunk';



const initialState={
    isLoading: false,
    movieOrTv:{},
    cast:[],
    errorMsgDetails:null
}


export const getDetailsContentPage=createAsyncThunk('details/getDetailsContentPage',getDetailsContentPageThunk)


export const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
      
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
        .addCase(getDetailsContentPage.rejected,(state,{payload})=>{
            state.errorMsgDetails=payload;
        })
    }
});


