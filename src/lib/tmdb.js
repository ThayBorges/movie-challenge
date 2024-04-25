const API_KEY = 'api_key=8da53c7d14f03ceb87ea073e21c6bc1f';
const BASE_URL = 'https://api.themoviedb.org/3/';
const DISCOVER_URL = BASE_URL + 'discover/movie?language=pt-BR&include_adult=false&sort_by=popularity.desc&' + API_KEY;
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + 'search/movie?language=pt-BR&include_adult=false&' + API_KEY;
const MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE1M2M3ZDE0ZjAzY2ViODdlYTA3M2UyMWM2YmMxZiIsInN1YiI6IjY2MGIwOTk0OWM5N2JkMDE2M2EzNDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MmUXgCO_cxAjvFt4VRKr7WxFnpG643tqNrbsD9fVjSY'
    } //variável de ambiente
  };

export const getMovies = (query='') => {
   const url=DISCOVER_URL + '&' + query;
    return fetch(url).then((res) => res.json()).catch((error) => error);
}

export const getDetails = (id='') => {
    const url=MOVIE_DETAILS + id + '?language=pt-BR';
    return fetch(url,options).then((res) => res.json()).catch((error) => error);
}

export const searchMovies = (query='') => {
    const url=searchURL + '&' + query;
     return fetch(url).then((res) => res.json()).catch((error) => error);
}



