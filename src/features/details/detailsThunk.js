import { theMovieDbApi } from "../../utils/axios";
import { apiKey } from "../../utils/apiHelpers.jsx";




export const getDetailsContentPageThunk=async({id,type},thunkAPI)=>{
    

    try {

        const { data }= await theMovieDbApi.get(`${type}/${id}?api_key=${apiKey}`)
        const {data:castData}=await theMovieDbApi.get(`${type}/${id}/credits?api_key=${apiKey}`)
        return {data,castData};
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data.status_message);
    }


}

