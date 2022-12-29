import { theMovieDbApi } from "../../utils/axios";
import { apiKey } from "../../utils/apiHelpers.jsx";

export const getTrendingThunk = async (_, thunkAPI) => {
  try {
    const requestMovies = theMovieDbApi.get(
      `/trending/movie/day?api_key=${apiKey}`
    );
    const requestTv = theMovieDbApi.get(`/trending/tv/day?api_key=${apiKey}`);

    const [moviesResponse, tvResponse] = await Promise.all([
      requestMovies,
      requestTv,
    ]);

    const { data: dataMovies } = moviesResponse;
    const { data: dataTv } = tvResponse;
    return { dataMovies, dataTv };
  } catch (error) {
    console.log(error.response.data.status_message);
  }
};

export const getAllCategoriesMoviesThunk = async (_, thunkAPI) => {
  try {
    const popularMoviesRequest = theMovieDbApi.get(
      `/movie/popular?api_key=${apiKey}`
    );
    const upComingMoviesRequest = theMovieDbApi.get(
      `/movie/upcoming?api_key=${apiKey}`
    );
    const topRatedMoviesRequest = theMovieDbApi.get(
      `/movie/top_rated?api_key=${apiKey}`
    );

    const [popularResponse, upcomingResponse, topRatedResponse] =
      await Promise.all([
        popularMoviesRequest,
        upComingMoviesRequest,
        topRatedMoviesRequest,
      ]);

     const { data:popularData }= popularResponse
     const { data:upcomingData }= upcomingResponse
     const { data:topRatedData }= topRatedResponse

     return { popularData, upcomingData, topRatedData }

  } catch (error) {
    console.log(error.response.data.status_message);
  }
};




//!------------------------------------------------------------------------
export const getAllCategoriesTvThunk = async (_, thunkAPI) => {
  try {
    const popularTvRequest = theMovieDbApi.get(
      `/tv/popular?api_key=${apiKey}`
    );
    const topRatedTvRequest = theMovieDbApi.get(
      `/tv/top_rated?api_key=${apiKey}`
    );

    const [popularResponse, topRatedResponse] =
      await Promise.all([
        popularTvRequest,
        topRatedTvRequest,
      ]);

     const { data:popularData }= popularResponse
     const { data:topRatedData }= topRatedResponse

     return { popularData, topRatedData }

  } catch (error) {
    console.log(error.response.data.status_message);
  }
};
