import { getMovies, createMovieElement } from './components/App.js';

const API_KEY = 'api_key=8da53c7d14f03ceb87ea073e21c6bc1f';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + 'discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');

  getMovies(API_URL)
    .then((data) => {
      main.innerHTML = '';
      data.results.forEach((movie) => {
        const movieEl = createMovieElement(movie);
        main.appendChild(movieEl);
      });
    })
    .catch((error) => {
      console.error('Error fetching movies:', error);
    });
});
