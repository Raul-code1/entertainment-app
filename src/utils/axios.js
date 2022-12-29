import axios from "axios";


export const theMovieDbApi=axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

