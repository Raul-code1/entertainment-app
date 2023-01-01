import { theMovieDbApi } from "../../utils/axios";
import { apiKey } from "../../utils/apiHelpers.jsx";




export const getDetailsContentPageThunk=async(id,thunkAPI)=>{
    
    const { path }=thunkAPI.getState().details

    try {

        const { data }= await theMovieDbApi.get(`${path}/${id}?api_key=${apiKey}`)
        const {data:castData}=await theMovieDbApi.get(`${path}/${id}/credits?api_key=${apiKey}`)
        return {data,castData};
    } catch (error) {
        console.log(error);
    }


}

