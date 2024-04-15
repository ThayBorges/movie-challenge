const API_KEY = 'api_key=8da53c7d14f03ceb87ea073e21c6bc1f';
const BASE_URL = 'https://api.themoviedb.org/3/';
const DISCOVER_URL = BASE_URL + 'discover/movie?language=pt-BR&include_adult=false&sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + 'search/movie?language=pt-BR&include_adult=false&' + API_KEY;



export const getMovies = (query='') => {
   const url=DISCOVER_URL + '&' + query
    return fetch(url).then((res) => res.json());
}

export const getDetails = (query='') => {
    const url=DISCOVER_URL + '&' + query
    return fetch(url).then((res) => res.json());
}

export const searchMovies = (query='') => {
    const url=searchURL + '&' + query
    console.log(url);
     return fetch(url).then((res) => res.json());
}

