import axios from 'axios';

export const IMG_URL_500 = "https://image.tmdb.org/t/p/w500"

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        Accept: "application.json"
    },
    params: {
        api_key: "5436c11ec3f3706d8f349dbc68c7265e"
},
});