import { theMovieDbApi } from "../../utils/axios";
import { apiKey } from "../../utils/apiHelpers.jsx";


export const getAllGenresThunk=async(_,thunkAPI)=>{

    try {
        const moviesGenresRequest =theMovieDbApi.get(`/genre/movie/list?api_key=${apiKey}`)
        const tvGenresRequest =theMovieDbApi.get(`/genre/tv/list?api_key=${apiKey}`)

        const [movieResponse,tvResponse]=await Promise.all([moviesGenresRequest,tvGenresRequest])

        const { data:dataMovie }=movieResponse
        const { data:dataTv }=tvResponse

        return{ dataMovie,dataTv }

    } catch (error) {
        console.log(error);
    }

}


export const getGenreOrSearchDataThunk=async({text,path},thunkAPI)=>{

    const { page,isSearchInput }=thunkAPI.getState().genresAndSearch;

    let  url=`/discover/${path}?api_key=${apiKey}&page=${page}&with_genres=${text}`
    if (isSearchInput) {
        url=`/search/multi?api_key=${apiKey}&query=${text}&page=${page}`
        
    }

    try {
        const {data}=await theMovieDbApi.get(url);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data.status_message)
    }
}

