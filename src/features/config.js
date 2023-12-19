import axios from 'axios';

export const apiKey= "5436c11ec3f3706d8f349dbc68c7265e"
export const POSTER_URL_SMALL = "https://image.tmdb.org/t/p/w500"
export const IMG_URL_SMALL = "https://image.tmdb.org/t/p/w300"
export const basicUrl = "https://api.themoviedb.org/3/";
export const popularMoviesURL = `${basicUrl}movie/popular?api_key=${apiKey}&page=`

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        Accept: "application.json"
    },
    params: {
        api_key: "5436c11ec3f3706d8f349dbc68c7265e"
},
});